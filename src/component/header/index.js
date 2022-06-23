// Material
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { useMetaMask } from "metamask-react";
import { useDispatch } from 'react-redux';
import { SetTokenName, SetNetwork } from '../../token/Token';
import { useHistory } from 'react-router-dom';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


// assets
// import '../../assets/css/header.css';
import { ScanSvg, CopyAddressSvg } from '../../assets/svg/svg';

// module
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useBlockchainContext } from "../../contexts";
import { useWallet } from 'use-wallet'
import { useLocation } from 'react-router-dom';
import MetaMaskOnboarding from '@metamask/onboarding';
const forwarderOrigin = 'http://localhost:3000';

const WalletInfo = (props) => {

    return (
            <div className='fixed h-full w-full flex justify-center items-center p-4 bottom-10 sm:bottom-20 z-20'>
                <div onClick={() => props.setWalletInfoModal(false)} className="top-0 fixed z-20 w-full left-0 h-full bg-gray-900 bg-opacity-60" style={{ backdropFilter: 'blur(1.2px)' }}></div>

                <div className="lg:left-50-256 w-full flex flex-col dark:bg-gray-800 bg-white rounded-2xl overflow-hidden z-40 border border-white dark:border-gray-600" style={{ maxWidth: '700px' }}>
                    <div className="px-6 py-4 border-b dark:border-gray-600 border-gray-200 bg-gray-50 dark:bg-gray-700 flex flex-row justify-between items-center">
                        <h4 className="dark:text-white text-gray-800 mb-2 mt-2">Your Wallet</h4>
                        <div className="flex flex-row">
                            <a onClick={() => props.setWalletInfoModal(false)} href className="dark:text-primary text-gray-400 hover:bg-gray-300 cursor-pointer rounded-full dark:hover:bg-primary p-1 hover:bg-opacity-20 dark:hover:bg-opacity-20 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="px-6 py-6 w-full overflow-y-auto max-h-96 dark:text-white text-gray-600">
                        <div className="flex items-start flex-col">
                            <h4 className="dark:text-white text-gray-700 pt-3 font-semibold hidden md:block">
                                {props.account}
                            </h4>
                            <h4 className="dark:text-white pt-3 font-semibold md:hidden block">{props.accountStyled}</h4>
                            <div className="flex flex-row mt-4">
                                <a href={`https://bscscan.com/address/${props.account}`} target="_blank" className="items-center mr-3 flex hover:underline caption rounded-lg text-primary-dark dark:text-primary" > BscScan
                                    <ScanSvg />
                                </a>
                                <a className="mr-3 hover:underline caption rounded-lg text-primary-dark dark:text-primary cursor-pointer">
                                    <span className="flex items-center"> Copy Address
                                        <CopyAddressSvg />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mx-4 my-4 font-heading text-sm flex justify-between border dark:border-primary border-primary-dark dark:border-opacity-40 border-opacity-40 bg-primary bg-opacity-5 bg-white rounded-md overflow-hidden">
                        <div className="flex flex-col w-full">
                            <div className="flex flex-col">
                                <div className="w-full">
                                    <div className="flex flex-col p-4 dark:text-gray-100 text-gray-600">
                                        <span className="caption rounded-md dark:text-primary text-primary-dark px-2 py-1 bg-primary bg-opacity-20 place-self-start mb-2">Balances &amp; Stakes</span>
                                        <span className="text-sm"> BNB Balance: {props.balanceOfBNB / 1000000000000000000} </span>
                                        {/* <span className="text-sm"> ETH Balance: {props.balanceOfETH} </span>
                                    <span className="text-sm"> Transhuman Balance: {props.balanceOfTHC} THC </span> */}
                                        {/* <span className="text-sm"> Tool access level: 0 </span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full overflow-y-auto max-h-96 dark:text-white text-gray-600">
                        <div className="px-6 py-4">
                            <button onClick={() => { props.walletDisconnect() }} className="m-auto flex hover:bg-opacity-100 hover:text-white rounded-lg py-3 px-4 bg-error-bright bg-opacity-20 text-error-bright text-white border border-error-bright transition-colors duration-200 ease-in-out"> Disconnect </button>
                        </div>
                    </div>
                </div>
            </div>
    )
}


function Header() {
    const [state, { dispatch }] = useBlockchainContext();
    const [networkChangeBtn, setNetworkChangeBtn] = useState(false);
    const [networkDisplay, setNetworkDisplay] = useState('BSC');
    const menuLeft = useRef(null)
    const btnToggle = useRef(null)
    const formenu = useRef(null)
    const menuToggle = () => {
        menuLeft.current.classList.toggle('active');
        btnToggle.current.classList.toggle('active');
        formenu.current.classList.toggle('active');

    }

    // Navigate monitor
    let location = useLocation();

    useEffect(() => {
        if (location.pathname === '/chart') {
            dispatch({ type: 'isTokenSearchBar', payload: true });
        } else {
            dispatch({ type: 'isTokenSearchBar', payload: false });
        }
    }, [location])

    // wallet

    const wallet = useWallet()
    const [walletInfoModal, setWalletInfoModal] = useState(false);
    const [useWalletAccount, setUseWalletAccount] = useState('');
    const [accountStyled, setAccountStyled] = useState('');
    const [balanceOfBNB, setBalanceOfBNB] = useState('');

    const isMetaMaskInstalled = () => {
        const ether = window.ethereum;
        return Boolean(ether && ether.isMetaMask);
    };
    const MetamaskInstall = () => {
        const onboarding = new MetaMaskOnboarding({ forwarderOrigin });
        const _MetamaskInstall = () => {
            onboarding.startOnboarding();
        };
        _MetamaskInstall();
    }
    const walletDisconnect = () => {
        setWalletInfoModal(false);
        wallet.reset();
    }
    const walletConnectBtn = () => {
        // alert(wallet.chainId);
        if (isMetaMaskInstalled() === false) {
            MetamaskInstall();
        } else {
            if (wallet.status === 'connected') {
                var userStyledAddress = wallet.account.slice(0, 6) + "..." + wallet.account.slice(-2);
                setAccountStyled(userStyledAddress);
                setUseWalletAccount(userStyledAddress);
                setBalanceOfBNB(wallet.balance);

                setWalletInfoModal(true);
            } else {
                wallet.connect();
            }
        }
    }

    // ****************
    // wallet status
    useEffect(() => {
        if (wallet.status === "connected") {
            var userStyledAddress = wallet.account.slice(0, 6) + "..." + wallet.account.slice(-2);
            setAccountStyled(userStyledAddress);
            setUseWalletAccount(wallet.account);
            setBalanceOfBNB(wallet.balance);
        }
    }, [wallet.status])
    //****************
    // Detecting account and network
    useEffect(() => {
        if (window.ethereum) {
            // use MetaMask's provider
            window.ethereum.enable(); // get permission to access accounts

            // detect Metamask account change
            window.ethereum.on('accountsChanged', function (accounts) {
                console.log('accountsChanges', accounts);
                setUseWalletAccount(wallet.account);
            });

            // detect Network change
            window.ethereum.on('networkChanged', function (networkId) {
                alert('network changed')
                console.log('networkChanged', networkId);
                // setUseWalletAccount(wallet.account);
            });
        } else {
            console.warn(
                "No web3 detected. Falling back to http://127.0.0.1:8545. You should remove this fallback when you deploy live",
            );
        }
    }, [window.ethereum])
    const darkSwitch = () => {

        if (window.document.body.classList.value === 'dark') {
            window.document.body.classList.remove('dark');
            dispatch({
                type: "isDark",
                payload: false
            });
        } else {
            window.document.body.classList.add('dark');
            dispatch({
                type: "isDark",
                payload: true
            });
        }
    }
    const minSidebar = () => {
        dispatch({
            type: "minSidebar",
            payload: !state.minSidebar
        });
    }
    const networkSelect = (networkName) => {
        setNetworkDisplay(networkName);
        setNetworkChangeBtn(false)
    }


    // ****************************************************
    // ****************************************************
    // ****************************************************
    const handleClickAway = () => {
        setOpen(false);
    };

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };


    return (
            <div className="Nav w-full svelte-1emr6uv">
    			<div className="background-blur md:flex relative svelte-1emr6uv">
				<div className="h-20 px-4 flex self-center justify-between md:container mx-auto relative md:static z-10">
					<a id="logo-home-link" className="flex flex-row items-center z-10" href="https://www.iota.org/" aria-label="Home">
						<div className="logo">
                            <img className=" svelte-1emr6uv" src="./assets/logo.png" alt="IOTA"/>
                            </div> 
                            <img className="hidden ml-4 lg:block svelte-1emr6uv" src="./assets/logo.png" alt="IOTA"/>
                            </a>
					<div className="flex justify-center items-center">
						<nav className="h-full svelte-1emr6uv">
							<ul className="container svelte-1emr6uv">
								<div id="first-level-navigation-category-get-started" className="FirstLevelNavigationCategory my-4 lg:my-0 svelte-laz1ta">
									<div className="flex justify-between items-center cursor-pointer">
										<div className="first-level-link svelte-laz1ta">Get Started
											<div className="stick svelte-laz1ta"></div>
										</div>
										<svg className="mr-5 lg:hidden svelte-laz1ta" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<g opacity="0.5">
												<path d="M6 13L11 8L6 3" stroke="#131F37" strokeWidth="1.72854"></path>
											</g>
										</svg>
									</div>
							
								</div>

								<div id="first-level-navigation-category-solutions" className="FirstLevelNavigationCategory my-4 lg:my-0 svelte-laz1ta">
									<div className="flex justify-between items-center cursor-pointer">
										<div className="first-level-link svelte-laz1ta">Solutions
											<div className="stick svelte-laz1ta"></div>
										</div>
										<svg className="mr-5 lg:hidden svelte-laz1ta" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<g opacity="0.5">
												<path d="M6 13L11 8L6 3" stroke="#131F37" strokeWidth="1.72854"></path>
											</g>
										</svg>
									</div>
								</div>

								<div id="first-level-navigation-category-develop" className="FirstLevelNavigationCategory my-4 lg:my-0 svelte-laz1ta">
									<div className="flex justify-between items-center cursor-pointer">
										<div className="first-level-link svelte-laz1ta">Develop
											<div className="stick svelte-laz1ta"></div>
										</div>
										<svg className="mr-5 lg:hidden svelte-laz1ta" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<g opacity="0.5">
												<path d="M6 13L11 8L6 3" stroke="#131F37" strokeWidth="1.72854"></path>
											</g>
										</svg>
									</div>
							
								</div>

								<div id="first-level-navigation-category-foundation" className="FirstLevelNavigationCategory my-4 lg:my-0 svelte-laz1ta">
									<div className="flex justify-between items-center cursor-pointer">
										<div className="first-level-link svelte-laz1ta">Foundation
											<div className="stick svelte-laz1ta"></div>
										</div>
										<svg className="mr-5 lg:hidden svelte-laz1ta" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<g opacity="0.5">
												<path d="M6 13L11 8L6 3" stroke="#131F37" strokeWidth="1.72854"></path>
											</g>
										</svg>
									</div>
								</div>

								<div id="first-level-navigation-category-connect" className="FirstLevelNavigationCategory my-4 lg:my-0 svelte-laz1ta">
									<div className="flex justify-between items-center cursor-pointer">
										<div className="first-level-link svelte-laz1ta">Connect
											<div className="stick svelte-laz1ta"></div>
										</div>
										<svg className="mr-5 lg:hidden svelte-laz1ta" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<g opacity="0.5">
												<path d="M6 13L11 8L6 3" stroke="#131F37" strokeWidth="1.72854"></path>
											</g>
										</svg>
									</div>
								</div>

								<div className="lg:hidden">
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
										<div className="first-level-content svelte-laz1ta">
											<a href="https://blog.iota.org/" target="_blank" rel="noopener noreferrer" className="flex menu-item px-5 rounded-lg svelte-mrpoax">
												<div className="item-content flex items-start svelte-mrpoax">
													<div className="item-image mr-4 svelte-mrpoax"><img src="./123123123_files/news.svg" alt="Blog"/></div>
													<div className="text-sm">
														<div className="font-semibold text-grey-10pm mb-1">Blog</div>
														<div className="text-grey-8pm">
															<div className="rich-text-block" style={{}}></div>
														</div>
													</div>
												</div>
											</a>
											<a href="https://firefly.iota.org/" target="_blank" rel="noopener noreferrer" className="flex menu-item px-5 rounded-lg svelte-mrpoax">
												<div className="item-content flex items-start svelte-mrpoax">
													<div className="item-image mr-4 svelte-mrpoax"><img src="./123123123_files/wallet.svg" alt="Wallet"/></div>
													<div className="text-sm">
														<div className="font-semibold text-grey-10pm mb-1">Wallet</div>
														<div className="text-grey-8pm">
															<div className="rich-text-block" style={{}}></div>
														</div>
													</div>
												</div>
											</a>
											<a href="https://wiki.iota.org/" target="_blank" rel="noopener noreferrer" className="flex menu-item px-5 rounded-lg svelte-mrpoax">
												<div className="item-content flex items-start svelte-mrpoax">
													<div className="item-image mr-4 svelte-mrpoax"><img src="./123123123_files/docs.svg" alt="Wiki"/></div>
													<div className="text-sm">
														<div className="font-semibold text-grey-10pm mb-1">Wiki</div>
														<div className="text-grey-8pm">
															<div className="rich-text-block" style={{}}></div>
														</div>
													</div>
												</div>
											</a>
											<a href="https://coordicide.iota.org/" target="_blank" rel="noopener noreferrer" className="flex menu-item px-5 rounded-lg svelte-mrpoax">
												<div className="item-content flex items-start svelte-mrpoax">
													<div className="item-image mr-4 svelte-mrpoax"><img src="./123123123_files/coordicide.svg" alt="Coordicide"/></div>
													<div className="text-sm">
														<div className="font-semibold text-grey-10pm mb-1">Coordicide</div>
														<div className="text-grey-8pm">
															<div className="rich-text-block" style={{}}></div>
														</div>
													</div>
												</div>
											</a>
											<a href="https://explorer.iota.org/" target="_blank" rel="noopener noreferrer" className="flex menu-item px-5 rounded-lg svelte-mrpoax">
												<div className="item-content flex items-start svelte-mrpoax">
													<div className="item-image mr-4 svelte-mrpoax"><img src="./123123123_files/Tangle_Explorer.svg" alt="Tangle Explorer"/></div>
													<div className="text-sm">
														<div className="font-semibold text-grey-10pm mb-1">Tangle Explorer</div>
														<div className="text-grey-8pm">
															<div className="rich-text-block" style={{}}></div>
														</div>
													</div>
												</div>
											</a>
											<a href="https://govern.iota.org/" target="_blank" rel="noopener noreferrer" className="flex menu-item px-5 rounded-lg svelte-mrpoax">
												<div className="item-content flex items-start svelte-mrpoax">
													<div className="item-image mr-4 svelte-mrpoax"><img src="./123123123_files/iota-insights.svg" alt="Governance and Research"/></div>
													<div className="text-sm">
														<div className="font-semibold text-grey-10pm mb-1">Governance and Research</div>
														<div className="text-grey-8pm">
															<div className="rich-text-block" style={{}}></div>
														</div>
													</div>
												</div>
											</a>
											<a href="https://automation.iota.org/" target="_blank" rel="noopener noreferrer" className="flex menu-item px-5 rounded-lg svelte-mrpoax">
												<div className="item-content flex items-start svelte-mrpoax">
													<div className="item-image mr-4 svelte-mrpoax"><img src="./123123123_files/automation-series.svg" alt="Automation Series"/></div>
													<div className="text-sm">
														<div className="font-semibold text-grey-10pm mb-1">Automation Series</div>
														<div className="text-grey-8pm">
															<div className="rich-text-block" style={{}}></div>
														</div>
													</div>
												</div>
											</a>
											<a href="https://fund.iota.org/" target="_blank" rel="noopener noreferrer" className="flex menu-item px-5 rounded-lg svelte-mrpoax">
												<div className="item-content flex items-start svelte-mrpoax">
													<div className="item-image mr-4 svelte-mrpoax"><img src="./123123123_files/fund.iota.org.svg" alt="Ecosystem Dev Fund"/></div>
													<div className="text-sm">
														<div className="font-semibold text-grey-10pm mb-1">Ecosystem Dev Fund</div>
														<div className="text-grey-8pm">
															<div className="rich-text-block" style={{}}></div>
														</div>
													</div>
												</div>
											</a>
											<a href="http://roadmap.iota.org/" target="_blank" rel="noopener noreferrer" className="flex menu-item px-5 rounded-lg svelte-mrpoax">
												<div className="item-content flex items-start svelte-mrpoax">
													<div className="item-image mr-4 svelte-mrpoax"><img src="./123123123_files/roadmap.svg" alt="Roadmap"/></div>
													<div className="text-sm">
														<div className="font-semibold text-grey-10pm mb-1">Roadmap</div>
														<div className="text-grey-8pm">
															<div className="rich-text-block" style={{}}></div>
														</div>
													</div>
												</div>
											</a>
											<a href="https://shop.iotashops.com/" target="_blank" rel="noopener noreferrer" className="flex menu-item px-5 rounded-lg svelte-mrpoax">
												<div className="item-content flex items-start svelte-mrpoax">
													<div className="item-image mr-4 svelte-mrpoax"><img src="./123123123_files/iota-shops.icon.svg" alt="IOTA Merch (Partner)"/></div>
													<div className="text-sm">
														<div className="font-semibold text-grey-10pm mb-1">IOTA Merch (Partner)</div>
														<div className="text-grey-8pm">
															<div className="rich-text-block" style={{}}></div>
														</div>
													</div>
												</div>
											</a>
										</div>
									</div>
								</div>

							</ul>

							<div className="menu-button px-8 text-grey-2pm font-bold text-sm items-center z-30 cursor-pointer svelte-18o960n">
								<div className="mr-4">Explore IOTA</div>
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
							</div>
							<div className="ecosystem-menu bg-grey-2pm w-full svelte-18o960n">
								<div className="ecosystem-content flex flex-wrap container pt-8 pb-12 svelte-18o960n">
									<div className="flex justify-end w-full">
										<svg className="cursor-pointer p2" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect width="20.5318" height="2.09549" transform="matrix(-0.707102 0.707112 -0.707102 -0.707112 24 9.48169)" fill="#131F37"></rect>
											<rect width="20.5318" height="2.09549" transform="matrix(-0.707102 -0.707111 0.707102 -0.707112 22.5181 24)" fill="#131F37"></rect>
										</svg>
									</div>
									<a href="https://blog.iota.org/" target="_blank" rel="noopener noreferrer" className="flex menu-item px-5 rounded-lg svelte-mrpoax">
										<div className="item-content flex items-start svelte-mrpoax">
											<div className="item-image mr-4 svelte-mrpoax"><img src="./123123123_files/news.svg" alt="Blog"/></div>
											<div className="text-sm">
												<div className="font-semibold text-grey-10pm mb-1">Blog</div>
												<div className="text-grey-8pm">
													<div className="rich-text-block" style={{}}></div>
												</div>
											</div>
										</div>
									</a>
									<a href="https://firefly.iota.org/" target="_blank" rel="noopener noreferrer" className="flex menu-item px-5 rounded-lg svelte-mrpoax">
										<div className="item-content flex items-start svelte-mrpoax">
											<div className="item-image mr-4 svelte-mrpoax"><img src="./123123123_files/wallet.svg" alt="Wallet"/></div>
											<div className="text-sm">
												<div className="font-semibold text-grey-10pm mb-1">Wallet</div>
												<div className="text-grey-8pm">
													<div className="rich-text-block" style={{}}></div>
												</div>
											</div>
										</div>
									</a>
									<a href="https://wiki.iota.org/" target="_blank" rel="noopener noreferrer" className="flex menu-item px-5 rounded-lg svelte-mrpoax">
										<div className="item-content flex items-start svelte-mrpoax">
											<div className="item-image mr-4 svelte-mrpoax"><img src="./123123123_files/docs.svg" alt="Wiki"/></div>
											<div className="text-sm">
												<div className="font-semibold text-grey-10pm mb-1">Wiki</div>
												<div className="text-grey-8pm">
													<div className="rich-text-block" style={{}}></div>
												</div>
											</div>
										</div>
									</a>
									<a href="https://coordicide.iota.org/" target="_blank" rel="noopener noreferrer" className="flex menu-item px-5 rounded-lg svelte-mrpoax">
										<div className="item-content flex items-start svelte-mrpoax">
											<div className="item-image mr-4 svelte-mrpoax"><img src="./123123123_files/coordicide.svg" alt="Coordicide"/></div>
											<div className="text-sm">
												<div className="font-semibold text-grey-10pm mb-1">Coordicide</div>
												<div className="text-grey-8pm">
													<div className="rich-text-block" style={{}}></div>
												</div>
											</div>
										</div>
									</a>
									<a href="https://explorer.iota.org/" target="_blank" rel="noopener noreferrer" className="flex menu-item px-5 rounded-lg svelte-mrpoax">
										<div className="item-content flex items-start svelte-mrpoax">
											<div className="item-image mr-4 svelte-mrpoax"><img src="./123123123_files/Tangle_Explorer.svg" alt="Tangle Explorer"/></div>
											<div className="text-sm">
												<div className="font-semibold text-grey-10pm mb-1">Tangle Explorer</div>
												<div className="text-grey-8pm">
													<div className="rich-text-block" style={{}}></div>
												</div>
											</div>
										</div>
									</a>
									<a href="https://govern.iota.org/" target="_blank" rel="noopener noreferrer" className="flex menu-item px-5 rounded-lg svelte-mrpoax">
										<div className="item-content flex items-start svelte-mrpoax">
											<div className="item-image mr-4 svelte-mrpoax"><img src="./123123123_files/iota-insights.svg" alt="Governance and Research"/></div>
											<div className="text-sm">
												<div className="font-semibold text-grey-10pm mb-1">Governance and Research</div>
												<div className="text-grey-8pm">
													<div className="rich-text-block" style={{}}></div>
												</div>
											</div>
										</div>
									</a>
									<a href="https://automation.iota.org/" target="_blank" rel="noopener noreferrer" className="flex menu-item px-5 rounded-lg svelte-mrpoax">
										<div className="item-content flex items-start svelte-mrpoax">
											<div className="item-image mr-4 svelte-mrpoax"><img src="./123123123_files/automation-series.svg" alt="Automation Series"/></div>
											<div className="text-sm">
												<div className="font-semibold text-grey-10pm mb-1">Automation Series</div>
												<div className="text-grey-8pm">
													<div className="rich-text-block" style={{}}></div>
												</div>
											</div>
										</div>
									</a>
									<a href="https://fund.iota.org/" target="_blank" rel="noopener noreferrer" className="flex menu-item px-5 rounded-lg svelte-mrpoax">
										<div className="item-content flex items-start svelte-mrpoax">
											<div className="item-image mr-4 svelte-mrpoax"><img src="./123123123_files/fund.iota.org.svg" alt="Ecosystem Dev Fund"/></div>
											<div className="text-sm">
												<div className="font-semibold text-grey-10pm mb-1">Ecosystem Dev Fund</div>
												<div className="text-grey-8pm">
													<div className="rich-text-block" style={{}}></div>
												</div>
											</div>
										</div>
									</a>
									<a href="http://roadmap.iota.org/" target="_blank" rel="noopener noreferrer" className="flex menu-item px-5 rounded-lg svelte-mrpoax">
										<div className="item-content flex items-start svelte-mrpoax">
											<div className="item-image mr-4 svelte-mrpoax"><img src="./123123123_files/roadmap.svg" alt="Roadmap"/></div>
											<div className="text-sm">
												<div className="font-semibold text-grey-10pm mb-1">Roadmap</div>
												<div className="text-grey-8pm">
													<div className="rich-text-block" style={{}}></div>
												</div>
											</div>
										</div>
									</a>
									<a href="https://shop.iotashops.com/" target="_blank" rel="noopener noreferrer" className="flex menu-item px-5 rounded-lg svelte-mrpoax">
										<div className="item-content flex items-start svelte-mrpoax">
											<div className="item-image mr-4 svelte-mrpoax"><img src="./123123123_files/iota-shops.icon.svg" alt="IOTA Merch (Partner)"/></div>
											<div className="text-sm">
												<div className="font-semibold text-grey-10pm mb-1">IOTA Merch (Partner)</div>
												<div className="text-grey-8pm">
													<div className="rich-text-block" style={{}}></div>
												</div>
											</div>
										</div>
									</a>
								</div>
							</div>
						</nav>
						<button className="z-10 cursor-pointer p-2 lg:hidden hidden">
							<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect width="20.5318" height="2.09549" transform="matrix(-0.707102 0.707112 -0.707102 -0.707112 24 9.48169)" fill="#131F37"></rect>
								<rect width="20.5318" height="2.09549" transform="matrix(-0.707102 -0.707111 0.707102 -0.707112 22.5181 24)" fill="#131F37"></rect>
							</svg>
						</button>
						<button className="p-2 lg:hidden">
                            <img src="./123123123_files/burguer-menu.svg" alt="menu" className="svelte-1emr6uv"/>
                        </button>
					</div>
				</div>
			
                </div>
            </div>
    )
}
export default Header;