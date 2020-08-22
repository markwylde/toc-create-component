const preact = require('preact');

const createCounter = require('../createCounter');

const state = window.state = {
  outsideMessage: (new Date()).toLocaleTimeString()
};

const helloBox = createCounter({
  engine: preact.h,
  onRender: render
});

function render () {
  const app = document.body.querySelector('app');

  const ui = helloBox({
    greeting: 'Hello',
    outsideMessage: state.outsideMessage
  });

  preact.render(ui, app);
}

setInterval(() => {
  state.outsideMessage = (new Date()).toLocaleTimeString();
  render();
}, 1000);

window.render = render;

render();
