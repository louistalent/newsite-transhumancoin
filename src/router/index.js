// user page URL
import Home from "../component/home";
// import Chart from "../component/about";
// import Voting from "../component/voting";
import Layout from "../component/layout";
import { useBlockchainContext } from "../contexts";


// react module
import { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import 'react-pro-sidebar/dist/css/styles.css';

function Routers() {
  const [state, { dispatch }] = useBlockchainContext();

  return (
    // React Router
    <BrowserRouter>
      <Layout>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/chart" component={Chart} />
        <Route exact path="/voting" component={Voting} /> */}
      </Layout>
    </BrowserRouter>
  );
}

export default Routers;