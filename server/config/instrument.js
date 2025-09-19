// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"
// import {nodeProfilingIntegration} from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://bbe34d847aa5d835615f8474b640bd75@o4510044451176448.ingest.us.sentry.io/4510044458778624",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  integrations: [Sentry.mongooseIntegration()],
  sendDefaultPii: true,
});