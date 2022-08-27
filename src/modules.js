// const sayHelloRollup = () => {
//   console.log('sayHello,Rollup');
// };

// export { sayHelloRollup };


const getFlat = () => {
  // console.log('sayHello,Rollup');
  return [[1, 2, 3, [4, 5]]].flat(Infinity);
};

export { getFlat };