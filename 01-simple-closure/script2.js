function greet(name) {
  return function () {
    console.log(`Hi ${name}`);
  };
}

const greeting = greet('John');

greeting();
