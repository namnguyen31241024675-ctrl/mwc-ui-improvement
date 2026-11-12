// --- CODE CŨ TỪ BƯỚC TRƯỚC ---
var name = "Nguyễn Thanh Nam"; // Thay tên của bạn vào đây
var MSSV = 31241024675;     // Thay MSSV của bạn vào đây

document.write("Tôi tên là " + name + 
               " - MSSV: " + MSSV + " sẽ quyết tâm trở thành 1 anh hùng JS");

var level = 1;
var xp = 0;
var skillPoints = 5;

level++;
xp = 150 * (level - 1) + 200;
skillPoints = skillPoints + xp / 10;

document.write("</br>" + name + " sẽ là Anh Hùng Javascript" 
               + "</br>Cấp độ hiện tại của bạn là " + level);

// --- PHẦN CODE TIẾP NỐI CHO BÀI TẬP 3 ---
// Khởi tạo và tính toán 3 biến chỉ số
var strength = (0.6 * skillPoints) + (0.1 * xp);
var agility = (0.2 * skillPoints) + (0.2 * xp);
var intel = (0.2 * skillPoints) + (10 * level); // 1000% tương đương nhân 10

// Xuất các chỉ số ra màn hình
document.write("</br>Chỉ số strength của bạn là " + strength);
document.write("</br>Chỉ số agility của bạn là " + agility);
document.write("</br>Chỉ số intel của bạn là " + intel);

// Cập nhật lên cấp 3 và cộng thêm 200 XP[cite: 3]
level++;
xp += 200;

// In thông báo LEVEL UP[cite: 3]
document.write("</br>LEVEL UP! Chúc mừng bạn lên cấp " + level + "! XP +200");
// BÀI TẬP 4: LỰA CHỌN ĐỊNH MỆNH

// 1. Yêu cầu người dùng nhập lại tên
var tenNhapLai = prompt("Vui lòng nhập lại tên của bạn:");

// Kiểm tra tên người dùng
if (tenNhapLai === ten) {
    console.log("Chính xác! Bạn có trí nhớ rất tốt! intel +5!");
    intel += 5;
} else {
    console.log("Tệ thật! Tên chính mình mà không nhớ sao?! intel -5!");
    intel -= 5;
}

// 2. Yêu cầu người dùng chọn phân cấp Anh Hùng
var phancap = prompt(
    "Bạn muốn chọn phân cấp nào? a: Chiến Binh | b: Sát Thủ | c: Thợ Săn"
);

// Xử lý lựa chọn
if (phancap === "a") {

    // Chiến Binh
    phancap = "Chiến Binh";
    strength += 15;
    agility -= 10;
    intel -= 5;

} else if (phancap === "b") {

    // Sát Thủ
    phancap = "Sát Thủ";
    strength -= 15;
    agility += 10;
    intel += 5;

} else if (phancap === "c") {

    // Thợ Săn
    phancap = "Thợ Săn";
    strength -= 15;
    intel += 15;

} else {

    // Nhập không hợp lệ
    console.log("Lựa chọn không hợp lệ! Không có chỉ số nào thay đổi.");
}

// 3. LEVEL UP
level = 4;
xp += 700;

/* =================================================================
   Trước khi vào trận chiến, cần xem lại các chỉ số của bạn
   và xem xét các thông tin của đối thủ.
   ================================================================= */
level = 5; // Đảm bảo bạn sẽ ở cấp độ 5[cite: 5]
var health = level + 100; // Khi lượng máu <= 0 thì bạn sẽ chết[cite: 5]
console.log(strength); // Quyết định mức sát thương[cite: 5]
console.log(agility);  // Quyết định xác suất né đòn[cite: 5]
console.log(intel);    // Quyết định xác suất chí mạng[cite: 5]

/* =================================================================
   Rồng Già
   ---
   Chậm chạp và yếu ớt hơn so với đồng loại, nhưng vẫn rất
   nguy hiểm với khả năng phun lửa có thể gây sát thương chí
   mạng rất cao
   ================================================================= */
var dragonHealth = 600;
var dragonStr = 100;
var dragonAgi = 15;
var dragonInt = 80;
var gameContinue = true; //
while (gameContinue) { //
    // Anh hùng tấn công!
    var heroHit = Math.random() * 100 > dragonAgi; //[cite: 6]
    if (heroHit) { //[cite: 6]
        dragonHealth = dragonHealth - strength; //[cite: 6]
        alert('TRẢM LONG! Bạn gây sát thương ' + strength + ' điểm cho Rồng!'); //[cite: 6]
        var heroCritical = Math.random() * 100 < intel; //[cite: 6]
        if (heroCritical) { //[cite: 6]
            dragonHealth = dragonHealth - strength * 2; // Double damage[cite: 6]
            alert('CHÍ MẠNG! Bạn gây sát thương chí mạng thêm ' + strength * 2 + ' điểm cho Rồng!'); //[cite: 6]
        }
    } else alert('XỈ HỤT! Rồng đã lượn tránh được đòn tấn công của Bạn!'); //[cite: 6]
    
    // Rồng tấn công![cite: 6]
    var dragonHit = Math.random() * 100 > agility; //[cite: 6]
    if (dragonHealth <= 0) { //[cite: 6]
        // Rồng lên bàn thờ[cite: 6]
        gameContinue = false; //[cite: 6]
        alert('CHIẾN THẮNG!!! Chúc mừng bạn đã chiến thắng!!!'); //[cite: 6]
    } else { //[cite: 6]
        if (dragonHit) { //[cite: 6]
            health = health - dragonStr; //[cite: 6]
            alert('HỎA CẦU! Rồng gây sát thương ' + dragonStr + ' điểm cho Bạn!'); //[cite: 6]
            var dragonCritical = Math.random() * 100 < dragonInt; //[cite: 6]
            if (dragonCritical) { //[cite: 6]
                health = health - dragonStr * 2; // Double damage[cite: 6]
                alert('CHÍ MẠNG! Rồng gây sát thương chí mạng thêm ' + dragonStr * 2 + ' điểm cho Bạn!'); //[cite: 6]
            }
        } else alert('XỈ HỤT! Bạn đã tránh được đòn tấn công từ Rồng!'); //[cite: 6]
    }

    // Kiểm tra xem Anh Hùng có bị nướng?![cite: 6]
    if (health <= 0) { //[cite: 6]
        gameContinue = false; //[cite: 6]
        alert('THẤT BẠI!!! Chúc mừng bạn đã có tên trên menu món tối của Rồng: Hiệp sĩ nướng lá lốt!'); //[cite: 6]
    }
} //[cite: 6]
