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
    
    mapping(address => TodoListNode) public todoListMap;

    constructor() {
        owner = msg.sender;
    }

    function inc() internal {
        _userId++;
    }

    function createList(string calldata _message) external {
        inc();
        TodoListNode storage todoList = todoListMap[msg.sender];
        todoList.account = msg.sender;
        todoList.userId = _userId;
        todoList.message = _message;
        todoList.completed = false;

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

    function getCreatorData(address _address) public view returns(
        address,
        uint256,
        string memory,
        bool
    ) {
        TodoListNode memory todoListMsg = todoListMap[_address];
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

    function toggle(address _msgCreator) public {
        TodoListNode storage todoListNode = todoListMap[_msgCreator];
        todoListNode.completed = !todoListNode.completed;
    }
}