import { useEffect } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";

import Landing from "./routes/Landing";
import Account from "./routes/Account";
import Claim from "./routes/Claim";
import Projects from "./routes/Projects";
import ProjectDetail from "./routes/ProjectDetail";
import Staking from "./routes/Staking";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

const theme = extendTheme({
  components: {
    Steps,
  },
});

function App(props) {
  return (
    <ChakraProvider theme={theme}>
      <HashRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Landing {...props} />} />
            <Route path="/account" element={<Account {...props} />} />
            <Route path="/claim" element={<Claim {...props} />} />
            <Route path="/projects" element={<Projects {...props} />} />
            <Route
              path="/projects/:id"
              element={<ProjectDetail {...props} />}
            />
            <Route path="/staking" element={<Staking {...props} />} />
          </Routes>
        </ScrollToTop>
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
