define(function(require, exports, module) {
  var React = require("react");
  var createReactClass = require('createReactClass');

  module.exports = createReactClass({
     render: function(props) {
        console.log(props);
        return (<h1>React.js FTW</h1>);
    }
  });
});
