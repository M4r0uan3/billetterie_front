// import Raven from "raven-js";
// import * as Sentry from "@sentry/react";
// import { BrowserTracing } from "@sentry/tracing";

function init() {
  //   Sentry.init({
  //     dsn: "https://975cb7be21f2432a8e61e6f6e5dbbf3a@o1291560.ingest.sentry.io/6512954",
  //     integrations: [new BrowserTracing()],
  //     tracesSampleRate: 1.0,
  //   });
}

function log(error) {
  console.log(error);
}

export default {
  init,
  log,
};
