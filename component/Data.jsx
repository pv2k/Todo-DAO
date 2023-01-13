import React, { useContext } from 'react'
import { IoIosSend, IoMdClose, IoIosCheckmarkCircle } from "react-icons/io";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import { GiCircle } from "react-icons/gi";
import Style from '../styles/index.module.css';

const Data = ({allTodoList, allAddress, myList, toggleFunction}) => {
    console.log(allTodoList);
    return (
        <div className={Style.home_create_list}>
            {allTodoList.length === 0 ? (
                <div className={Style.noData}>
                    No Data
                </div>
            ): (
                <div>
                    {allTodoList.map((el,id) => (
                        <div className={Style.home_create_list_app} key={id}>
                            <div className={Style.lock_list}>
                                <AiFillLock className={Style.lock_color} />
                                <p>{el[2]}</p>
                            </div>
                            {el[3] === false ? (
                                <GiCircle className={Style.iconClose} onClick={() => toggleFunction(el[1])} />
                            ) : (
                                <IoIosCheckmarkCircle className={Style.iconClose} onClick={() => toggleFunction(el[1])} />
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Data