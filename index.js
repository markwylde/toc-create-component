const createComponent = (fn) => {
  return ({ engine, onRender }) => {
    let localState = {};

    const setState = newState => {
      localState = newState;
      onRender();
    };

    return fn(engine, localState, setState);
  };
};

module.exports = createComponent;
