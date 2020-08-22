const createCounter = require('../createCounter');

const state = window.state = {
  outsideMessage: (new Date()).toLocaleTimeString()
};

const helloBox = createCounter({
  engine: require('hyperscript'),
  onRender: render
});

function render () {
  const app = document.body.querySelector('app');
  app.innerHTML = '';

  const ui = helloBox({
    greeting: 'Hello',
    outsideMessage: state.outsideMessage
  });

  app.appendChild(ui);
}

setInterval(() => {
  state.outsideMessage = (new Date()).toLocaleTimeString();
  render();
}, 500);

window.render = render;

render();
