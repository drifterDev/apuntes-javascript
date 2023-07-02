class MyMath {
  static PI = 3.1416;
  static max(...nums: number[]) {
    return nums.reduce((a, b) => (a > b ? a : b));
  }
}

console.log('Math', Math.PI);
console.log('Math', Math.max(12, 2, 334, 453, 56, 34));
console.log('MyMath', MyMath.PI);
console.log('MyMath', MyMath.max(12, 2, 334, 453, 56, 34));
