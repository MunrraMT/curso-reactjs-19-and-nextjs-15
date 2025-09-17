self.postMessage('worker ON');
self.postMessage('tudo bem?');
self.onmessage = (event) => {
  console.log('worker:', event.data);
};
