const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const createSetTimeouts = async () => {
  for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
      console.log(`setTimeout i=${i}`);
    }, i * 500);

    await delay(i * 550);
  }

  console.log(`value of i after for loop: ${i}`);
};

createSetTimeouts();
