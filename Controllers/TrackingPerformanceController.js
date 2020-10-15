// const UserModel = require('../Models/UserModel');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const axios = require("axios");

// const crypto = require('crypto');

/**
 * GET /api/users
 * Get All Users
 */
// exports.fetch = function (req, res) {
//   res.json({ success: true, users: "works" });
// };

let data = {
  captchaResult: "CAPTCHA_NOT_NEEDED",
  kind: "pagespeedonline#result",
  id: "https://www.voici.fr/",
  loadingExperience: {
    id: "https://www.voici.fr/",
    metrics: {
      FIRST_CONTENTFUL_PAINT_MS: {
        percentile: 1340,
        distributions: [
          {
            min: 0,
            max: 1000,
            proportion: 0.5761739051837121,
          },
          {
            min: 1000,
            max: 3000,
            proportion: 0.38171624233369406,
          },
          {
            min: 3000,
            proportion: 0.0421098524825938,
          },
        ],
        category: "AVERAGE",
      },
      FIRST_INPUT_DELAY_MS: {
        percentile: 46,
        distributions: [
          {
            min: 0,
            max: 100,
            proportion: 0.8569869226570995,
          },
          {
            min: 100,
            max: 300,
            proportion: 0.09134678439518877,
          },
          {
            min: 300,
            proportion: 0.0516662929477118,
          },
        ],
        category: "FAST",
      },
      CUMULATIVE_LAYOUT_SHIFT_SCORE: {
        percentile: 36,
        distributions: [
          {
            min: 0,
            max: 10,
            proportion: 0.5799323083840188,
          },
          {
            min: 10,
            max: 25,
            proportion: 0.07862718405375363,
          },
          {
            min: 25,
            proportion: 0.3414405075622276,
          },
        ],
        category: "SLOW",
      },
      LARGEST_CONTENTFUL_PAINT_MS: {
        percentile: 1910,
        distributions: [
          {
            min: 0,
            max: 2500,
            proportion: 0.8448261312223353,
          },
          {
            min: 2500,
            max: 4000,
            proportion: 0.0993872262118003,
          },
          {
            min: 4000,
            proportion: 0.05578664256586431,
          },
        ],
        category: "FAST",
      },
    },
    overall_category: "SLOW",
    initial_url: "https://www.voici.fr/",
  },
  originLoadingExperience: {
    id: "https://www.voici.fr",
    metrics: {
      FIRST_CONTENTFUL_PAINT_MS: {
        percentile: 1644,
        distributions: [
          {
            min: 0,
            max: 1000,
            proportion: 0.460394577220305,
          },
          {
            min: 1000,
            max: 3000,
            proportion: 0.4705589120389151,
          },
          {
            min: 3000,
            proportion: 0.0690465107407798,
          },
        ],
        category: "AVERAGE",
      },
      FIRST_INPUT_DELAY_MS: {
        percentile: 64,
        distributions: [
          {
            min: 0,
            max: 100,
            proportion: 0.8019186122957505,
          },
          {
            min: 100,
            max: 300,
            proportion: 0.11597185123497508,
          },
          {
            min: 300,
            proportion: 0.08210953646927448,
          },
        ],
        category: "FAST",
      },
      CUMULATIVE_LAYOUT_SHIFT_SCORE: {
        percentile: 26,
        distributions: [
          {
            min: 0,
            max: 10,
            proportion: 0.5199503717032118,
          },
          {
            min: 10,
            max: 25,
            proportion: 0.2202050309088618,
          },
          {
            min: 25,
            proportion: 0.25984459738792653,
          },
        ],
        category: "SLOW",
      },
      LARGEST_CONTENTFUL_PAINT_MS: {
        percentile: 1853,
        distributions: [
          {
            min: 0,
            max: 2500,
            proportion: 0.8467144684309456,
          },
          {
            min: 2500,
            max: 4000,
            proportion: 0.08458938648914109,
          },
          {
            min: 4000,
            proportion: 0.06869614507991333,
          },
        ],
        category: "FAST",
      },
    },
    overall_category: "SLOW",
    initial_url: "https://www.voici.fr/",
  },
  lighthouseResult: {
    requestedUrl: "https://www.voici.fr/",
    finalUrl: "https://www.voici.fr/",
    lighthouseVersion: "6.3.0",
    userAgent:
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/84.0.4147.140 Safari/537.36",
    fetchTime: "2020-10-15T14:49:33.958Z",
    environment: {
      networkUserAgent:
        "Mozilla/5.0 (Linux; Android 7.0; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4143.7 Mobile Safari/537.36 Chrome-Lighthouse",
      hostUserAgent:
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/84.0.4147.140 Safari/537.36",
      benchmarkIndex: 900.5,
    },
    runWarnings: [],
    configSettings: {
      emulatedFormFactor: "mobile",
      locale: "en-US",
      onlyCategories: ["performance"],
      channel: "lr",
    },
    audits: {
      interactive: {
        id: "interactive",
        title: "Time to Interactive",
        description:
          "Time to interactive is the amount of time it takes for the page to become fully interactive. [Learn more](https://web.dev/interactive/).",
        score: 0.06,
        scoreDisplayMode: "numeric",
        displayValue: "16.2 s",
        numericValue: 16195.5,
      },
      "performance-budget": {
        id: "performance-budget",
        title: "Performance budget",
        description:
          "Keep the quantity and size of network requests under the targets set by the provided performance budget. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/budgets).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "network-rtt": {
        id: "network-rtt",
        title: "Network Round Trip Times",
        description:
          "Network round trip times (RTT) have a large impact on performance. If the RTT to an origin is high, it's an indication that servers closer to the user could improve performance. [Learn more](https://hpbn.co/primer-on-latency-and-bandwidth/).",
        score: null,
        scoreDisplayMode: "informative",
        displayValue: "0 ms",
        details: {
          items: [],
          headings: [],
          type: "table",
        },
        numericValue: 0,
      },
      "final-screenshot": {
        id: "final-screenshot",
        title: "Final Screenshot",
        description: "The last screenshot captured of the pageload.",
        score: null,
        scoreDisplayMode: "informative",
        details: {
          type: "screenshot",
          timing: 3750,
          timestamp: 1045235438910,
          data:
            "data:image/jpeg;base64,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",
        },
      },
      "first-cpu-idle": {
        id: "first-cpu-idle",
        title: "First CPU Idle",
        description:
          "First CPU Idle marks the first time at which the page's main thread is quiet enough to handle input.  [Learn more](https://web.dev/first-cpu-idle/).",
        score: 0.04,
        scoreDisplayMode: "numeric",
        displayValue: "14.5 s",
        numericValue: 14453,
      },
      "server-response-time": {
        id: "server-response-time",
        title: "Initial server response time was short",
        description:
          "Keep the server response time for the main document short because all other requests depend on it. [Learn more](https://web.dev/time-to-first-byte/).",
        score: 1,
        scoreDisplayMode: "binary",
        displayValue: "Root document took 160 ms",
        details: {
          type: "opportunity",
          headings: [
            {
              key: "url",
              label: "URL",
              valueType: "url",
            },
            {
              label: "Time Spent",
              valueType: "timespanMs",
              key: "responseTime",
            },
          ],
          items: [
            {
              url: "https://www.voici.fr/",
              responseTime: 155.978,
            },
          ],
          overallSavingsMs: 55.97800000000001,
        },
        numericValue: 155.978,
      },
      diagnostics: {
        id: "diagnostics",
        title: "Diagnostics",
        description: "Collection of useful page vitals.",
        score: null,
        scoreDisplayMode: "informative",
        details: {
          items: [
            {
              numTasksOver100ms: 4,
              numFonts: 4,
              maxRtt: 0.0001445742172976716,
              numTasksOver25ms: 23,
              numRequests: 123,
              numStylesheets: 3,
              throughput: 14070589139.563705,
              numTasks: 2221,
              numTasksOver10ms: 42,
              totalByteWeight: 1818026,
              numTasksOver500ms: 0,
              totalTaskTime: 2193.780000000011,
              numTasksOver50ms: 9,
              numScripts: 36,
              maxServerLatency: null,
              rtt: 0.0001445742172976716,
              mainDocumentTransferSize: 53101,
            },
          ],
          type: "debugdata",
        },
      },
      "resource-summary": {
        id: "resource-summary",
        title: "Keep request counts low and transfer sizes small",
        description:
          "To set budgets for the quantity and size of page resources, add a budget.json file. [Learn more](https://web.dev/use-lighthouse-for-performance-budgets/).",
        score: null,
        scoreDisplayMode: "informative",
        displayValue: "122 requests • 1,775 KiB",
        details: {
          headings: [
            {
              text: "Resource Type",
              key: "label",
              itemType: "text",
            },
            {
              itemType: "numeric",
              text: "Requests",
              key: "requestCount",
            },
            {
              itemType: "bytes",
              key: "transferSize",
              text: "Transfer Size",
            },
          ],
          items: [
            {
              resourceType: "total",
              transferSize: 1818026,
              requestCount: 122,
              label: "Total",
            },
            {
              label: "Script",
              resourceType: "script",
              transferSize: 860151,
              requestCount: 36,
            },
            {
              resourceType: "other",
              requestCount: 50,
              label: "Other",
              transferSize: 440105,
            },
            {
              resourceType: "image",
              transferSize: 346472,
              label: "Image",
              requestCount: 24,
            },
            {
              resourceType: "font",
              label: "Font",
              transferSize: 93928,
              requestCount: 4,
            },
            {
              transferSize: 60217,
              label: "Document",
              requestCount: 5,
              resourceType: "document",
            },
            {
              label: "Stylesheet",
              transferSize: 17153,
              requestCount: 3,
              resourceType: "stylesheet",
            },
            {
              resourceType: "media",
              transferSize: 0,
              label: "Media",
              requestCount: 0,
            },
            {
              resourceType: "third-party",
              requestCount: 105,
              label: "Third-party",
              transferSize: 1582973,
            },
          ],
          type: "table",
        },
      },
      "max-potential-fid": {
        id: "max-potential-fid",
        title: "Max Potential First Input Delay",
        description:
          "The maximum potential First Input Delay that your users could experience is the duration of the longest task. [Learn more](https://web.dev/lighthouse-max-potential-fid/).",
        score: 0.08,
        scoreDisplayMode: "numeric",
        displayValue: "500 ms",
        numericValue: 504,
      },
      "network-server-latency": {
        id: "network-server-latency",
        title: "Server Backend Latencies",
        description:
          "Server latencies can impact web performance. If the server latency of an origin is high, it's an indication the server is overloaded or has poor backend performance. [Learn more](https://hpbn.co/primer-on-web-performance/#analyzing-the-resource-waterfall).",
        score: null,
        scoreDisplayMode: "informative",
        displayValue: "0 ms",
        details: {
          headings: [],
          type: "table",
          items: [],
        },
        numericValue: 0,
      },
      "offscreen-images": {
        id: "offscreen-images",
        title: "Defer offscreen images",
        description:
          "Consider lazy-loading offscreen and hidden images after all critical resources have finished loading to lower time to interactive. [Learn more](https://web.dev/offscreen-images/).",
        score: 0.9,
        scoreDisplayMode: "numeric",
        displayValue: "Potential savings of 134 KiB",
        details: {
          headings: [
            {
              key: "url",
              valueType: "thumbnail",
            },
            {
              valueType: "url",
              key: "url",
              label: "URL",
            },
            {
              label: "Resource Size",
              key: "totalBytes",
              valueType: "bytes",
            },
            {
              key: "wastedBytes",
              label: "Potential Savings",
              valueType: "bytes",
            },
          ],
          overallSavingsMs: 120,
          type: "opportunity",
          overallSavingsBytes: 137203,
          items: [
            {
              wastedBytes: 59913,
              requestStartTime: 1045231.916741,
              totalBytes: 59913,
              url:
                "https://voi.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fvoi.2F2020.2F10.2F15.2F4fb40f2b-e193-41b4-8c06-21def42124df.2Ejpeg/748x420/quality/80/focus-point/508%2C509/le-meilleur-patissier-les-telespectateurs-du-nord-tres-agaces-par-les-cliches-de-l-emission.jpg",
              wastedPercent: 100,
            },
            {
              wastedBytes: 41725,
              wastedPercent: 100,
              requestStartTime: 1045231.916601,
              totalBytes: 41725,
              url:
                "https://voi.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fvoi.2F2020.2F10.2F15.2F461dac5e-d39b-4fcf-b4ff-0b8a79804734.2Ejpeg/748x420/quality/80/focus-point/889%2C402/photos-denudees-de-miss-franche-comte-anastasia-salvi-a-ete-denoncee-par-une-de-ses-dauphines.jpg",
            },
            {
              url:
                "https://voi.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fvoi.2F2020.2F10.2F15.2F604fa3ae-eec3-42be-83e7-62f3481526f1.2Ejpeg/748x420/quality/80/focus-point/2588%2C869/renaud-decouvrez-l-incroyable-somme-percue-par-le-chanteur-pour-ses-chansons.jpg",
              totalBytes: 35565,
              wastedPercent: 100,
              requestStartTime: 1045231.916479,
              wastedBytes: 35565,
            },
          ],
        },
        warnings: [],
        numericValue: 120,
      },
      "no-document-write": {
        id: "no-document-write",
        title: "Avoids `document.write()`",
        description:
          "For users on slow connections, external scripts dynamically injected via `document.write()` can delay page load by tens of seconds. [Learn more](https://web.dev/no-document-write/).",
        score: 1,
        scoreDisplayMode: "binary",
        details: {
          type: "table",
          headings: [],
          items: [],
        },
      },
      "screenshot-thumbnails": {
        id: "screenshot-thumbnails",
        title: "Screenshot Thumbnails",
        description: "This is what the load of your site looked like.",
        score: null,
        scoreDisplayMode: "informative",
        details: {
          type: "filmstrip",
          scale: 3749,
          items: [
            {
              timing: 375,
              data:
                "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIANUAeAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP1ToAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD//Z",
              timestamp: 1045232063924,
            },
            {
              timing: 750,
              timestamp: 1045232438824,
              data:
                "data:image/jpeg;base64,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",
            },
            {
              data:
                "data:image/jpeg;base64,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",
              timing: 1125,
              timestamp: 1045232813724.0001,
            },
            {
              timing: 1500,
              timestamp: 1045233188624.0001,
              data:
                "data:image/jpeg;base64,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",
            },
            {
              timestamp: 1045233563524,
              timing: 1875,
              data:
                "data:image/jpeg;base64,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",
            },
            {
              timestamp: 1045233938424,
              timing: 2249,
              data:
                "data:image/jpeg;base64,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",
            },
            {
              timing: 2624,
              timestamp: 1045234313324,
              data:
                "data:image/jpeg;base64,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",
            },
            {
              timestamp: 1045234688224.0001,
              timing: 2999,
              data:
                "data:image/jpeg;base64,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",
            },
            {
              data:
                "data:image/jpeg;base64,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",
              timestamp: 1045235063124.0001,
              timing: 3374,
            },
            {
              data:
                "data:image/jpeg;base64,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",
              timing: 3749,
              timestamp: 1045235438024,
            },
          ],
        },
      },
      "first-contentful-paint": {
        id: "first-contentful-paint",
        title: "First Contentful Paint",
        description:
          "First Contentful Paint marks the time at which the first text or image is painted. [Learn more](https://web.dev/first-contentful-paint/).",
        score: 0.93,
        scoreDisplayMode: "numeric",
        displayValue: "2.2 s",
        numericValue: 2157,
      },
      "legacy-javascript": {
        id: "legacy-javascript",
        title: "Avoid serving legacy JavaScript to modern browsers",
        description:
          "Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. For your bundled JavaScript, adopt a modern script deployment strategy using module/nomodule feature detection to reduce the amount of code shipped to modern browsers, while retaining support for legacy browsers. [Learn More](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/)",
        score: 0.75,
        scoreDisplayMode: "numeric",
        displayValue: "Potential savings of 30 KiB",
        details: {
          overallSavingsBytes: 30383,
          type: "opportunity",
          items: [
            {
              subItems: {
                type: "subitems",
                items: [
                  {
                    signal: "Array.prototype.forEach",
                    location: {
                      urlProvider: "network",
                      type: "source-location",
                      column: 2088,
                      line: 0,
                      url:
                        "https://gdpr-tcfv2.sp-prod.net/wrapperMessagingWithoutDetection.js",
                    },
                  },
                  {
                    signal: "Object.getOwnPropertyNames",
                    location: {
                      line: 0,
                      column: 8480,
                      url:
                        "https://gdpr-tcfv2.sp-prod.net/wrapperMessagingWithoutDetection.js",
                      type: "source-location",
                      urlProvider: "network",
                    },
                  },
                  {
                    signal: "Object.keys",
                    location: {
                      urlProvider: "network",
                      url:
                        "https://gdpr-tcfv2.sp-prod.net/wrapperMessagingWithoutDetection.js",
                      line: 0,
                      column: 13743,
                      type: "source-location",
                    },
                  },
                  {
                    location: {
                      column: 13967,
                      url:
                        "https://gdpr-tcfv2.sp-prod.net/wrapperMessagingWithoutDetection.js",
                      urlProvider: "network",
                      type: "source-location",
                      line: 0,
                    },
                    signal: "Number.isInteger",
                  },
                  {
                    signal: "Array.prototype.map",
                    location: {
                      urlProvider: "network",
                      type: "source-location",
                      url:
                        "https://gdpr-tcfv2.sp-prod.net/wrapperMessagingWithoutDetection.js",
                      column: 16620,
                      line: 0,
                    },
                  },
                  {
                    signal: "Array.prototype.includes",
                    location: {
                      url:
                        "https://gdpr-tcfv2.sp-prod.net/wrapperMessagingWithoutDetection.js",
                      line: 0,
                      urlProvider: "network",
                      type: "source-location",
                      column: 24895,
                    },
                  },
                  {
                    signal: "Array.prototype.reduce",
                    location: {
                      urlProvider: "network",
                      column: 28247,
                      type: "source-location",
                      url:
                        "https://gdpr-tcfv2.sp-prod.net/wrapperMessagingWithoutDetection.js",
                      line: 0,
                    },
                  },
                  {
                    location: {
                      line: 0,
                      url:
                        "https://gdpr-tcfv2.sp-prod.net/wrapperMessagingWithoutDetection.js",
                      type: "source-location",
                      urlProvider: "network",
                      column: 32776,
                    },
                    signal: "String.prototype.repeat",
                  },
                  {
                    signal: "Array.from",
                    location: {
                      column: 37613,
                      urlProvider: "network",
                      type: "source-location",
                      url:
                        "https://gdpr-tcfv2.sp-prod.net/wrapperMessagingWithoutDetection.js",
                      line: 0,
                    },
                  },
                  {
                    signal: "Array.prototype.filter",
                    location: {
                      url:
                        "https://gdpr-tcfv2.sp-prod.net/wrapperMessagingWithoutDetection.js",
                      type: "source-location",
                      urlProvider: "network",
                      line: 0,
                      column: 85564,
                    },
                  },
                  {
                    signal: "Object.getOwnPropertyDescriptors",
                    location: {
                      type: "source-location",
                      url:
                        "https://gdpr-tcfv2.sp-prod.net/wrapperMessagingWithoutDetection.js",
                      urlProvider: "network",
                      line: 0,
                      column: 122284,
                    },
                  },
                ],
              },
              totalBytes: 0,
              url:
                "https://gdpr-tcfv2.sp-prod.net/wrapperMessagingWithoutDetection.js",
              wastedBytes: 13172,
            },
            {
              subItems: {
                type: "subitems",
                items: [
                  {
                    location: {
                      url:
                        "https://tra.scds.pmdstatic.net/advertising-core/4.88.0/prebid-plugin.js",
                      line: 0,
                      urlProvider: "network",
                      type: "source-location",
                      column: 112024,
                    },
                    signal: "Array.prototype.find",
                  },
                  {
                    signal: "Array.prototype.includes",
                    location: {
                      urlProvider: "network",
                      url:
                        "https://tra.scds.pmdstatic.net/advertising-core/4.88.0/prebid-plugin.js",
                      line: 0,
                      column: 113625,
                      type: "source-location",
                    },
                  },
                  {
                    location: {
                      url:
                        "https://tra.scds.pmdstatic.net/advertising-core/4.88.0/prebid-plugin.js",
                      urlProvider: "network",
                      type: "source-location",
                      line: 0,
                      column: 126416,
                    },
                    signal: "Array.from",
                  },
                  {
                    signal: "Number.isInteger",
                    location: {
                      type: "source-location",
                      column: 225502,
                      line: 0,
                      urlProvider: "network",
                      url:
                        "https://tra.scds.pmdstatic.net/advertising-core/4.88.0/prebid-plugin.js",
                    },
                  },
                ],
              },
              totalBytes: 0,
              url:
                "https://tra.scds.pmdstatic.net/advertising-core/4.88.0/prebid-plugin.js",
              wastedBytes: 11737,
            },
            {
              url: "https://c.amazon-adsystem.com/aax2/apstag.js",
              totalBytes: 0,
              wastedBytes: 5240,
              subItems: {
                type: "subitems",
                items: [
                  {
                    location: {
                      type: "source-location",
                      urlProvider: "network",
                      url: "https://c.amazon-adsystem.com/aax2/apstag.js",
                      column: 22640,
                      line: 1,
                    },
                    signal: "@babel/plugin-transform-classes",
                  },
                  {
                    location: {
                      column: 57793,
                      url: "https://c.amazon-adsystem.com/aax2/apstag.js",
                      line: 1,
                      type: "source-location",
                      urlProvider: "network",
                    },
                    signal: "Number.isInteger",
                  },
                ],
              },
            },
            {
              url: "https://www.voici.fr/",
              subItems: {
                items: [
                  {
                    signal: "@babel/plugin-transform-classes",
                    location: {
                      url: "https://www.voici.fr/",
                      column: 1195,
                      urlProvider: "network",
                      line: 0,
                      type: "source-location",
                    },
                  },
                ],
                type: "subitems",
              },
              wastedBytes: 167,
              totalBytes: 0,
            },
            {
              subItems: {
                items: [
                  {
                    signal: "@babel/plugin-transform-classes",
                    location: {
                      type: "source-location",
                      line: 0,
                      column: 57571,
                      urlProvider: "network",
                      url: "https://ats.rlcdn.com/ats.js",
                    },
                  },
                ],
                type: "subitems",
              },
              url: "https://ats.rlcdn.com/ats.js",
              totalBytes: 0,
              wastedBytes: 67,
            },
          ],
          headings: [
            {
              key: "url",
              subItemsHeading: {
                valueType: "source-location",
                key: "location",
              },
              label: "URL",
              valueType: "url",
            },
            {
              subItemsHeading: {
                key: "signal",
              },
              valueType: "code",
              key: null,
            },
            {
              key: "wastedBytes",
              valueType: "bytes",
              label: "Potential Savings",
            },
          ],
          overallSavingsMs: 300,
        },
        numericValue: 300,
      },
      "third-party-summary": {
        id: "third-party-summary",
        title: "Reduce the impact of third-party code",
        description:
          "Third-party code can significantly impact load performance. Limit the number of redundant third-party providers and try to load third-party code after your page has primarily finished loading. [Learn more](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript/).",
        score: 0,
        scoreDisplayMode: "binary",
        displayValue: "Third-party code blocked the main thread for 630 ms",
        details: {
          type: "table",
          summary: {
            wastedMs: 632.892,
            wastedBytes: 533239,
          },
          headings: [
            {
              text: "Third-Party",
              itemType: "link",
              subItemsHeading: {
                itemType: "url",
                key: "url",
              },
              key: "entity",
            },
            {
              key: "transferSize",
              text: "Transfer Size",
              subItemsHeading: {
                key: "transferSize",
              },
              itemType: "bytes",
              granularity: 1,
            },
            {
              subItemsHeading: {
                key: "blockingTime",
              },
              granularity: 1,
              text: "Main-Thread Blocking Time",
              itemType: "ms",
              key: "blockingTime",
            },
          ],
          items: [
            {
              mainThreadTime: 563.9679999999983,
              subItems: {
                type: "subitems",
                items: [
                  {
                    transferSize: 73605,
                    blockingTime: 362.58,
                    mainThreadTime: 563.9679999999983,
                    url:
                      "https://try.abtasty.com/b262e5394cfe1864b8f3b8f87e94a46b.js",
                  },
                ],
              },
              blockingTime: 362.58,
              entity: {
                type: "link",
                text: "AB Tasty",
              },
              transferSize: 76005,
            },
            {
              mainThreadTime: 241.064,
              entity: {
                url: "https://www.google.com/analytics/analytics/",
                text: "Google Analytics",
                type: "link",
              },
              blockingTime: 81.356,
              transferSize: 38642,
              subItems: {
                items: [
                  {
                    blockingTime: 40.976,
                    transferSize: 19336,
                    url: "https://www.google-analytics.com/analytics.js",
                    mainThreadTime: 134.052,
                  },
                  {
                    blockingTime: 40.379999999999995,
                    mainThreadTime: 107.012,
                    transferSize: 17855,
                    url: "https://ssl.google-analytics.com/ga.js",
                  },
                ],
                type: "subitems",
              },
            },
            {
              subItems: {
                type: "subitems",
                items: [
                  {
                    transferSize: 72298,
                    mainThreadTime: 188.90400000000002,
                    blockingTime: 75.052,
                    url:
                      "https://script.hotjar.com/modules.0734134ae79697970353.js",
                  },
                ],
              },
              mainThreadTime: 259.132,
              transferSize: 75783,
              entity: {
                text: "Hotjar",
                type: "link",
                url: "https://www.hotjar.com/",
              },
              blockingTime: 75.052,
            },
            {
              mainThreadTime: 146.836,
              transferSize: 61242,
              entity: {
                url: "https://liveramp.com/discover-identitylink/",
                type: "link",
                text: "LiveRamp IdentityLink",
              },
              blockingTime: 70.816,
              subItems: {
                type: "subitems",
                items: [
                  {
                    url: "https://ats.rlcdn.com/ats.js",
                    blockingTime: 70.816,
                    mainThreadTime: 146.836,
                    transferSize: 60727,
                  },
                ],
              },
            },
            {
              subItems: {
                items: [
                  {
                    url:
                      "https://www.googletagmanager.com/gtm.js?id=GTM-NK7QRQ4&l=dataLayer",
                    transferSize: 33814,
                    mainThreadTime: 239.52000000000004,
                    blockingTime: 25.840000000000003,
                  },
                  {
                    mainThreadTime: 134.57600000000016,
                    blockingTime: 0,
                    transferSize: 40148,
                    url:
                      "https://www.googletagmanager.com/gtm.js?id=GTM-KLGXH8",
                  },
                ],
                type: "subitems",
              },
              entity: {
                type: "link",
                url: "https://marketingplatform.google.com/about/tag-manager/",
                text: "Google Tag Manager",
              },
              transferSize: 73962,
              blockingTime: 25.840000000000003,
              mainThreadTime: 374.09600000000023,
            },
            {
              subItems: {
                type: "subitems",
                items: [
                  {
                    url:
                      "https://securepubads.g.doubleclick.net/gpt/pubads_impl_2020101201.js",
                    mainThreadTime: 95.508,
                    blockingTime: 13.924,
                    transferSize: 99565,
                  },
                  {
                    transferSize: 18737,
                    mainThreadTime: 64.77599999999998,
                    blockingTime: 3.323999999999998,
                    url: "https://securepubads.g.doubleclick.net/tag/js/gpt.js",
                  },
                  {
                    mainThreadTime: 0,
                    blockingTime: 0,
                    transferSize: 18968,
                    url: "https://www.googletagservices.com/tag/js/gpt.js",
                  },
                ],
              },
              transferSize: 138863,
              blockingTime: 17.247999999999998,
              mainThreadTime: 160.284,
              entity: {
                type: "link",
                url: "https://www.doubleclickbygoogle.com/",
                text: "Google/Doubleclick Ads",
              },
            },
            {
              transferSize: 32346,
              blockingTime: 0,
              entity: {
                url: "https://ad.amazon.com/",
                type: "link",
                text: "Amazon Ads",
              },
              subItems: {
                type: "subitems",
                items: [
                  {
                    transferSize: 29052,
                    url: "https://c.amazon-adsystem.com/aax2/apstag.js",
                    mainThreadTime: 64.18,
                    blockingTime: 0,
                  },
                ],
              },
              mainThreadTime: 64.18,
            },
            {
              blockingTime: 0,
              transferSize: 15611,
              mainThreadTime: 47.37200000000002,
              subItems: {
                type: "subitems",
                items: [
                  {
                    mainThreadTime: 47.37200000000002,
                    blockingTime: 0,
                    url:
                      "https://js-sec.indexww.com/ht/p/185598-69743361691179.js",
                    transferSize: 15275,
                  },
                ],
              },
              entity: {
                type: "link",
                text: "Index Exchange",
              },
            },
            {
              entity: {
                text: "Aggregate Knowledge",
                type: "link",
              },
              mainThreadTime: 62.111999999999995,
              subItems: {
                items: [],
                type: "subitems",
              },
              transferSize: 8000,
              blockingTime: 0,
            },
            {
              transferSize: 4140,
              subItems: {
                type: "subitems",
                items: [],
              },
              blockingTime: 0,
              entity: {
                url: "https://www.outbrain.com/",
                text: "Outbrain",
                type: "link",
              },
              mainThreadTime: 35.284,
            },
            {
              blockingTime: 0,
              entity: {
                type: "link",
                url: "https://developers.google.com/apis-explorer/#p/",
                text: "Other Google APIs/SDKs",
              },
              subItems: {
                items: [],
                type: "subitems",
              },
              transferSize: 2938,
              mainThreadTime: 0,
            },
            {
              mainThreadTime: 0,
              subItems: {
                items: [],
                type: "subitems",
              },
              entity: {
                text: "Amazon Web Services",
                url: "https://aws.amazon.com/s3/",
                type: "link",
              },
              transferSize: 2399,
              blockingTime: 0,
            },
            {
              subItems: {
                type: "subitems",
                items: [],
              },
              blockingTime: 0,
              transferSize: 1093,
              entity: {
                url: "https://www.thetradedesk.com/",
                text: "The Trade Desk",
                type: "link",
              },
              mainThreadTime: 0,
            },
            {
              blockingTime: 0,
              mainThreadTime: 0,
              entity: {
                text: "Polyfill service",
                type: "link",
              },
              subItems: {
                type: "subitems",
                items: [],
              },
              transferSize: 953,
            },
            {
              subItems: {
                items: [],
                type: "subitems",
              },
              transferSize: 918,
              entity: {
                text: "Media Math",
                url: "http://www.mediamath.com/",
                type: "link",
              },
              mainThreadTime: 0,
              blockingTime: 0,
            },
            {
              mainThreadTime: 1.124,
              transferSize: 344,
              subItems: {
                type: "subitems",
                items: [],
              },
              entity: {
                text: "Eyeota",
                type: "link",
              },
              blockingTime: 0,
            },
          ],
        },
      },
      redirects: {
        id: "redirects",
        title: "Avoid multiple page redirects",
        description:
          "Redirects introduce additional delays before the page can be loaded. [Learn more](https://web.dev/redirects/).",
        score: 1,
        scoreDisplayMode: "numeric",
        details: {
          overallSavingsMs: 0,
          headings: [],
          type: "opportunity",
          items: [],
        },
        numericValue: 0,
      },
      "uses-optimized-images": {
        id: "uses-optimized-images",
        title: "Efficiently encode images",
        description:
          "Optimized images load faster and consume less cellular data. [Learn more](https://web.dev/uses-optimized-images/).",
        score: 1,
        scoreDisplayMode: "numeric",
        details: {
          type: "opportunity",
          items: [],
          headings: [],
          overallSavingsBytes: 0,
          overallSavingsMs: 0,
        },
        warnings: [],
        numericValue: 0,
      },
      "duplicated-javascript": {
        id: "duplicated-javascript",
        title: "Remove duplicate modules in JavaScript bundles",
        description:
          "Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity. ",
        score: 1,
        scoreDisplayMode: "numeric",
        details: {
          headings: [],
          overallSavingsMs: 0,
          type: "opportunity",
          overallSavingsBytes: 0,
          items: [],
        },
        numericValue: 0,
      },
      "uses-webp-images": {
        id: "uses-webp-images",
        title: "Serve images in next-gen formats",
        description:
          "Image formats like JPEG 2000, JPEG XR, and WebP often provide better compression than PNG or JPEG, which means faster downloads and less data consumption. [Learn more](https://web.dev/uses-webp-images/).",
        score: 0.75,
        scoreDisplayMode: "numeric",
        displayValue: "Potential savings of 32 KiB",
        details: {
          overallSavingsBytes: 32715,
          overallSavingsMs: 300,
          headings: [
            {
              key: "url",
              valueType: "thumbnail",
            },
            {
              label: "URL",
              valueType: "url",
              key: "url",
            },
            {
              valueType: "bytes",
              key: "totalBytes",
              label: "Resource Size",
            },
            {
              key: "wastedBytes",
              valueType: "bytes",
              label: "Potential Savings",
            },
          ],
          items: [
            {
              totalBytes: 59949,
              wastedBytes: 12803,
              isCrossOrigin: true,
              url:
                "https://voi.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fvoi.2F2020.2F10.2F14.2Fdf189389-4105-41f6-b04c-45e676d75b80.2Ejpeg/920x516/quality/80/info-voici-laura-smet-maman-decouvrez-la-signification-du-prenom-de-son-fils.jpg",
              fromProtocol: true,
            },
            {
              fromProtocol: true,
              url:
                "https://voi.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fvoi.2F2020.2F10.2F15.2F1f900922-9488-4078-92ac-5c19838d849a.2Ejpeg/748x420/quality/80/adil-rami-explique-pourquoi-il-a-ete-oblige-de-mener-une-double-vie-entre-pamela-anderson-et-sidonie-biemont.jpg",
              totalBytes: 29833,
              isCrossOrigin: true,
              wastedBytes: 10319,
            },
            {
              wastedBytes: 9593,
              totalBytes: 41725,
              url:
                "https://voi.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fvoi.2F2020.2F10.2F15.2F461dac5e-d39b-4fcf-b4ff-0b8a79804734.2Ejpeg/748x420/quality/80/focus-point/889%2C402/photos-denudees-de-miss-franche-comte-anastasia-salvi-a-ete-denoncee-par-une-de-ses-dauphines.jpg",
              isCrossOrigin: true,
              fromProtocol: true,
            },
          ],
          type: "opportunity",
        },
        warnings: [],
        numericValue: 300,
      },
      "uses-responsive-images": {
        id: "uses-responsive-images",
        title: "Properly size images",
        description:
          "Serve images that are appropriately-sized to save cellular data and improve load time. [Learn more](https://web.dev/uses-responsive-images/).",
        score: 1,
        scoreDisplayMode: "numeric",
        details: {
          headings: [],
          overallSavingsMs: 0,
          overallSavingsBytes: 0,
          items: [],
          type: "opportunity",
        },
        warnings: [],
        numericValue: 0,
      },
      "timing-budget": {
        id: "timing-budget",
        title: "Timing budget",
        description:
          "Set a timing budget to help you keep an eye on the performance of your site. Performant sites load fast and respond to user input events quickly. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/budgets).",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "largest-contentful-paint-element": {
        id: "largest-contentful-paint-element",
        title: "Largest Contentful Paint element",
        description:
          "This is the largest contentful element painted within the viewport. [Learn More](https://web.dev/lighthouse-largest-contentful-paint/)",
        score: null,
        scoreDisplayMode: "informative",
        displayValue: "1 element found",
        details: {
          type: "table",
          items: [
            {
              node: {
                path:
                  "1,HTML,1,BODY,4,DIV,1,DIV,1,DIV,1,DIV,0,DIV,1,DIV,0,PICTURE,4,IMG",
                type: "node",
                boundingRect: {
                  left: 10,
                  width: 340,
                  right: 350,
                  bottom: 275,
                  top: 84,
                  height: 191,
                },
                selector:
                  "div.scoop-item-image > div.ratio-16-9--large > picture > img.apply-ratio",
                snippet:
                  '<img src="https://voi.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-websit…" alt="Sang pour sang" class="apply-ratio">',
                nodeLabel: "Sang pour sang",
              },
            },
          ],
          headings: [
            {
              text: "Element",
              key: "node",
              itemType: "node",
            },
          ],
        },
      },
      "font-display": {
        id: "font-display",
        title: "All text remains visible during webfont loads",
        description:
          "Leverage the font-display CSS feature to ensure text is user-visible while webfonts are loading. [Learn more](https://web.dev/font-display/).",
        score: 1,
        scoreDisplayMode: "binary",
        details: {
          headings: [],
          type: "table",
          items: [],
        },
        warnings: [],
      },
      "uses-long-cache-ttl": {
        id: "uses-long-cache-ttl",
        title: "Serve static assets with an efficient cache policy",
        description:
          "A long cache lifetime can speed up repeat visits to your page. [Learn more](https://web.dev/uses-long-cache-ttl/).",
        score: 0.22,
        scoreDisplayMode: "numeric",
        displayValue: "25 resources found",
        details: {
          items: [
            {
              wastedBytes: 30998,
              cacheLifetimeMs: 0,
              url: "https://consent.voici.fr/Notice.4c5d2.js",
              cacheHitProbability: 0,
              totalBytes: 30998,
            },
            {
              cacheLifetimeMs: 0,
              wastedBytes: 11222,
              cacheHitProbability: 0,
              totalBytes: 11222,
              url:
                "https://contextual.sirdata.io/api/v1/public/script?token=sBHJpv9SkSnAUtIV2WcFhI9zZBTg8gzBSY&url=https%3A%2F%2Fwww.voici.fr%2F",
            },
            {
              cacheHitProbability: 0,
              url: "https://consent.voici.fr/Notice.1e3c8.css",
              cacheLifetimeMs: 0,
              wastedBytes: 4976,
              totalBytes: 4976,
            },
            {
              url: "https://js.agkn.com/prod/v0/tag.js",
              cacheHitProbability: 0,
              wastedBytes: 3639,
              totalBytes: 3639,
              cacheLifetimeMs: 0,
            },
            {
              totalBytes: 2533,
              url: "https://consent.voici.fr/polyfills.ede70.js",
              cacheHitProbability: 0,
              cacheLifetimeMs: 0,
              wastedBytes: 2533,
            },
            {
              cacheLifetimeMs: 0,
              url:
                "https://id5-sync.com/c/164/0/9/1.gif?gdpr=1&gdpr_consent=CO7UKaxO7UKaxAGABCENA7CgAAAAAH_AAAqIAAANTIIMAAUAgAEMAAQIFCIQgAQhiQAQAABBCIBAJIAEqgAWVwEcoAEACAxAQgQAgBBQgwCAAQAAJKAgBAAwQCAAiAQAAgAGAIAAEAAILACREAAAEQJCAAiACUCAgqAAg5BAgIgCCAFCBAgA-JDAPGQCQAVACOAGWANQAdgBSwDeAJiAYEIgFAAqACsAMsAagA7AClgGsAOqAfIBgQkAEAA4Ac4SAkAAgAFQAVgBEgDLAGoAP0ApYBigDWAG0AN4AfIBFQCYgEygMCAYMFABgDCAI0AokNAMABUAFYAZYA1AB2AEFAKWAawA3gB1QD5AMCDgAQAHCoBIAKgBHADLAGoAOwApYBvAExAMCHQCgAfABWAGoAP0AsQBcwDFAHUAXaA0QeABARUQgEACOAGoAQMAoYBigDqALtAaISgDgAIADaAIkAYQBigDqALtJgAQEVFIAgBQwDaAK2AXaVAAgA-A.YAAAAAAAAAAA",
              wastedBytes: 1147,
              totalBytes: 1147,
              cacheHitProbability: 0,
            },
            {
              cacheHitProbability: 0,
              url: "https://r.phywi.org/prisma.gif",
              cacheLifetimeMs: 0,
              totalBytes: 445,
              wastedBytes: 445,
            },
            {
              cacheHitProbability: 0,
              cacheLifetimeMs: 0,
              wastedBytes: 344,
              totalBytes: 344,
              url:
                "https://ps.eyeota.net/pixel?pid=1mpn5m0&t=ajs&gdpr=1&gdpr_consent=CO7UKaxO7UKaxAGABCENA7CgAAAAAH_AAAqIAAANTIIMAAUAgAEMAAQIFCIQgAQhiQAQAABBCIBAJIAEqgAWVwEcoAEACAxAQgQAgBBQgwCAAQAAJKAgBAAwQCAAiAQAAgAGAIAAEAAILACREAAAEQJCAAiACUCAgqAAg5BAgIgCCAFCBAgA-JDAPGQCQAVACOAGWANQAdgBSwDeAJiAYEIgFAAqACsAMsAagA7AClgGsAOqAfIBgQkAEAA4Ac4SAkAAgAFQAVgBEgDLAGoAP0ApYBigDWAG0AN4AfIBFQCYgEygMCAYMFABgDCAI0AokNAMABUAFYAZYA1AB2AEFAKWAawA3gB1QD5AMCDgAQAHCoBIAKgBHADLAGoAOwApYBvAExAMCHQCgAfABWAGoAP0AsQBcwDFAHUAXaA0QeABARUQgEACOAGoAQMAoYBigDqALtAaISgDgAIADaAIkAYQBigDqALtJgAQEVFIAgBQwDaAK2AXaVAAgA-A.YAAAAAAAAAAA",
            },
            {
              totalBytes: 258,
              cacheHitProbability: 0,
              cacheLifetimeMs: 0,
              url:
                "https://tr.outbrain.com/cachedClickId?marketerId=00c8bc6ea6946b8e7d608e3cf1a6b3e018,0088c68ec792cf8d4ecdd00a532f69c9fc",
              wastedBytes: 258,
            },
            {
              debugData: {
                "s-maxage": "86400",
                "max-age": 30,
                type: "debugdata",
              },
              cacheHitProbability: 0.004166666666666667,
              wastedBytes: 73298.3125,
              url:
                "https://try.abtasty.com/b262e5394cfe1864b8f3b8f87e94a46b.js",
              cacheLifetimeMs: 30000,
              totalBytes: 73605,
            },
            {
              cacheLifetimeMs: 60000,
              url: "https://static.hotjar.com/c/hotjar-308464.js?sv=5",
              debugData: {
                type: "debugdata",
                "max-age": 60,
              },
              totalBytes: 2092,
              wastedBytes: 2074.5666666666666,
              cacheHitProbability: 0.008333333333333333,
            },
            {
              totalBytes: 3160,
              debugData: {
                "max-age": 900,
                type: "debugdata",
                public: true,
                "s-maxage": "900",
              },
              wastedBytes: 2824.25,
              cacheHitProbability: 0.10625000000000001,
              cacheLifetimeMs: 900000,
              url: "https://asset.easydmp.net/js/client.js?t=222607",
            },
            {
              cacheHitProbability: 0.11666666666666667,
              cacheLifetimeMs: 1200000,
              debugData: {
                public: true,
                "max-age": 1200,
                type: "debugdata",
              },
              wastedBytes: 10015.233333333334,
              url: "https://config.seedtag.com/loader.js?v=0.47085693136814366",
              totalBytes: 11338,
            },
            {
              url: "https://amplify.outbrain.com/cp/obtp.js",
              totalBytes: 3332,
              wastedBytes: 2943.2666666666664,
              debugData: {
                type: "debugdata",
                "max-age": 1200,
              },
              cacheHitProbability: 0.11666666666666667,
              cacheLifetimeMs: 1200000,
            },
            {
              cacheLifetimeMs: 2239000,
              cacheHitProbability: 0.15274305555555556,
              url: "https://js-sec.indexww.com/ht/p/185598-69743361691179.js",
              debugData: {
                type: "debugdata",
                "max-age": 2239,
              },
              totalBytes: 15275,
              wastedBytes: 12941.849826388889,
            },
            {
              debugData: {
                "max-age": 3600,
                public: true,
                type: "debugdata",
              },
              wastedBytes: 70430.40000000001,
              cacheHitProbability: 0.2,
              cacheLifetimeMs: 3600000,
              totalBytes: 88038,
              url: "https://config.seedtag.com/st_3.cdc7381da0716d2d1a47.js",
            },
            {
              cacheHitProbability: 0.2,
              cacheLifetimeMs: 3600000,
              totalBytes: 42584,
              url:
                "https://gdpr-tcfv2.sp-prod.net/wrapperMessagingWithoutDetection.js",
              debugData: {
                type: "debugdata",
                "max-age": 3600,
              },
              wastedBytes: 34067.200000000004,
            },
            {
              cacheHitProbability: 0.2,
              wastedBytes: 19292.8,
              totalBytes: 24116,
              cacheLifetimeMs: 3600000,
              url: "https://config.seedtag.com/st_0.ca40355e0672a61aa830.js",
              debugData: {
                "max-age": 3600,
                type: "debugdata",
                public: true,
              },
            },
            {
              debugData: {
                "max-age": 7200,
                public: true,
                type: "debugdata",
              },
              wastedBytes: 14502,
              totalBytes: 19336,
              cacheHitProbability: 0.25,
              cacheLifetimeMs: 7200000,
              url: "https://www.google-analytics.com/analytics.js",
            },
            {
              cacheHitProbability: 0.25,
              wastedBytes: 13391.25,
              totalBytes: 17855,
              url: "https://ssl.google-analytics.com/ga.js",
              cacheLifetimeMs: 7200000,
              debugData: {
                type: "debugdata",
                public: true,
                "max-age": 7200,
              },
            },
            {
              debugData: {
                public: true,
                type: "debugdata",
                "max-age": 86400,
              },
              wastedBytes: 11620.800000000001,
              totalBytes: 29052,
              url: "https://c.amazon-adsystem.com/aax2/apstag.js",
              cacheHitProbability: 0.6,
              cacheLifetimeMs: 86400000,
            },
            {
              totalBytes: 9785,
              cacheHitProbability: 0.9,
              url: "https://eum.instana.io/eum.min.js",
              debugData: {
                public: true,
                "stale-while-revalidate": "2678400",
                type: "debugdata",
                "max-age": 604800,
                "stale-if-error": "2678400",
              },
              wastedBytes: 978.4999999999998,
              cacheLifetimeMs: 604800000,
            },
            {
              cacheLifetimeMs: 604800000,
              wastedBytes: 341.49999999999994,
              cacheHitProbability: 0.9,
              totalBytes: 3415,
              debugData: {
                type: "debugdata",
                "max-age": 604800,
              },
              url: "https://tag.agrvt.com/tag/v2/wrapper.js",
            },
            {
              wastedBytes: 244.79999999999995,
              totalBytes: 2448,
              debugData: {
                "max-age": 604800,
                type: "debugdata",
              },
              url: "https://tag.agrvt.com/tag/v2/cmp_list_v2.js",
              cacheLifetimeMs: 604800000,
              cacheHitProbability: 0.9,
            },
            {
              url: "https://via.batch.com/v2/bootstrap.min.js",
              cacheHitProbability: 0.9064245810055866,
              cacheLifetimeMs: 2592000000,
              totalBytes: 1584,
              debugData: {
                type: "debugdata",
                "max-age": 2592000,
              },
              wastedBytes: 148.22346368715074,
            },
          ],
          headings: [
            {
              itemType: "url",
              key: "url",
              text: "URL",
            },
            {
              key: "cacheLifetimeMs",
              itemType: "ms",
              displayUnit: "duration",
              text: "Cache TTL",
            },
            {
              text: "Transfer Size",
              itemType: "bytes",
              key: "totalBytes",
              granularity: 1,
              displayUnit: "kb",
            },
          ],
          summary: {
            wastedBytes: 324676.9524567427,
          },
          type: "table",
        },
        numericValue: 324676.9524567427,
      },
      "long-tasks": {
        id: "long-tasks",
        title: "Avoid long main-thread tasks",
        description:
          "Lists the longest tasks on the main thread, useful for identifying worst contributors to input delay. [Learn more](https://web.dev/long-tasks-devtools/)",
        score: null,
        scoreDisplayMode: "informative",
        displayValue: "20 long tasks found",
        details: {
          items: [
            {
              duration: 535,
              startTime: 1578,
              url: "Unattributable",
            },
            {
              url:
                "https://try.abtasty.com/b262e5394cfe1864b8f3b8f87e94a46b.js",
              startTime: 14340,
              duration: 504,
            },
            {
              startTime: 12240,
              url:
                "https://tra.scds.pmdstatic.net/pmd-browsertools/1.7.48/browsertools.js",
              duration: 344,
            },
            {
              startTime: 2113,
              duration: 297,
              url: "https://www.voici.fr/",
            },
            {
              duration: 276,
              startTime: 16830,
              url:
                "https://tra.scds.pmdstatic.net/pmd-browsertools/1.7.48/browsertools.js",
            },
            {
              duration: 246,
              url:
                "https://tra.scds.pmdstatic.net/pmd-browsertools/1.7.48/browsertools.js",
              startTime: 8130,
            },
            {
              url:
                "https://tra.scds.pmdstatic.net/pmd-browsertools/1.7.48/browsertools.js",
              duration: 238,
              startTime: 17310,
            },
            {
              duration: 215,
              url: "https://www.voici.fr/",
              startTime: 1247,
            },
            {
              startTime: 16147,
              url: "https://config.seedtag.com/st_3.cdc7381da0716d2d1a47.js",
              duration: 214,
            },
            {
              startTime: 11364,
              duration: 198,
              url:
                "https://www.googletagmanager.com/gtm.js?id=GTM-NK7QRQ4&l=dataLayer",
            },
            {
              url:
                "https://gdpr-tcfv2.sp-prod.net/wrapperMessagingWithoutDetection.js",
              startTime: 8610,
              duration: 187,
            },
            {
              url: "https://script.hotjar.com/modules.0734134ae79697970353.js",
              duration: 166,
              startTime: 15337,
            },
            {
              startTime: 7650,
              duration: 162,
              url:
                "https://gdpr-tcfv2.sp-prod.net/wrapperMessagingWithoutDetection.js",
            },
            {
              startTime: 15600,
              url: "https://ats.rlcdn.com/ats.js",
              duration: 162,
            },
            {
              url:
                "https://tra.scds.pmdstatic.net/pmd-browsertools/1.7.48/browsertools.js",
              duration: 148,
              startTime: 17790,
            },
            {
              startTime: 10970,
              url:
                "https://boot.pbstck.com/v1/tag/32cd788f-6318-409c-811b-35e53f72ef9e",
              duration: 148,
            },
            {
              duration: 121,
              startTime: 13620,
              url: "https://eum.instana.io/eum.min.js",
            },
            {
              url: "https://www.voici.fr/",
              duration: 108,
              startTime: 1139,
            },
            {
              url: "https://consent.voici.fr/Notice.4c5d2.js",
              duration: 106,
              startTime: 10800,
            },
            {
              url: "https://ssl.google-analytics.com/ga.js",
              startTime: 5820,
              duration: 102,
            },
          ],
          type: "table",
          headings: [
            {
              itemType: "url",
              key: "url",
              text: "URL",
            },
            {
              granularity: 1,
              itemType: "ms",
              text: "Start Time",
              key: "startTime",
            },
            {
              text: "Duration",
              itemType: "ms",
              granularity: 1,
              key: "duration",
            },
          ],
        },
      },
      "dom-size": {
        id: "dom-size",
        title: "Avoid an excessive DOM size",
        description:
          "A large DOM will increase memory usage, cause longer [style calculations](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations), and produce costly [layout reflows](https://developers.google.com/speed/articles/reflow). [Learn more](https://web.dev/dom-size/).",
        score: 0.16,
        scoreDisplayMode: "numeric",
        displayValue: "2,139 elements",
        details: {
          type: "table",
          headings: [
            {
              text: "Statistic",
              itemType: "text",
              key: "statistic",
            },
            {
              text: "Element",
              itemType: "code",
              key: "element",
            },
            {
              itemType: "numeric",
              text: "Value",
              key: "value",
            },
          ],
          items: [
            {
              value: "2,139",
              statistic: "Total DOM Elements",
            },
            {
              value: "17",
              statistic: "Maximum DOM Depth",
              element: {
                value:
                  '<source data-srcset="https://voi.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-websit…" media="(max-width: 480px)">',
                type: "code",
              },
            },
            {
              element: {
                type: "code",
                value:
                  '<body id="top" data-wide-noload="" data-popin-offset="80px" data-app-followed-url="/ajax/starsubscription/getsubscribedstars" data-app-follow-url="/ajax/starsubscription/subscribe" data-app-unfollow-url="/ajax/starsubscription/unsubscribe" data-app-api-people-url="https://api.voici.fr/v1/fr/people.json" data-follow-api-article-url="https://api.voici.fr/v1/fr/articles.json" data-branch-deeplink="home" data-loader="{\n        &quot;site&quot;: {\n            &quot;mainScript&quot;: &quot;https://www.voici.fr/assets…">',
              },
              statistic: "Maximum Child Elements",
              value: "47",
            },
          ],
        },
        numericValue: 2139,
      },
      "unminified-javascript": {
        id: "unminified-javascript",
        title: "Minify JavaScript",
        description:
          "Minifying JavaScript files can reduce payload sizes and script parse time. [Learn more](https://web.dev/unminified-javascript/).",
        score: 1,
        scoreDisplayMode: "numeric",
        details: {
          items: [],
          overallSavingsBytes: 0,
          type: "opportunity",
          headings: [],
          overallSavingsMs: 0,
        },
        warnings: [],
        numericValue: 0,
      },
      "cumulative-layout-shift": {
        id: "cumulative-layout-shift",
        title: "Cumulative Layout Shift",
        description:
          "Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more](https://web.dev/cls/).",
        score: 1,
        scoreDisplayMode: "numeric",
        displayValue: "0.005",
        details: {
          type: "debugdata",
          items: [
            {
              finalLayoutShiftTraceEventFound: true,
            },
          ],
        },
        numericValue: 0.005296888563368055,
      },
      "uses-rel-preconnect": {
        id: "uses-rel-preconnect",
        title: "Preconnect to required origins",
        description:
          "Consider adding `preconnect` or `dns-prefetch` resource hints to establish early connections to important third-party origins. [Learn more](https://web.dev/uses-rel-preconnect/).",
        score: 1,
        scoreDisplayMode: "numeric",
        warnings: [
          "More than 2 preconnect links were found. Preconnect links should be used sparingly and only to the most important origins.",
        ],
      },
      "total-blocking-time": {
        id: "total-blocking-time",
        title: "Total Blocking Time",
        description:
          "Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more](https://web.dev/lighthouse-total-blocking-time/).",
        score: 0.01,
        scoreDisplayMode: "numeric",
        displayValue: "2,250 ms",
        numericValue: 2246,
      },
      "network-requests": {
        id: "network-requests",
        title: "Network Requests",
        description:
          "Lists the network requests that were made during page load.",
        score: null,
        scoreDisplayMode: "informative",
        details: {
          items: [
            {
              endTime: 154.98099999967963,
              startTime: 0,
              resourceSize: 462566,
              url: "https://www.voici.fr/",
              mimeType: "text/html",
              finished: true,
              transferSize: 53101,
              resourceType: "Document",
              statusCode: 200,
            },
            {
              finished: true,
              resourceType: "Script",
              mimeType: "application/javascript",
              endTime: 216.75899997353554,
              startTime: 172.94799990486354,
              statusCode: 200,
              transferSize: 12973,
              resourceSize: 37506,
              url:
                "https://tra.scds.pmdstatic.net/pmd-browsertools/1.7.48/browsertools.js",
            },
            {
              url: "https://www.voici.fr/assets/fonts/montserrat-regular.woff2",
              resourceSize: 18684,
              resourceType: "Font",
              mimeType: "application/octet-stream",
              finished: true,
              startTime: 173.2889999402687,
              endTime: 193.47299996297807,
              transferSize: 19354,
              statusCode: 200,
            },
            {
              statusCode: 200,
              finished: true,
              startTime: 173.45899995416403,
              transferSize: 19398,
              resourceType: "Font",
              mimeType: "application/octet-stream",
              endTime: 247.9239999083802,
              url:
                "https://www.voici.fr/assets/fonts/montserrat-semibold.woff2",
              resourceSize: 18728,
            },
            {
              url:
                "https://www.voici.fr/assets/fonts/playfair-display-bold.woff2",
              transferSize: 27026,
              finished: true,
              endTime: 201.52499992400408,
              resourceSize: 26356,
              startTime: 173.71899995487183,
              mimeType: "application/octet-stream",
              resourceType: "Font",
              statusCode: 200,
            },
            {
              transferSize: 28150,
              statusCode: 200,
              startTime: 174.0199999185279,
              url:
                "https://www.voici.fr/assets/fonts/playfair-display-bold-italic.woff2",
              mimeType: "application/octet-stream",
              endTime: 277.43099990766495,
              resourceSize: 27480,
              finished: true,
              resourceType: "Font",
            },
            {
              finished: true,
              mimeType: "text/css",
              url:
                "https://www.voici.fr/assets/styles/home-3761b188331e916f89da.min.css",
              resourceSize: 56860,
              transferSize: 10731,
              endTime: 215.1979999616742,
              resourceType: "Stylesheet",
              statusCode: 200,
              startTime: 176.9859999185428,
            },
            {
              transferSize: 19336,
              resourceSize: 46489,
              resourceType: "Script",
              finished: true,
              statusCode: 200,
              startTime: 223.94099994562566,
              endTime: 229.98299996834248,
              mimeType: "text/javascript",
              url: "https://www.google-analytics.com/analytics.js",
            },
            {
              statusCode: 200,
              endTime: 611.6399999009445,
              mimeType: "image/jpeg",
              startTime: 224.11599999759346,
              finished: true,
              url:
                "https://voi.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fvoi.2F2020.2F10.2F14.2Fdf189389-4105-41f6-b04c-45e676d75b80.2Ejpeg/920x516/quality/80/info-voici-laura-smet-maman-decouvrez-la-signification-du-prenom-de-son-fils.jpg",
              transferSize: 60398,
              resourceSize: 59949,
              resourceType: "Image",
            },
            {
              resourceSize: 7666,
              endTime: 259.40999994054437,
              transferSize: 8114,
              statusCode: 200,
              resourceType: "Image",
              finished: true,
              mimeType: "image/jpeg",
              url:
                "https://voi.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fvoi.2F2020.2F10.2F13.2Fa548683d-dfba-4e79-ae77-9a8e468f9093.2Ejpeg/180x180/quality/80/focus-point/1126%2C290/koh-lanta-retenu-pour-le-casting-claude-raconte-pourquoi-il-a-failli-rater-l-aventure.jpg",
              startTime: 224.33799994178116,
            },
            {
              statusCode: 200,
              mimeType: "application/javascript",
              url:
                "https://tra.scds.pmdstatic.net/advertising-core/4.88.0/core-ads.js",
              resourceSize: 0,
              endTime: 621.6159999603406,
              transferSize: 52752,
              finished: true,
              resourceType: "Other",
              startTime: 226.83800000231713,
            },
            {
              startTime: 227.63400000985712,
              endTime: 234.347999910824,
              url: "https://www.googletagservices.com/tag/js/gpt.js",
              resourceType: "Other",
              transferSize: 18968,
              statusCode: 200,
              finished: true,
              resourceSize: 0,
              mimeType: "text/javascript",
            },
            {
              resourceSize: 5467,
              resourceType: "Image",
              mimeType: "image/jpeg",
              startTime: 224.55399995669723,
              transferSize: 5913,
              finished: true,
              endTime: 262.10299995727837,
              url:
                "https://voi.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fvoi.2F2020.2F10.2F15.2F76b1c9a4-e9f7-4cd5-9159-de576c8a97a5.2Ejpeg/180x180/quality/80/focus-point/878%2C445/aya-nakamura-on-craque-pour-sa-couleur-de-cheveux-hyper-tendance.jpg",
              statusCode: 200,
            },
            {
              finished: true,
              statusCode: 200,
              mimeType: "image/jpeg",
              startTime: 224.82299990952015,
              resourceSize: 7614,
              transferSize: 8062,
              resourceType: "Image",
              url:
                "https://voi.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fvoi.2F2020.2F10.2F12.2F1a0da7da-9153-40a6-bd37-c923d6e4d270.2Ejpeg/180x180/quality/80/iris-mittenaere-assume-ses-fesses-en-gros-plan-dans-une-video-diego-el-glaoui-la-taquine.jpg",
              endTime: 262.69100001081824,
            },
            {
              statusCode: 200,
              resourceType: "Image",
              startTime: 225.17299989704043,
              mimeType: "image/jpeg",
              transferSize: 5315,
              url:
                "https://voi.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fvoi.2F2020.2F10.2F13.2F9a1b4beb-7701-4c47-ace2-994e7a1abb25.2Ejpeg/180x180/quality/80/focus-point/1155%2C632/capitaine-marleau-pourquoi-corinne-masiero-porte-toujours-une-chapka.jpg",
              resourceSize: 4867,
              endTime: 261.69499999377877,
              finished: true,
            },
            {
              transferSize: 8388,
              url:
                "https://voi.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fvoi.2F2020.2F03.2F13.2Fc20a0a23-8009-43dc-96e1-4c0f1bff88d9.2Ejpeg/180x180/quality/80/la-scene-voici-comment-michel-drucker-a-impacte-la-vie-de-famille-d-elisabeth-buffet.jpg",
              resourceSize: 7812,
              statusCode: 200,
              resourceType: "Image",
              mimeType: "image/jpeg",
              finished: true,
              startTime: 225.52699991501868,
              endTime: 542.9789999034256,
            },
            {
              finished: true,
              mimeType: "image/jpeg",
              resourceType: "Image",
              startTime: 225.75199999846518,
              transferSize: 50081,
              url:
                "https://voi.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fvoi.2F2020.2F10.2F15.2F4786c2fa-f26b-4a0f-a409-9dc737335236.2Ejpeg/748x420/quality/80/laurent-ruquier-et-christophe-dechavanne-humilient-une-artiste-dans-les-grosses-tetes-elle-depose-plainte.jpg",
              statusCode: 200,
              resourceSize: 49633,
              endTime: 271.2089999113232,
            },
            {
              url:
                "https://voi.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fvoi.2F2020.2F10.2F15.2F1f900922-9488-4078-92ac-5c19838d849a.2Ejpeg/748x420/quality/80/adil-rami-explique-pourquoi-il-a-ete-oblige-de-mener-une-double-vie-entre-pamela-anderson-et-sidonie-biemont.jpg",
              transferSize: 30281,
              statusCode: 200,
              endTime: 539.608999970369,
              resourceType: "Image",
              mimeType: "image/jpeg",
              finished: true,
              resourceSize: 29833,
              startTime: 225.87600001133978,
            },
            {
              statusCode: 200,
              finished: true,
              resourceSize: 35565,
              resourceType: "Image",
              startTime: 226.00699996110052,
              url:
                "https://voi.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fvoi.2F2020.2F10.2F15.2F604fa3ae-eec3-42be-83e7-62f3481526f1.2Ejpeg/748x420/quality/80/focus-point/2588%2C869/renaud-decouvrez-l-incroyable-somme-percue-par-le-chanteur-pour-ses-chansons.jpg",
              endTime: 537.6519999699667,
              mimeType: "image/jpeg",
              transferSize: 36013,
            },
            {
              statusCode: 200,
              endTime: 618.9549999544397,
              resourceSize: 41725,
              mimeType: "image/jpeg",
              resourceType: "Image",
              startTime: 226.12899995874614,
              url:
                "https://voi.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fvoi.2F2020.2F10.2F15.2F461dac5e-d39b-4fcf-b4ff-0b8a79804734.2Ejpeg/748x420/quality/80/focus-point/889%2C402/photos-denudees-de-miss-franche-comte-anastasia-salvi-a-ete-denoncee-par-une-de-ses-dauphines.jpg",
              transferSize: 42172,
              finished: true,
            },
            {
              endTime: 622.808999964036,
              resourceSize: 59913,
              startTime: 226.2689999770373,
              transferSize: 60361,
              resourceType: "Image",
              url:
                "https://voi.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fvoi.2F2020.2F10.2F15.2F4fb40f2b-e193-41b4-8c06-21def42124df.2Ejpeg/748x420/quality/80/focus-point/508%2C509/le-meilleur-patissier-les-telespectateurs-du-nord-tres-agaces-par-les-cliches-de-l-emission.jpg",
              mimeType: "image/jpeg",
              statusCode: 200,
              finished: true,
            },
            {
              startTime: 226.67299991007894,
              url: "https://api.optinproject.com/rt/visit/voici.gif",
              resourceSize: 43,
              statusCode: 200,
              mimeType: "image/gif",
              endTime: 319.49399993754923,
              finished: true,
              resourceType: "Image",
              transferSize: 1016,
            },
            {
              transferSize: 1830,
              startTime: 241.72599997837096,
              resourceSize: 2641,
              finished: true,
              resourceType: "Document",
              url: "https://abo.prismamediadigital.com/voi/1",
              mimeType: "text/html",
              statusCode: 200,
              endTime: 277.9020000016317,
            },
            {
              mimeType: "image/gif",
              transferSize: 0,
              startTime: 245.83799997344613,
              statusCode: 200,
              resourceSize: 37,
              endTime: 245.86899997666478,
              url:
                "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
              finished: true,
              resourceType: "Image",
            },
            {
              mimeType: "image/svg+xml",
              startTime: 260.52699994761497,
              transferSize: 1815,
              url:
                "https://www.voici.fr/assets/images/logo-voici-e2de37742afaa64ad4e575eda23365c6.svg",
              finished: true,
              endTime: 280.4769999347627,
              resourceType: "Image",
              statusCode: 200,
              resourceSize: 1157,
            },
            {
              url: "https://eum.instana.io/eum.min.js",
              statusCode: 200,
              mimeType: "application/javascript",
              finished: true,
              resourceType: "Script",
              startTime: 402.8329999418929,
              resourceSize: 23380,
              endTime: 419.8880000039935,
              transferSize: 9785,
            },
            {
              resourceType: "XHR",
              mimeType: "text/javascript",
              url:
                "https://cdn.polyfill.io/v2/polyfill.min.js?excludes=Promise&features=default,arrayMap",
              transferSize: 953,
              endTime: 558.9969999855384,
              finished: true,
              resourceSize: 222,
              startTime: 544.1969999810681,
              statusCode: 200,
            },
            {
              url:
                "https://www.google-analytics.com/j/collect?v=1&_v=j86&a=765929501&t=pageview&_s=1&dl=https%3A%2F%2Fwww.voici.fr%2F&ul=en-us&de=UTF-8&dt=People%20%3A%20toutes%20les%20actualit%C3%A9s%20et%20news%20people%20!&sd=24-bit&sr=360x640&vp=360x640&je=0&_u=YEBAAAABAAAAAC~&jid=1006661469&gjid=775676287&cid=311774742.1602773376&tid=UA-18383854-3&_gid=828155837.1602773376&_r=1&_slc=1&cd11=no&cd14=Mozilla%2F5.0%20(Linux%3B%20Android%207.0%3B%20Moto%20G%20(4))%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F84.0.4143.7%20Mobile%20Safari%2F537.36%20Chrome-Lighthouse&cd21=https&cd27=undefined&cd29=928bf3e6-02c4-4461-888b-ec85db34e13d&z=571459800",
              finished: true,
              mimeType: "text/plain",
              statusCode: 200,
              transferSize: 675,
              endTime: 580.3919999161735,
              resourceType: "XHR",
              startTime: 576.9950000103563,
              resourceSize: 4,
            },
            {
              finished: true,
              endTime: 898.8060000119731,
              resourceType: "XHR",
              resourceSize: 2826,
              transferSize: 2076,
              mimeType: "application/javascript",
              statusCode: 200,
              url:
                "https://tra.scds.pmdstatic.net/sourcepoint/3.2.0/sourcepoint.min.js",
              startTime: 583.5669999942183,
            },
            {
              mimeType: "application/javascript",
              resourceSize: 14298,
              startTime: 584.8459999542683,
              endTime: 608.2779999123886,
              transferSize: 6949,
              resourceType: "XHR",
              statusCode: 200,
              url:
                "https://www.voici.fr/assets/scripts/main-3761b188331e916f89da.min.js",
              finished: true,
            },
            {
              finished: true,
              mimeType: "text/css",
              endTime: 616.5449999971315,
              resourceSize: 3919,
              startTime: 593.7970000086352,
              statusCode: 200,
              transferSize: 1446,
              url:
                "https://abo.prismamediadigital.com/bundles/pmdprismashop_3.4.0/css/box.css",
              resourceType: "Stylesheet",
            },
            {
              startTime: 594.0100000007078,
              mimeType: "image/jpeg",
              finished: true,
              resourceType: "Image",
              url:
                "https://abo.prismamediadigital.com/upload/140/voi/1/box.jpg",
              endTime: 614.2619999591261,
              statusCode: 200,
              transferSize: 23099,
              resourceSize: 22936,
            },
            {
              mimeType: "text/plain",
              transferSize: 748,
              url:
                "https://stats.g.doubleclick.net/j/collect?t=dc&aip=1&_r=3&v=1&_v=j86&tid=UA-18383854-3&cid=311774742.1602773376&jid=1006661469&gjid=775676287&_gid=828155837.1602773376&_u=YEBAAAAAAAAAAC~&z=1710902511",
              resourceSize: 4,
              endTime: 607.2249999269843,
              resourceType: "XHR",
              startTime: 598.4239999670535,
              statusCode: 200,
              finished: true,
            },
            {
              resourceType: "Image",
              transferSize: 691,
              resourceSize: 42,
              url:
                "https://www.google.com/ads/ga-audiences?t=sr&aip=1&_r=4&slf_rd=1&v=1&_v=j86&tid=UA-18383854-3&cid=311774742.1602773376&jid=1006661469&_u=YEBAAAAAAAAAAC~&z=225345165",
              startTime: 610.939999925904,
              mimeType: "image/gif",
              endTime: 623.38899995666,
              finished: true,
              statusCode: 200,
            },
            {
              statusCode: 200,
              resourceType: "Image",
              endTime: 622.3689999897033,
              mimeType: "image/gif",
              finished: true,
              startTime: 612.2719999402761,
              url:
                "https://www.google.be/ads/ga-audiences?t=sr&aip=1&_r=4&slf_rd=1&v=1&_v=j86&tid=UA-18383854-3&cid=311774742.1602773376&jid=1006661469&_u=YEBAAAAAAAAAAC~&z=225345165",
              resourceSize: 42,
              transferSize: 691,
            },
            {
              mimeType: "text/javascript",
              transferSize: 17855,
              resourceSize: 46274,
              url: "https://ssl.google-analytics.com/ga.js",
              startTime: 629.456999944523,
              endTime: 633.3279999671504,
              finished: true,
              statusCode: 200,
              resourceType: "Script",
            },
            {
              startTime: 667.261999915354,
              statusCode: 302,
              endTime: 672.1169999800622,
              finished: true,
              mimeType: "text/html",
              resourceSize: 0,
              transferSize: 776,
              url:
                "https://ssl.google-analytics.com/r/__utm.gif?utmwv=5.7.2&utms=1&utmn=1636582696&utmhn=abo.prismamediadigital.com&utmcs=UTF-8&utmsr=360x640&utmvp=300x250&utmsc=24-bit&utmul=en-us&utmje=0&utmfl=-&utmdt=Abonnement%20de%20Voici.fr%20(theme%20%22Mono-image%20%3A%201%20image%22%20%2F%20tab%20%221%22)&utmhid=158695585&utmr=https%3A%2F%2Fwww.voici.fr%2F&utmp=%2Fvoi%2F1&utmht=1602773375727&utmac=UA-18383854-16&utmcc=__utma%3D38183027.370602774.1602773376.1602773376.1602773376.1%3B%2B__utmz%3D38183027.1602773376.1.1.utmcsr%3Dvoici.fr%7Cutmccn%3D(referral)%7Cutmcmd%3Dreferral%7Cutmcct%3D%2F%3B&utmjid=2093459925&utmredir=1&utmu=qAAAAAAAAAAAAAAAAAAAAAAE~",
            },
            {
              startTime: 672.3629999905825,
              finished: true,
              mimeType: "text/html",
              statusCode: 302,
              transferSize: 845,
              endTime: 676.9899999490008,
              resourceSize: 0,
              url:
                "https://stats.g.doubleclick.net/r/collect?v=1&aip=1&t=dc&_r=3&tid=UA-18383854-16&cid=370602774.1602773376&jid=2093459925&_v=5.7.2&z=1636582696",
            },
            {
              endTime: 687.1279999613762,
              transferSize: 865,
              startTime: 677.3299999767914,
              finished: true,
              url:
                "https://www.google.com/ads/ga-audiences?v=1&aip=1&t=sr&_r=4&tid=UA-18383854-16&cid=370602774.1602773376&jid=2093459925&_v=5.7.2&z=1636582696",
              mimeType: "text/html",
              resourceSize: 0,
              statusCode: 302,
            },
            {
              resourceType: "Image",
              transferSize: 691,
              statusCode: 200,
              endTime: 694.6279999101534,
              startTime: 687.3790000099689,
              url:
                "https://www.google.fr/ads/ga-audiences?v=1&aip=1&t=sr&_r=4&tid=UA-18383854-16&cid=370602774.1602773376&jid=2093459925&_v=5.7.2&z=1636582696&slf_rd=1&random=1489019822",
              finished: true,
              mimeType: "image/gif",
              resourceSize: 42,
            },
            {
              mimeType: "application/javascript",
              resourceType: "Script",
              startTime: 911.6909999866039,
              url:
                "https://gdpr-tcfv2.sp-prod.net/wrapperMessagingWithoutDetection.js",
              statusCode: 200,
              finished: true,
              endTime: 940.9699999960139,
              transferSize: 42584,
              resourceSize: 144783,
            },
            {
              resourceSize: 169567,
              transferSize: 52752,
              finished: true,
              resourceType: "XHR",
              url:
                "https://tra.scds.pmdstatic.net/advertising-core/4.88.0/core-ads.js",
              mimeType: "application/javascript",
              endTime: 1071.3339999783784,
              statusCode: 200,
              startTime: 913.3059999439865,
            },
            {
              startTime: 1051.6779999015853,
              resourceSize: 166545,
              statusCode: 200,
              url:
                "https://consent.voici.fr/wrapper/tcfv2/v1/gdpr/native-message?requestUUID=b11e276f-5088-4f00-ac61-1bf9bb198b24&hasCsp=true&env=prod&consentLanguage=browserDefault&body=%7B%22accountId%22%3A314%2C%22requestUUID%22%3A%22b11e276f-5088-4f00-ac61-1bf9bb198b24%22%2C%22propertyHref%22%3A%22https%3A%2F%2Fwww.voici.fr%2F%22%2C%22euconsent%22%3Anull%2C%22meta%22%3A%22%7B%5C%22mmsCookies%5C%22%3A%5B%5D%2C%5C%22resolved%5C%22%3Anull%7D%22%2C%22clientMMSOrigin%22%3A%22https%3A%2F%2Fconsent.voici.fr%22%2C%22targetingParams%22%3Anull%2C%22campaignEnv%22%3A%22prod%22%2C%22pubData%22%3A%7B%7D%7D",
              transferSize: 10826,
              finished: true,
              endTime: 1194.3289999617264,
              resourceType: "XHR",
              mimeType: "application/json",
            },
            {
              mimeType: "text/html",
              url:
                "https://consent.voici.fr/wrapper/tcfv2/v1/gdpr/native-message?requestUUID=b11e276f-5088-4f00-ac61-1bf9bb198b24&hasCsp=true&env=prod&consentLanguage=browserDefault&body=%7B%22accountId%22%3A314%2C%22requestUUID%22%3A%22b11e276f-5088-4f00-ac61-1bf9bb198b24%22%2C%22propertyHref%22%3A%22https%3A%2F%2Fwww.voici.fr%2F%22%2C%22euconsent%22%3Anull%2C%22meta%22%3A%22%7B%5C%22mmsCookies%5C%22%3A%5B%5D%2C%5C%22resolved%5C%22%3Anull%7D%22%2C%22clientMMSOrigin%22%3A%22https%3A%2F%2Fconsent.voici.fr%22%2C%22targetingParams%22%3Anull%2C%22campaignEnv%22%3A%22prod%22%2C%22pubData%22%3A%7B%7D%7D",
              transferSize: 725,
              finished: true,
              statusCode: 200,
              startTime: 991.4589999243617,
              resourceType: "Other",
              resourceSize: 0,
              endTime: 1049.2789999116212,
            },
            {
              endTime: 1121.8299999600276,
              transferSize: 18737,
              mimeType: "text/javascript",
              finished: true,
              url: "https://securepubads.g.doubleclick.net/tag/js/gpt.js",
              resourceSize: 53704,
              startTime: 1112.732999958098,
              statusCode: 200,
              resourceType: "Script",
            },
            {
              url: "https://js-sec.indexww.com/ht/p/185598-69743361691179.js",
              endTime: 1132.9939999850467,
              startTime: 1113.469999982044,
              transferSize: 15275,
              finished: true,
              statusCode: 200,
              resourceType: "Script",
              mimeType: "text/javascript",
              resourceSize: 44889,
            },
            {
              startTime: 1114.1659999266267,
              transferSize: 29052,
              finished: true,
              statusCode: 200,
              resourceType: "Script",
              url: "https://c.amazon-adsystem.com/aax2/apstag.js",
              endTime: 1137.1519999811426,
              resourceSize: 111170,
              mimeType: "application/javascript",
            },
            {
              startTime: 1115.3549998998642,
              url:
                "https://contextual.sirdata.io/api/v1/public/script?token=sBHJpv9SkSnAUtIV2WcFhI9zZBTg8gzBSY&url=https%3A%2F%2Fwww.voici.fr%2F",
              statusCode: 200,
              mimeType: "text/javascript",
              finished: true,
              resourceSize: 36689,
              endTime: 1162.6489999471232,
              resourceType: "Script",
              transferSize: 11222,
            },
            {
              resourceType: "Script",
              endTime: 1176.9999999087304,
              statusCode: 200,
              mimeType: "application/javascript",
              transferSize: 91658,
              startTime: 1130.1669999957085,
              url:
                "https://tra.scds.pmdstatic.net/advertising-core/4.88.0/prebid-plugin.js",
              finished: true,
              resourceSize: 283559,
            },
            {
              endTime: 1183.60499991104,
              resourceSize: 306251,
              url:
                "https://tra.scds.pmdstatic.net/pmc-starter/3.13.0/assets/scripts/index.js",
              mimeType: "application/javascript",
              resourceType: "XHR",
              statusCode: 200,
              finished: true,
              transferSize: 69746,
              startTime: 1131.3659999286756,
            },
            {
              resourceType: "Script",
              resourceSize: 114009,
              url: "https://www.googletagmanager.com/gtm.js?id=GTM-KLGXH8",
              finished: true,
              mimeType: "application/javascript",
              transferSize: 40148,
              endTime: 1140.4849999817088,
              statusCode: 200,
              startTime: 1132.7399999136105,
            },
            {
              resourceType: "XHR",
              startTime: 1133.731999900192,
              transferSize: 19670,
              endTime: 1443.766999989748,
              statusCode: 200,
              mimeType: "application/javascript",
              resourceSize: 56429,
              finished: true,
              url:
                "https://tra.scds.pmdstatic.net/bookmark/3.1.0/js/bookmark-statics.js",
            },
            {
              statusCode: 200,
              startTime: 1170.5159998964518,
              transferSize: 99565,
              resourceSize: 278111,
              url:
                "https://securepubads.g.doubleclick.net/gpt/pubads_impl_2020101201.js",
              resourceType: "Script",
              finished: true,
              mimeType: "text/javascript",
              endTime: 1181.6029999172315,
            },
            {
              url: "https://c.amazon-adsystem.com/bao-csm/aps-comm/aps_csm.js",
              transferSize: 3294,
              startTime: 1185.702999937348,
              endTime: 1195.3159999102354,
              mimeType: "application/javascript",
              finished: true,
              statusCode: 200,
              resourceSize: 6482,
              resourceType: "XHR",
            },
            {
              transferSize: 33814,
              resourceSize: 92046,
              mimeType: "application/javascript",
              resourceType: "Script",
              endTime: 1221.2219999637455,
              finished: true,
              url:
                "https://www.googletagmanager.com/gtm.js?id=GTM-NK7QRQ4&l=dataLayer",
              startTime: 1207.8409999376163,
              statusCode: 200,
            },
            {
              finished: true,
              statusCode: 200,
              endTime: 1265.3500000014901,
              transferSize: 1584,
              resourceSize: 3338,
              url: "https://via.batch.com/v2/bootstrap.min.js",
              mimeType: "application/javascript",
              startTime: 1212.2179999714717,
              resourceType: "Script",
            },
            {
              resourceType: "XHR",
              mimeType: "application/javascript",
              url: "https://ops.prismamediadigital.com/js/advertisement.js",
              finished: true,
              statusCode: 200,
              transferSize: 543,
              startTime: 1227.4129999568686,
              resourceSize: 0,
              endTime: 1403.3849999541417,
            },
            {
              transferSize: 73605,
              finished: true,
              endTime: 1245.8349999506027,
              startTime: 1230.5889999261126,
              resourceType: "Script",
              mimeType: "application/javascript",
              statusCode: 200,
              resourceSize: 249009,
              url:
                "https://try.abtasty.com/b262e5394cfe1864b8f3b8f87e94a46b.js",
            },
            {
              resourceType: "Script",
              statusCode: 200,
              finished: true,
              transferSize: 2092,
              startTime: 1232.003999990411,
              mimeType: "application/javascript",
              endTime: 1296.0839999141172,
              resourceSize: 3512,
              url: "https://static.hotjar.com/c/hotjar-308464.js?sv=5",
            },
            {
              startTime: 1233.8009999366477,
              statusCode: 200,
              resourceType: "Script",
              endTime: 1270.2209999551997,
              finished: true,
              url: "https://config.seedtag.com/loader.js?v=0.47085693136814366",
              transferSize: 11338,
              resourceSize: 35935,
              mimeType: "application/javascript",
            },
            {
              finished: true,
              transferSize: 733,
              endTime: 1422.158999950625,
              mimeType: "application/json",
              statusCode: 200,
              resourceType: "XHR",
              resourceSize: 109,
              url:
                "https://match.adsrvr.org/track/rid?ttd_pid=casale&fmt=json&p=185598",
              startTime: 1260.1509999949485,
            },
            {
              transferSize: 515,
              finished: true,
              mimeType: "text/plain",
              endTime: 1281.9459999445826,
              resourceSize: 87,
              startTime: 1275.9279999881983,
              url:
                "https://api.rlcdn.com/api/identity?pid=2&rt=envelope&cv=CO7UKaxO7UKaxAGABCENA7CgAAAAAH_AAAqIAAANTIIMAAUAgAEMAAQIFCIQgAQhiQAQAABBCIBAJIAEqgAWVwEcoAEACAxAQgQAgBBQgwCAAQAAJKAgBAAwQCAAiAQAAgAGAIAAEAAILACREAAAEQJCAAiACUCAgqAAg5BAgIgCCAFCBAgA-JDAPGQCQAVACOAGWANQAdgBSwDeAJiAYEIgFAAqACsAMsAagA7AClgGsAOqAfIBgQkAEAA4Ac4SAkAAgAFQAVgBEgDLAGoAP0ApYBigDWAG0AN4AfIBFQCYgEygMCAYMFABgDCAI0AokNAMABUAFYAZYA1AB2AEFAKWAawA3gB1QD5AMCDgAQAHCoBIAKgBHADLAGoAOwApYBvAExAMCHQCgAfABWAGoAP0AsQBcwDFAHUAXaA0QeABARUQgEACOAGoAQMAoYBigDqALtAaISgDgAIADaAIkAYQBigDqALtJgAQEVFIAgBQwDaAK2AXaVAAgA-A.YAAAAAAAAAAA&ct=1",
              statusCode: 400,
              resourceType: "XHR",
            },
            {
              url:
                "https://tra.scds.pmdstatic.net/pmc-starter/3.13.0/assets/scripts/pmc_conf_prod_1867a0d575296996a4c3.js",
              statusCode: 200,
              mimeType: "application/javascript",
              resourceSize: 529,
              endTime: 1392.5719999242574,
              resourceType: "Script",
              startTime: 1369.8759999824688,
              finished: true,
              transferSize: 1078,
            },
            {
              startTime: 1386.0319999512285,
              resourceType: "Document",
              mimeType: "text/html",
              transferSize: 2119,
              endTime: 1414.8699999786913,
              url:
                "https://consent.voici.fr/index.html?message_id=358832&consentUUID=5746da9b-d095-4505-8a86-34f5ce260007&requestUUID=b11e276f-5088-4f00-ac61-1bf9bb198b24&preload_message=true",
              statusCode: 200,
              resourceSize: 4154,
              finished: true,
            },
            {
              endTime: 1436.7319999728352,
              resourceType: "Fetch",
              url:
                "https://tra.scds.pmdstatic.net/advertising-core/4.88.0/brandsconfig/voi-config.json",
              resourceSize: 28971,
              transferSize: 4334,
              startTime: 1424.1929999552667,
              mimeType: "application/json",
              statusCode: 200,
              finished: true,
            },
            {
              statusCode: 200,
              finished: true,
              startTime: 1489.4859999185428,
              mimeType: "application/javascript",
              url:
                "https://www.voici.fr/assets/scripts/0-b1b6c70071cee9b37270.js",
              transferSize: 4435,
              resourceType: "XHR",
              endTime: 1510.2440000046045,
              resourceSize: 10086,
            },
            {
              mimeType: "application/javascript",
              resourceType: "XHR",
              url:
                "https://www.voici.fr/assets/scripts/2-344b1faca58e4f2658ac.js",
              startTime: 1491.7169999098405,
              resourceSize: 12862,
              endTime: 1583.1379999872297,
              finished: true,
              transferSize: 3816,
              statusCode: 200,
            },
            {
              finished: true,
              resourceType: "XHR",
              mimeType: "application/javascript",
              startTime: 1493.11099993065,
              transferSize: 8101,
              url:
                "https://www.voici.fr/assets/scripts/home-3761b188331e916f89da.min.js",
              endTime: 1582.0279999170452,
              statusCode: 200,
              resourceSize: 27723,
            },
            {
              resourceType: "XHR",
              url:
                "https://tra.scds.pmdstatic.net/pmc-kit-components/2.19.0/newsletterBundle.js",
              startTime: 1494.0749999368563,
              finished: true,
              statusCode: 200,
              mimeType: "application/javascript",
              transferSize: 52540,
              endTime: 1652.3169999709353,
              resourceSize: 159345,
            },
            {
              statusCode: 200,
              resourceSize: 96633,
              transferSize: 33475,
              startTime: 1494.897999917157,
              url:
                "https://tra.scds.pmdstatic.net/pmc-kit-components/2.19.0/optinBundle.js",
              finished: true,
              mimeType: "application/javascript",
              endTime: 1510.8049999689683,
              resourceType: "XHR",
            },
            {
              startTime: 1495.8559999940917,
              resourceType: "XHR",
              statusCode: 200,
              url:
                "https://tra.scds.pmdstatic.net/pmc-kit-components/2.19.0/insertBundle.js",
              endTime: 1542.9549999535084,
              mimeType: "application/javascript",
              transferSize: 33263,
              resourceSize: 96235,
              finished: true,
            },
            {
              startTime: 1500.876999925822,
              finished: true,
              url: "https://eum-eu-west-1.instana.io/",
              statusCode: -1,
              transferSize: 0,
              resourceSize: 0,
              endTime: 1651.9869999028742,
              resourceType: "Other",
            },
            {
              endTime: 1559.932000003755,
              transferSize: 775,
              resourceType: "Fetch",
              statusCode: 200,
              finished: true,
              resourceSize: 885,
              startTime: 1509.933999972418,
              mimeType: "text/plain",
              url: "https://via.batch.com/manifest.json",
            },
            {
              resourceType: "Script",
              resourceSize: 75515,
              endTime: 1544.8420000029728,
              statusCode: 200,
              startTime: 1516.0409999080002,
              mimeType: "application/javascript",
              finished: true,
              url: "https://config.seedtag.com/st_0.ca40355e0672a61aa830.js",
              transferSize: 24116,
            },
            {
              endTime: 1615.9919999772683,
              mimeType: "application/javascript",
              resourceSize: 356062,
              finished: true,
              startTime: 1516.9819999719039,
              resourceType: "Script",
              statusCode: 200,
              transferSize: 88038,
              url: "https://config.seedtag.com/st_3.cdc7381da0716d2d1a47.js",
            },
            {
              finished: true,
              resourceSize: 519,
              statusCode: 200,
              mimeType: "application/json",
              endTime: 1601.8049999838695,
              transferSize: 890,
              url: "https://dcinfos-cache.abtasty.com/v1/geoip",
              startTime: 1576.7589999595657,
              resourceType: "Fetch",
            },
            {
              mimeType: "application/json",
              transferSize: 472,
              url: "https://dcinfos-cache.abtasty.com/v1/ua-parser",
              statusCode: 200,
              startTime: 1578.7680000066757,
              resourceType: "Fetch",
              endTime: 1584.963999921456,
              finished: true,
              resourceSize: 122,
            },
            {
              statusCode: 200,
              mimeType: "image/gif",
              finished: true,
              transferSize: 519,
              endTime: 1593.1499999715015,
              startTime: 1588.437999947928,
              url: "https://ariane.abtasty.com/",
              resourceSize: 43,
              resourceType: "Fetch",
            },
            {
              resourceSize: 0,
              endTime: 1706.9739999715239,
              resourceType: "XHR",
              startTime: 1651.6849999316037,
              transferSize: 336,
              finished: true,
              statusCode: 200,
              url:
                "https://as-sec.casalemedia.com/headerstats?s=276667&u=https%3A%2F%2Fwww.voici.fr%2F&v=3",
              mimeType: "text/plain",
            },
            {
              url: "https://eum-eu-west-1.instana.io/",
              startTime: 1655.2309999242425,
              statusCode: -1,
              resourceSize: 0,
              resourceType: "Other",
              finished: true,
              endTime: 1798.0579999275506,
              transferSize: 0,
            },
            {
              finished: true,
              transferSize: 72298,
              statusCode: 200,
              resourceType: "Script",
              mimeType: "application/javascript",
              endTime: 1673.9409998990595,
              startTime: 1659.2409999575466,
              url: "https://script.hotjar.com/modules.0734134ae79697970353.js",
              resourceSize: 364215,
            },
            {
              statusCode: 200,
              resourceSize: 0,
              startTime: 1682.2329999413341,
              url:
                "https://adtrack.adleadevent.com/mailNotification.php?st=d7eac3c7-894a-4848-9c8a-2657d0877258&t=site",
              endTime: 1707.4419999262318,
              transferSize: 464,
              mimeType: "application/x-javascript",
              resourceType: "Script",
              finished: true,
            },
            {
              transferSize: 3639,
              endTime: 1711.5149999735877,
              finished: true,
              mimeType: "application/javascript",
              statusCode: 200,
              startTime: 1683.6509999120608,
              resourceSize: 3167,
              resourceType: "Script",
              url: "https://js.agkn.com/prod/v0/tag.js",
            },
            {
              mimeType: "application/javascript",
              resourceType: "Script",
              startTime: 1685.5639999266714,
              url: "https://asset.easydmp.net/js/client.js?t=222607",
              transferSize: 3160,
              statusCode: 200,
              finished: true,
              resourceSize: 6566,
              endTime: 1763.4789999574423,
            },
            {
              resourceSize: 0,
              finished: true,
              resourceType: "Script",
              statusCode: 200,
              startTime: 1702.8729999437928,
              mimeType: "text/plain",
              endTime: 1753.1810000073165,
              url:
                "https://ps.eyeota.net/pixel?pid=1mpn5m0&t=ajs&gdpr=1&gdpr_consent=CO7UKaxO7UKaxAGABCENA7CgAAAAAH_AAAqIAAANTIIMAAUAgAEMAAQIFCIQgAQhiQAQAABBCIBAJIAEqgAWVwEcoAEACAxAQgQAgBBQgwCAAQAAJKAgBAAwQCAAiAQAAgAGAIAAEAAILACREAAAEQJCAAiACUCAgqAAg5BAgIgCCAFCBAgA-JDAPGQCQAVACOAGWANQAdgBSwDeAJiAYEIgFAAqACsAMsAagA7AClgGsAOqAfIBgQkAEAA4Ac4SAkAAgAFQAVgBEgDLAGoAP0ApYBigDWAG0AN4AfIBFQCYgEygMCAYMFABgDCAI0AokNAMABUAFYAZYA1AB2AEFAKWAawA3gB1QD5AMCDgAQAHCoBIAKgBHADLAGoAOwApYBvAExAMCHQCgAfABWAGoAP0AsQBcwDFAHUAXaA0QeABARUQgEACOAGoAQMAoYBigDqALtAaISgDgAIADaAIkAYQBigDqALtJgAQEVFIAgBQwDaAK2AXaVAAgA-A.YAAAAAAAAAAA",
              transferSize: 344,
            },
            {
              resourceSize: 181419,
              transferSize: 60727,
              statusCode: 200,
              finished: true,
              mimeType: "application/javascript",
              resourceType: "Script",
              startTime: 1703.9919999660924,
              url: "https://ats.rlcdn.com/ats.js",
              endTime: 1830.8480000123382,
            },
            {
              finished: true,
              resourceSize: 6746,
              mimeType: "application/x-javascript",
              statusCode: 200,
              endTime: 1725.804999936372,
              url: "https://amplify.outbrain.com/cp/obtp.js",
              startTime: 1705.6490000104532,
              transferSize: 3332,
              resourceType: "Script",
            },
            {
              mimeType: "application/javascript",
              resourceType: "Script",
              url: "https://tag.agrvt.com/tag/v2/wrapper.js",
              transferSize: 3415,
              startTime: 1707.884999923408,
              finished: true,
              statusCode: 200,
              endTime: 1757.9159999731928,
              resourceSize: 12048,
            },
            {
              transferSize: 884,
              startTime: 1708.8469999143854,
              url: "https://www.img-static.com/prisma.gif",
              mimeType: "text/html",
              finished: true,
              endTime: 1917.0039999298751,
              statusCode: 302,
              resourceSize: 0,
            },
            {
              finished: true,
              resourceSize: 0,
              url:
                "https://id5-sync.com/i/164/9.gif?gdpr=1&gdpr_consent=CO7UKaxO7UKaxAGABCENA7CgAAAAAH_AAAqIAAANTIIMAAUAgAEMAAQIFCIQgAQhiQAQAABBCIBAJIAEqgAWVwEcoAEACAxAQgQAgBBQgwCAAQAAJKAgBAAwQCAAiAQAAgAGAIAAEAAILACREAAAEQJCAAiACUCAgqAAg5BAgIgCCAFCBAgA-JDAPGQCQAVACOAGWANQAdgBSwDeAJiAYEIgFAAqACsAMsAagA7AClgGsAOqAfIBgQkAEAA4Ac4SAkAAgAFQAVgBEgDLAGoAP0ApYBigDWAG0AN4AfIBFQCYgEygMCAYMFABgDCAI0AokNAMABUAFYAZYA1AB2AEFAKWAawA3gB1QD5AMCDgAQAHCoBIAKgBHADLAGoAOwApYBvAExAMCHQCgAfABWAGoAP0AsQBcwDFAHUAXaA0QeABARUQgEACOAGoAQMAoYBigDqALtAaISgDgAIADaAIkAYQBigDqALtJgAQEVFIAgBQwDaAK2AXaVAAgA-A.YAAAAAAAAAAA",
              statusCode: 302,
              endTime: 1917.7969999145716,
              transferSize: 1166,
              startTime: 1709.1149999760091,
            },
            {
              startTime: 1777.6880000019446,
              endTime: 1866.5959999198094,
              finished: true,
              resourceSize: 0,
              transferSize: 669,
              resourceType: "Other",
              url: "https://api.prismaconnect.fr/prd/ping",
              mimeType: "application/json",
              statusCode: 200,
            },
            {
              statusCode: 200,
              mimeType: "application/json",
              startTime: 1867.1619999222457,
              resourceSize: 17,
              transferSize: 681,
              resourceType: "Fetch",
              finished: true,
              endTime: 2040.8449999522418,
              url: "https://api.prismaconnect.fr/prd/ping",
            },
            {
              resourceType: "Stylesheet",
              startTime: 1779.077999992296,
              mimeType: "text/css",
              url: "https://consent.voici.fr/Notice.1e3c8.css",
              statusCode: 200,
              transferSize: 4976,
              finished: true,
              resourceSize: 25184,
              endTime: 1803.3959999447688,
            },
            {
              mimeType: "application/json",
              url:
                "https://prd-pub-advis.s3-eu-west-1.amazonaws.com/228216569/Voici/_Homepage/hp.json",
              resourceType: "Fetch",
              endTime: 1901.856999960728,
              resourceSize: 1763,
              startTime: 1785.1709999376908,
              transferSize: 2399,
              finished: true,
              statusCode: 200,
            },
            {
              resourceType: "Document",
              mimeType: "text/html",
              transferSize: 1393,
              resourceSize: 2063,
              statusCode: 200,
              finished: true,
              endTime: 1831.7239999305457,
              url:
                "https://vars.hotjar.com/box-469cf41adb11dc78be68c1ae7f9457a4.html",
              startTime: 1823.0190000031143,
            },
            {
              statusCode: 200,
              finished: true,
              url: "https://r.phywi.org/prisma.gif",
              endTime: 1986.2789999460801,
              mimeType: "image/gif",
              transferSize: 445,
              resourceSize: 43,
              resourceType: "Image",
              startTime: 1917.2729999991134,
            },
            {
              resourceSize: 43,
              finished: true,
              mimeType: "image/gif",
              url:
                "https://id5-sync.com/c/164/0/9/1.gif?gdpr=1&gdpr_consent=CO7UKaxO7UKaxAGABCENA7CgAAAAAH_AAAqIAAANTIIMAAUAgAEMAAQIFCIQgAQhiQAQAABBCIBAJIAEqgAWVwEcoAEACAxAQgQAgBBQgwCAAQAAJKAgBAAwQCAAiAQAAgAGAIAAEAAILACREAAAEQJCAAiACUCAgqAAg5BAgIgCCAFCBAgA-JDAPGQCQAVACOAGWANQAdgBSwDeAJiAYEIgFAAqACsAMsAagA7AClgGsAOqAfIBgQkAEAA4Ac4SAkAAgAFQAVgBEgDLAGoAP0ApYBigDWAG0AN4AfIBFQCYgEygMCAYMFABgDCAI0AokNAMABUAFYAZYA1AB2AEFAKWAawA3gB1QD5AMCDgAQAHCoBIAKgBHADLAGoAOwApYBvAExAMCHQCgAfABWAGoAP0AsQBcwDFAHUAXaA0QeABARUQgEACOAGoAQMAoYBigDqALtAaISgDgAIADaAIkAYQBigDqALtJgAQEVFIAgBQwDaAK2AXaVAAgA-A.YAAAAAAAAAAA",
              endTime: 1968.8959999475628,
              transferSize: 1147,
              resourceType: "Image",
              statusCode: 200,
              startTime: 1917.9849999491125,
            },
            {
              startTime: 1925.4019999643788,
              mimeType: "application/javascript",
              resourceSize: 5153,
              endTime: 1949.5669999159873,
              url: "https://consent.voici.fr/polyfills.ede70.js",
              statusCode: 200,
              resourceType: "Script",
              finished: true,
              transferSize: 2533,
            },
            {
              transferSize: 30998,
              resourceType: "Script",
              resourceSize: 132666,
              startTime: 1925.6089999107644,
              url: "https://consent.voici.fr/Notice.4c5d2.js",
              endTime: 1959.1350000118837,
              mimeType: "application/javascript",
              statusCode: 200,
              finished: true,
            },
            {
              finished: true,
              url: "https://eum-eu-west-1.instana.io/",
              statusCode: -1,
              endTime: 2142.820999957621,
              resourceType: "Other",
              startTime: 2013.200999936089,
              transferSize: 0,
              resourceSize: 0,
            },
            {
              statusCode: 200,
              resourceSize: 96947,
              finished: true,
              endTime: 2066.8479999294505,
              startTime: 2025.0280000036582,
              transferSize: 26016,
              resourceType: "Script",
              mimeType: "application/javascript",
              url: "https://via.batch.com/2.1.0/sdk.min.js",
            },
            {
              url:
                "https://tr.outbrain.com/cachedClickId?marketerId=00c8bc6ea6946b8e7d608e3cf1a6b3e018,0088c68ec792cf8d4ecdd00a532f69c9fc",
              mimeType: "application/javascript",
              finished: true,
              endTime: 2497.408999945037,
              startTime: 2129.7079999931157,
              resourceSize: 35,
              statusCode: 200,
              resourceType: "Script",
              transferSize: 258,
            },
            {
              url: "https://tag.agrvt.com/tag/v2/cmp_list_v2.js",
              statusCode: 200,
              startTime: 2139.3349999561906,
              resourceSize: 6968,
              resourceType: "Script",
              finished: true,
              mimeType: "application/javascript",
              transferSize: 2448,
              endTime: 2188.441999955103,
            },
            {
              url:
                "https://d.agkn.com/iframe/8613/?che=157350735&gdpr=1&gdpr_consent=CO7UKaxO7UKaxAGABCENA7CgAAAAAH_AAAqIAAANTIIMAAUAgAEMAAQIFCIQgAQhiQAQAABBCIBAJIAEqgAWVwEcoAEACAxAQgQAgBBQgwCAAQAAJKAgBAAwQCAAiAQAAgAGAIAAEAAILACREAAAEQJCAAiACUCAgqAAg5BAgIgCCAFCBAgA-JDAPGQCQAVACOAGWANQAdgBSwDeAJiAYEIgFAAqACsAMsAagA7AClgGsAOqAfIBgQkAEAA4Ac4SAkAAgAFQAVgBEgDLAGoAP0ApYBigDWAG0AN4AfIBFQCYgEygMCAYMFABgDCAI0AokNAMABUAFYAZYA1AB2AEFAKWAawA3gB1QD5AMCDgAQAHCoBIAKgBHADLAGoAOwApYBvAExAMCHQCgAfABWAGoAP0AsQBcwDFAHUAXaA0QeABARUQgEACOAGoAQMAoYBigDqALtAaISgDgAIADaAIkAYQBigDqALtJgAQEVFIAgBQwDaAK2AXaVAAgA-A.YAAAAAAAAAAA&ref=&bpid=prisma&c=%7B%22bpid%22%3A%22prisma%22%2C%22loc%22%3A%22https%3A%2F%2Fwww.voici.fr%2F%22%2C%22gdpr%22%3A%221%22%2C%22gdpr_consent%22%3A%22CO7UKaxO7UKaxAGABCENA7CgAAAAAH_AAAqIAAANTIIMAAUAgAEMAAQIFCIQgAQhiQAQAABBCIBAJIAEqgAWVwEcoAEACAxAQgQAgBBQgwCAAQAAJKAgBAAwQCAAiAQAAgAGAIAAEAAILACREAAAEQJCAAiACUCAgqAAg5BAgIgCCAFCBAgA-JDAPGQCQAVACOAGWANQAdgBSwDeAJiAYEIgFAAqACsAMsAagA7AClgGsAOqAfIBgQkAEAA4Ac4SAkAAgAFQAVgBEgDLAGoAP0ApYBigDWAG0AN4AfIBFQCYgEygMCAYMFABgDCAI0AokNAMABUAFYAZYA1AB2AEFAKWAawA3gB1QD5AMCDgAQAHCoBIAKgBHADLAGoAOwApYBvAExAMCHQCgAfABWAGoAP0AsQBcwDFAHUAXaA0QeABARUQgEACOAGoAQMAoYBigDqALtAaISgDgAIADaAIkAYQBigDqALtJgAQEVFIAgBQwDaAK2AXaVAAgA-A.YAAAAAAAAAAA%22%2C%22ref%22%3A%22-1%22%2C%22cid%22%3A%22-1%22%2C%22sid%22%3A%22-1%22%2C%22gen%22%3A%22-1%22%2C%22age%22%3A%22-1%22%2C%22cat%22%3A%22-1%22%2C%22brd%22%3A%22Voici%22%7D",
              transferSize: 1774,
              mimeType: "text/html",
              resourceSize: 1003,
              finished: true,
              endTime: 2236.075999913737,
              startTime: 2216.766999918036,
              statusCode: 200,
              resourceType: "Document",
            },
            {
              endTime: 2250.6659999489784,
              finished: true,
              startTime: 2246.281999978237,
              statusCode: 200,
              resourceType: "Fetch",
              transferSize: 519,
              resourceSize: 43,
              mimeType: "image/gif",
              url: "https://ariane.abtasty.com/",
            },
            {
              mimeType: "application/javascript",
              resourceType: "Script",
              transferSize: 1279,
              url:
                "https://boot.pbstck.com/v1/tag/32cd788f-6318-409c-811b-35e53f72ef9e",
              statusCode: 200,
              finished: true,
              endTime: 2299.415999907069,
              resourceSize: 1194,
              startTime: 2252.019999898039,
            },
            {
              transferSize: 669,
              resourceType: "Other",
              finished: true,
              statusCode: 200,
              endTime: 2501.4369999989867,
              mimeType: "application/json",
              url: "https://api.prismaconnect.fr/prd/preference-center",
              resourceSize: 0,
              startTime: 2467.136999941431,
            },
            {
              finished: true,
              transferSize: 7728,
              mimeType: "application/json",
              url: "https://api.prismaconnect.fr/prd/preference-center",
              resourceSize: 45082,
              resourceType: "Fetch",
              statusCode: 200,
              startTime: 2501.875999965705,
              endTime: 2676.21499998495,
            },
            {
              transferSize: 4236,
              finished: true,
              url: "https://via.batch.com/2.1.0/native.min.js",
              statusCode: 200,
              endTime: 2507.3139999294654,
              startTime: 2487.3789999401197,
              mimeType: "application/javascript",
              resourceSize: 12689,
              resourceType: "Script",
            },
            {
              statusCode: 200,
              finished: true,
              resourceSize: 26,
              transferSize: 509,
              url:
                "https://d2p3zdq8vjvnxd.cloudfront.net/?s_id=2691&m_id=358832&consentUUID=5746da9b-d095-4505-8a86-34f5ce260007&requestUUID=b11e276f-5088-4f00-ac61-1bf9bb198b24",
              mimeType: "image/gif",
              endTime: 2559.705999912694,
              resourceType: "Image",
              startTime: 2515.7219999236986,
            },
            {
              mimeType: "application/javascript",
              resourceType: "XHR",
              startTime: 2550.3319998970255,
              resourceSize: 110610,
              endTime: 2601.483999984339,
              finished: true,
              statusCode: 200,
              url: "https://cdn.pbstck.com/monitoring-7e88f50.js",
              transferSize: 34101,
            },
            {
              resourceSize: 0,
              endTime: 3142.5799999851733,
              statusCode: 302,
              startTime: 2562.679999973625,
              finished: true,
              transferSize: 1265,
              url:
                "https://aa.agkn.com/adscores/g.pixel?sid=9212293468&gdpr=1&gdpr_consent=CO7UKaxO7UKaxAGABCENA7CgAAAAAH_AAAqIAAANTIIMAAUAgAEMAAQIFCIQgAQhiQAQAABBCIBAJIAEqgAWVwEcoAEACAxAQgQAgBBQgwCAAQAAJKAgBAAwQCAAiAQAAgAGAIAAEAAILACREAAAEQJCAAiACUCAgqAAg5BAgIgCCAFCBAgA-JDAPGQCQAVACOAGWANQAdgBSwDeAJiAYEIgFAAqACsAMsAagA7AClgGsAOqAfIBgQkAEAA4Ac4SAkAAgAFQAVgBEgDLAGoAP0ApYBigDWAG0AN4AfIBFQCYgEygMCAYMFABgDCAI0AokNAMABUAFYAZYA1AB2AEFAKWAawA3gB1QD5AMCDgAQAHCoBIAKgBHADLAGoAOwApYBvAExAMCHQCgAfABWAGoAP0AsQBcwDFAHUAXaA0QeABARUQgEACOAGoAQMAoYBigDqALtAaISgDgAIADaAIkAYQBigDqALtJgAQEVFIAgBQwDaAK2AXaVAAgA-A.YAAAAAAAAAAA",
            },
            {
              resourceSize: 0,
              statusCode: 302,
              endTime: 3151.1339999269694,
              startTime: 2563.143999897875,
              transferSize: 754,
              finished: true,
              url: "https://aa.agkn.com/adscores/g.pixel?sid=9212293438",
            },
            {
              mimeType: "image/gif",
              transferSize: 275,
              url:
                "https://tr.outbrain.com/unifiedPixel?marketerId=00c8bc6ea6946b8e7d608e3cf1a6b3e018&obApiVersion=1.1&obtpVersion=1.3.2&name=PAGE_VIEW&dl=https%3A%2F%2Fwww.voici.fr%2F&optOut=false&bust=06764014974407886",
              resourceSize: 43,
              resourceType: "Image",
              statusCode: 200,
              startTime: 2575.5260000005364,
              endTime: 2943.3619999326766,
              finished: true,
            },
            {
              resourceType: "Image",
              statusCode: 200,
              transferSize: 275,
              url:
                "https://tr.outbrain.com/unifiedPixel?marketerId=0088c68ec792cf8d4ecdd00a532f69c9fc&obApiVersion=1.1&obtpVersion=1.3.2&name=PAGE_VIEW&dl=https%3A%2F%2Fwww.voici.fr%2F&optOut=false&bust=01661915373247993",
              resourceSize: 43,
              startTime: 2576.3439999427646,
              finished: true,
              mimeType: "image/gif",
              endTime: 2945.6439999630675,
            },
            {
              transferSize: 409,
              resourceSize: 2,
              resourceType: "Fetch",
              statusCode: 200,
              finished: true,
              endTime: 2730.368999997154,
              mimeType: "application/json",
              startTime: 2695.7239999901503,
              url:
                "https://ws.batch.com/web/2.1.0/ev/293C338F5F5D4AA59BA4448073729262",
            },
            {
              endTime: 2695.2079999027774,
              finished: true,
              mimeType: "text/html",
              startTime: 2657.0939999073744,
              transferSize: 368,
              resourceType: "Other",
              statusCode: 200,
              url:
                "https://ws.batch.com/web/2.1.0/ev/293C338F5F5D4AA59BA4448073729262",
              resourceSize: 0,
            },
            {
              finished: true,
              mimeType: "application/javascript",
              resourceSize: 1101,
              startTime: 2683.1909999018535,
              url:
                "https://tra.scds.pmdstatic.net/pmc-kit-components/2.19.0/brandConfig_15_094ea73cd62dcdb3980e.js",
              endTime: 2694.45499998983,
              statusCode: 200,
              resourceType: "Script",
              transferSize: 1149,
            },
            {
              resourceType: "Image",
              mimeType: "image/gif",
              transferSize: 360,
              endTime: 3306.6789999138564,
              resourceSize: 70,
              url:
                "https://match.adsrvr.org/track/cmf/generic?ttd_pid=adadvisor&ttd_tpi=1&gdpr=1&gdpr_consent=CO7UKaxO7UKaxAGABCENA7CgAAAAAH_AAAqIAAANTIIMAAUAgAEMAAQIFCIQgAQhiQAQAABBCIBAJIAEqgAWVwEcoAEACAxAQgQAgBBQgwCAAQAAJKAgBAAwQCAAiAQAAgAGAIAAEAAILACREAAAEQJCAAiACUCAgqAAg5BAgIgCCAFCBAgA-JDAPGQCQAVACOAGWANQAdgBSwDeAJiAYEIgFAAqACsAMsAagA7AClgGsAOqAfIBgQkAEAA4Ac4SAkAAgAFQAVgBEgDLAGoAP0ApYBigDWAG0AN4AfIBFQCYgEygMCAYMFABgDCAI0AokNAMABUAFYAZYA1AB2AEFAKWAawA3gB1QD5AMCDgAQAHCoBIAKgBHADLAGoAOwApYBvAExAMCHQCgAfABWAGoAP0AsQBcwDFAHUAXaA0QeABARUQgEACOAGoAQMAoYBigDqALtAaISgDgAIADaAIkAYQBigDqALtJgAQEVFIAgBQwDaAK2AXaVAAgA-A.YAAAAAAAAAAA",
              startTime: 3142.900999984704,
              statusCode: 200,
              finished: true,
            },
            {
              url:
                "https://pixel.mathtag.com/sync/img?redir=https://aa.agkn.com/adscores/g.pixel%3Fsid%3D9312292258%26mt%3D%5BMM_UUID%5D",
              mimeType: "image/gif",
              endTime: 3204.732999904081,
              transferSize: 558,
              startTime: 3151.505999965593,
              statusCode: 302,
              finished: true,
              resourceSize: 0,
            },
            {
              endTime: 3668.4670000104234,
              startTime: 3205.0670000026003,
              statusCode: 302,
              resourceSize: 0,
              url:
                "https://aa.agkn.com/adscores/g.pixel?sid=9312292258&mt=4bbb5f88-6181-4500-b1c9-fe6cf3c94999",
              finished: true,
              transferSize: 568,
            },
            {
              url:
                "https://pixel.mathtag.com/sync/img/?mt_exid=10009&mt_exuid=267220603575003128509",
              transferSize: 360,
              statusCode: 200,
              finished: true,
              mimeType: "image/gif",
              resourceSize: 43,
              endTime: 3714.4529999932274,
              startTime: 3668.730999925174,
              resourceType: "Image",
            },
            {
              resourceType: "Other",
              statusCode: -1,
              transferSize: 0,
              finished: true,
              endTime: 4022.42799999658,
              startTime: 4020.7330000121146,
              resourceSize: 0,
              url: "https://eum-eu-west-1.instana.io/",
            },
          ],
          headings: [
            {
              key: "url",
              text: "URL",
              itemType: "url",
            },
            {
              key: "startTime",
              itemType: "ms",
              text: "Start Time",
              granularity: 1,
            },
            {
              granularity: 1,
              text: "End Time",
              itemType: "ms",
              key: "endTime",
            },
            {
              granularity: 1,
              displayUnit: "kb",
              itemType: "bytes",
              key: "transferSize",
              text: "Transfer Size",
            },
            {
              granularity: 1,
              displayUnit: "kb",
              itemType: "bytes",
              text: "Resource Size",
              key: "resourceSize",
            },
            {
              key: "statusCode",
              itemType: "text",
              text: "Status Code",
            },
            {
              key: "mimeType",
              text: "MIME Type",
              itemType: "text",
            },
            {
              key: "resourceType",
              itemType: "text",
              text: "Resource Type",
            },
          ],
          type: "table",
        },
      },
      "unminified-css": {
        id: "unminified-css",
        title: "Minify CSS",
        description:
          "Minifying CSS files can reduce network payload sizes. [Learn more](https://web.dev/unminified-css/).",
        score: 1,
        scoreDisplayMode: "numeric",
        details: {
          items: [],
          type: "opportunity",
          overallSavingsMs: 0,
          headings: [],
          overallSavingsBytes: 0,
        },
        numericValue: 0,
      },
      "unused-javascript": {
        id: "unused-javascript",
        title: "Remove unused JavaScript",
        description:
          "Remove unused JavaScript to reduce bytes consumed by network activity. [Learn more](https://web.dev/unused-javascript/).",
        score: 0.39,
        scoreDisplayMode: "numeric",
        displayValue: "Potential savings of 333 KiB",
        details: {
          headings: [
            {
              subItemsHeading: {
                key: "source",
                valueType: "code",
              },
              valueType: "url",
              key: "url",
              label: "URL",
            },
            {
              subItemsHeading: {
                key: "sourceBytes",
              },
              key: "totalBytes",
              valueType: "bytes",
              label: "Transfer Size",
            },
            {
              subItemsHeading: {
                key: "sourceWastedBytes",
              },
              valueType: "bytes",
              key: "wastedBytes",
              label: "Potential Savings",
            },
          ],
          overallSavingsMs: 1650,
          type: "opportunity",
          overallSavingsBytes: 341217,
          items: [
            {
              totalBytes: 99565,
              wastedBytes: 82757,
              url:
                "https://securepubads.g.doubleclick.net/gpt/pubads_impl_2020101201.js",
              wastedPercent: 83.1182513456857,
            },
            {
              wastedPercent: 72.64359546757795,
              wastedBytes: 66584,
              url:
                "https://tra.scds.pmdstatic.net/advertising-core/4.88.0/prebid-plugin.js",
              totalBytes: 91658,
            },
            {
              wastedBytes: 64613,
              wastedPercent: 73.39171267925249,
              totalBytes: 88038,
              url: "https://config.seedtag.com/st_3.cdc7381da0716d2d1a47.js",
            },
            {
              wastedBytes: 36691,
              wastedPercent: 60.41890647656538,
              url: "https://ats.rlcdn.com/ats.js",
              totalBytes: 60727,
            },
            {
              wastedBytes: 34791,
              url: "https://script.hotjar.com/modules.0734134ae79697970353.js",
              totalBytes: 72298,
              wastedPercent: 48.1219909967271,
            },
            {
              wastedPercent: 47.05083874491472,
              url:
                "https://try.abtasty.com/b262e5394cfe1864b8f3b8f87e94a46b.js",
              totalBytes: 73605,
              wastedBytes: 34632,
            },
            {
              subItems: {
                type: "subitems",
                items: [
                  {
                    sourceBytes: 12151,
                    source: "…./src/apstag.ts",
                    sourceWastedBytes: 10183,
                  },
                  {
                    sourceWastedBytes: 2271,
                    source: "(unmapped)",
                    sourceBytes: 4264,
                  },
                  {
                    source: "…./src/modules/Bidding.ts",
                    sourceWastedBytes: 1988,
                    sourceBytes: 2048,
                  },
                  {
                    sourceBytes: 1423,
                    source: "…./src/modules/DebugTools.ts",
                    sourceWastedBytes: 1181,
                  },
                  {
                    source: "…./src/modules/DisplayAdServer/DefaultAdServer.ts",
                    sourceWastedBytes: 767,
                    sourceBytes: 954,
                  },
                ],
              },
              totalBytes: 29052,
              url: "https://c.amazon-adsystem.com/aax2/apstag.js",
              wastedBytes: 21149,
              wastedPercent: 72.79661779256995,
            },
          ],
        },
        numericValue: 1650,
      },
      "estimated-input-latency": {
        id: "estimated-input-latency",
        title: "Estimated Input Latency",
        description:
          "Estimated Input Latency is an estimate of how long your app takes to respond to user input, in milliseconds, during the busiest 5s window of page load. If your latency is higher than 50 ms, users may perceive your app as laggy. [Learn more](https://web.dev/estimated-input-latency/).",
        score: 0.08,
        scoreDisplayMode: "numeric",
        displayValue: "180 ms",
        numericValue: 180.4,
      },
      "efficient-animated-content": {
        id: "efficient-animated-content",
        title: "Use video formats for animated content",
        description:
          "Large GIFs are inefficient for delivering animated content. Consider using MPEG4/WebM videos for animations and PNG/WebP for static images instead of GIF to save network bytes. [Learn more](https://web.dev/efficient-animated-content/)",
        score: 1,
        scoreDisplayMode: "numeric",
        details: {
          overallSavingsBytes: 0,
          items: [],
          type: "opportunity",
          headings: [],
          overallSavingsMs: 0,
        },
        numericValue: 0,
      },
      "render-blocking-resources": {
        id: "render-blocking-resources",
        title: "Eliminate render-blocking resources",
        description:
          "Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn more](https://web.dev/render-blocking-resources/).",
        score: 1,
        scoreDisplayMode: "numeric",
        displayValue: "Potential savings of 0 ms",
        details: {
          headings: [
            {
              valueType: "url",
              key: "url",
              label: "URL",
            },
            {
              valueType: "bytes",
              label: "Transfer Size",
              key: "totalBytes",
            },
            {
              label: "Potential Savings",
              key: "wastedMs",
              valueType: "timespanMs",
            },
          ],
          overallSavingsMs: 0,
          type: "opportunity",
          items: [
            {
              totalBytes: 10731,
              wastedMs: 330,
              url:
                "https://www.voici.fr/assets/styles/home-3761b188331e916f89da.min.css",
            },
          ],
        },
        numericValue: 0,
      },
      "bootup-time": {
        id: "bootup-time",
        title: "Reduce JavaScript execution time",
        description:
          "Consider reducing the time spent parsing, compiling, and executing JS. You may find delivering smaller JS payloads helps with this. [Learn more](https://web.dev/bootup-time/).",
        score: 0.28,
        scoreDisplayMode: "numeric",
        displayValue: "5.5 s",
        details: {
          type: "table",
          headings: [
            {
              text: "URL",
              key: "url",
              itemType: "url",
            },
            {
              itemType: "ms",
              key: "total",
              granularity: 1,
              text: "Total CPU Time",
            },
            {
              granularity: 1,
              text: "Script Evaluation",
              itemType: "ms",
              key: "scripting",
            },
            {
              itemType: "ms",
              text: "Script Parse",
              granularity: 1,
              key: "scriptParseCompile",
            },
          ],
          items: [
            {
              scriptParseCompile: 235.04400000000007,
              url:
                "https://tra.scds.pmdstatic.net/pmd-browsertools/1.7.48/browsertools.js",
              total: 1742.6839999999982,
              scripting: 1360.843999999998,
            },
            {
              scriptParseCompile: 9.78,
              scripting: 89.052,
              url: "https://www.voici.fr/",
              total: 1526.3959999999997,
            },
            {
              scriptParseCompile: 0.6160000000000001,
              url: "Unattributable",
              total: 1317.6640000000004,
              scripting: 562.4159999999993,
            },
            {
              scriptParseCompile: 18.032,
              url:
                "https://try.abtasty.com/b262e5394cfe1864b8f3b8f87e94a46b.js",
              total: 563.9680000000001,
              scripting: 517.672,
            },
            {
              scriptParseCompile: 20.988,
              scripting: 393.3280000000001,
              url: "https://config.seedtag.com/st_3.cdc7381da0716d2d1a47.js",
              total: 456.2480000000001,
            },
            {
              scriptParseCompile: 11.447999999999999,
              scripting: 377.69600000000037,
              url:
                "https://gdpr-tcfv2.sp-prod.net/wrapperMessagingWithoutDetection.js",
              total: 407.0080000000004,
            },
            {
              url: "https://eum.instana.io/eum.min.js",
              scriptParseCompile: 9.072,
              scripting: 146.07600000000014,
              total: 264.59200000000004,
            },
            {
              url:
                "https://www.googletagmanager.com/gtm.js?id=GTM-NK7QRQ4&l=dataLayer",
              scripting: 208.78800000000007,
              scriptParseCompile: 20.792,
              total: 239.52000000000007,
            },
            {
              scriptParseCompile: 9.536,
              url: "https://consent.voici.fr/Notice.4c5d2.js",
              scripting: 146.14400000000006,
              total: 226.00800000000007,
            },
            {
              total: 215.92,
              url:
                "https://boot.pbstck.com/v1/tag/32cd788f-6318-409c-811b-35e53f72ef9e",
              scriptParseCompile: 34.248000000000005,
              scripting: 107.884,
            },
            {
              url: "https://script.hotjar.com/modules.0734134ae79697970353.js",
              scripting: 147.792,
              scriptParseCompile: 22.936,
              total: 188.904,
            },
            {
              total: 174.65600000000003,
              scripting: 142.11600000000004,
              url:
                "https://tra.scds.pmdstatic.net/advertising-core/4.88.0/prebid-plugin.js",
              scriptParseCompile: 19.516000000000002,
            },
            {
              total: 146.836,
              url: "https://ats.rlcdn.com/ats.js",
              scriptParseCompile: 14.36,
              scripting: 121.96000000000001,
            },
            {
              scriptParseCompile: 18.576000000000004,
              total: 134.57600000000002,
              scripting: 105.61200000000004,
              url: "https://www.googletagmanager.com/gtm.js?id=GTM-KLGXH8",
            },
            {
              scriptParseCompile: 7.248,
              url: "https://www.google-analytics.com/analytics.js",
              scripting: 115.55200000000006,
              total: 134.05200000000008,
            },
            {
              total: 127.86400000000008,
              url: "https://via.batch.com/2.1.0/sdk.min.js",
              scripting: 111.03200000000008,
              scriptParseCompile: 6.8919999999999995,
            },
            {
              scripting: 94.77199999999999,
              total: 107.012,
              url: "https://ssl.google-analytics.com/ga.js",
              scriptParseCompile: 6.108,
            },
            {
              scriptParseCompile: 25.792,
              scripting: 64.564,
              total: 95.508,
              url:
                "https://securepubads.g.doubleclick.net/gpt/pubads_impl_2020101201.js",
            },
            {
              url:
                "https://consent.voici.fr/index.html?message_id=358832&consentUUID=5746da9b-d095-4505-8a86-34f5ce260007&requestUUID=b11e276f-5088-4f00-ac61-1bf9bb198b24&preload_message=true",
              scripting: 7.111999999999996,
              total: 80.20799999999998,
              scriptParseCompile: 5.12,
            },
            {
              scriptParseCompile: 6.335999999999999,
              scripting: 55.5,
              total: 64.776,
              url: "https://securepubads.g.doubleclick.net/tag/js/gpt.js",
            },
            {
              url: "https://c.amazon-adsystem.com/aax2/apstag.js",
              total: 64.18,
              scriptParseCompile: 8.18,
              scripting: 50.992,
            },
            {
              scripting: 60.879999999999974,
              url: "webpack://PmcAPIClient/./index.js_+_10_modules?",
              total: 61.02799999999998,
              scriptParseCompile: 0,
            },
          ],
          summary: {
            wastedMs: 5498.403999999997,
          },
        },
        numericValue: 5498.403999999997,
      },
      "speed-index": {
        id: "speed-index",
        title: "Speed Index",
        description:
          "Speed Index shows how quickly the contents of a page are visibly populated. [Learn more](https://web.dev/speed-index/).",
        score: 0.35,
        scoreDisplayMode: "numeric",
        displayValue: "6.8 s",
        numericValue: 6793.796562455924,
      },
      "layout-shift-elements": {
        id: "layout-shift-elements",
        title: "Avoid large layout shifts",
        description:
          "These DOM elements contribute most to the CLS of the page.",
        score: null,
        scoreDisplayMode: "informative",
        displayValue: "5 elements found",
        details: {
          type: "table",
          headings: [
            {
              itemType: "node",
              text: "Element",
              key: "node",
            },
            {
              text: "CLS Contribution",
              granularity: 0.001,
              itemType: "numeric",
              key: "score",
            },
          ],
          items: [
            {
              node: {
                nodeLabel:
                  "Respect de votre vie privée\n\nEn poursuivant votre navigation (notamment via une…",
                selector: "body > div.message-container > div.message",
                snippet:
                  '<div class="message type-bottom" style="padding: 4px 0px 5px; border-width: 0px; border-color: rgb(0, 0, 0); borde…">',
                type: "node",
                path: "1,HTML,1,BODY,0,DIV,2,DIV",
                boundingRect: {
                  width: 360,
                  right: 360,
                  top: 0,
                  bottom: 249,
                  left: 0,
                  height: 249,
                },
              },
              score: 0.6916666666666667,
            },
            {
              score: 0.0023596964809676616,
              node: {
                boundingRect: {
                  top: 525,
                  right: 350,
                  bottom: 692,
                  left: 10,
                  height: 167,
                  width: 340,
                },
                nodeLabel:
                  "Koh-Lanta\n\nLifestyle\n\nVoici Sexy\n\nTélé\n\nLa Scène Voici",
                path: "1,HTML,1,BODY,4,DIV,1,DIV,1,DIV,3,SECTION",
                snippet: '<section class="storiesList">',
                type: "node",
                selector:
                  "div#corps > div.site_content > div.container > section.storiesList",
              },
            },
            {
              score: 0.0019512799971953326,
              node: {
                path: "1,HTML,1,BODY,3,HEADER,0,DIV,0,DIV,1,DIV,0,DIV",
                boundingRect: {
                  bottom: 58,
                  height: 58,
                  right: 360,
                  left: 158,
                  width: 202,
                  top: 0,
                },
                snippet: '<div class="site-nav-right">',
                type: "node",
                selector:
                  "div.site-header-top-container > div.site-header-inner > div.nav-menu > div.site-nav-right",
                nodeLabel:
                  "CHOISIR MON ACTU\n \n\nSoyez alerté en avant-première des actus de vos stars préfé…",
              },
            },
            {
              score: 0.0006850731718938372,
              node: {
                type: "node",
                selector:
                  "div#corps > div.site_content > div.container > h2.heading-section",
                snippet: '<h2 class="heading-section ">',
                boundingRect: {
                  top: 495,
                  left: 10,
                  width: 340,
                  right: 350,
                  bottom: 525,
                  height: 30,
                },
                path: "1,HTML,1,BODY,4,DIV,1,DIV,1,DIV,2,H2",
                nodeLabel: "Les storiesde Voici",
              },
            },
            {
              node: {
                nodeLabel: " 14/10/2020 à 12h08",
                path: "1,HTML,1,BODY,4,DIV,1,DIV,1,DIV,1,DIV,1,DIV,0,DIV,1,P",
                boundingRect: {
                  bottom: 308,
                  left: 182,
                  height: 18,
                  right: 335,
                  width: 153,
                  top: 290,
                },
                snippet: '<p class="scoop-item-date __ft-item-date">',
                selector:
                  "div.scoop-item > div.scoop-item-text > div.scoop-item-headContainer > p.scoop-item-date",
                type: "node",
              },
              score: 0.00016270487832478636,
            },
          ],
        },
      },
      "total-byte-weight": {
        id: "total-byte-weight",
        title: "Avoids enormous network payloads",
        description:
          "Large network payloads cost users real money and are highly correlated with long load times. [Learn more](https://web.dev/total-byte-weight/).",
        score: 0.99,
        scoreDisplayMode: "numeric",
        displayValue: "Total size was 1,775 KiB",
        details: {
          items: [
            {
              url:
                "https://securepubads.g.doubleclick.net/gpt/pubads_impl_2020101201.js",
              totalBytes: 99565,
            },
            {
              totalBytes: 91658,
              url:
                "https://tra.scds.pmdstatic.net/advertising-core/4.88.0/prebid-plugin.js",
            },
            {
              url: "https://config.seedtag.com/st_3.cdc7381da0716d2d1a47.js",
              totalBytes: 88038,
            },
            {
              totalBytes: 73605,
              url:
                "https://try.abtasty.com/b262e5394cfe1864b8f3b8f87e94a46b.js",
            },
            {
              totalBytes: 72298,
              url: "https://script.hotjar.com/modules.0734134ae79697970353.js",
            },
            {
              totalBytes: 69746,
              url:
                "https://tra.scds.pmdstatic.net/pmc-starter/3.13.0/assets/scripts/index.js",
            },
            {
              totalBytes: 60727,
              url: "https://ats.rlcdn.com/ats.js",
            },
            {
              totalBytes: 60398,
              url:
                "https://voi.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fvoi.2F2020.2F10.2F14.2Fdf189389-4105-41f6-b04c-45e676d75b80.2Ejpeg/920x516/quality/80/info-voici-laura-smet-maman-decouvrez-la-signification-du-prenom-de-son-fils.jpg",
            },
            {
              totalBytes: 60361,
              url:
                "https://voi.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fvoi.2F2020.2F10.2F15.2F4fb40f2b-e193-41b4-8c06-21def42124df.2Ejpeg/748x420/quality/80/focus-point/508%2C509/le-meilleur-patissier-les-telespectateurs-du-nord-tres-agaces-par-les-cliches-de-l-emission.jpg",
            },
            {
              url: "https://www.voici.fr/",
              totalBytes: 53101,
            },
          ],
          headings: [
            {
              itemType: "url",
              text: "URL",
              key: "url",
            },
            {
              itemType: "bytes",
              key: "totalBytes",
              text: "Transfer Size",
            },
          ],
          type: "table",
        },
        numericValue: 1818026,
      },
      "main-thread-tasks": {
        id: "main-thread-tasks",
        title: "Tasks",
        description:
          "Lists the toplevel main thread tasks that executed during page load.",
        score: null,
        scoreDisplayMode: "informative",
        details: {
          type: "table",
          headings: [
            {
              text: "Start Time",
              granularity: 1,
              itemType: "ms",
              key: "startTime",
            },
            {
              text: "End Time",
              key: "duration",
              granularity: 1,
              itemType: "ms",
            },
          ],
          items: [
            {
              startTime: 189.959,
              duration: 11.019,
            },
            {
              duration: 26.957,
              startTime: 250.683,
            },
            {
              duration: 148.252,
              startTime: 277.661,
            },
            {
              duration: 7.818,
              startTime: 443.442,
            },
            {
              startTime: 454.749,
              duration: 107.48,
            },
            {
              startTime: 562.421,
              duration: 11.915,
            },
            {
              startTime: 580.795,
              duration: 26.515,
            },
            {
              duration: 5.239,
              startTime: 609.919,
            },
            {
              startTime: 615.473,
              duration: 7.618,
            },
            {
              startTime: 642.112,
              duration: 5.049,
            },
            {
              startTime: 662.49,
              duration: 5.814,
            },
            {
              duration: 25.408,
              startTime: 671.997,
            },
            {
              startTime: 728.442,
              duration: 11.009,
            },
            {
              startTime: 929.454,
              duration: 14.06,
            },
            {
              duration: 40.412,
              startTime: 979.52,
            },
            {
              startTime: 1103.797,
              duration: 61.623,
            },
            {
              startTime: 1172.871,
              duration: 11.729,
            },
            {
              duration: 16.246,
              startTime: 1184.624,
            },
            {
              startTime: 1202.481,
              duration: 13.754,
            },
            {
              startTime: 1216.385,
              duration: 8.602,
            },
            {
              duration: 12.408,
              startTime: 1230.371,
            },
            {
              duration: 6.913,
              startTime: 1242.805,
            },
            {
              startTime: 1257.683,
              duration: 6.332,
            },
            {
              duration: 46.744,
              startTime: 1265.278,
            },
            {
              duration: 86.115,
              startTime: 1317.403,
            },
            {
              duration: 43.209,
              startTime: 1411.675,
            },
            {
              duration: 23.877,
              startTime: 1458.052,
            },
            {
              duration: 7.105,
              startTime: 1486.124,
            },
            {
              startTime: 1496.543,
              duration: 30.147,
            },
            {
              duration: 5.139,
              startTime: 1526.753,
            },
            {
              startTime: 1531.909,
              duration: 6.014,
            },
            {
              startTime: 1540.144,
              duration: 6.849,
            },
            {
              startTime: 1547.207,
              duration: 126.104,
            },
            {
              duration: 49.507,
              startTime: 1689.832,
            },
            {
              startTime: 1747.868,
              duration: 6.8,
            },
            {
              duration: 42.519,
              startTime: 1754.725,
            },
            {
              duration: 6.039,
              startTime: 1802.236,
            },
            {
              startTime: 1809.13,
              duration: 17.385,
            },
            {
              duration: 13.613,
              startTime: 1828.672,
            },
            {
              startTime: 1848.809,
              duration: 59.57,
            },
            {
              duration: 36.897,
              startTime: 1908.577,
            },
            {
              duration: 5.118,
              startTime: 1949.474,
            },
            {
              startTime: 1957.209,
              duration: 69.028,
            },
            {
              startTime: 2030.811,
              duration: 8.784,
            },
            {
              duration: 5.136,
              startTime: 2039.612,
            },
            {
              startTime: 2045.891,
              duration: 7.183,
            },
            {
              startTime: 2055.18,
              duration: 53.389,
            },
            {
              duration: 41.609,
              startTime: 2110.603,
            },
            {
              startTime: 2160.47,
              duration: 7.325,
            },
            {
              startTime: 2167.81,
              duration: 5.122,
            },
            {
              startTime: 2176.961,
              duration: 22.193,
            },
            {
              startTime: 2200.081,
              duration: 7.495,
            },
            {
              startTime: 2213.836,
              duration: 24.12,
            },
            {
              startTime: 2239.413,
              duration: 5.702,
            },
            {
              duration: 26.582,
              startTime: 2247.611,
            },
            {
              duration: 133.822,
              startTime: 2277.084,
            },
            {
              startTime: 2411.034,
              duration: 40.56,
            },
            {
              startTime: 2454.122,
              duration: 10.937,
            },
            {
              startTime: 2466.33,
              duration: 7.103,
            },
            {
              duration: 8.208,
              startTime: 2477.676,
            },
            {
              startTime: 2490.297,
              duration: 15.534,
            },
            {
              startTime: 2506.181,
              duration: 13.338,
            },
            {
              startTime: 2523.594,
              duration: 22.137,
            },
            {
              duration: 7.64,
              startTime: 2545.859,
            },
            {
              startTime: 2564.641,
              duration: 15.864,
            },
            {
              duration: 10.11,
              startTime: 2581.459,
            },
            {
              startTime: 2608.875,
              duration: 5.125,
            },
            {
              startTime: 2614.202,
              duration: 6.261,
            },
            {
              duration: 36.933,
              startTime: 2634.556,
            },
            {
              duration: 7.087,
              startTime: 2671.522,
            },
            {
              startTime: 2752.417,
              duration: 5.005,
            },
            {
              duration: 6.898,
              startTime: 3766.756,
            },
          ],
        },
      },
      "unused-css-rules": {
        id: "unused-css-rules",
        title: "Remove unused CSS",
        description:
          "Remove dead rules from stylesheets and defer the loading of CSS not used for above-the-fold content to reduce unnecessary bytes consumed by network activity. [Learn more](https://web.dev/unused-css-rules/).",
        score: 1,
        scoreDisplayMode: "numeric",
        details: {
          type: "opportunity",
          headings: [],
          overallSavingsMs: 0,
          overallSavingsBytes: 0,
          items: [],
        },
        numericValue: 0,
      },
      "uses-text-compression": {
        id: "uses-text-compression",
        title: "Enable text compression",
        description:
          "Text-based resources should be served with compression (gzip, deflate or brotli) to minimize total network bytes. [Learn more](https://web.dev/uses-text-compression/).",
        score: 1,
        scoreDisplayMode: "numeric",
        displayValue: "Potential savings of 3 KiB",
        details: {
          overallSavingsMs: 0,
          overallSavingsBytes: 3263,
          items: [
            {
              totalBytes: 3167,
              wastedBytes: 1795,
              url: "https://js.agkn.com/prod/v0/tag.js",
            },
            {
              wastedBytes: 1468,
              totalBytes: 1763,
              url:
                "https://prd-pub-advis.s3-eu-west-1.amazonaws.com/228216569/Voici/_Homepage/hp.json",
            },
          ],
          headings: [
            {
              key: "url",
              label: "URL",
              valueType: "url",
            },
            {
              valueType: "bytes",
              key: "totalBytes",
              label: "Transfer Size",
            },
            {
              label: "Potential Savings",
              valueType: "bytes",
              key: "wastedBytes",
            },
          ],
          type: "opportunity",
        },
        numericValue: 0,
      },
      "critical-request-chains": {
        id: "critical-request-chains",
        title: "Avoid chaining critical requests",
        description:
          "The Critical Request Chains below show you what resources are loaded with a high priority. Consider reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load. [Learn more](https://web.dev/critical-request-chains/).",
        score: null,
        scoreDisplayMode: "informative",
        displayValue: "1 chain found",
        details: {
          type: "criticalrequestchain",
          chains: {
            A8016F0EB8641E85B6688E9FDD48DAD5: {
              request: {
                url: "https://www.voici.fr/",
                responseReceivedTime: 1045231.84545,
                startTime: 1045231.690472,
                endTime: 1045231.845453,
                transferSize: 53101,
              },
              children: {
                23.7: {
                  request: {
                    endTime: 1045231.90567,
                    startTime: 1045231.867458,
                    url:
                      "https://www.voici.fr/assets/styles/home-3761b188331e916f89da.min.css",
                    responseReceivedTime: 1045231.905668,
                    transferSize: 10731,
                  },
                },
              },
            },
          },
          longestChain: {
            length: 2,
            duration: 215.1979999616742,
            transferSize: 10731,
          },
        },
      },
      "mainthread-work-breakdown": {
        id: "mainthread-work-breakdown",
        title: "Minimize main-thread work",
        description:
          "Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this. [Learn more](https://web.dev/mainthread-work-breakdown/)",
        score: 0.07,
        scoreDisplayMode: "numeric",
        displayValue: "8.8 s",
        details: {
          type: "table",
          items: [
            {
              duration: 5239.884000000001,
              group: "scriptEvaluation",
              groupLabel: "Script Evaluation",
            },
            {
              groupLabel: "Other",
              duration: 1160.4799999999868,
              group: "other",
            },
            {
              groupLabel: "Style & Layout",
              group: "styleLayout",
              duration: 1127.4080000000006,
            },
            {
              duration: 569.6640000000002,
              groupLabel: "Script Parsing & Compilation",
              group: "scriptParseCompile",
            },
            {
              duration: 381.972,
              group: "paintCompositeRender",
              groupLabel: "Rendering",
            },
            {
              duration: 165.40800000000002,
              groupLabel: "Parse HTML & CSS",
              group: "parseHTML",
            },
            {
              duration: 130.30400000000003,
              group: "garbageCollection",
              groupLabel: "Garbage Collection",
            },
          ],
          headings: [
            {
              text: "Category",
              itemType: "text",
              key: "groupLabel",
            },
            {
              key: "duration",
              text: "Time Spent",
              granularity: 1,
              itemType: "ms",
            },
          ],
        },
        numericValue: 8775.119999999988,
      },
      "largest-contentful-paint": {
        id: "largest-contentful-paint",
        title: "Largest Contentful Paint",
        description:
          "Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn More](https://web.dev/lighthouse-largest-contentful-paint/)",
        score: 0.17,
        scoreDisplayMode: "numeric",
        displayValue: "5.7 s",
        numericValue: 5715,
      },
      metrics: {
        id: "metrics",
        title: "Metrics",
        description: "Collects all available metrics.",
        score: null,
        scoreDisplayMode: "informative",
        details: {
          type: "debugdata",
          items: [
            {
              totalBlockingTime: 2246,
              largestContentfulPaint: 5715,
              observedTraceEnd: 4010,
              observedFirstContentfulPaint: 413,
              cumulativeLayoutShift: 0.005296888563368055,
              estimatedInputLatency: 180,
              observedFirstPaint: 413,
              observedLoad: 699,
              observedFirstContentfulPaintTs: 1045232101861,
              observedFirstVisualChangeTs: 1045232105024,
              observedFirstVisualChange: 416,
              speedIndex: 6794,
              firstCPUIdle: 14453,
              observedNavigationStart: 0,
              firstMeaningfulPaint: 2157,
              observedSpeedIndex: 1142,
              observedLastVisualChangeTs: 1045235438024,
              observedSpeedIndexTs: 1045232831181,
              observedTraceEndTs: 1045235699210,
              maxPotentialFID: 504,
              observedCumulativeLayoutShift: 0.005296888563368055,
              interactive: 16196,
              observedTimeOriginTs: 1045231689024,
              observedDomContentLoadedTs: 1045232092885,
              observedLastVisualChange: 3749,
              observedNavigationStartTs: 1045231689024,
              observedLargestContentfulPaint: 642,
              observedLoadTs: 1045232387604,
              observedLargestContentfulPaintTs: 1045232330692,
              observedFirstPaintTs: 1045232101861,
              firstContentfulPaint: 2157,
              observedFirstMeaningfulPaintTs: 1045232101861,
              observedDomContentLoaded: 404,
              observedFirstMeaningfulPaint: 413,
              observedTimeOrigin: 0,
            },
            {
              lcpInvalidated: false,
            },
          ],
        },
        numericValue: 16196,
      },
      "user-timings": {
        id: "user-timings",
        title: "User Timing marks and measures",
        description:
          "Consider instrumenting your app with the User Timing API to measure your app's real-world performance during key user experiences. [Learn more](https://web.dev/user-timings/).",
        score: null,
        scoreDisplayMode: "informative",
        displayValue: "34 user timings",
        details: {
          items: [
            {
              name: "lteu",
              startTime: 1223.415,
              duration: 0.12,
              timingType: "Measure",
            },
            {
              timingType: "Measure",
              startTime: 1223.715,
              name: "ltpq",
              duration: 0.055,
            },
            {
              duration: 504.886,
              startTime: 1576.069,
              name: "geolocTiming",
              timingType: "Measure",
            },
            {
              startTime: 1578.235,
              name: "userAgentTiming",
              duration: 502.37,
              timingType: "Measure",
            },
            {
              startTime: 1599.139,
              timingType: "Measure",
              duration: 18.451,
              name: "accountGlobalCode",
            },
            {
              startTime: 1623.905,
              name: "632964VerifyTargeting",
              duration: 3.749,
              timingType: "Measure",
            },
            {
              startTime: 1628.24,
              name: "634837VerifyTargeting",
              timingType: "Measure",
              duration: 2.624,
            },
            {
              startTime: 1640.92,
              timingType: "Measure",
              name: "632964testModifications",
              duration: 0.324,
            },
            {
              name: "632964testPlugin",
              startTime: 1641.335,
              duration: 0.025,
              timingType: "Measure",
            },
            {
              name: "632964testGlobalCode",
              duration: 0.684,
              timingType: "Measure",
              startTime: 1641.57,
            },
            {
              name: "632964testAnalytics",
              startTime: 1642.875,
              duration: 0.875,
              timingType: "Measure",
            },
            {
              name: "start coreAds:initCoreAds",
              timingType: "Mark",
              startTime: 1111.879,
            },
            {
              startTime: 1223.428,
              timingType: "Mark",
              name: "loadStarteventUtils",
            },
            {
              startTime: 1223.543,
              timingType: "Mark",
              name: "loadEndeventUtils",
            },
            {
              name: "loadStartpixelQueue",
              startTime: 1223.721,
              timingType: "Mark",
            },
            {
              name: "loadEndpixelQueue",
              startTime: 1223.77,
              timingType: "Mark",
            },
            {
              name: "geolocStart",
              startTime: 1576.084,
              timingType: "Mark",
            },
            {
              startTime: 1578.244,
              timingType: "Mark",
              name: "userAgentStart",
            },
            {
              startTime: 1599.162,
              name: "accountGlobalCodeStart",
              timingType: "Mark",
            },
            {
              name: "accountGlobalCodeStop",
              timingType: "Mark",
              startTime: 1617.609,
            },
            {
              timingType: "Mark",
              startTime: 1623.916,
              name: "632964VerifyTargetingStart",
            },
            {
              name: "632964VerifyTargetingStop",
              timingType: "Mark",
              startTime: 1627.674,
            },
            {
              startTime: 1628.252,
              timingType: "Mark",
              name: "634837VerifyTargetingStart",
            },
            {
              name: "634837VerifyTargetingStop",
              timingType: "Mark",
              startTime: 1630.88,
            },
            {
              startTime: 1640.935,
              timingType: "Mark",
              name: "632964testModificationsStart",
            },
            {
              timingType: "Mark",
              name: "632964testModificationsStop",
              startTime: 1641.255,
            },
            {
              timingType: "Mark",
              name: "632964testPluginStart",
              startTime: 1641.342,
            },
            {
              name: "632964testPluginStop",
              timingType: "Mark",
              startTime: 1641.361,
            },
            {
              startTime: 1641.576,
              timingType: "Mark",
              name: "632964testGlobalCodeStart",
            },
            {
              timingType: "Mark",
              startTime: 1642.259,
              name: "632964testGlobalCodeStop",
            },
            {
              timingType: "Mark",
              startTime: 1642.892,
              name: "632964testAnalyticsStart",
            },
            {
              startTime: 1643.759,
              timingType: "Mark",
              name: "632964testAnalyticsStop",
            },
            {
              name: "userAgentEnd",
              startTime: 2080.616,
              timingType: "Mark",
            },
            {
              timingType: "Mark",
              name: "geolocEnd",
              startTime: 2080.961,
            },
          ],
          type: "table",
          headings: [
            {
              key: "name",
              itemType: "text",
              text: "Name",
            },
            {
              itemType: "text",
              key: "timingType",
              text: "Type",
            },
            {
              key: "startTime",
              text: "Start Time",
              granularity: 0.01,
              itemType: "ms",
            },
            {
              itemType: "ms",
              key: "duration",
              granularity: 0.01,
              text: "Duration",
            },
          ],
        },
      },
      "first-contentful-paint-3g": {
        id: "first-contentful-paint-3g",
        title: "First Contentful Paint (3G)",
        description:
          "First Contentful Paint 3G marks the time at which the first text or image is painted while on a 3G network. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/first-contentful-paint).",
        score: 0.84,
        scoreDisplayMode: "numeric",
        displayValue: "3957 ms",
        numericValue: 3957,
      },
      "uses-rel-preload": {
        id: "uses-rel-preload",
        title: "Preload key requests",
        description:
          "Consider using `<link rel=preload>` to prioritize fetching resources that are currently requested later in page load. [Learn more](https://web.dev/uses-rel-preload/).",
        score: 1,
        scoreDisplayMode: "numeric",
        details: {
          overallSavingsMs: 0,
          items: [],
          headings: [],
          type: "opportunity",
        },
        numericValue: 0,
      },
      "large-javascript-libraries": {
        id: "large-javascript-libraries",
        title: "Avoids large JavaScript libraries with smaller alternatives",
        description:
          "Large JavaScript libraries can lead to poor performance. Prefer smaller, functionally equivalent libraries to reduce your bundle size. [Learn more](https://developers.google.com/web/fundamentals/performance/webpack/decrease-frontend-size#optimize_dependencies).",
        score: 1,
        scoreDisplayMode: "binary",
        displayValue: "0 large libraries found",
        details: {
          items: [],
          summary: {},
          headings: [],
          type: "table",
        },
      },
      "non-composited-animations": {
        id: "non-composited-animations",
        title: "Avoid non-composited animations",
        description:
          "Animations which are not composited can be janky and increase CLS. [Learn more](https://web.dev/non-composited-animations)",
        score: null,
        scoreDisplayMode: "notApplicable",
      },
      "uses-passive-event-listeners": {
        id: "uses-passive-event-listeners",
        title: "Uses passive listeners to improve scrolling performance",
        description:
          "Consider marking your touch and wheel event listeners as `passive` to improve your page's scroll performance. [Learn more](https://web.dev/uses-passive-event-listeners/).",
        score: 1,
        scoreDisplayMode: "binary",
        details: {
          headings: [],
          type: "table",
          items: [],
        },
      },
      "first-meaningful-paint": {
        id: "first-meaningful-paint",
        title: "First Meaningful Paint",
        description:
          "First Meaningful Paint measures when the primary content of a page is visible. [Learn more](https://web.dev/first-meaningful-paint/).",
        score: 0.93,
        scoreDisplayMode: "numeric",
        displayValue: "2.2 s",
        numericValue: 2157,
      },
    },
    categories: {
      performance: {
        id: "performance",
        title: "Performance",
        score: 0.3,
        auditRefs: [
          {
            id: "first-contentful-paint",
            weight: 15,
            group: "metrics",
          },
          {
            id: "speed-index",
            weight: 15,
            group: "metrics",
          },
          {
            id: "largest-contentful-paint",
            weight: 25,
            group: "metrics",
          },
          {
            id: "interactive",
            weight: 15,
            group: "metrics",
          },
          {
            id: "total-blocking-time",
            weight: 25,
            group: "metrics",
          },
          {
            id: "cumulative-layout-shift",
            weight: 5,
            group: "metrics",
          },
          {
            id: "first-cpu-idle",
            weight: 0,
          },
          {
            id: "max-potential-fid",
            weight: 0,
          },
          {
            id: "first-meaningful-paint",
            weight: 0,
          },
          {
            id: "estimated-input-latency",
            weight: 0,
          },
          {
            id: "render-blocking-resources",
            weight: 0,
            group: "load-opportunities",
          },
          {
            id: "uses-responsive-images",
            weight: 0,
            group: "load-opportunities",
          },
          {
            id: "offscreen-images",
            weight: 0,
            group: "load-opportunities",
          },
          {
            id: "unminified-css",
            weight: 0,
            group: "load-opportunities",
          },
          {
            id: "unminified-javascript",
            weight: 0,
            group: "load-opportunities",
          },
          {
            id: "unused-css-rules",
            weight: 0,
            group: "load-opportunities",
          },
          {
            id: "unused-javascript",
            weight: 0,
            group: "load-opportunities",
          },
          {
            id: "uses-optimized-images",
            weight: 0,
            group: "load-opportunities",
          },
          {
            id: "uses-webp-images",
            weight: 0,
            group: "load-opportunities",
          },
          {
            id: "uses-text-compression",
            weight: 0,
            group: "load-opportunities",
          },
          {
            id: "uses-rel-preconnect",
            weight: 0,
            group: "load-opportunities",
          },
          {
            id: "server-response-time",
            weight: 0,
            group: "load-opportunities",
          },
          {
            id: "redirects",
            weight: 0,
            group: "load-opportunities",
          },
          {
            id: "uses-rel-preload",
            weight: 0,
            group: "load-opportunities",
          },
          {
            id: "efficient-animated-content",
            weight: 0,
            group: "load-opportunities",
          },
          {
            id: "duplicated-javascript",
            weight: 0,
            group: "load-opportunities",
          },
          {
            id: "legacy-javascript",
            weight: 0,
            group: "load-opportunities",
          },
          {
            id: "total-byte-weight",
            weight: 0,
            group: "diagnostics",
          },
          {
            id: "uses-long-cache-ttl",
            weight: 0,
            group: "diagnostics",
          },
          {
            id: "dom-size",
            weight: 0,
            group: "diagnostics",
          },
          {
            id: "critical-request-chains",
            weight: 0,
            group: "diagnostics",
          },
          {
            id: "user-timings",
            weight: 0,
            group: "diagnostics",
          },
          {
            id: "bootup-time",
            weight: 0,
            group: "diagnostics",
          },
          {
            id: "mainthread-work-breakdown",
            weight: 0,
            group: "diagnostics",
          },
          {
            id: "font-display",
            weight: 0,
            group: "diagnostics",
          },
          {
            id: "performance-budget",
            weight: 0,
            group: "budgets",
          },
          {
            id: "timing-budget",
            weight: 0,
            group: "budgets",
          },
          {
            id: "resource-summary",
            weight: 0,
            group: "diagnostics",
          },
          {
            id: "third-party-summary",
            weight: 0,
            group: "diagnostics",
          },
          {
            id: "largest-contentful-paint-element",
            weight: 0,
            group: "diagnostics",
          },
          {
            id: "layout-shift-elements",
            weight: 0,
            group: "diagnostics",
          },
          {
            id: "uses-passive-event-listeners",
            weight: 0,
            group: "diagnostics",
          },
          {
            id: "no-document-write",
            weight: 0,
            group: "diagnostics",
          },
          {
            id: "long-tasks",
            weight: 0,
            group: "diagnostics",
          },
          {
            id: "non-composited-animations",
            weight: 0,
            group: "diagnostics",
          },
          {
            id: "large-javascript-libraries",
            weight: 0,
            group: "diagnostics",
          },
          {
            id: "network-requests",
            weight: 0,
          },
          {
            id: "network-rtt",
            weight: 0,
          },
          {
            id: "network-server-latency",
            weight: 0,
          },
          {
            id: "main-thread-tasks",
            weight: 0,
          },
          {
            id: "diagnostics",
            weight: 0,
          },
          {
            id: "metrics",
            weight: 0,
          },
          {
            id: "screenshot-thumbnails",
            weight: 0,
          },
          {
            id: "final-screenshot",
            weight: 0,
          },
          {
            id: "first-contentful-paint-3g",
            weight: 0,
          },
        ],
      },
    },
    categoryGroups: {
      "a11y-best-practices": {
        title: "Best practices",
        description:
          "These items highlight common accessibility best practices.",
      },
      "a11y-audio-video": {
        title: "Audio and video",
        description:
          "These are opportunities to provide alternative content for audio and video. This may improve the experience for users with hearing or vision impairments.",
      },
      "best-practices-browser-compat": {
        title: "Browser Compatibility",
      },
      "a11y-aria": {
        title: "ARIA",
        description:
          "These are opportunities to improve the usage of ARIA in your application which may enhance the experience for users of assistive technology, like a screen reader.",
      },
      "a11y-tables-lists": {
        title: "Tables and lists",
        description:
          "These are opportunities to improve the experience of reading tabular or list data using assistive technology, like a screen reader.",
      },
      "a11y-names-labels": {
        title: "Names and labels",
        description:
          "These are opportunities to improve the semantics of the controls in your application. This may enhance the experience for users of assistive technology, like a screen reader.",
      },
      "best-practices-ux": {
        title: "User Experience",
      },
      "best-practices-general": {
        title: "General",
      },
      "a11y-color-contrast": {
        title: "Contrast",
        description:
          "These are opportunities to improve the legibility of your content.",
      },
      "load-opportunities": {
        title: "Opportunities",
        description:
          "These suggestions can help your page load faster. They don't [directly affect](https://web.dev/performance-scoring/) the Performance score.",
      },
      "a11y-navigation": {
        title: "Navigation",
        description:
          "These are opportunities to improve keyboard navigation in your application.",
      },
      "pwa-fast-reliable": {
        title: "Fast and reliable",
      },
      "seo-content": {
        title: "Content Best Practices",
        description:
          "Format your HTML in a way that enables crawlers to better understand your app’s content.",
      },
      diagnostics: {
        title: "Diagnostics",
        description:
          "More information about the performance of your application. These numbers don't [directly affect](https://web.dev/performance-scoring/) the Performance score.",
      },
      "a11y-language": {
        title: "Internationalization and localization",
        description:
          "These are opportunities to improve the interpretation of your content by users in different locales.",
      },
      budgets: {
        title: "Budgets",
        description:
          "Performance budgets set standards for the performance of your site.",
      },
      "pwa-optimized": {
        title: "PWA Optimized",
      },
      "seo-crawl": {
        title: "Crawling and Indexing",
        description:
          "To appear in search results, crawlers need access to your app.",
      },
      "pwa-installable": {
        title: "Installable",
      },
      "seo-mobile": {
        title: "Mobile Friendly",
        description:
          "Make sure your pages are mobile friendly so users don’t have to pinch or zoom in order to read the content pages. [Learn more](https://developers.google.com/search/mobile-sites/).",
      },
      metrics: {
        title: "Metrics",
      },
      "best-practices-trust-safety": {
        title: "Trust and Safety",
      },
    },
    timing: {
      total: 11621.55,
    },
    i18n: {
      rendererFormattedStrings: {
        varianceDisclaimer:
          "Values are estimated and may vary. The [performance score is calculated](https://web.dev/performance-scoring/) directly from these metrics.",
        opportunityResourceColumnLabel: "Opportunity",
        opportunitySavingsColumnLabel: "Estimated Savings",
        errorMissingAuditInfo: "Report error: no audit information",
        errorLabel: "Error!",
        warningHeader: "Warnings: ",
        auditGroupExpandTooltip: "Show audits",
        passedAuditsGroupTitle: "Passed audits",
        notApplicableAuditsGroupTitle: "Not applicable",
        manualAuditsGroupTitle: "Additional items to manually check",
        toplevelWarningsMessage:
          "There were issues affecting this run of Lighthouse:",
        crcLongestDurationLabel: "Maximum critical path latency:",
        crcInitialNavigation: "Initial Navigation",
        lsPerformanceCategoryDescription:
          "[Lighthouse](https://developers.google.com/web/tools/lighthouse/) analysis of the current page on an emulated mobile network. Values are estimated and may vary.",
        labDataTitle: "Lab Data",
      },
    },
  },
  analysisUTCTimestamp: "2020-10-15T14:49:33.958Z",
};

/**
 * GET /api/users
 * Get All Users
 */
exports.fetch = async function (req, res) {
  try {
    // const response = await axios.get(
    //   "https://pagespeedonline.googleapis.com/pagespeedonline/v5/runPagespeed?category=performance&strategy=mobile&url=https://www.voici.fr&key=AIzaSyBVMEhTLg5KoNGzE-ZSD8pb8a3Kf1-ODtw"
    // );
    // console.log("123333333333333333333");
    // console.log(response.data.originLoadingExperience.metrics["user-timings"]);
    // res.json(response.data.originLoadingExperience.metrics["user-timings"]);
    console.log(data.lighthouseResult.audits["user-timings"]);
    res.json(data.lighthouseResult.audits["user-timings"]);
  } catch (error) {
    console.error(error);
  }
};
