export default function equilateral(rows) {
  for (var i = 0; i < rows; i++) {
    var str = '';
    for (var j = 1; j < rows - i; j++) {
      str = str + ' ';
    }
    for (var k = 1; k <= (2 * i + 1); k++) {
      str = str + '*';
    }
    console.log(str);
  }
}
