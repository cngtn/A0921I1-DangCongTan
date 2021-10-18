const PI = 3.14159;
let inputR;

inputR = prompt("NhậP bán kính của hình tròn:");

let R = parseInt(inputR);

S = R * R * PI
C = R * 2 * PI

document.write("Diện tích hình tròn là: " + S)
document.write("\nChu vi hình tròn là: " + C)