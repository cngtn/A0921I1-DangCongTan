let DiemToan;
let DiemLy;
let DiemSinh

DiemToan = prompt("Nhập điểm toán");
DiemLy = prompt("Nhập điểm lý");
DiemSinh = prompt("Nhập điểm sinh");

let Toan = parseInt(DiemToan);
let Ly = parseInt(DiemLy);
let Sinh = parseInt(DiemSinh);

let DTB = (Toan + Ly + Sinh)/3;
document.write("Điểm trung bình cộng là: " + DTB);