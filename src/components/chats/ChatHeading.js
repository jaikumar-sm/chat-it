import React from 'react';
import { FaVideo, FaUserPlus, FaEllipsisH } from 'react-icons/fa';
import { MdRestaurantMenu } from 'react-icons/md';

// class ChatHeading extends React.Component {
//   render() {
//     return (
//       <div>Chat Heading</div>
//     );
//   }
// }

// export default ChatHeading;

export default function({name, numberOfUsers}) {
  return (
    <div className="chat-header">
      <div className="user-info">
        <div className="user-name">{name}</div>
        <div className="status">
          <div className="indicator"></div>
          <span>{numberOfUsers ? numberOfUsers : null}</span>
        </div>
      </div>
      <div className="options">
        <FaVideo />
        <FaUserPlus />
        <FaEllipsisH />
      </div>
    </div>
  )
}
