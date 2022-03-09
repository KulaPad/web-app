import { ColorModeScript } from "@chakra-ui/react";
import React, { StrictMode } from "react";

import ReactDOM from "react-dom";
import App from "./App";
import initContract from "./utils/initContract";

// Buffer is not defined:: https://github.com/near/near-api-js/issues/757#issuecomment-1002754955
import { Buffer } from "buffer";
global.Buffer = Buffer;

window.nearInitPromise = initContract().then((props) => {
  ReactDOM.render(
    <StrictMode>
      <ColorModeScript />
      <App {...props} />
    </StrictMode>,
    document.getElementById("root")
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
