
const { tinhDiemTrungBinh, xepLoai } = require('./xulyDiem');

// Danh sách 3 sinh viên
const sinhVien = [
    {
        hoTen: 'Nguyen Van An',
        toan: 9,
        ly: 8,
        hoa: 9
    },
    {
        hoTen: 'Tran Thi Binh',
        toan: 7,
        ly: 6,
        hoa: 8
    },
    {
        hoTen: 'Le Van Cuong',
        toan: 4,
        ly: 5,
        hoa: 3
    }
];

// Hiển thị kết quả học tập
console.log('===== KET QUA HOC TAP =====');

sinhVien.forEach((sv) => {
    const diemTB = tinhDiemTrungBinh(sv.toan, sv.ly, sv.hoa);
    const loai = xepLoai(diemTB);

    console.log(`Ho ten: ${sv.hoTen}`);
    console.log(`Diem trung binh: ${diemTB.toFixed(2)}`);
    console.log(`Xep loai: ${loai}`);
    console.log('--------------------------');
});
