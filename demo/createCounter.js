const createComponent = require('../');

const createCounter = createComponent(function (h, state, setState) {
  let options = {};

  console.log('component created');

  state.clicks = state.clicks || 0;

  function increment (event) {
    state.clicks = state.clicks + 1;
    setState(state);
  }

  return (newOptions) => {
    options = newOptions;
    return h('div', {},
      h('div', {}, options.greeting),
      ' ',
      h('div', {},
        h('label', {}, 'Clicks: '),
        h('span', {}, state.clicks)
      ),
      ' ',
      h('div', {},
        h('label', {}, 'Outside: '),
        h('span', {}, options.outsideMessage)
      ),
      ' ',
      h('button', { onclick: increment }, 'increment')
    );
  };
});

module.exports = createCounter;
