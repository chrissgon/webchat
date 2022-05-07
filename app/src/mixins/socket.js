const waitForSocketConnection = (socket, callback) => {
  setTimeout(function () {
    if (socket.readyState === 1) {
      if (callback !== undefined) {
        callback();
      }
      return;
    } else {
      waitForSocketConnection(socket, callback);
    }
  }, 5);
};

const onMessage = (socket, callback) => {
  socket.onmessage = (event) => {
    callback(event)
  }
  // setTimeout(function () {
  //   if (socket.readyState === 1) {
  //     if (callback !== undefined) {
  //       callback();
  //     }
  //     return;
  //   } else {
  //     waitForSocketConnection(socket, callback);
  //   }
  // }, 5);
};

export {
    waitForSocketConnection,
    onMessage
};
