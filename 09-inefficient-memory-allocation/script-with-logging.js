const findByIndex = (index) => {
  console.time('array creation');
  const numbers = Array.from(Array(1000000).keys());
  console.timeEnd('array creation');

  console.time(`findByIndex: ${index}`);
  const result = numbers[index];
  console.timeEnd(`findByIndex: ${index}`);

  console.log(`item by index ${index}=${result}`);

  return result;
};

console.time('total execution time');

findByIndex(110351);
findByIndex(911234);
findByIndex(520109);
findByIndex(398);

console.timeEnd('total execution time');
