var GreeterMessage = React.createClass({
    render: function () {
      var name = this.props.name;
      var message = this.props.message;

      return (
        <div>
          <h1>Hello {name}!</h1>
          <p>{message}</p>
        </div>
      );
    }
});
//------------------------------------------------------------------------------

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var name = this.refs.name.value;
    var message = this.refs.message.value;//me

    if (name.length > 0) {
      this.refs.name.value = '';
      this.props.onNewName(name);
    }

    if (message.length > 0){
      this.refs.message.value = '';//me
      this.props.onNewMessage(message);//me
    }
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name"/>
        <p><textarea rows="10" cols="45" ref="message"></textarea></p>
        <button>Set Name</button>
      </form>
    );
  }
});
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is the default message!'
    };
  },
  getInitialState: function () {
    return {
        name: this.props.name,
        message: this.props.message//me
    };
  },
  handleNewName: function (name) {
    this.setState({
      name: name
    });
  },
  handleNewMessage: function (message) {//me
    this.setState({
      message: message
    });
  },
  render: function () {
    var name = this.state.name;
    var message = this.state.message;//me change props to state

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName} onNewMessage={this.handleNewMessage}/>
      </div>
    );
  }
});
//------------------------------------------------------------------------------

var firstName = 'Andrew';

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
