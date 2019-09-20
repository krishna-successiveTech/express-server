export default function equilateral(rows: number): void {
  for (let i: number = 0; i < rows; i++) {
    let str: string = '';
    for (let j: number = 1; j < rows - i; j++) {
      str = str + ' ';
    }
    for (let k: number = 1; k <= (2 * i + 1); k++) {
      str = str + '*';
    }
    console.log(str);
  }
}
