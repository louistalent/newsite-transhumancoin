// Material
import { Box, Button, FilledInput, FormControl, InputAdornment, MenuItem, Typography, CircularProgress } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Select from '@mui/material/Select';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import axios from 'axios';
// import TradingViewComponent from '../../tradingView'
import moment from 'moment';
import NumberFormat from 'react-number-format'

import { useSelector } from 'react-redux';

import bscSymbol from '../../assets/home-img/bsc-symbol.svg';
import '../../assets/css/chart.css';
// import '../../assets/css/home.css';
// import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { AiOutlineAudit } from 'react-icons/ai';
import { FaTelegramPlane, FaTwitter, FaAngleDown, FaAngleUp, FaRegCheckCircle, FaFeatherAlt } from 'react-icons/fa';

import { useEffect, useState } from 'react';
import { useBlockchainContext } from "../../contexts";
import { useWallet, UseWalletProvider } from 'use-wallet'
// import { AdvancedChart } from "react-tradingview-embed";

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

function Chart() {
    const [state, { dispatch }] = useBlockchainContext();
    const [ischartLight, setIschartLight] = useState('LIGHT');
    useEffect(() => {
        if (state.isDark === true) {
            setIschartLight('DARK')
        } else {
            setIschartLight('LIGHT')
        }
    }, [state.isDark])

    const linkForClass = 'inline-flex select-none items-center px-1 py-px border border-transparent rounded text-xs font-medium bg-gray-300 dark:bg-opacity-20 text-white dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-opacity-30 duration-200 transition-all';
    // ***********************************************************************************************************
    // ***********************************************************************************************************

    const defaultPath = './assets/logo.jpg';
    const Token = state.tokenName;
    const Network = state.Network;
    const [trendingOption, setTrendingOption] = useState([]);
    const [state2, setState2] = useState(true);
    const [tradingHistory, setTradingHistory] = useState({});
    const [basic, setBasic] = useState('');
    const [quote, setQuote] = useState('');

    const [values, setValues] = useState({
        amount1: 0,
        amount2: 0,
        password: 0,
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const [token1, setToken1] = useState('USDC');

    const [token2, setToken2] = useState('USDC');

    const ChangeState = () => {
        setState2(!state2);
    }

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const [symbol, setSymbol] = useState('avaxusd')

    const [isLoading, setIsLoading] = useState(true);

    const [ads, setAds] = useState([]);

    useEffect(() => {
        if (Token === 'avalanche') {
            setSymbol('AVAXUSD');
        } else if (Token === 'eth' || Token === 'optimism' || Token === 'arbitrum') {
            setSymbol('ETHUSD')
        } else if (Token === 'bsc') {
            setSymbol('BNBUSD')
        } else if (Token === 'fantom') {
            setSymbol('FTMUSD')
        } else if (Token === 'polygon') {
            setSymbol('MATICUSD')
        } else if (Token === 'celo') {
            setSymbol('CELOUSD')
        }

        async function fetchData1() {
            await axios.post(`${process.env.REACT_APP_BASE_URL}/trending/optionlist`, {
                network: Token,
            })
                .then(res => {
                    if (res.data) {
                        setTrendingOption(res.data);
                    }
                })
                .catch(err => {
                    console.log(err, 'error');
                })
        }

        async function fetchData2() {
            await axios.post(`${process.env.REACT_APP_BASE_URL}/trending/getAds`, {
                network: Token,
            })
                .then(res => {
                    if (res.data) {
                        setAds(res.data[0]);
                    }
                })
                .catch(err => {
                    console.log(err, 'error');
                })
        }

        fetchData1();
        fetchData2();

    }, [Token])

    useEffect(() => {

        console.log(Network, "This is Network")

        if (Network.network === 'avalanche') {
            setSymbol(`${Network.symbol}USD`);
        } else if (Network.network === 'eth' || Network.network === 'optimism' || Network.network === 'arbitrum') {
            setSymbol(`${Network.symbol}USD`)
        } else if (Network.network === 'bsc') {
            setSymbol(`${Network.symbol}USD`)
        } else if (Network.network === 'fantom') {
            setSymbol(`${Network.symbol}USD`)
        } else if (Network.network === 'polygon') {
            setSymbol(`${Network.symbol}USD`)
        }

        async function fetchData() {
            await axios.post(`${process.env.REACT_APP_BASE_URL}/trending/tradingHistory`, {
                address: Network.address,
            })
                .then(res => {
                    if (res.data) {
                        setBasic(res.data.baseTokenSymbol)
                        setQuote(res.data.quoteTokenSymbol)
                        let array = [];
                        for (let k = 0; k < res.data.tradingHistory.length; k++) {
                            const element = res.data.tradingHistory[k];
                            let date = moment(element.blockTimestamp).format();
                            array.push({ date: date, type: element.type, usd: `$${element.volumeUsd}`, token1: element.amount0, token2: element.amount1, price: `$${element.priceUsd}`, transaction: element.txnHash });
                        }
                        setTradingHistory(array);
                        setIsLoading(false);
                    }
                })
                .catch(err => {
                    console.log(err, 'error');
                })
        }

        if (Network.address) {
            fetchData();
        }

    }, [Network])


    const columns = [
        { id: 'date', label: 'Date', minWidth: 200, align: 'center' },
        { id: 'type', label: 'Type', minWidth: 100, align: 'center' },
        {
            id: 'usd',
            label: 'Price USD',
            minWidth: 100,
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'token1',
            label: basic,
            minWidth: 100,
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'token2',
            label: quote,
            minWidth: 100,
            align: 'center',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'price',
            label: 'Price',
            minWidth: 100,
            align: 'center',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'transaction',
            label: 'TXN',
            align: 'left',
            format: (value) => value.toFixed(2),
        }
    ];


    return (
        <>
            {isLoading ?
                (
                    <Box sx={{
                        display: 'flex', justifyContent: 'center', position: 'relative', top: window.innerHeight / 2 - 50
                    }}>
                        <CircularProgress />
                    </Box>
                )
                :
                <div style={{ height: '100%' }} className="mx-auto container px-2 py-2 xs:px-4 xs:py-4 sm:py-6 sm:px-8">
                    {/* <div className="p-6 shadow-smooth rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"> */}
                    <a href="http://t.me/buytranshumancoin" target="_blank" className={linkForClass}>
                        <FaTelegramPlane className='text-gray-300 hover:opacity-70 dark:hover:opacity-100 dark:text-gray-400 dark:hover:text-white transition-all duration-300 fill-current h-5 w-5' />
                        <span className="md:block hidden">Telegram</span>
                    </a>
                    <a href="https://t.me/boggedfinance" target="_blank" className={linkForClass}>
                        <AiOutlineAudit className='text-gray-300 hover:opacity-70 dark:hover:opacity-100 dark:text-gray-400 dark:hover:text-white transition-all duration-300 fill-current h-5 w-5' />
                        <span className="md:block hidden">contract</span>
                    </a>
                    <a href="https://t.me/boggedfinance" target="_blank" className={linkForClass}>
                        <FaTwitter className='text-gray-300 hover:opacity-70 dark:hover:opacity-100 dark:text-gray-400 dark:hover:text-white transition-all duration-300 fill-current h-5 w-5' />

                        <span className="md:block hidden">Twitter</span>
                    </a>
                    <a href="https://t.me/boggedfinance" target="_blank" className={linkForClass}>
                        <CMC className={'text-gray-300 hover:opacity-70 dark:hover:opacity-100 dark:text-gray-400 dark:hover:text-white transition-all duration-300 fill-current h-5 w-5'} />
                        <span className="md:block hidden">Coin Market Cap</span>
                    </a>
                    <div className="flex w-full mt-4" style={{ height: '100%' }}>
                        <div style={{ height: '100%' }} className="flex xl:flex-row flex-col w-full xl:space-x-4 xl:space-y-0 space-y-4">
                            <Box style={{ width: '100%', flex: 1 }}>
                                {/* <TradingViewComponent /> */}
                            </Box>
                            <Box style={{ maxWidth: '300px', marginRight: '10px' }}>
                                <Box style={{ background: '#23323c', borderRadius: '15px', padding: '20px', border: '1px solid gray' }}>
                                    <Typography gutterBottom component="div" style={{ color: 'white', margin: '0px', fontSize: '25px', fontFamily: 'Pancake', borderBottom: '1px solid gray' }}>
                                        {
                                            Network.name ?
                                                <span>
                                                    {Network.name}
                                                </span>
                                                :
                                                ''
                                        }
                                    </Typography>
                                    <Box style={{ display: 'flex' }}>
                                        {
                                            Network.network ?
                                                <Box style={{ display: 'flex' }}>
                                                    <Box style={{ color: 'white', fontSize: 'small', display: 'grid', minWidth: '155px' }} >
                                                        <span style={{ fontFamily: 'Pancake', fontSize: '12px' }}>Market Cap:</span>
                                                        <span style={{ fontFamily: 'Pancake', fontSize: '12px' }}>Market CapChange 24H:</span>
                                                        <span style={{ fontFamily: 'Pancake', fontSize: '12px' }}>Liquidity AVAX:</span>
                                                        <span style={{ fontFamily: 'Pancake', fontSize: '12px' }}>Liquidity USD:</span>
                                                        <span style={{ fontFamily: 'Pancake', fontSize: '12px' }}>Price AVAX:</span>
                                                        <span style={{ fontFamily: 'Pancake', fontSize: '12px' }}>Price AVAXChange 24H:</span>
                                                        <span style={{ fontFamily: 'Pancake', fontSize: '12px' }}>Price USD:</span>
                                                        <span style={{ fontFamily: 'Pancake', fontSize: '12px' }}>PriceUSDChange 24H:</span>
                                                        <span style={{ fontFamily: 'Pancake', fontSize: '12px' }}>Volume24hAVAX:</span>
                                                        <span style={{ fontFamily: 'Pancake', fontSize: '12px' }}>Volume24hUSD:</span>
                                                        <span style={{ fontFamily: 'Pancake', fontSize: '12px' }}>VolumeAVAXChange24h:</span>
                                                        <span style={{ fontFamily: 'Pancake', fontSize: '12px' }}>VolumeUSDChange24h:</span>
                                                    </Box>
                                                    <Box style={{ color: 'white', fontSize: 'small', display: 'grid' }} >
                                                        <NumberFormat value={Network.marketCap.toFixed(2)} displayType={'text'} thousandSeparator={true} />
                                                        <NumberFormat value={Network.marketCapChange24h.toFixed(2)} displayType={'text'} thousandSeparator={true} />
                                                        <NumberFormat value={Network.liquidityETH.toFixed(2)} displayType={'text'} thousandSeparator={true} />
                                                        <NumberFormat value={Network.liquidityUSD.toFixed(2)} displayType={'text'} thousandSeparator={true} />
                                                        <NumberFormat value={Network.priceETH.toFixed(2)} displayType={'text'} thousandSeparator={true} />
                                                        <NumberFormat value={Network.priceETHChange24h.toFixed(2)} displayType={'text'} thousandSeparator={true} />
                                                        <NumberFormat value={Network.priceUSD.toFixed(10)} displayType={'text'} thousandSeparator={true} />
                                                        <NumberFormat value={Network.priceUSDChange24h.toFixed(2)} displayType={'text'} thousandSeparator={true} />
                                                        <NumberFormat value={Network.volume24hETH.toFixed(2)} displayType={'text'} thousandSeparator={true} />
                                                        <NumberFormat value={Network.volume24hUSD.toFixed(2)} displayType={'text'} thousandSeparator={true} />
                                                        <NumberFormat value={Network.volumeETHChange24h.toFixed(2)} displayType={'text'} thousandSeparator={true} />
                                                        <NumberFormat value={Network.volumeUSDChange24h.toFixed(2)} displayType={'text'} thousandSeparator={true} />
                                                    </Box>
                                                </Box>
                                                :
                                                <></>
                                        }

                                    </Box>
                                </Box>
                            </Box>
                        </div>
                    </div>
                    <div className="flex w-full mt-4" style={{ height: '100%' }}>
                        <div style={{ height: '100%' }} className="flex xl:flex-row flex-col w-full xl:space-x-4 xl:space-y-0 space-y-4">
                            <Paper sx={{ width: '100%', overflow: 'hidden', border: '1px solid gray', mt: '10px', display: 'grid' }}>
                                <TableContainer>
                                    <Table stickyHeader aria-label="sticky table">
                                        <TableHead>
                                            <TableRow>
                                                {columns.map((column) => (
                                                    <TableCell
                                                        key={column.id}
                                                        align={column.align}
                                                        style={{ minWidth: column.minWidth, background: '#23323c', color: 'white', fontFamily: 'Pancake' }}
                                                    >
                                                        {column.label}
                                                    </TableCell>
                                                ))}
                                            </TableRow>
                                        </TableHead>
                                        <TableBody style={{ background: '#23323c' }}>
                                            {
                                                tradingHistory ?
                                                    tradingHistory
                                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                        .map((row, i) => {
                                                            if (row.type === 'buy') {
                                                                return (
                                                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.type + i} >
                                                                        {columns.map((column) => {
                                                                            const value = row[column.id];
                                                                            if (column.id === 'transaction') {
                                                                                let hashNetwork = 'snowtrace.io';
                                                                                if (Network.network === 'eth') {
                                                                                    hashNetwork = 'etherscan.io';
                                                                                } else if (Network.network === 'bsc') {
                                                                                    hashNetwork = 'bscscan.com';
                                                                                } else if (Network.network === 'polygon') {
                                                                                    hashNetwork = 'polygonscan.com'
                                                                                } else if (Network.network === 'fantom') {
                                                                                    hashNetwork = 'ftmscan.com'
                                                                                }
                                                                                return (
                                                                                    <TableCell key={column.id + i} align={column.align} style={{ borderBottom: 'gray', fontFamily: 'Pancake', color: '#29b0ff' }}>
                                                                                        <a target='blank' style={{ color: '#29b0ff' }} href={`https://${hashNetwork}/tx/${value}`}>{value}</a>
                                                                                    </TableCell>
                                                                                );
                                                                            } else {
                                                                                return (
                                                                                    <TableCell key={column.id + i} align={column.align} style={{ borderBottom: 'gray', fontFamily: 'Pancake', color: '#29b0ff' }}>
                                                                                        {value}
                                                                                    </TableCell>
                                                                                );
                                                                            }
                                                                        })}
                                                                    </TableRow>
                                                                );
                                                            } else {
                                                                return (
                                                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.type + i} >
                                                                        {columns.map((column) => {
                                                                            const value = row[column.id];
                                                                            if (column.id === 'transaction') {
                                                                                let hashNetwork = 'snowtrace.io';
                                                                                if (Network.network === 'eth') {
                                                                                    hashNetwork = 'etherscan.io';
                                                                                } else if (Network.network === 'bsc') {
                                                                                    hashNetwork = 'bscscan.com';
                                                                                } else if (Network.network === 'polygon') {
                                                                                    hashNetwork = 'polygonscan.com'
                                                                                } else if (Network.network === 'fantom') {
                                                                                    hashNetwork = 'ftmscan.com'
                                                                                }
                                                                                return (
                                                                                    <TableCell key={column.id + i} align={column.align} style={{ borderBottom: 'gray', fontFamily: 'Pancake', color: '#ff4a68' }}>
                                                                                        <a target='blank' style={{ color: '#ff4a68' }} href={`https://${hashNetwork}/tx/${value}`}>{value}</a>
                                                                                    </TableCell>
                                                                                );
                                                                            } else {
                                                                                return (
                                                                                    <TableCell key={column.id + i} align={column.align} style={{ borderBottom: 'gray', fontFamily: 'Pancake', color: '#ff4a68' }}>
                                                                                        {value}
                                                                                    </TableCell>
                                                                                );
                                                                            }
                                                                        })}
                                                                    </TableRow>
                                                                );
                                                            }
                                                        })
                                                    :
                                                    <></>
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <TablePagination
                                    rowsPerPageOptions={[10, 25, 100]}
                                    component="div"
                                    count={tradingHistory.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                    style={{ background: '#23323c' }}
                                />
                            </Paper>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
export default Chart;