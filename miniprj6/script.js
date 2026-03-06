const users = [];

const form = document.getElementById("registerForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const repasswordInput = document.getElementById("repassword");

form.addEventListener("submit", function(event) {

    event.preventDefault();
    
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const rePassword = repasswordInput.value.trim();

    if (email === "" || password === "" || rePassword === "") {
        alert("Không được để trống thông tin");
        return;
    }

    if (password !== rePassword) {
        alert("Mật khẩu nhập lại không đúng");
        return;
    }

    const checkEmail = users.some(user => user.email === email);

    if (checkEmail) {
        alert("Email đã tồn tại");
        return;
    }

    const user = {
        email: email,
        password: password,
        rePassword: rePassword
    };

    users.push(user);
    console.log("User đăng ký:", user);
    console.log("Danh sách users:", users);

});
