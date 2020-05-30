import React from 'react';
import io from 'socket.io-client'

const socketUrl = 'http://192.168.1.122:3231';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: null
    };
  }

  componentWillMount() {
    this.initSocket();
  }

  initSocket = () => {
    const socket = io(socketUrl);
    socket.on('connect', () => {
      console.log('connected!');
    })
    this.setState({socket});
  }

  render() {
    const { title } = this.props;
    return (
      <div className="container">
        {title}
      </div>
    );
  }
}

export default Layout;
