import routes from './routes.js';

function render() {
  const path = window.location.hash || '/';
  const route = routes[path];

  if (route) {
    fetch(route.view)
      .then(response => response.text())
      .then(html => {
        document.getElementById('app').innerHTML = html;
        if (route.script) {
          // Remove the previous script
          const oldScript = document.querySelector('script[data-script="route-script"]');
          if (oldScript) {
            oldScript.remove();
          }
          // Add the new script
          const script = document.createElement('script');
          script.type = 'module';
          script.dataset.script = 'route-script';
          script.src = `${route.script}?ts=${new Date().getTime()}`;
          document.head.appendChild(script);
        }
      });
  } else {
    document.getElementById('app').innerHTML = '404 Page Not Found';
  }
}

function initRouter() {
  window.addEventListener('hashchange', render); // Render the page when the hash changes

  document.body.addEventListener('click', e => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault(); // Prevent browser from following the link
      window.location.hash = e.target.getAttribute('href').substring(1); // Remove the # character
    }
  });

  render();
}

export { initRouter };