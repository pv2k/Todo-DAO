// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract TodoList {
    uint256 public _userId;
    address public owner;
    address[] public msgCreators;
    string[] public messages;
    uint256[] public msgIds;
    
    /**
    * @dev Creating a struct for the to-do entries
     */
    struct TodoListNode {
        address account;
        uint256 userId;
        string message;
        bool completed;
    }

    /**
    * @dev using the event to check the current state of the contract
     */
    event TodoEvent(
        address indexed account,
        uint256 indexed userId,
        string message,
        bool completed
    );
    
    mapping(uint256 => TodoListNode) public todoListMap;

    /**
    * @dev initialising the contract
     */
    constructor() {
        owner = msg.sender;
    }

    /**
    * @dev increasing the _userId with each new to-do entry
     */
    function inc() internal {
        _userId++;
    }

    /**
    * @dev creating a new entry and emiting the event
    * @param _message is the description that user wants to create in the to-do list
     */
    function createList(string calldata _message) external {
        TodoListNode storage todoList = todoListMap[_userId];
        todoList.account = msg.sender;
        todoList.userId = _userId;
        todoList.message = _message;
        todoList.completed = false;
        inc();

        msgCreators.push(msg.sender);
        messages.push(_message);
        msgIds.push(_userId);

        emit TodoEvent(
            msg.sender,
            todoList.userId,
            _message,
            todoList.completed
        );
    }

    /**
    * @dev get the data of To-do list entry
    * @param uId is the _userId  
     */
    function getCreatorData(uint256 uId) public view returns(
        address,
        uint256,
        string memory,
        bool
    ) {
        TodoListNode memory todoListMsg = todoListMap[uId];
        return(
            todoListMsg.account,
            todoListMsg.userId,
            todoListMsg.message,
            todoListMsg.completed
        );
    }

    /**
    * @dev get all the addresses of the to-do list entry creators
     */
    function getAddress() external view returns(address[] memory) {
        return msgCreators;
    }

    /**
    * @dev get all the description of the to-do list entries
     */
    function getMessage() external view returns(string[] memory) {
        return messages;
    }

    /**
    * @dev toggle function to check off the entry from the list or undo it
    * @param uId is the _userId of the to-do list node
     */
    function toggle(uint256 uId) public {
        require(todoListMap[uId].account == msg.sender, "Only user who created the list, can toggle it");
        TodoListNode storage todoListNode = todoListMap[uId];
        todoListNode.completed = !todoListNode.completed;
    }
}