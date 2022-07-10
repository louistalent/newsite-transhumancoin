import { RightArrow } from '../../assets/svg/svg';
import '../../assets/css/home.css';

import { useEffect, useState } from 'react';
import { useWallet, UseWalletProvider } from 'use-wallet'
import { useLocation, useHistory } from 'react-router-dom';
import { useBlockchainContext } from '../../contexts';

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
// import { Navigation } from "swiper";
import { Autoplay } from 'swiper';

import Tokenomics from "./sections/tokenomics";
import Whitepaper from "./sections/whitepaper";
import Footer from './sections/footer';
import Header from './sections/header';
import Team from './sections/team';
import Benefit from './sections/benefit';
import AttackCoin from './sections/attackCoin';
import Buy from './sections/buy';
import Roadmap from './sections/roadmap';
import Faq from './sections/faq';


var nextTimeTrigger = '0';
var nextTimeTrigger2 = '0';
function Home() {
	const [oursiteURL, setOursiteURL] = useState('https://valid.finance');

	const [state, { dispatch }] = useBlockchainContext();
	const wallet = useWallet()
	const blockNumber = wallet.getBlockNumber();
	useEffect(() => {
		console.log(wallet.account)
	}, [wallet.status, wallet.account])

	const [beforeActiveNumber, setBeforeActiveNumber] = useState(0);

	const FirstSlideActive = (number) => {
		if (number > 4) {
			number = 1;
		} else if (number < 1) {
			number = 4;
		}

		if (beforeActiveNumber !== 0) {

			window.document.querySelectorAll(`#slide-article-${beforeActiveNumber} > div > h1 .element-from-blur`).forEach(function (elem) {
				elem.classList.remove('element-from-blur-animate');
			})

			window.document.getElementById(`slide-video-${beforeActiveNumber}`)?.classList.remove('active');
			window.document.getElementById(`slide-article-${beforeActiveNumber}`)?.classList.remove('active');
			window.document.getElementById(`slide-article-circle-${beforeActiveNumber}`)?.classList.remove('circle-fade-in');

			if (number === 2) {
				window.document.getElementById(`slide-video-4`)?.classList.remove('inactive');
				window.document.getElementById(`slide-article-4`)?.classList.remove('inactive');
			}
			window.document.getElementById(`slide-video-${beforeActiveNumber - 1}`)?.classList.remove('inactive');
			window.document.getElementById(`slide-article-${beforeActiveNumber - 1}`)?.classList.remove('inactive');
		}

		if (number > 0 || number < 0) {
			setBeforeActiveNumber(number);

			window.document.getElementById(`slide-video-${number}`)?.classList.add('active');
			window.document.getElementById(`slide-article-${number}`)?.classList.add('active');
			window.document.getElementById(`slide-article-circle-${number}`)?.classList.add('circle-fade-in');

			window.document.querySelectorAll(`#slide-article-${number} > div > h1 .element-from-blur`).forEach(function (elem) {
				elem.classList.add('element-from-blur-animate');
			})

			if (number === 1) {
				// max number
				window.document.getElementById(`slide-video-4`)?.classList.add('inactive');
				window.document.getElementById(`slide-article-4`)?.classList.add('inactive');

			} else {
				window.document.getElementById(`slide-video-${number - 1}`)?.classList.add('inactive');
				window.document.getElementById(`slide-article-${number - 1}`)?.classList.add('inactive');
			}

			window.document.getElementById(`slide-article-richtext-1`).classList.add('fade-out-right-animate');
			window.document.getElementById(`slide-article-richtext-2`).classList.add('fade-out-right-animate');
			window.document.getElementById(`slide-article-richtext-3`).classList.add('fade-out-right-animate');
			window.document.getElementById(`slide-article-richtext-4`).classList.add('fade-out-right-animate');
			window.document.getElementById(`slide-article-richtext-${number}`).classList.remove('fade-out-right-animate');
			window.document.getElementById(`slide-article-richtext-${number}`).classList.add('fade-in-right-animate');

			// window.document.querySelectorAll(`#slide-article-1 > .element-from-blur`)?.classList.add('fade-out-right-animate');
			// window.document.querySelectorAll(`#slide-article`).classList.add('fade-out-right-animate');
		}
		nextTimeTrigger = '0';
	}
	const SecondSlideActive = (number) => {
		if (number > 5) {
			number = 1;
		} else if (number < 1) {
			number = 5;
		}

		// inactive
		if (beforeActiveNumber !== 0) {

			window.document.querySelectorAll(`#second-slide-spans-${number} > span > span.element-from-blur`).forEach(function (elem) {
				elem.classList.remove('element-from-blur-animate');
			})

			window.document.getElementById(`second-slide-video-${beforeActiveNumber}`)?.classList.remove('active');
			window.document.getElementById(`second-slide-article-${beforeActiveNumber}`)?.classList.remove('active');

			if (number === 5) {
				window.document.getElementById(`second-slide-video-5`)?.classList.remove('inactive');
				window.document.getElementById(`second-slide-article-5`)?.classList.remove('inactive');
			}
			window.document.getElementById(`second-slide-video-${beforeActiveNumber - 1}`)?.classList.remove('inactive');
			window.document.getElementById(`second-slide-article-${beforeActiveNumber - 1}`)?.classList.remove('inactive');
		}

		// active
		if (number > 0 || number < 0) {
			setBeforeActiveNumber(number);

			window.document.getElementById(`second-slide-video-${number}`)?.classList.add('active');
			window.document.getElementById(`second-slide-article-${number}`)?.classList.add('active');

			window.document.querySelectorAll(`#second-slide-spans-${number} > span > span.element-from-blur`).forEach(function (elem) {
				elem.classList.add('element-from-blur-animate');
			})

			if (number === 1) {
				// max number
				window.document.getElementById(`second-slide-video-5`)?.classList.add('inactive');
				window.document.getElementById(`second-slide-article-5`)?.classList.add('inactive');

			} else {
				window.document.getElementById(`second-slide-video-${number - 1}`)?.classList.add('inactive');
				window.document.getElementById(`second-slide-article-${number - 1}`)?.classList.add('inactive');
			}
		}
		nextTimeTrigger = '0';
	}

	const SlideTimeTrigger = (count) => {
		nextTimeTrigger = parseFloat(nextTimeTrigger) + parseFloat(count);
		nextTimeTrigger.toString();
		if (nextTimeTrigger >= 150) {
			nextTimeTrigger = '0';
			FirstSlideActive(beforeActiveNumber + 1)
			SecondSlideActive(beforeActiveNumber + 1)
			if (beforeActiveNumber === 1)
				setOursiteURL('https://valid.finance')
			if (beforeActiveNumber === 2)
				setOursiteURL('https://p2p.valid.finance/')
			if (beforeActiveNumber === 3)
				setOursiteURL('https://staking.valid.finance/')
			if (beforeActiveNumber === 4)
				setOursiteURL('https://thcnaza.com/')
		}
	}

	const [timeTrigger, setTimeTrigger] = useState(+new Date())
	useEffect(() => {
		SlideTimeTrigger(parseFloat(150 / 110));
		// const timer = setTimeout(() => setTimeTrigger(+new Date()), 50)
		const timer = setTimeout(() => setTimeTrigger(+new Date()), 50)
		return () => clearTimeout(timer)
	}, [timeTrigger])

	useEffect(() => {
		FirstSlideActive(beforeActiveNumber + 1)
		SecondSlideActive(beforeActiveNumber + 1)
	}, [])

	const hoverEffect = () => {
		window.document.querySelector('.item.active .relative .circle-animated circle').classList.add('circle-animation');
		window.document.querySelector('.item.active .dot-stick').classList.add('right-animation');
	}
	const noHoverEffect = () => {
		window.document.querySelector('.item.active .relative .circle-animated circle').classList.remove('circle-animation');
		window.document.querySelector('.item.active .stick-wrapper .dot-stick').classList.remove('right-animation');
	}
	const pathMove = () => {
		window.open(oursiteURL);
		// history.push({ pathname: oursiteURL, target: '_blank' });
	}


	return (
		<>

			<Header />
			{/* body start */}
			<div>
				<div className="landing">
					<div className="content">
						{/* first section start*/}
						<section className="z-10 overflow-hidden py-10 md:py-20 relative  undefined svelte-am2ffe lazyloaded">

							<div className="w-full ">
								<div className="mx-auto w-full  svelte-am2ffe">
									<div className="row justify-between svelte-1xwyt96" >

										{/* first section slider */}
										<section className="heroparticles z-0 relative svelte-njtwo6 slider-section ">
											<video id="slide-video-1" className="svelte-njtwo6 " poster="/assets/new-slide/secure.webp" preload="metadata" height="100%" width="100%" playsInline="" data-xblocker="passed" style={{ visibility: 'visible' }}>
												<source data-src="" type="video/webm" src="" />
												<source data-src="" type="video/mp4" src="" /> Your browser does not support video on HTML.
											</video>

											<video id="slide-video-2" className="svelte-njtwo6 " poster="/assets/new-slide/ox.jpg" preload="metadata" height="50%" width="100%" playsInline="" data-xblocker="passed" style={{ visibility: 'visible' }}>
												<source data-src="" type="video/webm" src="" />
												<source data-src="" type="video/mp4" src="" /> Your browser does not support video on HTML.
											</video>

											<video id="slide-video-3" className="svelte-njtwo6" poster="/assets/new-slide/10.png" preload="metadata" height="100%" width="100%" playsInline="" data-xblocker="passed" style={{ visibility: 'visible' }}>
												<source data-src="" type="video/webm" src="" />
												<source data-src="" type="video/mp4" src="" /> Your browser does not support video on HTML.
											</video>

											<video id="slide-video-4" className="svelte-njtwo6" poster="/assets/new-slide/gene.jpg" preload="metadata" height="100%" width="100%" playsInline="" data-xblocker="passed" style={{ visibility: 'visible' }}>
												<source data-src="" type="video/webm" src="" />
												<source data-src="" type="video/mp4" src="" /> Your browser does not support video on HTML.
											</video>




											{/* Gene therapy   gene.jpg */}
											<nav className="container svelte-njtwo6">
												<div onClick={() => { FirstSlideActive(beforeActiveNumber - 1) }} className="arrow-button left body font-semibold text-sm text-grey-8pm leading-none svelte-njtwo6">
													<svg width="50" height="50" viewBox="0 0 50 50" fill="#181e32" xmlns="http://www.w3.org/2000/svg" className="svelte-njtwo6">
														<circle cx="25" cy="25" r="24" transform="rotate(-180 25 25)" stroke="#697488" className="svelte-njtwo6"></circle>
														<path d="M27 31L21 25L27 19" stroke="white"></path>
													</svg>
												</div>
												<div onClick={() => { FirstSlideActive(beforeActiveNumber + 1) }} className="arrow-button right body font-semibold text-sm text-grey-8pm leading-none svelte-njtwo6">
													<svg width="50" height="50" viewBox="0 0 50 50" fill="#181e32" xmlns="http://www.w3.org/2000/svg" className="svelte-njtwo6">
														<circle cx="25" cy="25" r="24" stroke="#697488" className="svelte-njtwo6"></circle>
														<path d="M23 19L29 25L23 31" stroke="white"></path>
													</svg>
													<svg className="circle-animated svelte-njtwo6" height="50" width="50">
														<circle stroke="#00E0CA" fill="transparent" strokeWidth="1" strokeDasharray={`${nextTimeTrigger} 150`} style={{ strokeDashoffset: '0' }} r="24" cx="25" cy="25" className="svelte-njtwo6 animate"></circle>
													</svg>
												</div>
											</nav>

											<article id='slide-article-1' className="svelte-njtwo6 ">
												<div>
													<h1 className="letters-from-blur hero svelte-njtwo6" style={{ opacity: 1 }}>
														<span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.24883s' }}>S</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '0.873676s' }}>a</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.0708s' }}>f</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '0.654142s' }}>e</span>
														</span>
														<span>
															<span className="notranslate"> </span>
														</span>

														<br className="md:hidden" />
														<strong className='po-re'>
															<span className="notranslate element-from-blur" style={{ animationDuration: '0.977483s' }}>T</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.588641s' }}>o</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '2.0129s' }}>k</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.06901s' }}>e</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.522' }}>n</span>

															<svg id='slide-article-circle-1' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="svelte-njtwo6">
																<circle cx="50" cy="50" r="50" fill="#00E0CA"></circle>
															</svg>
														</strong>
													</h1>
													<div id='slide-article-richtext-1' className="richtext text-base leading-normal text-grey-4pm fade-in-right svelte-njtwo6">
														<div className="rich-text-block" style={{}}>
															<p>TRANSHUMANCOIN verified in blockchain ecosystem</p>
														</div>
													</div>
												</div>
											</article>
											<article id='slide-article-2' className="svelte-njtwo6 ">
												<div>
													<h1 className="letters-from-blur hero svelte-njtwo6" style={{ opacity: 1 }}><span>
														<span className="notranslate element-from-blur" style={{ animationDuration: '1.04933s' }}>P</span>
														<span className="notranslate element-from-blur" style={{ animationDuration: '1.77037s' }}>r</span>
														<span className="notranslate element-from-blur" style={{ animationDuration: '0.549797s' }}>i</span>
														<span className="notranslate element-from-blur" style={{ animationDuration: '1.19298s' }}>c</span>
														<span className="notranslate element-from-blur" style={{ animationDuration: '0.741999s' }}>e</span>
													</span>
														<span>
															<span className="notranslate"> </span>
														</span>
														<br className="md:hidden" />
														<strong className='po-re'>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.06548s' }}>A</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '0.964136s' }}>d</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '0.805026s' }}>v</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.59873s' }}>a</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '0.727543s' }}>n</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.39588s' }}>c</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.39588s' }}>e</span>
															<svg id='slide-article-circle-2' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="svelte-njtwo6 ">
																<circle cx="50" cy="50" r="50" fill="#00E0CA"></circle>
															</svg>
														</strong>
													</h1>
													<div id='slide-article-richtext-2' className="richtext-slide1 richtext text-base leading-normal text-grey-4pm fade-in-right svelte-njtwo6">
														<div className="rich-text-block" style={{}}>
															<p>TRANSHUMANCOIN increasing continues</p>
														</div>
													</div>
												</div>
											</article>
											<article id='slide-article-3' className="svelte-njtwo6 ">
												<div>
													<h1 className="letters-from-blur hero svelte-njtwo6" style={{ opacity: 1 }}><span>
														<span className="notranslate element-from-blur" style={{ animationDuration: '1.48176s' }}>F</span>
														<span className="notranslate element-from-blur" style={{ animationDuration: '1.28926s' }}>o</span>
														<span className="notranslate element-from-blur" style={{ animationDuration: '0.655029s' }}>r</span>
													</span>
														<span><span className="notranslate"> </span>
														</span>
														<br className="md:hidden" />
														<strong className='po-re'>
															<span className="notranslate element-from-blur" style={{ animationDuration: '0.794224s' }}>H</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.30495s' }}>a</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.50362s' }}>n</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.76469s' }}>d</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.05814s' }}>i</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.44582s' }}>c</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.40109s' }}>a</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.15432s' }}>p</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.15432s' }}>p</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.15432s' }}>e</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.15432s' }}>d</span>
															<svg id='slide-article-circle-3' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="svelte-njtwo6">
																<circle cx="50" cy="50" r="50" fill="#00E0CA"></circle>
															</svg>
														</strong>
													</h1>
													<div id='slide-article-richtext-3' className="richtext-slide1 richtext text-base leading-normal text-grey-4pm fade-in-right svelte-njtwo6">
														<div className="rich-text-block" style={{}}>
															<p>TRANSHUMANCOIN helps people securely navigate their digital lives</p>
														</div>
													</div>
												</div>
											</article>
											<article id='slide-article-4' className="svelte-njtwo6 ">
												<div>
													<h1 className="letters-from-blur hero svelte-njtwo6" style={{ opacity: 1 }}>
														<span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.48176s' }}>G</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.28926s' }}>e</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '0.655029s' }}>n</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '0.655029s' }}>e</span>
														</span>
														<span><span className="notranslate"> </span>
														</span>
														<br className="md:hidden" />
														<strong className='po-re'>
															<span className="notranslate element-from-blur" style={{ animationDuration: '0.794224s' }}>T</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.30495s' }}>h</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.50362s' }}>e</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.76469s' }}>r</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.05814s' }}>a</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.44582s' }}>p</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.40109s' }}>y</span>
															<svg id='slide-article-circle-4' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="svelte-njtwo6">
																<circle cx="50" cy="50" r="50" fill="#00E0CA"></circle>
															</svg>
														</strong>
													</h1>
													<div id='slide-article-richtext-4' className="richtext-slide1 richtext text-base leading-normal text-grey-4pm fade-in-right svelte-njtwo6">
														<div className="rich-text-block" style={{}}>
															<p>Gene therapy with TRANSHUMANCOIN for people</p>
														</div>
													</div>
												</div>
											</article>
										</section>
									</div>

								</div >
							</div >
						</section >
						{/* first section end*/}

						{/* coin slider start*/}
						<div className="relative z-10 overflow-hidden undefined svelte-am2ffe lazyloaded" style={{ background: 'center / cover no-repeat #293143ab' }}>
							<div className="livecoinwatch-widget-5 mt1" lcw-base="_THC" lcw-color-tx="#ffffff" lcw-marquee-1="coins" lcw-marquee-2="coins" lcw-marquee-items="10" ></div>
						</div>
						{/* coin slider end*/}

						{/* second section start*/}
						<div id='tokenomics_id'>
							<Tokenomics />
						</div>
						{/* second section end*/}

						<Benefit />

						<div id='buy_id'>
							<Buy />
						</div>

						{/* third section start */}
						<section id='oursite_id' className="z-10 overflow-hidden py-10 md:py-20 relative  undefined svelte-am2ffe lazyloaded" data-bg="">
							<div className="w-full ">
								<div className="mx-auto w-full  svelte-am2ffe">
									<div className="row justify-between svelte-1xwyt96">
										<section className="usecasesslider z-0 relative py-10 min-h-screen svelte-1vgghv3 slider-section">
											<div className="bg w-full h-full absolute top-0 left-0" id="bg-video-container">

												<video id='second-slide-video-1' height="50%" width="50%" poster="/assets/our-sites/valid.finance.png" className="svelte-1vgghv3" preload="metadata" playsInline="" loop="" data-xblocker="passed" style={{ visibility: 'visible' }}>
													<source data-src="" type="video/webm" src="" />
													<source data-src="" type="video/mp4" src="" /> Your browser does not support video on HTML.
												</video>

												<video id='second-slide-video-2' height="100%" width="100%" poster="/assets/our-sites/p2p.jpg" className="svelte-1vgghv3 active" preload="metadata" playsInline="" loop="" data-xblocker="passed" style={{ visibility: 'visible' }}>
													<source data-src="" type="video/webm" src="" />
													<source data-src="" type="video/mp4" src="" /> Your browser does not support video on HTML.
												</video>

												<video id='second-slide-video-3' height="100%" width="100%" poster="/assets/our-sites/staking.jpg" className="lazy svelte-1vgghv3" preload="metadata" playsInline="" loop="" data-xblocker="passed" style={{ visibility: 'visible' }}>
													<source data-src="" type="video/webm" />
													<source data-src="" type="video/mp4" /> Your browser does not support video on HTML.
												</video>

												<video id='second-slide-video-4' height="100%" width="100%" poster="/assets/our-sites/NFT.png" className="lazy svelte-1vgghv3" preload="metadata" playsInline="" loop="" data-xblocker="passed" style={{ visibility: 'visible' }}>
													<source data-src="" type="video/webm" />
													<source data-src="" type="video/mp4" /> Your browser does not support video on HTML.
												</video>


												<video id='second-slide-video-5' height="100%" width="100%" poster="/assets/our-sites/shop.jpg" className="lazy svelte-1vgghv3" preload="metadata" playsInline="" loop="" data-xblocker="passed" style={{ visibility: 'visible' }}>
													<source data-src="" type="video/webm" />
													<source data-src="" type="video/mp4" /> Your browser does not support video on HTML.
												</video>

												<div className="bg-filter-1 w-full h-full absolute top-0 left-0 svelte-1vgghv3"></div>
												<div className="bg-filter-2 w-full h-full absolute top-0 left-0 svelte-1vgghv3"></div>
											</div>

											<nav className="container svelte-1vgghv3">

												<div onClick={() => { SecondSlideActive(beforeActiveNumber - 1) }} className="arrow-button left body font-semibold text-sm text-grey-8pm leading-none svelte-1vgghv3">
													<svg width="50" height="50" viewBox="0 0 50 50" fill="#181e32" xmlns="http://www.w3.org/2000/svg" className="svelte-1vgghv3">
														<circle cx="25" cy="25" r="24" transform="rotate(-180 25 25)" stroke="#697488" fill="#697488" className="svelte-1vgghv3"></circle>
														<path d="M27 31L21 25L27 19" stroke="white" className="svelte-1vgghv3"></path>
													</svg>
												</div>
												<div onClick={() => { SecondSlideActive(beforeActiveNumber + 1) }} className="arrow-button right body font-semibold text-sm text-grey-8pm leading-none svelte-1vgghv3">
													<svg width="50" height="50" viewBox="0 0 50 50" fill="#181e32" xmlns="http://www.w3.org/2000/svg" className="svelte-1vgghv3">
														<circle cx="25" cy="25" r="24" stroke="#697488" fill="#697488" className="svelte-1vgghv3"></circle>
														<path d="M23 19L29 25L23 31" stroke="white" className="svelte-1vgghv3"></path>
													</svg>
													<svg className="circle-animated svelte-1vgghv3" height="50" width="50">
														<circle stroke="#00E0CA" fill="transparent" strokeDasharray={`${nextTimeTrigger} 150`} style={{ strokeDashoffset: 0 }} strokeWidth="1" r="24" cx="25" cy="25" className="svelte-1vgghv3 animate"></circle>
													</svg>
												</div>

												<div className="slides-titles svelte-1vgghv3">

													<div id='second-slide-article-1' className="item svelte-1vgghv3" >
														<div className="litle-title svelte-1vgghv3">Valid Finance Site</div>
														<div className="title relative svelte-1vgghv3">
															<span id='second-slide-spans-1' className="letters-from-blur remove-white-spaces inline-block" style={{ opacity: 1 }}>
																<span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '0.676401s' }}>F</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.08183s' }}>i</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.57304s' }}>n</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '0.871792s' }}>a</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '0.815315s' }}>n</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.06606s' }}>c</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.41958s' }}>e</span>
																</span>
															</span>
															<svg className="green-circle svelte-1vgghv3" height="180" width="180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
																<circle cx="50" cy="50" r="50" fill="#00E0CA" className="svelte-1vgghv3"></circle>
															</svg>
															<svg onClick={pathMove} onMouseEnter={() => hoverEffect()} onMouseLeave={() => noHoverEffect()} className="circle-animated svelte-1vgghv3" height="180" width="180">
																<circle stroke="#00E0CA" fill="transparent" strokeDasharray="0 556.0618996853934" style={{ opacity: 1 }} strokeWidth="3" r="88.5" cx="90" cy="90" className="svelte-1vgghv3"></circle>
															</svg>
														</div>
														<div className="stick-wrapper svelte-1vgghv3">
															<div className="dot-stick svelte-1vgghv3"></div>
														</div>
														<a target={'_blank'} rel='noreferrer' className="absolute text-xs font-semibold flex items-center svelte-1vgghv3" href={oursiteURL}>
															<div>Visit page</div>
															<svg className="arrow-svg ml-2 svelte-1vgghv3" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M1 11L6 6L1 1" stroke="#F6F8FC" strokeWidth="2" className="svelte-1vgghv3"></path>
															</svg>
														</a>
													</div>

													<div id='second-slide-article-2' className="item svelte-1vgghv3" >
														<div className="litle-title svelte-1vgghv3">P2P exchange Site</div>
														<div className="title relative svelte-1vgghv3">
															<span id='second-slide-spans-2' className="letters-from-blur remove-white-spaces inline-block" style={{ opacity: 1 }}>
																<span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.76352s' }}>P</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.09417s' }}>&nbsp;</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '0.58341s' }}>2</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.69671s' }}>&nbsp;</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.02268s' }}>P</span>
																</span>
															</span>
															<svg className="green-circle svelte-1vgghv3" height="180" width="180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
																<circle cx="50" cy="50" r="50" fill="#00E0CA" className="svelte-1vgghv3"></circle>
															</svg>
															<svg onClick={pathMove} onMouseEnter={() => hoverEffect()} onMouseLeave={() => noHoverEffect()} className="circle-animated svelte-1vgghv3" height="180" width="180">
																<circle stroke="#00E0CA" fill="transparent" strokeDasharray="556.0618996853934 556.0618996853934" style={{ strokeDashoffset: '-556.0618996853934', opacity: 1 }} strokeWidth="3" r="88.5" cx="90" cy="90" className="svelte-1vgghv3"></circle>
															</svg>
														</div>
														<div className="stick-wrapper svelte-1vgghv3">
															<div className="dot-stick svelte-1vgghv3"></div>
														</div>
														<a target={'_blank'} rel='noreferrer' className="absolute text-xs font-semibold flex items-center svelte-1vgghv3" href={oursiteURL}>
															<div>Visit page</div>
															<svg className="arrow-svg ml-2 svelte-1vgghv3" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M1 11L6 6L1 1" stroke="#F6F8FC" strokeWidth="2" className="svelte-1vgghv3"></path>
															</svg>
														</a>
													</div>

													<div id='second-slide-article-3' className="item svelte-1vgghv3">
														<div className="litle-title svelte-1vgghv3">Staking Site</div>
														<div className="title relative svelte-1vgghv3">
															<span id='second-slide-spans-3' className="letters-from-blur remove-white-spaces inline-block" style={{ opacity: 1 }}>
																<span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.2047s' }}>S</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.12896s' }}>t</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '0.786661s' }}>a</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '0.786661s' }}>k</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '0.786661s' }}>i</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '0.786661s' }}>n</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '0.786661s' }}>g</span>

																</span>
															</span>
															<svg className="green-circle svelte-1vgghv3" height="180" width="180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
																<circle cx="50" cy="50" r="50" fill="#00E0CA" className="svelte-1vgghv3"></circle>
															</svg>
															<svg onClick={pathMove} onMouseEnter={() => hoverEffect()} onMouseLeave={() => noHoverEffect()} className="circle-animated svelte-1vgghv3" height="180" width="180">
																<circle stroke="#00E0CA" fill="transparent" strokeDasharray="556.0618996853934 556.0618996853934" style={{ strokeDashoffset: '-556.0618996853934', opacity: 1 }} strokeWidth="3" r="88.5" cx="90" cy="90" className="svelte-1vgghv3"></circle>
															</svg>
														</div>
														<div className="stick-wrapper svelte-1vgghv3">
															<div className="dot-stick svelte-1vgghv3"></div>
														</div>
														<a target={'_blank'} rel='noreferrer' className="absolute text-xs font-semibold flex items-center svelte-1vgghv3" href={oursiteURL}>
															<div>Visit page</div>
															<svg className="arrow-svg ml-2 svelte-1vgghv3" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M1 11L6 6L1 1" stroke="#F6F8FC" strokeWidth="2" className="svelte-1vgghv3"></path>
															</svg>
														</a>
													</div>

													<div id='second-slide-article-4' className="item svelte-1vgghv3">
														<div className="litle-title svelte-1vgghv3">NAZA NFT Site</div>
														<div className="title relative svelte-1vgghv3">
															<span id='second-slide-spans-4' className="letters-from-blur remove-white-spaces inline-block" style={{ opacity: 1 }}>
																<span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.2047s' }}>N</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.12896s' }}>F</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '0.786661s' }}>T</span>
																	<span className="notranslate"></span>

																</span>
															</span>
															<svg className="green-circle svelte-1vgghv3" height="180" width="180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
																<circle cx="50" cy="50" r="50" fill="#00E0CA" className="svelte-1vgghv3"></circle>
															</svg>
															<svg onClick={pathMove} onMouseEnter={() => hoverEffect()} onMouseLeave={() => noHoverEffect()} className="circle-animated svelte-1vgghv3" height="180" width="180">
																<circle stroke="#00E0CA" fill="transparent" strokeDasharray="556.0618996853934 556.0618996853934" style={{ strokeDashoffset: '-556.0618996853934', opacity: 1 }} strokeWidth="3" r="88.5" cx="90" cy="90" className="svelte-1vgghv3"></circle>
															</svg>
														</div>
														<div className="stick-wrapper svelte-1vgghv3">
															<div className="dot-stick svelte-1vgghv3"></div>
														</div>
														<a target={'_blank'} rel='noreferrer' className="absolute text-xs font-semibold flex items-center svelte-1vgghv3" href={oursiteURL}>
															<div>Visit page</div>
															<svg className="arrow-svg ml-2 svelte-1vgghv3" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M1 11L6 6L1 1" stroke="#F6F8FC" strokeWidth="2" className="svelte-1vgghv3"></path>
															</svg>
														</a>
													</div>

													<div id='second-slide-article-5' className="item svelte-1vgghv3">
														<div className="litle-title svelte-1vgghv3">Shoping site</div>
														<div className="title relative svelte-1vgghv3">
															<span id='second-slide-spans-5' className="letters-from-blur remove-white-spaces inline-block" style={{ opacity: 1 }}>
																<span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.2047s' }}>S</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.12896s' }}>h</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '0.786661s' }}>o</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '0.786661s' }}>p</span>
																	<span className="notranslate"></span>

																</span>
															</span>
															<svg className="green-circle svelte-1vgghv3" height="180" width="180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
																<circle cx="50" cy="50" r="50" fill="#00E0CA" className="svelte-1vgghv3"></circle>
															</svg>
															<svg onClick={pathMove} onMouseEnter={() => hoverEffect()} onMouseLeave={() => noHoverEffect()} className="circle-animated svelte-1vgghv3" height="180" width="180">
																<circle stroke="#00E0CA" fill="transparent" strokeDasharray="556.0618996853934 556.0618996853934" style={{ strokeDashoffset: '-556.0618996853934', opacity: 1 }} strokeWidth="3" r="88.5" cx="90" cy="90" className="svelte-1vgghv3"></circle>
															</svg>
														</div>
														<div className="stick-wrapper svelte-1vgghv3">
															<div className="dot-stick svelte-1vgghv3"></div>
														</div>
														<a target={'_blank'} rel='noreferrer' className="absolute text-xs font-semibold flex items-center svelte-1vgghv3" href={oursiteURL}>
															<div>Visit page</div>
															<svg className="arrow-svg ml-2 svelte-1vgghv3" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M1 11L6 6L1 1" stroke="#F6F8FC" strokeWidth="2" className="svelte-1vgghv3"></path>
															</svg>
														</a>
													</div>


												</div>
											</nav>

											{/* Explore Button*/}
											<div className="container static-content svelte-1vgghv3">
												<div className="text-center mx-auto md:max-w-xs">
													<div className="mb-8">
														<div className="eyebrow text-green-regular  svelte-11fnwb7">security</div>
													</div>
													<h2 className="text-grey-daylight svelte-1vgghv3" id="iota-enables-new-possibilities">Our crypto sites</h2></div>
												<div className="mx-auto">
													<a target={'_blank'} rel='noreferrer' className="btn inline-block cursor-pointer ghost svelte-lt6zv4" href={oursiteURL}>
														<div className="py-4 px-6 grow">Explore Now</div>
													</a>
												</div>
											</div>

										</section>
									</div>
								</div>
							</div>
						</section>
						{/* third section end */}

						<AttackCoin />

						{/* whitepaper start*/}
						<div id='whitepaper_id'>
							<Whitepaper />
						</div>
						{/* whitepaper end*/}

						{/* swap start*/}
						<div id='swap_id' className="relative z-10 overflow-hidden undefined svelte-am2ffe lazyloaded" style={{ width: '100%', height: '800px' }}>
							<iframe src="https://swap.swft.pro/#/?sourceFlag=THC" width="100%" height="100%" style={{ border: 'none' }} />
						</div>
						{/* swap end*/}

						{/* partnership start */}
						<div id='swiper_id' className="relative z-10 overflow-hidden undefined svelte-am2ffe lazyloaded" >
							<div className="partners-logo-section p-tb light-gray-bg">
								<div className="container pt1 pb1">
									<div className="text-center">
										<h2 className="section-heading">Where to Find Transhuman Coin</h2>
									</div>
									<div className="brand-logos owl-carousel">
										<Swiper
											spaceBetween={50}
											slidesPerView={4}
											autoplay={{
												delay: 2500,
												disableOnInteraction: false,
											}}
											modules={[Autoplay]}
											rewind={true}
										>
											<SwiperSlide>
												<img src="/assets/partner/brand-logo-dark1.png" alt="Brand Logo 1" />
											</SwiperSlide>
											<SwiperSlide>
												<img src="/assets/partner/brand-logo-dark2.png" alt="Brand Logo 2" />
											</SwiperSlide>
											<SwiperSlide>
												<img src="/assets/partner/brand-logo-dark5.png" alt="Brand Logo 5" />
											</SwiperSlide>
											<SwiperSlide>
												<img src="/assets/partner/brand-logo-dark4.png" alt="Brand Logo 4" />
											</SwiperSlide>
											<SwiperSlide>
												<img src="/assets/partner/brand-logo-dark3.png" alt="Brand Logo 3" />
											</SwiperSlide>
											<SwiperSlide>
												<img src="/assets/partner/brand-logo-6.png" alt="Brand Logo 6" />
											</SwiperSlide>
											<SwiperSlide>
												<img src="/assets/partner/brand-logo-7.png" alt="Brand Logo 7" />
											</SwiperSlide>

											{/*  */}
											<SwiperSlide>
												<img src="/assets/partner/brand-logo-dark1.png" alt="Brand Logo 1" />
											</SwiperSlide>
											<SwiperSlide>
												<img src="/assets/partner/brand-logo-dark2.png" alt="Brand Logo 2" />
											</SwiperSlide>
											<SwiperSlide>
												<img src="/assets/partner/brand-logo-dark5.png" alt="Brand Logo 5" />
											</SwiperSlide>
											<SwiperSlide>
												<img src="/assets/partner/brand-logo-dark4.png" alt="Brand Logo 4" />
											</SwiperSlide>
											<SwiperSlide>
												<img src="/assets/partner/brand-logo-dark3.png" alt="Brand Logo 3" />
											</SwiperSlide>
											<SwiperSlide>
												<img src="/assets/partner/brand-logo-6.png" alt="Brand Logo 6" />
											</SwiperSlide>
											<SwiperSlide>
												<img src="/assets/partner/brand-logo-7.png" alt="Brand Logo 7" />
											</SwiperSlide>

										</Swiper>
									</div>
								</div>
							</div>
						</div>
						{/* partnership end*/}

						<div id='team_id'>
							<Team />
						</div>

						<div id='faq_id'>
							<Faq />
						</div>

						<div id='roadmap_id'>
							<Roadmap />
						</div>

						<Footer />

					</div >
				</div >
			</div >
			{/* body end */}

		</>

	)
}
export default Home;