import * as Sentry from '@sentry/react';
import { browserTracingIntegration } from '@sentry/browser'; // Correct import

Sentry.init({
  dsn: 'https://270b49bc428e221fb6e0daa4b7f6d0b6@o4508354976022528.ingest.de.sentry.io/4508354980544592',
  integrations: [
    browserTracingIntegration(), // Correct integration
  ],
  tracesSampleRate: 1.0, // Capture 100% of transactions
});
