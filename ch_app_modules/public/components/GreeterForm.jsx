var React = require('react');

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }

    if (message.length > 0){
      this.refs.message.value = '';
      updates.message = message;
    }

    this.props.onNewData(updates);
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name"/>
        </div>
        <div>
          <textarea rows="10" cols="45" ref="message"></textarea>
        </div>
        <div>
          <button>Set Name</button>
        </div>
      </form>
    );
  }
});

module.exports = GreeterForm;
