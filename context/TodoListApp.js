import React, { useState, useEffect } from 'react';
import Web3Modal from 'web3modal';
import {ethers} from 'ethers';
import {todoListABI, todoListAddress} from "./constants";

const fetchContract = (signerOrProvider) =>
    new ethers.Contract(todoListAddress, todoListABI, signerOrProvider);

export const TodoListContext = React.createContext();

export const TodoListProvider = ({children}) => {
    const [currentAccount, setCurrentAccount] = useState('');
    const [error, setError] = useState("");
    const [allTodoList, setAllTodoList] = useState([]);
    const [myList, setMyList] = useState([]);
    const [allAddress, setAllAddress] = useState([]);

    /**
     * @dev connecting metamask
     */
    const checkWalletConnection = async() => {
        if(!window.ethereum) {
            return setError("Please install metamask");
        }
        const account = await window.ethereum.request({method: "eth_accounts"});
        console.log(account);
        if(account.length) {
            setCurrentAccount(account[0]);
            console.log("accout connected: ", account[0]);
        } else {
            setError("Please install Metamask, connnect & reload");
        }
    };

    /**
     * @dev connect metamask wallet
     */
    const connectWallet = async() => {
        if(!window.ethereum) {
            return setError("Please install metamask");
        }
        const account = await window.ethereum.request({method: "eth_requestAccounts"});
        setCurrentAccount(account[0]);
    }

    /**
     * @dev Interacting with TodoList Contract
     */
    const toDoList = async(message) => {
        try {
            console.log(message);
            const web3Modal = new Web3Modal();
            const connection = await web3Modal.connect();
            const provider = new ethers.providers.Web3Provider(connection);
            const signer = provider.getSigner();
            const contract = await fetchContract(signer);
            // console.log(contract);
            const createList = await contract.createList(message);
            createList.wait();
            console.log(createList);
        } catch(error) {
            setError("Something wrong with interacting the contract");
        }
    }

    const getListData = async() => {
        try {
            const web3Modal = new Web3Modal();
            const connection = await web3Modal.connect();
            const provider = new ethers.providers.Web3Provider(connection);
            const signer = provider.getSigner();
            const contract = await fetchContract(signer);

            const getAllAddresses = await contract.getAddress();
            setAllAddress(getAllAddresses);
            console.log(allAddress);

            const userId = await contract._userId();
            console.log("number of ids: ", userId);
            for(var id=0;id<userId;id++) {
                const getMsgData = await contract.getCreatorData(id);
                allTodoList.push(getMsgData);
                console.log(getMsgData);
            }

            // getAllAddresses.map(async(address) => {
            //     const getMsgData = await contract.getCreatorData(address);
            //     allTodoList.push(getMsgData );
            //     console.log(getMsgData);
            // });

            const allMessage = await contract.getMessage();
            setMyList(allMessage);
        } catch(error) {
            setError("Something wrong with interacting the contract");
        }
    };

    const toggleFunction = async(userId) => {
        try{
            const web3Modal = new Web3Modal();
            const connection = await web3Modal.connect();
            const provider = new ethers.providers.Web3Provider(connection);
            const signer = provider.getSigner();
            const contract = await fetchContract(signer);
    
            const change = await contract.toggle(userId);
            change.wait();
            console.log(change);
        }catch(error) {
            setError("Something wrong with interacting the contract");
        }
    }

    return (
        <TodoListContext.Provider 
            value={{ 
                checkWalletConnection, 
                connectWallet, 
                toDoList, 
                getListData, 
                toggleFunction ,
                currentAccount,
                error,
                allTodoList,
                myList,
                allAddress
            }}
        >
            {children}
        </TodoListContext.Provider>
    );
}