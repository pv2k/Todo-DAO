import React, { useState, useEffect, useContext } from 'react';
import { MdVerified } from "react-icons/md";
import { IoIosSend, IoMdClose } from "react-icons/io";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import Image from 'next/image';
 
import { TodoListContext } from '../context/TodoListApp';
import Style from '../styles/index.module.css';
import Loading from '../loading.gif';
import Data from '../component/Data';

//Add the functionality of automatic reload upon creation of todo
const Home = () => {
  const [message, setMessage] = useState("");

  const { 
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
  } = useContext(TodoListContext);

  useEffect(() => {
    checkWalletConnection();
    getListData();
  }, []);

  const checkMessage = () => {
    console.log(message);
  }

  return (
    <div className={Style.home}> 
      <div className={Style.navBar}>
        <Image src={Loading} alt="Loading" width={50} height={50} />
        <div className={Style.connect}>
          {!currentAccount ? (
            <button onClick={connectWallet}>Connect Wallet</button>
          ) : (
            <button>{currentAccount.slice(0,15)}....</button>
          )}
        </div>
      </div>

      <div className={Style.home_box}>
        <div className={Style.home_completed}>
            <h2>ToDo History List</h2>
            <div>
              {myList.map((el, id) => (
                <div className={Style.home_completed_list} key={id}> 
                  <MdVerified className='Style.iconColor' />
                  <p>{el.slice(0,30)}...</p>
                </div>
              ))}
            </div>
        </div>
        
        <div className={Style.home_create}>
          <div className={Style.home_create_box}>
            <h2>Create TodoList on BlockChain</h2>
            <div className={Style.home_create_input}>
              <input 
                type="Text" 
                placeholder="Enter Todo text"
                onChange={(e) => setMessage(e.target.value)} 
              />
              {currentAccount ? (
                <IoIosSend className={Style.iconBlack} onClick={() => toDoList(message)} />
              ): (
                <IoIosSend className={Style.iconBlack} onClick={connectWallet} />
              )}
            </div>
            
            <Data
              allTodoList={allTodoList}
              allAddress={allAddress}
              myList={myList}
              toggleFunction={toggleFunction}
            />

          </div>
        </div>
      </div>
    </div>
  )
};

export default Home