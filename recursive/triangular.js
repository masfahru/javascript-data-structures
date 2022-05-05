const triangular = (num) => {
  if (num == 1) return 1;
  return num + triangular(num - 1);
};
console.log(triangular(5)); // 15 = 5+4+3+2+1
