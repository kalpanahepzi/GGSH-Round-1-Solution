function linearSumEven(n, sum = 0) {
    if (n <= 0) return sum;
    if (n % 2 === 0) sum += n;
    return linearSumEven(n - 1, sum);
  }
  console.log(linearSumEven(10));
  