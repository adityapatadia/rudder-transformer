export const data = [
  {
    name: 'shynet',
    description: 'Test 0: Page Call',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                shynetServiceUrl:
                  'https://9710-103-211-12-1.in.ngrok.io/ingress/5b3470a9-be69-4298-9ec1-3fe3f483738c/script.js',
                heartBeat: 5000,
              },
            },
            message: {
              type: 'page',
              sentAt: '2022-08-22T13:39:21.034Z',
              channel: 'web',
              context: {
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.2.20',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'http://127.0.0.1:7307/Testing/test/ourSdk.html',
                  path: '/Testing/test/ourSdk.html',
                  title: 'Document',
                  search: '',
                  tab_url: 'http://127.0.0.1:7307/Testing/test/ourSdk.html',
                  referrer: 'http://127.0.0.1:7307/Testing/test/',
                  initial_referrer: '$direct',
                  referring_domain: '127.0.0.1:7307',
                  initial_referring_domain: '',
                },
                locale: 'en-US',
                screen: {
                  width: 1440,
                  height: 900,
                  density: 2,
                  innerWidth: 536,
                  innerHeight: 689,
                },
                traits: {
                  email: '12312@!fma',
                  city: 'Pune',
                  revenue: 93889,
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.2.20',
                },
                campaign: {},
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
              },
              rudderId: '553b5522-c575-40a7-8072-9741c5f9a647',
              anonymousId: 'bf412108-0357-4330-b119-7305e767823c',
              messageId: 'bf412108-0357-4330-b119-7305e767823r',
              integrations: {
                All: true,
              },
              originalTimestamp: '2022-08-22T13:39:21.032Z',
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              body: {
                XML: {},
                FORM: {},
                JSON: {
                  location: 'http://127.0.0.1:7307/Testing/test/ourSdk.html',
                  referrer: 'http://127.0.0.1:7307/Testing/test/',
                  idempotency: 'bf412108-0357-4330-b119-7305e767823r',
                },
                JSON_ARRAY: {},
              },
              type: 'REST',
              files: {},
              userId: '',
              method: 'POST',
              params: {},
              headers: {
                'Content-Type': 'application/json',
              },
              version: '1',
              endpoint:
                'https://9710-103-211-12-1.in.ngrok.io/ingress/5b3470a9-be69-4298-9ec1-3fe3f483738c/script.js',
            },
            statusCode: 200,
          },
        ],
      },
    },
  },
  {
    name: 'shynet',
    description: 'Test 1: Page Call without heartBeat Mentioned',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                shynetServiceUrl:
                  'https://9710-103-211-12-1.in.ngrok.io/ingress/5b3470a9-be69-4298-9ec1-3fe3f483738c/script.js',
              },
            },
            message: {
              type: 'page',
              sentAt: '2022-08-22T13:39:21.034Z',
              channel: 'web',
              context: {
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.2.20',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'http://127.0.0.1:7307/Testing/test/ourSdk.html',
                  path: '/Testing/test/ourSdk.html',
                  title: 'Document',
                  search: '',
                  tab_url: 'http://127.0.0.1:7307/Testing/test/ourSdk.html',
                  referrer: 'http://127.0.0.1:7307/Testing/test/',
                  initial_referrer: '$direct',
                  referring_domain: '127.0.0.1:7307',
                  initial_referring_domain: '',
                  loadTime: 45,
                },
                locale: 'en-US',
                screen: {
                  width: 1440,
                  height: 900,
                  density: 2,
                  innerWidth: 536,
                  innerHeight: 689,
                },
                traits: {
                  email: '12312@!fma',
                  city: 'Pune',
                  revenue: 93889,
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.2.20',
                },
                campaign: {},
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
              },
              properties: {
                loadTime: 45,
              },
              rudderId: '553b5522-c575-40a7-8072-9741c5f9a647',
              anonymousId: '675467tfhjgjhfcghjc',
              messageId: 'bf412108-0357-4330-b119-7305e767823r',
              integrations: {
                All: true,
              },
              originalTimestamp: '2022-08-22T13:39:21.032Z',
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint:
                'https://9710-103-211-12-1.in.ngrok.io/ingress/5b3470a9-be69-4298-9ec1-3fe3f483738c/script.js',
              headers: {
                'Content-Type': 'application/json',
              },
              params: {},
              body: {
                JSON: {
                  loadTime: 45,
                  referrer: 'http://127.0.0.1:7307/Testing/test/',
                  location: 'http://127.0.0.1:7307/Testing/test/ourSdk.html',
                  idempotency: 'bf412108-0357-4330-b119-7305e767823r',
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
  },
];
