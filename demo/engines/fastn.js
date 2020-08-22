const fastn = require('fastn')(
  require('fastn/domComponents')()
);

const createCounter = require('../createCounter');

const state = window.state = {
  outsideMessage: (new Date()).toLocaleTimeString()
};

const helloBox = createCounter({
  engine: fastn,
  onRender: render
});

function render () {
  const app = document.body.querySelector('app');

  const ui = helloBox({
    greeting: 'Hello',
    outsideMessage: state.outsideMessage
  });

  ui.render();

  app.innerHTML = '';
  app.appendChild(ui.element);
}

setInterval(() => {
  state.outsideMessage = (new Date()).toLocaleTimeString();
  render();
}, 500);

window.render = render;

render();
