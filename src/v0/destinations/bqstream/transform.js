/* eslint-disable no-console */
const _ = require('lodash');
const { EventType } = require('../../../constants');
const {
  defaultBatchRequestConfig,
  getSuccessRespEvents,
  checkInvalidRtTfEvents,
  handleRtTfSingleEventError,
} = require('../../util');
const { MAX_ROWS_PER_REQUEST, DESTINATION } = require('./config');
const { InstrumentationError } = require('../../util/errorTypes');
const { getGroupedEvents } = require('./util');

const getInsertIdColValue = (properties, insertIdCol) => {
  if (
    insertIdCol &&
    properties[insertIdCol] &&
    (typeof properties[insertIdCol] === 'string' || typeof properties[insertIdCol] === 'number')
  ) {
    return `${properties[insertIdCol]}`;
  }
  return null;
};

const process = (event) => {
  const { message } = event;
  const { properties, type } = message;
  // EventType validation
  if (type !== EventType.TRACK) {
    throw new InstrumentationError(`Message Type not supported: ${type}`);
  }
  if (!properties || typeof properties !== 'object') {
    throw new InstrumentationError('Invalid payload for the destination');
  }
  const {
    destination: {
      Config: { datasetId, tableId, projectId, insertId: insertIdColumn },
    },
  } = event;
  const propInsertId = getInsertIdColValue(properties, insertIdColumn);
  const props = { ...properties };
  if (propInsertId) {
    props.insertId = propInsertId;
  }

  return {
    datasetId,
    tableId,
    projectId,
    properties: { ...props },
  };
};

const batchEvents = (eventsChunk) => {
  const batchedResponseList = [];

  // arrayChunks = [[e1,e2, ..batchSize], [e1,e2, ..batchSize], ...]
  const arrayChunks = _.chunk(eventsChunk, MAX_ROWS_PER_REQUEST);

  // list of chunks [ [..], [..] ]
  arrayChunks.forEach((chunk) => {
    const batchResponseList = [];
    const metadata = [];

    let batchEventResponse = defaultBatchRequestConfig();
    const { message, destination } = chunk[0];

    // Batch event into dest batch structure
    chunk.forEach((ev) => {
      // Pixel code must be added above "batch": [..]
      batchResponseList.push(ev.message.properties);
      metadata.push(ev.metadata);
    });

    batchEventResponse.batchedRequest = {
      datasetId: message.datasetId,
      tableId: message.tableId,
      projectId: message.projectId,
      properties: batchResponseList,
    };

    batchEventResponse = {
      ...batchEventResponse,
      metadata,
      destination,
    };

    batchedResponseList.push(
      getSuccessRespEvents(
        batchEventResponse.batchedRequest,
        batchEventResponse.metadata,
        batchEventResponse.destination,
        true,
      ),
    );
  });

  return batchedResponseList;
};

const processRouterDest = (inputs) => {
  const errorRespEvents = checkInvalidRtTfEvents(inputs, DESTINATION);
  if (errorRespEvents.length > 0) {
    return errorRespEvents;
  }
  const groupedEvents = getGroupedEvents(inputs);
  const finalResp = [];
  groupedEvents.forEach((eventList) => {
    let eventsChunk = []; // temporary variable to divide payload into chunks
    let errorRespList = [];
    if (eventList.length > 0) {
      eventList.forEach((event) => {
        try {
          if (event.message.statusCode) {
            // already transformed event
            eventsChunk.push(event);
          } else {
            // if not transformed
            let response = process(event);
            response = Array.isArray(response) ? response : [response];
            response.forEach((res) => {
              eventsChunk.push({
                message: res,
                metadata: event.metadata,
                destination: event.destination,
              });
            });
          }
        } catch (error) {
          const errRespEvent = handleRtTfSingleEventError(event, error, DESTINATION);
          // divide the successful payloads till now into batches
          let batchedResponseList = [];
          if (eventsChunk.length > 0) {
            batchedResponseList = batchEvents(eventsChunk);
          }
          // clear up the temporary variable
          eventsChunk = [];
          errorRespList.push(errRespEvent);
          finalResp.push([...batchedResponseList, ...errorRespList]);
          // putting it back as an empty array
          errorRespList = [];
        }
      });
      let batchedResponseList = [];
      if (eventsChunk.length > 0) {
        batchedResponseList = batchEvents(eventsChunk);
        finalResp.push([...batchedResponseList]);
      }
    }
  });
  return finalResp.flat();
};

module.exports = { process, processRouterDest };
