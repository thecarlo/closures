const findByIndex = (index) => {
  const numbers = Array.from(Array(1000000).keys());

  const result = numbers[index];

  console.log(`item by index ${index}=${result}`);

  return result;
};

findByIndex(110351);
findByIndex(911234);
findByIndex(520109);
findByIndex(398);
