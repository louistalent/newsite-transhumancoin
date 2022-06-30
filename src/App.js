
import './App.css';
// import './assets/css/main.css';
// import './assets/css/sub-main.css';
import Routers from './router';
import ContextProvider, { useBlockchainContext } from "./contexts";

// Module
import React from 'react';
// import { NotificationContainer } from "react-notifications";

// import 'react-notifications/lib/notifications.css';
// import 'pure-react-carousel/dist/react-carousel.es.css';
// import 'bootstrap/dist/css/bootstrap.css';

// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
import "./assets/css/HeroParticlesVideo.css";
import "./assets/css/layout.css";
// import "./assets/css/my_custom_css2.0.css";

// import "swiper/css/navigation";

import { UseWalletProvider } from 'use-wallet'

function App() {
  // const [state, { dispatch }] = useBlockchainContext();

  return (
    <>
      {/* 1: ethereum */}
      {/* 56: BSC */}
      <UseWalletProvider
        chainId={56}
        connectors={{
          portis: { dAppId: "www.transhumancoin.finance" },
        }}>
        <ContextProvider>
          <Routers />
          {/* <NotificationContainer /> */}
        </ContextProvider>
      </UseWalletProvider>
    </>
  );
}

export default App;
