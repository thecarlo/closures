function setCount() {
  let number = 0;

  return function () {
    console.log(++number);
  };
}

const counter = setCount();
counter();
counter();
counter();
