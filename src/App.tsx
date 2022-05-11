import { lazy, Suspense, useEffect } from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { StepsStyleConfig as Steps } from 'chakra-ui-steps'
import { HashRouter, BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import Landing from './routes/Landing'
import Account from './routes/Account'
import Claim from './routes/Claim'
import Projects from './routes/Projects'
import ProjectDetail from './routes/ProjectDetail'
import Staking from './routes/Staking'
import LeaderBoard from './routes/Leaderboard'
import Backdrop from './components/Backdrop'
import LandingDashboard from './components/Layout/LandingDashboard'
import HomeLayout from './components/HomeLayout'

const LazyPool = lazy(() => import('./routes/Pool/index'))
const LazyPoolDetail = lazy(() => import('./routes/Pool/Detail'))
const LazyStaking = lazy(() => import('./routes/Staking'))

const ScrollToTop = (props: any) => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return <>{props.children}</>
}

const theme = extendTheme({
  components: {
    Steps,
  },
  fonts: {
    heading: 'var(--font-family-lato), sans-serif',
    body: 'var(--font-family-lato), sans-serif',
  },
})

function App(props: any) {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route element={<HomeLayout />}>
              <Route path="/" element={<Landing {...props} />} />
              <Route path="/account" element={<Account {...props} />} />
              <Route path="/claim" element={<Claim {...props} />} />
              <Route path="/projects" element={<Projects {...props} />} />
              <Route path="/projects/:id" element={<ProjectDetail {...props} />} />
              <Route path="/leaderboard" element={<LeaderBoard {...props} />} />
            </Route>
            <Route element={<LandingDashboard />}>
              <Route
                path="/pool"
                element={
                  <Suspense fallback={<Backdrop />}>
                    <LazyPool {...props} />
                  </Suspense>
                }
              />
              <Route
                path="/pool/:id"
                element={
                  <Suspense fallback={<Backdrop />}>
                    <LazyPoolDetail {...props} />
                  </Suspense>
                }
              />
              <Route
                path="/staking"
                element={
                  <Suspense fallback={<Backdrop />}>
                    <LazyStaking {...props} />
                  </Suspense>
                }
              />
            </Route>
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
