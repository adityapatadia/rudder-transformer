const path = require('path');
const fs = require('fs');
const { flattenJson, removeUndefinedAndNullValues, generateUUID } = require('../../util');
const Message = require('../message');
const eventMapping = require('./event_mapping.json');
const { JSON_MIME_TYPE } = require('../../util/constant');

// import mapping json using JSON.parse to preserve object key order
const mapping = JSON.parse(fs.readFileSync(path.resolve(__dirname, './mapping.json'), 'utf-8'));

function settingProperties(event, message) {
  const messageReplica = message;

  // flattening the event and assigning it to properties
  messageReplica.properties = removeUndefinedAndNullValues(flattenJson(event));

  // fields that are already mapped
  const excludeFields = ['contact.email', 'contact.contact_id', 'id', 'time', 'activity.field_id'];

  // deleting already mapped fields
  excludeFields.forEach((field) => {
    delete messageReplica.properties[field];
  });

  return message;
}

function process(event) {
  let message = new Message(`ortto`);

  // Here, we are checking for the test event to discard them
  if (event.activity?.field_id === 'act::test_webhook') {
    return {
      outputToSource: {
        body: Buffer.from(JSON.stringify(event)).toString('base64'),
        contentType: JSON_MIME_TYPE,
      },
      statusCode: 200,
    };
  }

  // we are setting event type as track always
  message.setEventType('track');

  // setting anonymousId
  message.anonymousId = generateUUID();

  message.setPropertiesV2(event, mapping);

  // Updating timestamp to acceptable timestamp format ["2023-10-10T06:24:19.103820974Z" -> "2023-10-10T06:24:19.103820974Z"]
  if (message.originalTimestamp) {
    const date = `${Math.floor(new Date(message.originalTimestamp).getTime() / 1000)}`;
    message.originalTimestamp = new Date(date * 1000).toISOString();
  }

  // setting event Name
  message.setEventName(eventMapping[event.activity.field_id]);

  // setting up ortto contact.contact_id to externalId
  if (event.user?.id) {
    message.context.externalId = [
      {
        type: 'orttoContactId',
        id: event.contact.contact_id,
      },
    ];
  }

  message = settingProperties(event, message);

  return message;
}

module.exports = { process };
