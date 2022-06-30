import "../../../assets/roadmap/roadmap.css";
import { useEffect } from "react";
const Roadmap = () => {
    return (
        <>
            <section className="z-10 relative" >
                <div className="roadmap padding secondary-bg white">
                    <div className="content width-md">
                        <div className="roadmap-wrap">
                            <div className="roadmap-line"></div>
                            <div className="roadmap">
                                <div className="roadmap-year"></div>
                            </div>
                            <div className="roadmap roadmap-left roadmap-finished aos-init" data-aos="fade-right">
                                <div className="roadmap-step">
                                    <div className="roadmap-head justify-s">
                                        <span className="roadmap-title">Phase 1</span>
                                        {/* <div style={{ borderRadius: '50%', width: '70px', height: '70px', overflow: 'hidden' }}>
                                        <img src="./DeFi Kingdoms Home_files/dragon.png" alt="" />
                                    </div> */}
                                    </div>
                                    <p><span className="green-highlight">
                                        Approve Core Developments
                                        <br />
                                        Launch Public Sale
                                        <br />
                                        Launch Public Sale
                                        <br />
                                        Listing on Pancakeswap
                                    </span>
                                    </p>
                                </div>
                            </div>
                            <div className="roadmap roadmap-right roadmap-finished aos-init" data-aos="fade-right">
                                <div className="roadmap-step">
                                    <div className="roadmap-head justify-s">
                                        <span className="roadmap-title">Phase 2</span>
                                        {/* <div style={{ borderRadius: '50%', width: '70px', height: '70px', overflow: 'hidden' }}>
                                        <img src="./DeFi Kingdoms Home_files/bear.png" alt="" />
                                    </div> */}
                                    </div>
                                    <p>
                                        <span className="green-highlight"> Promotion Campaign</span>
                                        <br />
                                        <span className="green-highlight"> Marketing Campaign</span>
                                        <br />
                                        <span className="green-highlight"> Hit $2 Million MCap</span>
                                        <br />
                                        <span className="green-highlight"> Registered as a Delaware LLC</span>
                                        <br />
                                    </p>

                                </div>
                            </div>
                            <div className="roadmap roadmap-left aos-init" data-aos="fade-right">
                                <div className="roadmap-step">
                                    <div className="roadmap-head justify">
                                        <span className="roadmap-title">Phase 3</span>
                                        {/* <div style={{ borderRadius: '50%', width: '70px', height: '70px', overflow: 'hidden' }}>
                                        <img src="./DeFi Kingdoms Home_files/wolf.png" alt="" />
                                    </div> */}
                                        <span className="roadmap-title"> In progress</span>
                                    </div>
                                    <p>
                                        <span className="">Make First Donation</span>
                                        <br />
                                        <span className="">Buyback & Burn Weekly</span>
                                        <br />
                                        <span className="">List on Coingecko</span>
                                        <br />
                                        <span className="">List On CoinMarketCap</span>
                                        <br />
                                    </p>
                                </div>
                            </div>
                            <div className="roadmap roadmap-right aos-init" data-aos="fade-right">
                                <div className="roadmap-step">
                                    <div className="roadmap-head justify-s">
                                        <span className="roadmap-title justify-s">Phase 4</span>
                                        {/* <div style={{ borderRadius: '50%', width: '70px', height: '70px', overflow: 'hidden' }}>
                                        <img src="./DeFi Kingdoms Home_files/lion.png" alt="" />
                                    </div> */}
                                    </div>
                                    <p>
                                        <br />
                                        List On Top-Tier CEX
                                        <br />
                                        SWFT AllChain Partnership
                                        <br />
                                        Transhuman Coin Lottery (Coming Soon)
                                        <br />
                                        Transhumanist Metaverse Research Network (Coming Soon)
                                        <br />
                                    </p>

                                </div>
                            </div>
                            <div className="roadmap roadmap-left aos-init" data-aos="fade-right">
                                <div className="roadmap-step">
                                    <div className="roadmap-head justify-s">
                                        <span className="roadmap-title">Next Phase</span>
                                        {/* <div style={{ borderRadius: '50%', width: '70px', height: '70px', overflow: 'hidden' }}>
                                        <img src="./DeFi Kingdoms Home_files/shark.png" alt="" />
                                    </div> */}
                                    </div>
                                    <p>
                                        Update New Roadmap
                                        <br />
                                    </p>
                                </div>
                            </div>
                            <div className="roadmap roadmap-right aos-init" data-aos="fade-right">
                                <div className="roadmap-step">
                                    <div className="roadmap-head justify-s">
                                        <span className="roadmap-title">To The Moon</span>
                                    </div>
                                    <p>
                                        Boom
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Roadmap;