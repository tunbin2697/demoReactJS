import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from 'react-router-dom'
import GlobalStyle from "./components/GlobalStyle";
import DefaultLayout from "./Layout/DefaultLayout"
import { publicRoutes } from "./routes"
import { Fragment } from "react";

function App() {
  return (
    <GlobalStyle>
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout
            if (route.layout){
              Layout = route.layout
            } else if (route.layout = null) {
              Layout = Fragment
            }
            const Page = route.component
            return (
              <Route key={index} path={route.path} element={
                <Layout>
                  <Page />
                </Layout>
              } />
            )
          })}
        </Routes>
      </BrowserRouter>
    </GlobalStyle>
  );
}

export default App;
