requirejs(["jquery", "react", "react_dom", "jsx!main", "jsx!form"], function($, React, ReactDOM, Main, Form) {
  $(function() {
     var element = React.createElement(Form, null);
     ReactDOM.render(element, document.getElementById('react_container'));
  });
});
