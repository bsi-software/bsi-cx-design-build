new Promise(resolve => {
  window.setTimeout(resolve, 5000);
}).then(() => alert('Hello from script.js'));
