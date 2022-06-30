import React, {
    createContext,
    useContext,
    useReducer,
    useMemo,
    useCallback,
    useEffect,
} from "react";
// import { ethers } from "ethers";
// import { useWallet } from "use-wallet";

// import { NotificationManager } from "react-notifications";

const BlockchainContext = createContext();

export function useBlockchainContext() {
    return useContext(BlockchainContext);
}


function reducer(state, { type, payload }) {
    return {
        ...state,
        [type]: payload
    }
}
// 56  BSC
// 1   Ethereum

const INIT_STATE = {
    Loading: true,
    signer: {},
    provider: {},
    balance: "0",
    minSidebar: false,
    isDark: false,
    isTokenSearchBar: false,
    networkID: 56,
    Network: [],
    tokenName: 'avalanche'
};


export default function Provider({ children }) {
    // const wallet = useWallet();
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    return (
        <BlockchainContext.Provider
            value={useMemo(
                () => [
                    state,
                    {
                        dispatch
                    }
                ],
                [state]
            )}
        >
            {children}
        </BlockchainContext.Provider>
    );
}