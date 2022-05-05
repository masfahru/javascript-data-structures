// Golomb Sequence with momoization
const golombMemo = (n, step = [0], memos = new Map()) => {
  step.push(step[step.length - 1] + 1);
  console.log(step[step.length - 1]);
  if (n === 1) {
    return 1;
  }
  if (!memos.get(n))
    memos.set(
      n,
      1 +
        golombMemo(
          n - golombMemo(golombMemo(n - 1, step, memos), step, memos),
          step,
          memos
        )
    );
  return memos.get(n);
};

console.log(golombMemo(10));
