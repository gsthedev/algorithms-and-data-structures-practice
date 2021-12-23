interface testFunc {
  test: number;
}

const testFunc = (num: number): testFunc => {
  return {
    test: num
  };
}

console.log('qqqq', testFunc(10));