window.addEventListener('DOMContentLoaded', () => {
  const url = new URL(document.location.href);

  if (url.searchParams.get('engine') === 'hyperscript') {
    return require('./engines/hyperscript');
  }

  if (url.searchParams.get('engine') === 'vhtml') {
    return require('./engines/vhtml');
  }

  if (url.searchParams.get('engine') === 'minthril') {
    return require('./engines/minthril');
  }

  if (url.searchParams.get('engine') === 'react') {
    return require('./engines/react');
  }

  if (url.searchParams.get('engine') === 'fastn') {
    return require('./engines/fastn');
  }

  if (url.searchParams.get('engine') === 'preact') {
    return require('./engines/preact');
  }

  if (url.searchParams.get('engine') === 'inferno') {
    return require('./engines/inferno');
  }

  window.location.href = '?engine=hyperscript';
});
