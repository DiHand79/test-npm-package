export const add = (...nums: number[]): number =>
  nums.reduce((sum, curr) => sum + curr, 0);
