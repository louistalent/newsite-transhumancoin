
import { useState } from "react";
import { scrollTo } from "../../accessories/scrollTo";

const Header = () => {
    const [isHam, setIsHam] = useState(false);
    const menuClick = (id) => {
        scrollTo({ id });
        if (isHam) {
            setIsHam(false);
        }
    }
    return (
        <div className="Nav w-full svelte-1emr6uv">
            <div className="background-blur md:flex relative svelte-1emr6uv">
                <div className="h-20 px-4 flex self-center justify-between md:container mx-auto relative md:static z-10">
                    <a id="logo-home-link" className="flex flex-row items-center z-10" href="https://www.transhumancoin.finance" aria-label="Home">
                        <div className="logo">
                            <img className=" svelte-1emr6uv" src="./assets/logo.png" alt="THC" />
                        </div>
                        {/* <img className="hidden ml-4 lg:block svelte-1emr6uv" src="./assets/logo.png" alt="THC"/> */}
                    </a>
                    <div className="flex justify-center items-center">
                        <nav className={`h-full svelte-1emr6uv ${isHam ? 'isMenuOpen' : ''}`}>
                            <ul className="container svelte-1emr6uv">
                                <div id="first-level-navigation-category-get-started" className="FirstLevelNavigationCategory my-4 lg:my-0 svelte-laz1ta">
                                    <div className="flex justify-between items-center cursor-pointer">
                                        <div onClick={() => { menuClick('tokenomics_id') }} className="first-level-link svelte-laz1ta">
                                            Tokenomics
                                            <div className="stick svelte-laz1ta"></div>
                                        </div>
                                    </div>

                                </div>

                                <div id="first-level-navigation-category-foundation" className="FirstLevelNavigationCategory my-4 lg:my-0 svelte-laz1ta">
                                    <div className="flex justify-between items-center cursor-pointer">
                                        <div onClick={() => { menuClick('buy_id') }} className="first-level-link svelte-laz1ta">
                                            THC BUY
                                            <div className="stick svelte-laz1ta"></div>
                                        </div>
                                    </div>
                                </div>

                                <div id="first-level-navigation-category-connect" className="FirstLevelNavigationCategory my-4 lg:my-0 svelte-laz1ta">
                                    <div className="flex justify-between items-center cursor-pointer">
                                        <div onClick={() => { menuClick('whitepaper_id') }} className="first-level-link svelte-laz1ta">
                                            Whitepaper
                                            <div className="stick svelte-laz1ta"></div>
                                        </div>
                                    </div>
                                </div>

                                <div id="first-level-navigation-category-connect" className="FirstLevelNavigationCategory my-4 lg:my-0 svelte-laz1ta">
                                    <div className="flex justify-between items-center cursor-pointer">
                                        <div onClick={() => { menuClick('team_id') }} className="first-level-link svelte-laz1ta">
                                            Our team
                                            <div className="stick svelte-laz1ta"></div>
                                        </div>
                                    </div>
                                </div>

                                <div id="first-level-navigation-category-connect" className="FirstLevelNavigationCategory my-4 lg:my-0 svelte-laz1ta">
                                    <div className="flex justify-between items-center cursor-pointer">
                                        <div onClick={() => { menuClick('faq_id') }} className="first-level-link svelte-laz1ta">
                                            FAQ
                                            <div className="stick svelte-laz1ta"></div>
                                        </div>
                                    </div>
                                </div>

                                <div id="first-level-navigation-category-solutions" className="FirstLevelNavigationCategory my-4 lg:my-0 svelte-laz1ta">
                                    <div className="flex justify-between items-center cursor-pointer">
                                        <div onClick={() => { menuClick('roadmap_id') }} className="first-level-link svelte-laz1ta">
                                            Roadmap
                                            <div className="stick svelte-laz1ta"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="lg:hidden">
                                    <div id="first-level-navigation-category-ecosystem" className="FirstLevelNavigationCategory my-4 lg:my-0 svelte-laz1ta">
                                        <div className="flex justify-between items-center cursor-pointer">
                                            <div className="first-level-link svelte-laz1ta">Ecosystem
                                                <div className="stick svelte-laz1ta"></div>
                                            </div>
                                            <svg className="mr-5 lg:hidden svelte-laz1ta" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g opacity="0.5">
                                                    <path d="M6 13L11 8L6 3" stroke="#131F37" strokeWidth="1.72854"></path>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div> */}
                            </ul>

                            {/* <div className="menu-button px-8 text-grey-2pm font-bold text-sm items-center z-30 cursor-pointer svelte-18o960n">
                                <div className="mr-4">Language</div>
                                <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="3" height="2.79176" rx="1.39588" transform="matrix(-1 0 0 1 19 7.22266)" fill="white"></rect>
                                    <rect width="3" height="2.79175" rx="1.39588" transform="matrix(-1 0 0 1 19 0.708984)" fill="white"></rect>
                                    <rect width="3" height="2.79176" rx="1.39588" transform="matrix(-1 0 0 1 3 13.7373)" fill="white"></rect>
                                    <rect width="3" height="2.79176" rx="1.39588" transform="matrix(-1 0 0 1 11 7.22266)" fill="white"></rect>
                                    <rect width="3" height="2.79175" rx="1.39588" transform="matrix(-1 0 0 1 11 0.708984)" fill="white"></rect>
                                    <rect width="3" height="2.79175" rx="1.39588" transform="matrix(-1 0 0 1 3 0.708984)" fill="white"></rect>
                                    <rect width="3" height="2.79176" rx="1.39588" transform="matrix(-1 0 0 1 19 13.7373)" fill="white"></rect>
                                    <rect width="3" height="2.79176" rx="1.39588" transform="matrix(-1 0 0 1 11 13.7373)" fill="white"></rect>
                                    <rect width="3" height="2.79176" rx="1.39588" transform="matrix(-1 0 0 1 3 7.22266)" fill="white"></rect>
                                </svg>
                            </div> */}
                            {/* after Language click  */}
                            {/* <div className="ecosystem-menu bg-grey-2pm w-full svelte-18o960n">
                                <div className="ecosystem-content flex flex-wrap container pt-8 pb-12 svelte-18o960n">
                                    <div className="flex justify-end w-full">
                                        <svg className="cursor-pointer p2" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="20.5318" height="2.09549" transform="matrix(-0.707102 0.707112 -0.707102 -0.707112 24 9.48169)" fill="#131F37"></rect>
                                            <rect width="20.5318" height="2.09549" transform="matrix(-0.707102 -0.707111 0.707102 -0.707112 22.5181 24)" fill="#131F37"></rect>
                                        </svg>
                                    </div>
                                    <a href="https://shop.iotashops.com/" target="_blank" rel="noopener noreferrer" className="flex menu-item px-5 rounded-lg svelte-mrpoax">
                                        <div className="item-content flex items-start svelte-mrpoax">
                                            <div className="item-image mr-4 svelte-mrpoax"><img src="./123123123_files/iota-shops.icon.svg" alt="IOTA Merch (Partner)" /></div>
                                            <div className="text-sm">
                                                <div className="font-semibold text-grey-10pm mb-1">IOTA Merch (Partner)</div>
                                                <div className="text-grey-8pm">
                                                    <div className="rich-text-block" style={{}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div> */}


                        </nav>
                        <button onClick={() => { setIsHam(false) }} className={`z-10 cursor-pointer p-2 lg:hidden ${isHam ? '' : 'hidden'}`}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="20.5318" height="2.09549" transform="matrix(-0.707102 0.707112 -0.707102 -0.707112 24 9.48169)" fill="#131F37"></rect>
                                <rect width="20.5318" height="2.09549" transform="matrix(-0.707102 -0.707111 0.707102 -0.707112 22.5181 24)" fill="#131F37"></rect>
                            </svg>
                        </button>
                        <button onClick={() => { setIsHam(true) }} className={`p-2 lg:hidden ${isHam ? 'hidden' : ''}`}>
                            <img src="./assets/burguer-menu.svg" alt="menu" className="svelte-1emr6uv" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
