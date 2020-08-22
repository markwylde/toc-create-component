const inferno = require('inferno');
const { createElement } = require('inferno-create-element');

const createCounter = require('../createCounter');

const state = window.state = {
  outsideMessage: (new Date()).toLocaleTimeString()
};

const helloBox = createCounter({
  engine: createElement,
  onRender: render
});

function render () {
  const app = document.body.querySelector('app');

  const ui = helloBox({
    greeting: 'Hello',
    outsideMessage: state.outsideMessage
  });

  inferno.render(ui, app);
}

setInterval(() => {
  state.outsideMessage = (new Date()).toLocaleTimeString();
  render();
}, 1000);

window.render = render;

render();
