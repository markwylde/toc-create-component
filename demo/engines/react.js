const React = require('react');
const ReactDOM = require('react-dom');

const createCounter = require('../createCounter');

const state = window.state = {
  outsideMessage: (new Date()).toLocaleTimeString()
};

const helloBox = createCounter({
  engine: React.createElement,
  onRender: render
});

function render () {
  const app = document.body.querySelector('app');

  const ui = helloBox({
    greeting: 'Hello',
    outsideMessage: state.outsideMessage
  });

  ReactDOM.render(ui, app);
}

setInterval(() => {
  state.outsideMessage = (new Date()).toLocaleTimeString();
  render();
}, 1000);

window.render = render;

render();
