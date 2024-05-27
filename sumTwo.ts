const array: number[] = [1, 5, 4, 8, 9];
const target: number = 9;

function sumTwo(array: number[], taget: number): number[] | null {
  let length = array.length;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (array[i] + array[j] === target) {
        return [array[i], array[j]];
      }
    }
  }
  return null;
}

console.log(sumTwo(array, target));
