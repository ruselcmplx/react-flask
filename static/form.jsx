define(function(require, exports, module) {
  var React = require("react");
  var createReactClass = require('createReactClass');

   module.exports = createReactClass({
     getInitialState: function() {
       return {data: 'Default state'};
     },

     updateState(e) {
      this.setState({data: e.target.value});
     },


     render: function() {
        return (
        <div>
            <input type = "text" value = {this.state.data} onChange = {this.updateState} />
            <h4>{this.state.data}</h4>
         </div>
         );
    }
  });
});
