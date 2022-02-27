import { ChakraProvider, theme } from "@chakra-ui/react";

import { HashRouter, Routes, Route } from "react-router-dom";
import Landing from "./routes/Landing";
import Account from "./routes/Account";
import Claim from "./routes/Claim";

function App(props) {
  return (
    <ChakraProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Landing {...props} />} />
          <Route path="/account" element={<Account {...props} />} />
          <Route path="/claim" element={<Claim {...props} />} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
