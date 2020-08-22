window.addEventListener('DOMContentLoaded', () => {
  const url = new URL(document.location.href);

  if (url.searchParams.get('engine') === 'hyperscript') {
    return require('./engines/hyperscript');
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

  window.location.href = '?engine=hyperscript';
});
