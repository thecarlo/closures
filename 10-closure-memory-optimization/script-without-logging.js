const findByIndex = () => {
  const numbers = Array.from(Array(1000000).keys());

  return (index) => {
    const result = numbers[index];

    console.log(`item by index ${index}=${result}`);

    return result;
  };
};

const find = findByIndex();

find(110351);
find(911234);
find(520109);
find(398);
