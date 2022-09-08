
let regex = /((((\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']? ?)+ ?) ?)/;
let res = regex.test('<p class="nnnn"id="on" name="yyyyyyyy"></p>');
let result = regex.exec('<p border="5px" color="red">ghfh</p>');

console.log(res);
console.log(result);
