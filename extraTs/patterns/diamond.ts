export default function diamond(rows: number): void {
  let k: number;
  let i: number;
  let j: number;
  let pattern1: string = '';
  for (i = 1; i <= rows; i++) {
    for (j = 1; j <= rows - i; j++) {
      pattern1 += ' ';
    }
    for (k = 1; k <= i; k++) {
      pattern1 += '*';
      pattern1 += ' ';
    }
    console.log(pattern1);
    pattern1 = '';

  }

  let pattern2: string = '';
  for (i  = rows; i >= 1; i--) {
    for ( j = i; j <= rows - 1; j++) {
      pattern2 += ' ';
    }
    for ( k = 1; k <= i; k++) {
      pattern2 += '*';
      pattern2 += ' ';
    }
    console.log(pattern2);
    pattern2 = '';

  }
}
