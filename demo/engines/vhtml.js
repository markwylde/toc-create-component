const createCounter = require('../createCounter');
const escapeHtml = require('escape-html');
const beautify = require('js-beautify');

const state = window.state = {
  outsideMessage: (new Date()).toLocaleTimeString()
};

const helloBox = createCounter({
  engine: require('vhtml'),
  onRender: render
});

async function render () {
  const app = document.body.querySelector('app');

  const ui = helloBox({
    greeting: 'Hello',
    outsideMessage: state.outsideMessage
  });

  const html = beautify.html(ui);
  app.innerHTML = `<pre><code>${escapeHtml(html)}</code></pre>`;
}

setInterval(() => {
  state.outsideMessage = (new Date()).toLocaleTimeString();
  render();
}, 500);

window.render = render;

render();
