const createCallbacks = () => {
  for (var i = 1; i <= 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
};

createCallbacks();
