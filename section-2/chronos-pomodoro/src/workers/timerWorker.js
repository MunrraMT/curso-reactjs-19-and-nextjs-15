let isRunning = false;

self.onmessage = (event) => {
  if (isRunning) return;

  isRunning = true;

  const state = event.data;
  const { activeTask, secondsRemaining } = state;
  const endDate = activeTask.startDate + secondsRemaining * 1000;
  let countDownSeconds = Math.ceil((endDate - Date.now()) / 1000);

  function tick() {
    self.postMessage(countDownSeconds);
    countDownSeconds = Math.floor((endDate - Date.now()) / 1000);
    setInterval(tick, 1000);
  }

  tick();
};
