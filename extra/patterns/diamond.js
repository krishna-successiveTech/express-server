export default function diamond(rows) {
  let k, i, j;
  let pattern1 = "";
  for (i = 1; i <= rows; i++) {
    for (j = 1; j <= rows - i; j++) {
      pattern1 += " ";
    }
    for (k = 1; k <= i; k++) {
      pattern1 += "*";
      pattern1 += " ";
    }
    console.log(pattern1);
    pattern1 = "";

  }

  let pattern2 = "";
  for (let i = rows; i >= 1; i--) {
    for (let j = i; j <= rows - 1; j++) {
      pattern2 += " ";
    }
    for (let k = 1; k <= i; k++) {
      pattern2 += "*";
      pattern2 += " "
    }
    console.log(pattern2);
    pattern2 = "";

  }
}
