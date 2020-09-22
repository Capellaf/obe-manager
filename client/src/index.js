import React from 'react';
import ReactDOM from 'react-dom';
//import * as Sentry from "@sentry/react";
//import { Integrations } from "@sentry/tracing";
import App from './App';
require('dotenv').config()

/*Sentry.init({
  dsn: "https://4ab85525149b4dc3b7eedc1f83b07424@o449484.ingest.sentry.io/5432545",
  integrations: [
    new Integrations.BrowserTracing(),
  ],
  tracesSampleRate: 1.0,
});*/

ReactDOM.render(<App />, document.getElementById('root'));