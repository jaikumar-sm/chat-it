import React from 'react';
import { FaSearch, FaChevronDown } from 'react-icons/fa';
import { MdEject, MdMenu } from 'react-icons/md';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reciever: ""
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { reciever } = this.state;
    const { onSendPrivateMessage } = this.props;

    onSendPrivateMessage(reciever);
  }

  render() {
    const { chats, activeChat, user, setActiveChat, logout } = this.props;
    const { reciever } = this.state;
    return (
      <div id="side-bar">
        <div className="heading">
          <div className="app-name">Our Cool Chat <FaChevronDown /></div>
          <div className="menu">
            <MdMenu />
          </div>
        </div>
        <form className="search" onSubmit={this.handleSubmit}>
          <i className="serach-icon"><FaSearch /></i>
          <input 
            placeholder="Search"
            type="text"
            onChange={(e) => {
              this.setState({reciever: e.target.value});
            }}
            value={reciever}
          />
          <div className="plus"></div>
        </form>
        <div 
          className="users"
          ref='users'
          onClick={ (e) => { (e.target === this.refs.user) && setActiveChat(null) } }>
            {
              chats.map((chat) => {
                console.log(chats, chat);
                if(chat.name) {
                  const lastMessage = chat.messages[chat.messages.length - 1];
                  const chatSideName = chat.users.find((name) => {
                    return name !== user.name;
                  }) || "Community"
                  const classNames = (activeChat && activeChat.id === chat.id) ? 'active' : '';

                  return (
                    <div 
                      key={chat.id}
                      className={`user ${classNames}`}
                      onClick={ () => { setActiveChat(chat) } }>
                        <div className="user-photo">{chatSideName[0].toUpperCase()}</div>
                        <div className="user-info">
                          <div className="name">{chatSideName}</div>
                          {lastMessage && <div className="last-message">{lastMessage.message}</div>}
                        </div>
                    </div>
                  )
                }
                return null;
              })
            }
        </div>
        <div className="current-user">
          <span>{user.name}</span>
          <div onClick={()=>{logout()}} title="Logout" className="logout">
            <MdEject/>	
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;