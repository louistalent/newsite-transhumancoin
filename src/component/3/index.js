
import bscSymbol from '../../assets/home-img/bsc-symbol.svg';
// import '../../assets/css/home.css';

import { useEffect, useState } from 'react';
import { useWallet, UseWalletProvider } from 'use-wallet'

function Voting() {
    useEffect(() => {
    }, [])

    return (
        <div className="mx-auto container px-2 py-2 xs:px-4 xs:py-4 sm:py-6 sm:px-8">
            <div>
                <div className="flex w-full mt-4">
                    <div className="flex xl:flex-row flex-col w-full xl:space-x-4 xl:space-y-0 space-y-4">
                        <div className="p-6 shadow-smooth rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                            <h2 className="mb-5 dark:text-white">voting</h2>
                            <h3 className="leading-relaxed mb-2 text-primary-dark dark:text-primary"> voting </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Voting;