import React, { useEffect, useState } from 'react';
import { Box, Button, FilledInput, FormControl, InputAdornment, MenuItem, Typography, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
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
import TradingViewComponent from '../../tradingView'
import moment from 'moment';
import NumberFormat from 'react-number-format'

export default function Metroverses() {

    const defaultPath = './assets/logo.jpg';
    const Token = useSelector((state) => state.Token.TokenName);
    const Network = useSelector((state) => state.Token.Network);
    const [trendingOption, setTrendingOption] = React.useState([]);
    const [state, setState] = React.useState(true);
    const [tradingHistory, setTradingHistory] = React.useState({});
    const [basic, setBasic] = React.useState('');
    const [quote, setQuote] = React.useState('');

    const [values, setValues] = React.useState({
        amount1: 0,
        amount2: 0,
        password: 0,
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const [token1, setToken1] = React.useState('USDC');

    const [token2, setToken2] = React.useState('USDC');

    const ChangeState = () => {
        setState(!state);
    }

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const [symbol, setSymbol] = useState('avaxusd')

    const [isLoading, setIsLoading] = React.useState(true);

    const [ads, setAds] = React.useState([]);

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

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleChangeToken1 = (event) => {
        setToken1(event.target.value);
    };

    const handleChangeToken2 = (event) => {
        setToken2(event.target.value);
    };

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
        <Box sx={{ display: 'grid' }}>
            {isLoading ?
                (
                    <Box sx={{
                        display: 'flex', justifyContent: 'center', position: 'relative', top: window.innerHeight / 2 - 50
                    }}>
                        <CircularProgress />
                    </Box>
                )
                :
                <Box style={{ padding: '10px' }}>
                    <Box sx={{ width: 'auto !important', borderRadius: '10px', padding: '10px 0px', margin: '0px', display: 'flex' }}>

                        <Box style={{ width: '100%', display: 'flex !important', flexDirection: 'column' }}>
                            <Box sx={{ height: '60vh', width: '100% !important', borderRadius: '10px', display: 'flex', background: '#23323c', color: 'white' }}>
                                <Box sx={{ height: '57vh', width: '100%', borderRadius: '10px', margin: '10px 10px', display: 'flex', background: '#23323c', color: 'white' }}>
                                    <Box style={{ width: '100%', flex: 1 }}>
                                        <TradingViewComponent />
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
                                </Box>
                            </Box>
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
                        </Box>
                    </Box>
                </Box>
            }
        </Box>
    );
}