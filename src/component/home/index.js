import { RightArrow } from '../../assets/svg/svg';
import '../../assets/css/home.css';

import { useEffect, useState } from 'react';
import { useWallet, UseWalletProvider } from 'use-wallet'
import { useBlockchainContext } from '../../contexts';

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Navigation } from "swiper";

import Q1 from "./sections/q1";
import Q2 from "./sections/q2";
import Footer from './sections/footer';
import Header from './sections/header';

var nextTimeTrigger = '0';
function Home() {
	const [state, { dispatch }] = useBlockchainContext();
	const wallet = useWallet()
	const blockNumber = wallet.getBlockNumber();
	useEffect(() => {
		console.log(wallet.account)
	}, [wallet.status, wallet.account])

	const [beforeActiveNumber, setBeforeActiveNumber] = useState(0);

	const FirstSlideActive = (number) => {
		if (number > 3) {
			number = 1;
		} else if (number < 1) {
			number = 3;
		}

		if (beforeActiveNumber !== 0) {

			window.document.querySelectorAll(`#slide-article-${beforeActiveNumber} > div > h1 .element-from-blur`).forEach(function (elem) {
				elem.classList.remove('element-from-blur-animate');
			})

			window.document.getElementById(`slide-video-${beforeActiveNumber}`)?.classList.remove('active');
			window.document.getElementById(`slide-article-${beforeActiveNumber}`)?.classList.remove('active');
			window.document.getElementById(`slide-article-circle-${beforeActiveNumber}`)?.classList.remove('circle-fade-in');

			if (number === 2) {
				window.document.getElementById(`slide-video-3`)?.classList.remove('inactive');
				window.document.getElementById(`slide-article-3`)?.classList.remove('inactive');
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
				window.document.getElementById(`slide-video-3`)?.classList.add('inactive');
				window.document.getElementById(`slide-article-3`)?.classList.add('inactive');

			} else {
				window.document.getElementById(`slide-video-${number - 1}`)?.classList.add('inactive');
				window.document.getElementById(`slide-article-${number - 1}`)?.classList.add('inactive');
			}

			window.document.getElementById(`slide-article-richtext-1`).classList.add('fade-out-right-animate');
			window.document.getElementById(`slide-article-richtext-2`).classList.add('fade-out-right-animate');
			window.document.getElementById(`slide-article-richtext-3`).classList.add('fade-out-right-animate');
			window.document.getElementById(`slide-article-richtext-${number}`).classList.remove('fade-out-right-animate');
			window.document.getElementById(`slide-article-richtext-${number}`).classList.add('fade-in-right-animate');

			// window.document.querySelectorAll(`#slide-article-1 > .element-from-blur`)?.classList.add('fade-out-right-animate');
			// window.document.querySelectorAll(`#slide-article`).classList.add('fade-out-right-animate');
		}
		nextTimeTrigger = '0';
	}
	// useEffect(() => {

	// }, [nextTimeTrigger])

	const FirstSlideTimeTrigger = (count) => {
		nextTimeTrigger = parseFloat(nextTimeTrigger) + parseFloat(count);
		nextTimeTrigger.toString();
		if (nextTimeTrigger >= 150) {
			nextTimeTrigger = '0';
		}
	}

	const [timeTrigger, setTimeTrigger] = useState(+new Date())
	useEffect(() => {
		FirstSlideTimeTrigger(parseFloat(150 / 110));
		const timer = setTimeout(() => setTimeTrigger(+new Date()), 50)
		if (nextTimeTrigger >= 150)
			setTimeTrigger(null);
		return () => clearTimeout(timer)
	}, [timeTrigger])

	const [time, setTime] = useState(+new Date())
	useEffect(() => {
		FirstSlideActive(beforeActiveNumber + 1)

		const timer = setTimeout(() => setTime(+new Date()), 7000)
		return () => clearTimeout(timer)
	}, [time])

	return (
		<>

			<Header />
			{/* body start */}
			<div>
				<div className="landing">
					<div className="content">
						<section className="z-10 overflow-hidden py-10 md:py-20 relative  undefined svelte-am2ffe lazyloaded">

							<div className="w-full ">
								<div className="mx-auto w-full  svelte-am2ffe">
									<div className="row justify-between svelte-1xwyt96" >

										{/* first section slider */}
										<section className="heroparticles z-0 relative svelte-njtwo6 slider-section ">

											<video id="slide-video-1" className="svelte-njtwo6 " poster="/assets/first-slide/earth.jpg" preload="metadata" height="100%" width="100%" playsInline="" data-xblocker="passed" style={{ visibility: 'visible' }}>
												<source data-src="https://videos.ctfassets.net/xit7f234flxz/vWgyEvbf4sULsQJPaIKqf/a32fcfbefb146832045cb338f9b210b0/earth.webm" type="video/webm" src="https://videos.ctfassets.net/xit7f234flxz/vWgyEvbf4sULsQJPaIKqf/a32fcfbefb146832045cb338f9b210b0/earth.webm" />
												<source data-src="https://videos.ctfassets.net/xit7f234flxz/1dFj68bPRRDOJzSPMOj1Ob/d7e6164137c9af6f3b3ec8b337c7580e/earth.mp4" type="video/mp4" src="https://videos.ctfassets.net/xit7f234flxz/1dFj68bPRRDOJzSPMOj1Ob/d7e6164137c9af6f3b3ec8b337c7580e/earth.mp4" /> Your browser does not support video on HTML.
											</video>

											<video id="slide-video-2" className="svelte-njtwo6 " poster="/assets/first-slide/woman.jpg" preload="metadata" height="100%" width="100%" playsInline="" data-xblocker="passed" style={{ visibility: 'visible' }}>
												<source data-src="https://videos.ctfassets.net/xit7f234flxz/7BqsHwcJ0cjnSY77lhYyO7/5d5d9c6688a791d21cc651fa54f2896c/woman.webm" type="video/webm" src="https://videos.ctfassets.net/xit7f234flxz/7BqsHwcJ0cjnSY77lhYyO7/5d5d9c6688a791d21cc651fa54f2896c/woman.webm" />
												<source data-src="https://videos.ctfassets.net/xit7f234flxz/1PO5rcY0JekmSu3nthvwOd/840fca76899602b16dd2732e68789773/woman.mp4" type="video/mp4" src="https://videos.ctfassets.net/xit7f234flxz/1PO5rcY0JekmSu3nthvwOd/840fca76899602b16dd2732e68789773/woman.mp4" /> Your browser does not support video on HTML.
											</video>

											<video id="slide-video-3" className="svelte-njtwo6" poster="/assets/first-slide/machine.jpg" preload="metadata" height="100%" width="100%" playsInline="" data-xblocker="passed" style={{ visibility: 'visible' }}>
												<source data-src="https://videos.ctfassets.net/xit7f234flxz/5oS9766ujenwwCjpiBQCQl/0669597bf8130c9ac44d32fa683e7a35/machine.webm" type="video/webm" src="https://videos.ctfassets.net/xit7f234flxz/5oS9766ujenwwCjpiBQCQl/0669597bf8130c9ac44d32fa683e7a35/machine.webm" />
												<source data-src="https://videos.ctfassets.net/xit7f234flxz/581ZwxnzRMowebLVdaAZ1S/3a362c13a633111efed4ad7d966ce61f/machine.mp4" type="video/mp4" src="https://videos.ctfassets.net/xit7f234flxz/581ZwxnzRMowebLVdaAZ1S/3a362c13a633111efed4ad7d966ce61f/machine.mp4" /> Your browser does not support video on HTML.
											</video>

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
															<span className="notranslate element-from-blur" style={{ animationDuration: '0.873676s' }}>e</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.0708s' }}>c</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '0.654142s' }}>u</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '0.981314s' }}>r</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.58822s' }}>i</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.43849s' }}>n</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.07829s' }}>g</span>
														</span>

														<span>
															<span className="notranslate"> </span>
														</span>

														<br className="md:hidden" />
														<strong className='po-re'>
															<span className="notranslate element-from-blur" style={{ animationDuration: '0.977483s' }}>D</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '0.888641s' }}>a</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.0129s' }}>t</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.06901s' }}>a</span>
															<svg id='slide-article-circle-1' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="svelte-njtwo6">
																<circle cx="50" cy="50" r="50" fill="#00E0CA"></circle>
															</svg>
														</strong>
													</h1>
													<div id='slide-article-richtext-1' className="richtext text-base leading-normal text-grey-4pm fade-in-right svelte-njtwo6">
														<div className="rich-text-block" style={{}}>
															<p>IOTA protects the integrity and verifiability of data</p>
														</div>
													</div>
												</div>
											</article>
											<article id='slide-article-2' className="svelte-njtwo6 ">
												<div>
													<h1 className="letters-from-blur hero svelte-njtwo6" style={{ opacity: 1 }}><span>
														<span className="notranslate element-from-blur" style={{ animationDuration: '1.04933s' }}>E</span>
														<span className="notranslate element-from-blur" style={{ animationDuration: '1.77037s' }}>m</span>
														<span className="notranslate element-from-blur" style={{ animationDuration: '0.549797s' }}>p</span>
														<span className="notranslate element-from-blur" style={{ animationDuration: '1.19298s' }}>o</span>
														<span className="notranslate element-from-blur" style={{ animationDuration: '0.741999s' }}>w</span>
														<span className="notranslate element-from-blur" style={{ animationDuration: '1.2466s' }}>e</span>
														<span className="notranslate element-from-blur" style={{ animationDuration: '1.07501s' }}>r</span>
														<span className="notranslate element-from-blur" style={{ animationDuration: '0.832453s' }}>i</span>
														<span className="notranslate element-from-blur" style={{ animationDuration: '0.960831s' }}>n</span>
														<span className="notranslate element-from-blur" style={{ animationDuration: '0.79604s' }}>g</span>
													</span>
														<span>
															<span className="notranslate"> </span>
														</span>
														<br className="md:hidden" />
														<strong className='po-re'>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.06548s' }}>P</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '0.964136s' }}>e</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '0.805026s' }}>o</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.59873s' }}>p</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '0.727543s' }}>l</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.39588s' }}>e</span>
															<svg id='slide-article-circle-2' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="svelte-njtwo6 ">
																<circle cx="50" cy="50" r="50" fill="#00E0CA"></circle>
															</svg>
														</strong>
													</h1>
													<div id='slide-article-richtext-2' className="richtext-slide1 richtext text-base leading-normal text-grey-4pm fade-in-right svelte-njtwo6">
														<div className="rich-text-block" style={{}}>
															<p>IOTA helps people securely navigate their digital lives</p>
														</div>
													</div>
												</div>
											</article>
											<article id='slide-article-3' className="svelte-njtwo6 ">
												<div>
													<h1 className="letters-from-blur hero svelte-njtwo6" style={{ opacity: 1 }}><span>
														<span className="notranslate element-from-blur" style={{ animationDuration: '1.48176s' }}>C</span>
														<span className="notranslate element-from-blur" style={{ animationDuration: '1.28926s' }}>o</span>
														<span className="notranslate element-from-blur" style={{ animationDuration: '0.655029s' }}>n</span>
														<span className="notranslate element-from-blur" style={{ animationDuration: '1.03228s' }}>n</span>
														<span className="notranslate element-from-blur" style={{ animationDuration: '1.18039s' }}>e</span>
														<span className="notranslate element-from-blur" style={{ animationDuration: '0.637465s' }}>c</span>
														<span className="notranslate element-from-blur" style={{ animationDuration: '1.36875s' }}>t</span>
														<span className="notranslate element-from-blur" style={{ animationDuration: '1.55919s' }}>i</span>
														<span className="notranslate element-from-blur" style={{ animationDuration: '1.32412s' }}>n</span>
														<span className="notranslate element-from-blur" style={{ animationDuration: '1.71159s' }}>g</span>
													</span>
														<span><span className="notranslate"> </span>
														</span>
														<br className="md:hidden" />
														<strong className='po-re'>
															<span className="notranslate element-from-blur" style={{ animationDuration: '0.794224s' }}>M</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.30495s' }}>a</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.50362s' }}>c</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.76469s' }}>h</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.05814s' }}>i</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.44582s' }}>n</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.40109s' }}>e</span>
															<span className="notranslate element-from-blur" style={{ animationDuration: '1.15432s' }}>s</span>
															<svg id='slide-article-circle-3' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="svelte-njtwo6">
																<circle cx="50" cy="50" r="50" fill="#00E0CA"></circle>
															</svg>
														</strong>
													</h1>
													<div id='slide-article-richtext-3' className="richtext-slide1 richtext text-base leading-normal text-grey-4pm fade-in-right svelte-njtwo6">
														<div className="rich-text-block" style={{}}>
															<p>IOTA connects IoT with secure data and value exchange</p>
														</div>
													</div>
												</div>
											</article>
										</section>
									</div>


									<div className="row justify-baseline svelte-1xwyt96 pt0 pb0">
										<section className="fastnews-section w-full md:absolute bottom-0 left-0 svelte-vk4bqe">
											<div className="container mx-auto flex justify-center items-center lg:block">
												<svg className="lg:hidden prev mr-4 svelte-vk4bqe" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M7 1L2 6L7 11" stroke="#C3D0E4" strokeWidth="1.72854"></path>
												</svg>
												<div className="grow overflow-hidden lg:px-0 lg:w-full">
													<Swiper
														rewind={true}
														navigation={true}
														modules={[Navigation]}
														className="swiper-slide"
													>
														<SwiperSlide>Slide 1</SwiperSlide>
														<SwiperSlide>Slide 2</SwiperSlide>
														<SwiperSlide>Slide 3</SwiperSlide>
														<SwiperSlide>Slide 4</SwiperSlide>
														<SwiperSlide>Slide 5</SwiperSlide>
														<SwiperSlide>Slide 6</SwiperSlide>
														<SwiperSlide>Slide 7</SwiperSlide>
														<SwiperSlide>Slide 8</SwiperSlide>
														<SwiperSlide>Slide 9</SwiperSlide>
													</Swiper>

												</div>
												<svg className="lg:hidden next ml-4 svelte-vk4bqe" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M1 11L6 6L1 1" stroke="#C3D0E4" strokeWidth="1.72854"></path>
												</svg>
												<div className="swiper-pagination md:hidden svelte-vk4bqe"></div>
											</div>
										</section >
									</div >
								</div >
							</div >
						</section >



						{/* second section */}
						<Q1 />

						{/* third section start */}
						<section className="z-10 overflow-hidden py-10 md:py-20 relative  undefined svelte-am2ffe lazyloaded" data-bg="">
							<div className="w-full ">
								<div className="mx-auto w-full  svelte-am2ffe">
									<div className="row justify-between svelte-1xwyt96">
										<section className="usecasesslider z-0 relative py-10 min-h-screen svelte-1vgghv3 slider-section">
											<div className="bg w-full h-full absolute top-0 left-0" id="bg-video-container">

												<video height="100%" width="100%" id="usecasesslidervideo-0" poster="https://images.ctfassets.net/xit7f234flxz/6KWqLODkUKeA4lf8iwXvdn/addd7e4803bbfd62f1bd6262e3d57414/social.jpg" className="svelte-1vgghv3" preload="metadata" playsInline="" loop="" data-xblocker="passed" style={{ visibility: 'visible' }}>
													<source data-src="https://videos.ctfassets.net/xit7f234flxz/3k3jVHqT8dXNlrOocLnhsJ/4ae90b49c9d38bc85d316fe43c3c231b/social.webm" type="video/webm" src="https://videos.ctfassets.net/xit7f234flxz/3k3jVHqT8dXNlrOocLnhsJ/4ae90b49c9d38bc85d316fe43c3c231b/social.webm" />
													<source data-src="https://videos.ctfassets.net/xit7f234flxz/kn00AEG4RJQNBRaMN0aS0/1fa4a089a715c19ba5c00acbb5214d6f/social.mp4" type="video/mp4" src="https://videos.ctfassets.net/xit7f234flxz/kn00AEG4RJQNBRaMN0aS0/1fa4a089a715c19ba5c00acbb5214d6f/social.mp4" /> Your browser does not support video on HTML.
												</video>

												<video height="100%" width="100%" id="usecasesslidervideo-1" poster="https://images.ctfassets.net/xit7f234flxz/2e7907UeHHohA85E8gry17/7d8cb3ec317fb06e970c7d525de455d1/mobility.jpg" className="svelte-1vgghv3 active" preload="metadata" playsInline="" loop="" data-xblocker="passed" style={{ visibility: 'visible' }}>
													<source data-src="https://videos.ctfassets.net/xit7f234flxz/qGQX8q5vuQu52AmH5LCSv/6a0b39c81cf12869067340c467e84468/monility.webm" type="video/webm" src="https://videos.ctfassets.net/xit7f234flxz/qGQX8q5vuQu52AmH5LCSv/6a0b39c81cf12869067340c467e84468/monility.webm" />
													<source data-src="https://videos.ctfassets.net/xit7f234flxz/F6TGcJFxEEJx3L8UmEXBX/54dfc36742ce61f007051555daf544e7/mobility.mp4" type="video/mp4" src="https://videos.ctfassets.net/xit7f234flxz/F6TGcJFxEEJx3L8UmEXBX/54dfc36742ce61f007051555daf544e7/mobility.mp4" /> Your browser does not support video on HTML.
												</video>

												<video height="100%" width="100%" id="usecasesslidervideo-2" poster="https://images.ctfassets.net/xit7f234flxz/2pK0rrFJVdgBUE7ukFHAn0/bae60d7f96ac529e28a044cb2770d544/smartcity.jpg" className="lazy svelte-1vgghv3" preload="metadata" playsInline="" loop="" data-xblocker="passed" style={{ visibility: 'visible' }}>
													<source data-src="https://videos.ctfassets.net/xit7f234flxz/3dITuhCXLn7MKFDx6AU5GA/476041600c8fff319ff6d516175ef630/smartcity.webm" type="video/webm" />
													<source data-src="https://videos.ctfassets.net/xit7f234flxz/3h4ZducPhhxOa6dzQMgLRU/591dad0e9150f5e730a8d1c043923d65/smartcity.mp4" type="video/mp4" /> Your browser does not support video on HTML.
												</video>

												<video height="100%" width="100%" id="usecasesslidervideo-3" poster="https://images.ctfassets.net/xit7f234flxz/3BNqilE9yn2hEOsaHwOOkO/94d9603a8f570890e760d951d0cfea2e/globaltrade.jpg" className="lazy svelte-1vgghv3" preload="metadata" playsInline="" loop="" data-xblocker="passed" style={{ visibility: 'visible' }}>
													<source data-src="https://videos.ctfassets.net/xit7f234flxz/7gfDMrDXjAvTkJHRMguCmM/64d617bff932d363d7909ecc44e38f16/Globaltrade.webm" type="video/webm" />
													<source data-src="https://videos.ctfassets.net/xit7f234flxz/6zOLFXrbaZVCWaUGmC3JCM/d7e4339c598582cd4012536453026429/Globaltrade.mp4" type="video/mp4" /> Your browser does not support video on HTML.
												</video>

												<video height="100%" width="100%" id="usecasesslidervideo-4" poster="https://images.ctfassets.net/xit7f234flxz/47T5G00rAezehXz5zqCUqg/130646026670fd8afba3c2978c61ba12/ezgif-frame-001.jpg" className="lazy svelte-1vgghv3" preload="metadata" playsInline="" loop="" data-xblocker="passed" style={{ visibility: 'visible' }}>
													<source data-src="https://videos.ctfassets.net/xit7f234flxz/4ipTusDZJr2VdUZpoGLbBN/d670f19ce43aca719f82cc04066904bd/id.webm" type="video/webm" />
													<source data-src="https://videos.ctfassets.net/xit7f234flxz/403v8Whd12lnh42OrC4tu3/8cf0c60fef32a7aba79e8ed2615d5b8e/ID_bg_video.mp4" type="video/mp4" /> Your browser does not support video on HTML.
												</video>

												<div className="bg-filter-1 w-full h-full absolute top-0 left-0 svelte-1vgghv3"></div>
												<div className="bg-filter-2 w-full h-full absolute top-0 left-0 svelte-1vgghv3"></div>
											</div>

											<nav className="container svelte-1vgghv3">
												<div className="arrow-button left body font-semibold text-sm text-grey-8pm leading-none svelte-1vgghv3">
													<svg width="50" height="50" viewBox="0 0 50 50" fill="#181e32" xmlns="http://www.w3.org/2000/svg" className="svelte-1vgghv3">
														<circle cx="25" cy="25" r="24" transform="rotate(-180 25 25)" stroke="#697488" fill="#697488" className="svelte-1vgghv3"></circle>
														<path d="M27 31L21 25L27 19" stroke="white" className="svelte-1vgghv3"></path>
													</svg>
												</div>
												<div className="arrow-button right body font-semibold text-sm text-grey-8pm leading-none svelte-1vgghv3">
													<svg width="50" height="50" viewBox="0 0 50 50" fill="#181e32" xmlns="http://www.w3.org/2000/svg" className="svelte-1vgghv3">
														<circle cx="25" cy="25" r="24" stroke="#697488" fill="#697488" className="svelte-1vgghv3"></circle>
														<path d="M23 19L29 25L23 31" stroke="white" className="svelte-1vgghv3"></path>
													</svg>
													<svg className="circle-animated svelte-1vgghv3" height="50" width="50">
														<circle stroke="#00E0CA" fill="transparent" strokeDasharray="150.79644737231007 150.79644737231007" style={{ strokeDashoffset: 0 }} strokeWidth="1" r="24" cx="25" cy="25" className="svelte-1vgghv3 animate"></circle>
													</svg>
												</div>
												<div className="slides-titles svelte-1vgghv3">
													<div className="item svelte-1vgghv3 inactive" key="slide-title-0">
														<div className="litle-title svelte-1vgghv3">Social Impact</div>
														<div className="title relative svelte-1vgghv3">
															<span className="letters-from-blur remove-white-spaces inline-block" style={{ opacity: 1 }}>
																<span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '0.676401s' }}>S</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.08183s' }}>o</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.57304s' }}>c</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '0.871792s' }}>i</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '0.815315s' }}>a</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.06606s' }}>l</span>
																	<span className="notranslate"> </span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.41958s' }}>I</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.45987s' }}>m</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.20961s' }}>p</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '0.562904s' }}>a</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '0.949607s' }}>c</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.66807s' }}>t</span>
																</span>
															</span>
															<svg className="green-circle svelte-1vgghv3" height="180" width="180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
																<circle cx="50" cy="50" r="50" fill="#00E0CA" className="svelte-1vgghv3"></circle>
															</svg>
															<svg className="circle-animated svelte-1vgghv3" height="180" width="180">
																<circle stroke="#00E0CA" fill="transparent" strokeDasharray="556.0618996853934 556.0618996853934" style={{ strokeDashoffset: '-556.0618996853934', opacity: 1 }} strokeWidth="3" r="88.5" cx="90" cy="90" className="svelte-1vgghv3"></circle>
															</svg>
														</div>
														<div className="stick-wrapper svelte-1vgghv3">
															<div className="dot-stick svelte-1vgghv3"></div>
														</div>
														<a className="absolute text-xs font-semibold flex items-center svelte-1vgghv3" href="https://www.iota.org/foundation/social-impact">
															<div>Visit page</div>
															<svg className="arrow-svg ml-2 svelte-1vgghv3" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M1 11L6 6L1 1" stroke="#F6F8FC" strokeWidth="2" className="svelte-1vgghv3"></path>
															</svg>
														</a>
													</div>
													<div className="item svelte-1vgghv3 active" key="slide-title-1">
														<div className="litle-title svelte-1vgghv3">Mobility</div>
														<div className="title relative svelte-1vgghv3">
															<span className="letters-from-blur remove-white-spaces inline-block" style={{ opacity: 1 }}>
																<span>
																	<span className="notranslate element-from-blur element-from-blur-animate" style={{ animationDuration: '1.76352s' }}>M</span>
																	<span className="notranslate element-from-blur element-from-blur-animate" style={{ animationDuration: '1.09417s' }}>o</span>
																	<span className="notranslate element-from-blur element-from-blur-animate" style={{ animationDuration: '0.58341s' }}>b</span>
																	<span className="notranslate element-from-blur element-from-blur-animate" style={{ animationDuration: '1.69671s' }}>i</span>
																	<span className="notranslate element-from-blur element-from-blur-animate" style={{ animationDuration: '1.02268s' }}>l</span>
																	<span className="notranslate element-from-blur element-from-blur-animate" style={{ animationDuration: '0.922757s' }}>i</span>
																	<span className="notranslate element-from-blur element-from-blur-animate" style={{ animationDuration: '0.777282s' }}>t</span>
																	<span className="notranslate element-from-blur element-from-blur-animate" style={{ animationDuration: '0.701547s' }}>y</span>
																</span>
															</span>
															<svg className="green-circle svelte-1vgghv3" height="180" width="180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
																<circle cx="50" cy="50" r="50" fill="#00E0CA" className="svelte-1vgghv3"></circle>
															</svg>
															<svg className="circle-animated svelte-1vgghv3" height="180" width="180">
																<circle stroke="#00E0CA" fill="transparent" strokeDasharray="556.0618996853934 556.0618996853934" style={{ strokeDashoffset: '-556.0618996853934', opacity: 1 }} strokeWidth="3" r="88.5" cx="90" cy="90" className="svelte-1vgghv3"></circle>
															</svg>
														</div>
														<div className="stick-wrapper svelte-1vgghv3">
															<div className="dot-stick svelte-1vgghv3"></div>
														</div>
														<a className="absolute text-xs font-semibold flex items-center svelte-1vgghv3" href="https://www.iota.org/solutions/mobility-and-automotive">
															<div>Visit page</div>
															<svg className="arrow-svg ml-2 svelte-1vgghv3" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M1 11L6 6L1 1" stroke="#F6F8FC" strokeWidth="2" className="svelte-1vgghv3"></path>
															</svg>
														</a>
													</div>
													<div className="item svelte-1vgghv3" key="slide-title-2">
														<div className="litle-title svelte-1vgghv3">Smart Cities</div>
														<div className="title relative svelte-1vgghv3">
															<span className="letters-from-blur remove-white-spaces inline-block" style={{ opacity: 1 }}>
																<span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.08061s' }}>S</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.50116s' }}>m</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '0.711377s' }}>a</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '0.681355s' }}>r</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '0.975853s' }}>t</span>
																	<span className="notranslate"> </span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.2047s' }}>C</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.12896s' }}>i</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '0.786661s' }}>t</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.63236s' }}>i</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.25412s' }}>e</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.34388s' }}>s</span>
																</span>
															</span>
															<svg className="green-circle svelte-1vgghv3" height="180" width="180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
																<circle cx="50" cy="50" r="50" fill="#00E0CA" className="svelte-1vgghv3"></circle>
															</svg>
															<svg className="circle-animated svelte-1vgghv3" height="180" width="180">
																<circle stroke="#00E0CA" fill="transparent" strokeDasharray="556.0618996853934 556.0618996853934" style={{ strokeDashoffset: '-556.0618996853934', opacity: 1 }} strokeWidth="3" r="88.5" cx="90" cy="90" className="svelte-1vgghv3"></circle>
															</svg>
														</div>
														<div className="stick-wrapper svelte-1vgghv3">
															<div className="dot-stick svelte-1vgghv3"></div>
														</div>
														<a className="absolute text-xs font-semibold flex items-center svelte-1vgghv3" href="https://www.iota.org/solutions/smart-city">
															<div>Visit page</div>
															<svg className="arrow-svg ml-2 svelte-1vgghv3" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M1 11L6 6L1 1" stroke="#F6F8FC" strokeWidth="2" className="svelte-1vgghv3"></path>
															</svg>
														</a>
													</div>
													<div className="item svelte-1vgghv3" key="slide-title-3">
														<div className="litle-title svelte-1vgghv3">Global Trade</div>
														<div className="title relative svelte-1vgghv3">
															<span className="letters-from-blur remove-white-spaces inline-block" style={{ opacity: 1 }}>
																<span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.37088s' }}>G</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '0.601758s' }}>l</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '0.650971s' }}>o</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.63983s' }}>b</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.4332s' }}>a</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.37111s' }}>l</span>
																	<span className="notranslate"> </span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.35027s' }}>T</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.76656s' }}>r</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.30576s' }}>a</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.3018s' }}>d</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '0.966422s' }}>e</span>
																</span>

															</span>

															<svg className="green-circle svelte-1vgghv3" height="180" width="180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
																<circle cx="50" cy="50" r="50" fill="#00E0CA" className="svelte-1vgghv3"></circle>
															</svg>
															<svg className="circle-animated svelte-1vgghv3" height="180" width="180">
																<circle stroke="#00E0CA" fill="transparent" strokeDasharray="556.0618996853934 556.0618996853934" style={{ strokeDashoffset: '-556.0618996853934', opacity: 1 }} strokeWidth="3" r="88.5" cx="90" cy="90" className="svelte-1vgghv3"></circle>
															</svg>
														</div>
														<div className="stick-wrapper svelte-1vgghv3">
															<div className="dot-stick svelte-1vgghv3"></div>
														</div>
														<a className="absolute text-xs font-semibold flex items-center svelte-1vgghv3" href="https://www.iota.org/solutions/global-trade-and-supply-chains">
															<div>Visit page</div>
															<svg className="arrow-svg ml-2 svelte-1vgghv3" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M1 11L6 6L1 1" stroke="#F6F8FC" strokeWidth="2" className="svelte-1vgghv3"></path>
															</svg>
														</a>
													</div>
													<div className="item svelte-1vgghv3" key="slide-title-4">
														<div className="litle-title svelte-1vgghv3">Digital Identity</div>
														<div className="title relative svelte-1vgghv3">
															<span className="letters-from-blur remove-white-spaces inline-block" style={{ opacity: 1 }}>
																<span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.36978s' }}>D</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.59889s' }}>i</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.65354s' }}>g</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.52098s' }}>i</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.65783s' }}>t</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '0.848982s' }}>a</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.47478s' }}>l</span>
																	<span className="notranslate"> </span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.292s' }}>I</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.06539s' }}>d</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.16916s' }}>e</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '0.91185s' }}>n</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.42181s' }}>t</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.26533s' }}>i</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '1.08711s' }}>t</span>
																	<span className="notranslate element-from-blur" style={{ animationDuration: '0.761968s' }}>y</span>
																</span>
															</span>

															<svg className="green-circle svelte-1vgghv3" height="180" width="180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
																<circle cx="50" cy="50" r="50" fill="#00E0CA" className="svelte-1vgghv3"></circle>
															</svg>
															<svg className="circle-animated svelte-1vgghv3" height="180" width="180">
																<circle stroke="#00E0CA" fill="transparent" strokeDasharray="556.0618996853934 556.0618996853934" style={{ strokeDashoffset: '-556.0618996853934', opacity: 1 }} strokeWidth="3" r="88.5" cx="90" cy="90" className="svelte-1vgghv3"></circle>
															</svg>
														</div>
														<div className="stick-wrapper svelte-1vgghv3">
															<div className="dot-stick svelte-1vgghv3"></div>
														</div>
														<a className="absolute text-xs font-semibold flex items-center svelte-1vgghv3" href="https://www.iota.org/solutions/digital-identity">
															<div>Visit page</div>
															<svg className="arrow-svg ml-2 svelte-1vgghv3" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M1 11L6 6L1 1" stroke="#F6F8FC" strokeWidth="2" className="svelte-1vgghv3"></path>
															</svg>
														</a>
													</div>
												</div>
											</nav>
											<div className="cards-wrapper container flex justify-center svelte-1vgghv3">
												<div className="cards w-full justify-between svelte-1vgghv3">
													<div className="card flex flex-wrap justify-center text-white text-center svelte-1vgghv3">
														<div className="mb-2 image rounded-full flex justify-center items-center image flex justify-center items-center md:mb-4 svelte-1vgghv3">
															<img src="../../assets/second-slide/Sustainability.png" alt="Sustainability" />
														</div>
														<div className="title w-full text-sm font-normal md:text-xl md:mb-2 svelte-1vgghv3">Sustainability</div>
														<div className="w-full hidden md:block">
															<div className="rich-text-block" >
																<p>Harnessing the power of IoT to manage natural resources more sustainably.</p>
															</div>
														</div>
													</div>
													<div className="card flex flex-wrap justify-center text-white text-center svelte-1vgghv3">
														<div className="mb-2 image rounded-full flex justify-center items-center image flex justify-center items-center md:mb-4 svelte-1vgghv3">
															<img src="../../assets/second-slide/Fingerprint_Icon.png" alt="Identity" />
														</div>
														<div className="title w-full text-sm font-normal md:text-xl md:mb-2 svelte-1vgghv3">Identity</div>
														<div className="w-full hidden md:block">
															<div className="rich-text-block" >
																<p>Bringing digital identity beyond borders to all people.</p>
															</div>
														</div>
													</div>
													<div className="card flex flex-wrap justify-center text-white text-center svelte-1vgghv3">
														<div className="mb-2 image rounded-full flex justify-center items-center image flex justify-center items-center md:mb-4 svelte-1vgghv3">
															<img src="../../assets/second-slide/Citizen.png" alt="Citizen-Centric Governance" />
														</div>
														<div className="title w-full text-sm font-normal md:text-xl md:mb-2 svelte-1vgghv3">Citizen-Centric Governance</div>
														<div className="w-full hidden md:block">
															<div className="rich-text-block" >
																<p>Enabling more transparent and inclusive public services.</p>
															</div>
														</div>
													</div>
												</div>
												<div className="cards w-full justify-between svelte-1vgghv3 active">
													<div className="card flex flex-wrap justify-center text-white text-center svelte-1vgghv3">
														<div className="mb-2 image rounded-full flex justify-center items-center image flex justify-center items-center md:mb-4 svelte-1vgghv3">
															<img src="../../assets/second-slide/Car_Wallet.svg" alt="Car Wallets" />
														</div>
														<div className="title w-full text-sm font-normal md:text-xl md:mb-2 svelte-1vgghv3">Car Wallets</div>
														<div className="w-full hidden md:block">
															<div className="rich-text-block" >
																<p>In-built wallets allow cars to send and receive payments.</p>
															</div>
														</div>
													</div>
													<div className="card flex flex-wrap justify-center text-white text-center svelte-1vgghv3">
														<div className="mb-2 image rounded-full flex justify-center items-center image flex justify-center items-center md:mb-4 svelte-1vgghv3">
															<img src="../../assets/second-slide/Smart_Charging.svg" alt="Smart Charging" />
														</div>
														<div className="title w-full text-sm font-normal md:text-xl md:mb-2 svelte-1vgghv3">Smart Charging</div>
														<div className="w-full hidden md:block">
															<div className="rich-text-block" >
																<p>Electric vehicles can autonomously pay for charging.</p>
															</div>
														</div>
													</div>
													<div className="card flex flex-wrap justify-center text-white text-center svelte-1vgghv3">
														<div className="mb-2 image rounded-full flex justify-center items-center image flex justify-center items-center md:mb-4 svelte-1vgghv3">
															<img src="/assets/second-slide/Usage_Based_Insurance.svg" alt="Usage Based Insurance" />
														</div>
														<div className="title w-full text-sm font-normal md:text-xl md:mb-2 svelte-1vgghv3">Usage Based Insurance</div>
														<div className="w-full hidden md:block">
															<div className="rich-text-block" >
																<p>Insurance policies based on actual usage behaviours.</p>
															</div>
														</div>
													</div>
												</div>
												<div className="cards w-full justify-between svelte-1vgghv3">
													<div className="card flex flex-wrap justify-center text-white text-center svelte-1vgghv3">
														<div className="mb-2 image rounded-full flex justify-center items-center image flex justify-center items-center md:mb-4 svelte-1vgghv3">
															<img src="../../assets/second-slide/Urban_Mobility_Management.png" alt="Urban Mobility Management" />
														</div>
														<div className="title w-full text-sm font-normal md:text-xl md:mb-2 svelte-1vgghv3">Urban Mobility Management</div>
														<div className="w-full hidden md:block">
															<div className="rich-text-block" >
																<p>Use transport and infrastructure data for informed decision making.</p>
															</div>
														</div>
													</div>
													<div className="card flex flex-wrap justify-center text-white text-center svelte-1vgghv3">
														<div className="mb-2 image rounded-full flex justify-center items-center image flex justify-center items-center md:mb-4 svelte-1vgghv3">
															<img src="../../assets/second-slide/Open___Transparent_Data.png" alt="Open &amp; Transparent Data" />
														</div>
														<div className="title w-full text-sm font-normal md:text-xl md:mb-2 svelte-1vgghv3">Open &amp; Transparent Data</div>
														<div className="w-full hidden md:block">
															<div className="rich-text-block" >
																<p>Centrally display, manage and analyze available data.</p>
															</div>
														</div>
													</div>
													<div className="card flex flex-wrap justify-center text-white text-center svelte-1vgghv3">
														<div className="mb-2 image rounded-full flex justify-center items-center image flex justify-center items-center md:mb-4 svelte-1vgghv3">
															<img src="../../assets/second-slide/Peer_to_Peer_Collaboration.png" alt="Peer to Peer Collaboration" />
														</div>
														<div className="title w-full text-sm font-normal md:text-xl md:mb-2 svelte-1vgghv3">Peer to Peer Collaboration</div>
														<div className="w-full hidden md:block">
															<div className="rich-text-block" >
																<p>Build resilient infrastructure designed for the sharing economy.</p>
															</div>
														</div>
													</div>
												</div>
												<div className="cards w-full justify-between svelte-1vgghv3">
													<div className="card flex flex-wrap justify-center text-white text-center svelte-1vgghv3">
														<div className="mb-2 image rounded-full flex justify-center items-center image flex justify-center items-center md:mb-4 svelte-1vgghv3">
															<img src="../../assets/second-slide/Track___Trace.png" alt="Track &amp; Trace" />
														</div>
														<div className="title w-full text-sm font-normal md:text-xl md:mb-2 svelte-1vgghv3">Track &amp; Trace</div>
														<div className="w-full hidden md:block">
															<div className="rich-text-block" >
																<p>Share status throughout the supply chain with provenance data from the source.</p>
															</div>
														</div>
													</div>
													<div className="card flex flex-wrap justify-center text-white text-center svelte-1vgghv3">
														<div className="mb-2 image rounded-full flex justify-center items-center image flex justify-center items-center md:mb-4 svelte-1vgghv3">
															<img src="../../assets/second-slide/Customs___Border_Management.png" alt="Customs &amp; Border Management" />
														</div>
														<div className="title w-full text-sm font-normal md:text-xl md:mb-2 svelte-1vgghv3">Customs &amp; Border Management</div>
														<div className="w-full hidden md:block">
															<div className="rich-text-block" >
																<p>Upgrade trade certificates for international exchange.</p>
															</div>
														</div>
													</div>
													<div className="card flex flex-wrap justify-center text-white text-center svelte-1vgghv3">
														<div className="mb-2 image rounded-full flex justify-center items-center image flex justify-center items-center md:mb-4 svelte-1vgghv3">
															<img src="../../assets/second-slide/Digital_Twins.png" alt="Digital Twins" />
														</div>
														<div className="title w-full text-sm font-normal md:text-xl md:mb-2 svelte-1vgghv3">Digital Twins</div>
														<div className="w-full hidden md:block">
															<div className="rich-text-block" >
																<p>Turn any product, pallet, container or consignment into a digital twin.</p>
															</div>
														</div>
													</div>
												</div>
												<div className="cards w-full justify-between svelte-1vgghv3">
													<div className="card flex flex-wrap justify-center text-white text-center svelte-1vgghv3">
														<div className="mb-2 image rounded-full flex justify-center items-center image flex justify-center items-center md:mb-4 svelte-1vgghv3">
															<img src="../../assets/second-slide/Research_Data_Integrity.png" alt="Self Sovereign Identity" />
														</div>
														<div className="title w-full text-sm font-normal md:text-xl md:mb-2 svelte-1vgghv3">Self Sovereign Identity</div>
														<div className="w-full hidden md:block">
															<div className="rich-text-block" >
																<p>A borderless digital identity can be verified by anyone.</p>
															</div>
														</div>
													</div>
													<div className="card flex flex-wrap justify-center text-white text-center svelte-1vgghv3">
														<div className="mb-2 image rounded-full flex justify-center items-center image flex justify-center items-center md:mb-4 svelte-1vgghv3">
															<img src="../../assets/second-slide/Remote_Patient_Monitoring.png" alt="Identity Of Things" />
														</div>
														<div className="title w-full text-sm font-normal md:text-xl md:mb-2 svelte-1vgghv3">Identity Of Things</div>
														<div className="w-full hidden md:block">
															<div className="rich-text-block" >
																<p>Identities allow devices to prove their specifications and authenticity.</p>
															</div>
														</div>
													</div>
													<div className="card flex flex-wrap justify-center text-white text-center svelte-1vgghv3">
														<div className="mb-2 image rounded-full flex justify-center items-center image flex justify-center items-center md:mb-4 svelte-1vgghv3">
															<img src="../../assets/second-slide/Healthcare_Data_Exchange.png" alt="Regulatory Compliance" />
														</div>
														<div className="title w-full text-sm font-normal md:text-xl md:mb-2 svelte-1vgghv3">Regulatory Compliance</div>
														<div className="w-full hidden md:block">
															<div className="rich-text-block" >
																<p>Digital identities that meet data privacy regulations like GDPR.</p>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="container static-content svelte-1vgghv3">
												<div className="text-center mx-auto md:max-w-xs">
													<div className="mb-8">
														<div className="eyebrow text-green-regular  svelte-11fnwb7">Industries</div>
													</div>
													<h2 className="text-grey-daylight svelte-1vgghv3" id="iota-enables-new-possibilities">IOTA enables new possibilities</h2></div>
												<div className="mx-auto">
													<a target="_self" className="btn inline-block cursor-pointer ghost svelte-lt6zv4" href="https://www.iota.org/solutions/industries">
														<div className="py-4 px-6 grow">Explore more</div>
													</a>
												</div>
											</div>
										</section>
									</div>
								</div>
							</div>
						</section>

						{/* fourth section */}
						<Q2 />

						<Footer />

					</div >
				</div >
			</div >
			{/* body end */}

		</>

	)
}
export default Home;