function greet() {
  const name = 'John';

  return function () {
    console.log(`Hi ${name}`);
  };
}

const greeting = greet();

greeting();
