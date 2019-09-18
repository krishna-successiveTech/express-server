export default function equilateral(rows:number) :void{
  for (var i:number = 0; i < rows; i++) {
    var str:string = '';
    for (var j:number = 1; j < rows - i; j++) {
      str = str + ' ';
    }
    for (var k:number = 1; k <= (2 * i + 1); k++) {
      str = str + '*';
    }
    console.log(str);
  }
}
