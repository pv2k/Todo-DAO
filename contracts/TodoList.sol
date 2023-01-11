// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract TodoList {
    uint256 public _userId;
    address public owner;
    address[] public msgCreators;
    string[] public messages;
    uint256[] public msgIds;

    struct TodoListNode {
        address account;
        uint256 userId;
        string message;
        bool completed;
    }

    event TodoEvent(
        address indexed account,
        uint256 indexed userId,
        string message,
        bool completed
    );
    
    mapping(uint256 => TodoListNode) public todoListMap;

    constructor() {
        owner = msg.sender;
    }

    function inc() internal {
        _userId++;
    }

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

    function getAddress() external view returns(address[] memory) {
        return msgCreators;
    }

    function getMessage() external view returns(string[] memory) {
        return messages;
    }

    function toggle(uint256 uId) public {
        require(todoListMap[uId].account == msg.sender, "Only user who created the list, can toggle it");
        TodoListNode storage todoListNode = todoListMap[uId];
        todoListNode.completed = !todoListNode.completed;
    }
}