import bscSymbol from '../../assets/home-img/bsc-symbol.svg';
import { HomeSvg, ChartSvg, ThirdPointSvg, RightArrow } from '../../assets/svg/svg';

import { FaTelegramPlane, FaTwitter, FaAngleDown, FaAngleUp, FaRegCheckCircle, FaFeatherAlt } from 'react-icons/fa';
import { AiOutlineAudit } from 'react-icons/ai';
import { BsFillFlagFill } from "react-icons/bs";

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useBlockchainContext } from "../../contexts";

const CMC = (classnames) => {
    return (
        <svg className={classnames} version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="20px" height="20px" viewBox="0 0 223.000000 226.000000"
            preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,226.000000) scale(0.100000,-0.100000)"
                fill="#7f8fa9" stroke="none">
                <path d="M975 2250 c-354 -45 -685 -282 -849 -607 -82 -165 -117 -317 -117
                    -513 0 -313 102 -566 319 -792 183 -190 410 -300 680 -329 299 -33 635 78 839
                    276 43 41 53 58 53 84 0 69 -57 122 -115 107 -14 -4 -63 -36 -108 -71 -166
                    -132 -314 -185 -537 -192 -131 -4 -154 -2 -242 20 -100 26 -203 73 -294 133
                    -61 40 -167 140 -162 152 1 5 107 175 233 379 l230 370 6 -216 c5 -168 10
                    -227 24 -263 41 -114 156 -139 251 -56 19 17 81 105 138 197 56 91 129 209
                    162 261 l59 95 6 -170 c4 -147 8 -178 29 -230 58 -147 210 -226 371 -192 64
                    13 155 81 198 146 55 86 75 163 74 296 -1 321 -126 606 -362 827 -191 180
                    -435 282 -699 292 -64 3 -148 1 -187 -4z m325 -215 c264 -53 501 -239 627
                    -490 99 -197 129 -474 63 -583 -55 -90 -174 -95 -222 -9 -8 14 -15 95 -19 232
                    -5 166 -9 218 -23 250 -51 120 -163 146 -264 60 -44 -39 -91 -107 -248 -360
                    l-99 -160 -5 280 c-5 268 -6 282 -27 316 -37 59 -114 77 -174 42 -39 -23 -65
                    -62 -344 -513 -131 -212 -242 -389 -246 -394 -11 -12 -62 101 -84 182 -92 356
                    37 748 319 968 219 172 478 234 746 179z"/>
            </g>
        </svg>
    )
}
function Sidebar() {
    const [state, { dispatch }] = useBlockchainContext();
    const { minSidebar } = state;
    useEffect(() => {
        // alert(minSidebar);
    }, [minSidebar])


    const [drowList, setDrowList] = useState(false);
    const subClass = "flex cursor-pointer items-center justify-between duration-200 p-3 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:bg-opacity-50 dark:text-gray-400 dark:hover:text-gray-100 text-gray-500 hover:text-gray-900";

    return (
        <div className={`flex fixed justify-between border-r dark:border-gray-700 duration-200 overflow-x-hidden border-gray-200 flex-col z-40 inset-y-0 left-0 bg-white dark:bg-gray-800 overflow-y-auto xl:static inset-0 pb-4 ${minSidebar ? 'w-16' : 'w-72'}`}>
            <nav className="select-none pt-20 xl:pt-4">
                <div className="mx-2">
                    <Link to="/" className="flex items-center duration-200 mt-2 sm:mt-4 p-3 rounded-lg router-link-exact-active router-link-active dark:text-gray-400 dark:hover:bg-opacity-10 hover:bg-opacity-40 hover:bg-gray-100 dark:hover:text-gray-100 text-gray-500 dark:hover:bg-gray-300 hover:text-gray-900">
                        <HomeSvg />
                        <span className={`mx-4 overline duration-100 whitespace-nowrap ${minSidebar ? 'opacity-0' : 'opacity-100'}`}>Home</span>
                    </Link>
                </div>

                <div className={`mx-2 duration-100 ${drowList ? '' : 'h-12'}`}>
                    <div onClick={() => setDrowList(!drowList)} className={`flex cursor-pointer items-center justify-between duration-200 mt-2 sm:mt-4 p-3 rounded-lg border-gray-900 dark:text-gray-400 hover:bg-opacity-40 dark:hover:bg-gray-300 dark:hover:bg-opacity-10 dark:hover:text-gray-100 text-gray-500 hover:bg-gray-100 hover:text-gray-900`}>
                        <div className="flex flex-row">
                            <ThirdPointSvg />
                            <span className={`mx-4 overline duration-100 whitespace-nowrap ${minSidebar ? 'opacity-0' : 'opacity-100'}`}>List</span></div>
                        {drowList
                            ?
                            <FaAngleUp className={`${minSidebar ? 'opacity-0' : 'opacity-100'}`} />
                            :
                            <FaAngleDown className={`${minSidebar ? 'opacity-0' : 'opacity-100'}`} />
                        }
                    </div>
                    <div className={`rounded-md overflow-hidden transition-all duration-300 bg-gray-100 dark:bg-gray-900 mt-2
                     opacity-${drowList ? 100 : 0}, ${drowList ? '' : 'dis-n'}`} style={{ minWidth: '271px' }}>
                        <Link to="/" className={subClass}>
                            <span className={`mx-4 overline duration-100 ${minSidebar ? 'opacity-0' : 'opacity-100'}`}>123</span>
                        </Link>
                        <Link to="/" className={subClass}>
                            <span className={`mx-4 overline duration-100 ${minSidebar ? 'opacity-0' : 'opacity-100'}`}>321 &amp; 234
                                <span className="ml-2 text-xs px-2 text-white dark:bg-secondary bg-secondary-dark rounded-full">V2</span>
                            </span>
                        </Link>
                        <Link to="/" className={subClass}>
                            <span className={`mx-4 overline duration-100 ${minSidebar ? 'opacity-0' : 'opacity-100'}`}>5465</span>
                        </Link>
                        <Link to="/" className={subClass}>
                            <span className={`mx-4 overline duration-100 ${minSidebar ? 'opacity-0' : 'opacity-100'}`}>333</span>
                        </Link>
                        <Link to="/" className={subClass}>
                            <span className={`mx-4 overline duration-100 ${minSidebar ? 'opacity-0' : 'opacity-100'}`}>kkk</span>
                        </Link>
                    </div>
                </div>

                <div className="mx-2">
                    <Link to='/chart' className={`flex items-center duration-200 mt-2 sm:mt-4 p-3 rounded-lg justify-between dark:text-gray-400 dark:hover:bg-opacity-10 hover:bg-opacity-40 hover:bg-gray-100 dark:hover:text-gray-100 text-gray-500 dark:hover:bg-gray-300 hover:text-gray-900`}>
                        <span className="flex flex-row items-center">
                            <ChartSvg />
                            <span className={`mx-4 whitespace-nowrap overline duration-100 ${minSidebar ? 'opacity-0' : 'opacity-100'}`}>Charts</span>
                        </span>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </Link>
                </div>

                <div className="mx-2">
                    <Link to="/audit" className="flex items-center duration-200 mt-2 sm:mt-4 p-3 rounded-lg justify-between dark:text-gray-400 dark:hover:bg-opacity-10 hover:bg-opacity-40 hover:bg-gray-100 dark:hover:text-gray-100 text-gray-500 dark:hover:bg-gray-300 hover:text-gray-900">
                        <span className="flex flex-row items-center">
                            <AiOutlineAudit style={{ width: '25px', height: '24px' }} className='w-6 h-6 flex-shrink-0 fill-current text-primary-dark dark:text-primary' />
                            <span className={`mx-4 whitespace-nowrap overline duration-100 ${minSidebar ? 'opacity-0' : 'opacity-100'}`}>Audit</span>
                        </span>

                        <FaRegCheckCircle className="h-5 w-5" style={{ color: '#1bc870' }} />
                    </Link>
                </div>

                <div className="mx-2">
                    <Link to="/voting" className="flex items-center duration-200 mt-2 sm:mt-4 p-3 rounded-lg router-link-exact-active router-link-active dark:text-gray-400 dark:hover:bg-opacity-10 hover:bg-opacity-40 hover:bg-gray-100 dark:hover:text-gray-100 text-gray-500 dark:hover:bg-gray-300 hover:text-gray-900">
                        <BsFillFlagFill className='w-5 h-5 flex-shrink-0 fill-current text-primary-dark dark:text-primary' />
                        <span className={`mx-4 overline duration-100 whitespace-nowrap ${minSidebar ? 'opacity-0' : 'opacity-100'}`}>Voting</span>
                    </Link>
                </div>
            </nav>

            <div className={`px-5 mt-6 block duration-75 ease-in-out ${minSidebar ? 'opacity-0' : 'opacity-100'}`} style={{ minWidth: '288px' }}>
                <div className="flex flex-row items-center space-x-3">
                    <div className="space-x-3 flex flex-row my-3">
                        <div className="flex flex-row items-center">
                            <a href="http://t.me/buytranshumancoin" target="_blank" rel="noopener norefferer" aria-hidden="true">
                                <FaTelegramPlane className='text-gray-300 hover:opacity-70 dark:hover:opacity-100 dark:text-gray-400 dark:hover:text-white transition-all duration-300 fill-current h-5 w-5' />
                            </a>
                        </div>
                        <div className="flex flex-row items-center">
                            <a href="https://twitter.com/" rel="noopener norefferer" aria-hidden="true" target="_blank">
                                <FaTwitter className='text-gray-300 hover:opacity-70 dark:hover:opacity-100 dark:text-gray-400 dark:hover:text-white transition-all duration-300 fill-current h-5 w-5' />
                            </a>
                        </div>
                        <div className="flex flex-row items-center">
                            <a href="https://coinmarketcap.com/currencies/transhuman-coin/" rel="noopener norefferer" aria-hidden="true" target="_blank">
                                <CMC className={'text-gray-300 hover:opacity-70 dark:hover:opacity-100 dark:text-gray-400 dark:hover:text-white transition-all duration-300 fill-current h-5 w-5'} />
                            </a>
                        </div>

                    </div>
                </div>
                <div className="space-x-2 flex flex-row justify-between my-3">
                    <div className="flex flex-row space-x-2">
                        <div className="flex flex-row items-center">
                            <img src={bscSymbol} alt="Native token icon" aria-hidden="true" viewbox="0 0 100 100" className="w-5 h-5 mr-1 fill-current dark:text-primary text-gray-700" />
                            <Link to="/" className="dark:text-primary text-gray-700 caption cursor-pointer">$386</Link>
                        </div>
                        {/* <div className="flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 49 48" className="w-5 h-5 mr-1 fill-current dark:text-primary text-gray-700">
                                <path d="M24.052 48c13.284 0 24.053-10.745 24.053-24S37.336 0 24.052 0C10.77 0 0 10.745 0 24s10.769 24 24.052 24z"></path>
                                <path fill="#fff" d="M29.72 12.153H18.384L6.57 23.703l11.814 11.55H29.72l11.819-11.55-11.819-11.55z"></path>
                                <path d="M24.052 29.057A5.062 5.062 0 0029.12 24a5.062 5.062 0 00-5.068-5.057A5.062 5.062 0 0018.985 24a5.062 5.062 0 005.067 5.057z"></path>
                            </svg>
                            <Link to="/" className="dark:text-primary text-gray-700 caption cursor-pointer"> $0.755</Link>
                        </div> */}
                    </div>
                </div>
                <span className="pb-3 text-left caption text-gray-300 dark:text-gray-500">Valid.finance- Version 1.0.0 ❤</span>
            </div>
        </div>
    )
}

export default Sidebar;