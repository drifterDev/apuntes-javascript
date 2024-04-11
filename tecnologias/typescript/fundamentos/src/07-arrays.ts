(() => {
  const prices = [1, 24, 45, 563, 534, 'ojasdf', false];
  prices.push(234);
  prices.push(345690);
  prices.push(false);
  prices.push('false');

  let products: (number | string | boolean | object)[] = [];
  products.push(true);
  products.push('Element 1');
  products.push(82349);
  products.push({ name: 'Mateo', age: 24 });

  console.log(prices);
  console.log(products);

  let nums = [1.2, 34, 56];
  nums.map((item) => item ** 2);
})();
