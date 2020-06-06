import React from 'react';

class MessageInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      isTyping: false
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.sendMessage();
    this.setState({message: ""});
  }

  sendMessage = () => {
    this.props.sendMessage(this.state.message);
  }

  sendTyping = () => {

  }

  render() {
    const { message } = this.state;
    return (
      <div className="message-input">
        <form
          onSubmit={this.handleSubmit}
          className="message-form">

            <input 
              id="message"
              ref={"messageInput"}
              type="text"
              className="form-control"
              value={ message }
              autoComplete={"off"}
              placeholder="Type something interesting"
              onKeyUp={ e => { e.keyCode !== 13 && this.sendTyping() } }
              onChange={
                ({target}) => {
                  this.setState({message: target.value})
                }
              }
            />
            <button
              disabled={message.length < 1}
              type="submit"
              className="send"
            > Send </button>
        </form>
      </div>
    );
  }
}

export default MessageInput;