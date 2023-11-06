export const data = [
  {
    name: 'fb',
    description: 'Test 0',
    feature: 'router',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: {
          input: [
            {
              destination: {
                Config: {
                  accountSID: 'dfsgertrtff3erfc34rfwf',
                  apiKey: 'fghsdfgegvcergfvfdfsag',
                  campaignId: '23224',
                  impactAppId: '2323',
                  eventTypeId: '56446',
                  enableEmailHashing: true,
                  rudderToImpactProperty: [
                    {
                      from: 'profit',
                      to: 'Money1',
                    },
                  ],
                  productsMapping: [
                    {
                      from: 'sku',
                      to: 'ItemSku',
                    },
                  ],
                  enableIdentifyEvents: true,
                  enablePageEvents: false,
                  enableScreenEvents: false,
                  actionEventNames: [{ eventName: 'Product Purchased' }],
                  installEventNames: [{ eventName: 'App Installed' }],
                },
              },
              metadata: {
                jobId: 1,
              },
              message: {
                type: 'identify',
                sentAt: '2021-01-03T17:02:53.195Z',
                userId: 'user123',
                channel: 'web',
                context: {
                  os: {
                    name: 'android',
                    version: '1.12.3',
                  },
                  app: {
                    name: 'RudderLabs JavaScript SDK',
                    build: '1.0.0',
                    version: '1.1.11',
                    namespace: 'com.rudderlabs.javascript',
                  },
                  traits: {
                    email: 'user123@email.com',
                    phone: '+917836362334',
                    userId: 'user123',
                  },
                  locale: 'en-US',
                  device: {
                    token: 'token',
                    id: 'id',
                    type: 'ios',
                  },
                  library: {
                    name: 'RudderLabs JavaScript SDK',
                    version: '1.1.11',
                  },
                  userAgent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0',
                },
                rudderId: '8f8fa6b5-8e24-489c-8e22-61f23f2e364f',
                messageId: '2116ef8c-efc3-4ca4-851b-02ee60dad6ff',
                anonymousId: '97c46c81-3140-456d-b2a9-690d70aaca35',
                originalTimestamp: 'NOW',
              },
            },
            {
              message: {
                event: 'Order Completed',
                type: 'track',
                sentAt: '2021-01-03T17:02:53.195Z',
                userId: 'Ujjwalab',
                channel: 'web',
                properties: {
                  orderId: '9217374917471',
                  coupon: '10OFF-ROCKET',
                  clickId: 'wEWU47yhtzBnU-CTug3:7Wv4UkAzMbzkZ2lTz80',
                  products: [
                    {
                      brand: 'zara',
                      category: 'wearables',
                      name: 'Monopoly',
                      price: 332,
                      quantity: 1,
                      sku: 'G-32',
                    },
                  ],
                },
                context: {
                  os: {
                    name: '',
                    version: '',
                  },
                  app: {
                    name: 'RudderLabs JavaScript SDK',
                    build: '1.0.0',
                    version: '1.1.11',
                    namespace: 'com.rudderlabs.javascript',
                  },
                  locale: 'en-US',
                  screen: {
                    density: 2,
                  },
                  library: {
                    name: 'RudderLabs JavaScript SDK',
                    version: '1.1.11',
                  },
                  campaign: {},
                  userAgent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0',
                },
                rudderId: '8f8fa6b5-8e24-489c-8e22-61f23f2e364f',
                messageId: '2116ef8c-efc3-4ca4-851b-02ee60dad6ff',
                anonymousId: '97c46c81-3140-456d-b2a9-690d70aaca35',
                originalTimestamp: 'NOW',
              },
              metadata: {
                jobId: 2,
              },
              destination: {
                Config: {
                  accountSID: 'dfsgertrtff3erfc34rfwf',
                  apiKey: 'fghsdfgegvcergfvfdfsag',
                  campaignId: '23224',
                  impactAppId: '2323',
                  eventTypeId: '56446',
                  enableEmailHashing: true,
                  rudderToImpactProperty: [
                    {
                      from: 'properties.profit',
                      to: 'Money1',
                    },
                  ],
                  productsMapping: [
                    {
                      from: 'variant',
                      to: 'ItemCategory',
                    },
                  ],
                  enableIdentifyEvents: false,
                  enablePageEvents: false,
                  enableScreenEvents: false,
                  actionEventNames: [{ eventName: 'Product Purchased' }],
                  installEventNames: [{ eventName: 'App Installed' }],
                },
              },
            },
          ],
          destType: 'impact',
        },
      },
    },
    output: {
      response: {
        status: 200,
        body: {
          output: [
            {
              batchedRequest: [
                {
                  body: {
                    XML: {},
                    FORM: {
                      AppVer: '1.1.11',
                      AppName: 'RudderLabs JavaScript SDK',
                      DeviceOs: 'ios',
                      AndroidId: 'id',
                      EventDate: 'NOW',
                      UserAgent:
                        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0',
                      AppPackage: '1.0.0',
                      CampaignId: '23224',
                      CustomerId: 'user123',
                      PropertyId: '2323',
                      DeviceOsVer: '1.12.3',
                      ImpactAppId: '2323',
                      DeviceLocale: 'en-US',
                      CustomerEmail: '0c57fe03e81357df3acc1340bc9e353688e8f69e',
                      CustomProfileId: '97c46c81-3140-456d-b2a9-690d70aaca35',
                    },
                    JSON: {},
                    JSON_ARRAY: {},
                  },
                  type: 'REST',
                  files: {},
                  method: 'POST',
                  params: {},
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization:
                      'Basic ZGZzZ2VydHJ0ZmYzZXJmYzM0cmZ3ZjpmZ2hzZGZnZWd2Y2VyZ2Z2ZmRmc2Fn',
                  },
                  version: '1',
                  endpoint: 'https://trkapi.impact.com/PageLoad',
                },
              ],
              metadata: [
                {
                  jobId: 1,
                },
              ],
              batched: false,
              statusCode: 200,
              destination: {
                Config: {
                  accountSID: 'dfsgertrtff3erfc34rfwf',
                  apiKey: 'fghsdfgegvcergfvfdfsag',
                  campaignId: '23224',
                  impactAppId: '2323',
                  eventTypeId: '56446',
                  enableEmailHashing: true,
                  rudderToImpactProperty: [
                    {
                      from: 'profit',
                      to: 'Money1',
                    },
                  ],
                  productsMapping: [
                    {
                      from: 'sku',
                      to: 'ItemSku',
                    },
                  ],
                  enableIdentifyEvents: true,
                  enablePageEvents: false,
                  enableScreenEvents: false,
                  actionEventNames: [{ eventName: 'Product Purchased' }],
                  installEventNames: [{ eventName: 'App Installed' }],
                },
              },
            },
            {
              batchedRequest: [
                {
                  body: {
                    XML: {},
                    FORM: {
                      AppVer: '1.1.11',
                      AppName: 'RudderLabs JavaScript SDK',
                      ClickId: 'wEWU47yhtzBnU-CTug3:7Wv4UkAzMbzkZ2lTz80',
                      OrderId: '9217374917471',
                      ItemSku1: 'G-32',
                      EventDate: 'NOW',
                      ItemName1: 'Monopoly',
                      UserAgent:
                        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0',
                      AppPackage: '1.0.0',
                      CampaignId: '23224',
                      CustomerId: 'Ujjwalab',
                      ItemBrand1: 'zara',
                      ItemPrice1: 332,
                      EventTypeId: '56446',
                      ImpactAppId: '2323',
                      DeviceLocale: 'en-US',
                      EventTypeCode: 'Order Completed',
                      ItemQuantity1: 1,
                      OrderPromoCode: '10OFF-ROCKET',
                      CustomProfileId: '97c46c81-3140-456d-b2a9-690d70aaca35',
                    },
                    JSON: {},
                    JSON_ARRAY: {},
                  },
                  type: 'REST',
                  files: {},
                  method: 'POST',
                  params: {},
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization:
                      'Basic ZGZzZ2VydHJ0ZmYzZXJmYzM0cmZ3ZjpmZ2hzZGZnZWd2Y2VyZ2Z2ZmRmc2Fn',
                  },
                  version: '1',
                  endpoint: 'https://api.impact.com/Advertisers/dfsgertrtff3erfc34rfwf/Conversions',
                },
              ],
              metadata: [
                {
                  jobId: 2,
                },
              ],
              batched: false,
              statusCode: 200,
              destination: {
                Config: {
                  accountSID: 'dfsgertrtff3erfc34rfwf',
                  apiKey: 'fghsdfgegvcergfvfdfsag',
                  campaignId: '23224',
                  impactAppId: '2323',
                  eventTypeId: '56446',
                  enableEmailHashing: true,
                  rudderToImpactProperty: [
                    {
                      from: 'properties.profit',
                      to: 'Money1',
                    },
                  ],
                  productsMapping: [
                    {
                      from: 'variant',
                      to: 'ItemCategory',
                    },
                  ],
                  enableIdentifyEvents: false,
                  enablePageEvents: false,
                  enableScreenEvents: false,
                  actionEventNames: [{ eventName: 'Product Purchased' }],
                  installEventNames: [{ eventName: 'App Installed' }],
                },
              },
            },
          ],
        },
      },
    },
  },
];
