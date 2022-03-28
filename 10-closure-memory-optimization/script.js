const findByIndex = () => {
  console.time('array creation');
  const numbers = Array.from(Array(1000000).keys());
  console.timeEnd('array creation');

  return (index) => {
    console.time(`findByIndex: ${index}`);
    const result = numbers[index];
    console.timeEnd(`findByIndex: ${index}`);

    console.log(`item by index ${index}=${result}`);

    return result;
  };
};

console.time('total execution time');

const find = findByIndex();

find(110351);
find(911234);
find(520109);
find(398);

console.timeEnd('total execution time');
