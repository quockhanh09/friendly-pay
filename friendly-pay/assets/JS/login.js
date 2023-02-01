let listUser = [];
const dataLocalStorage = localStorage.getItem("listUser");
let getlistUser = JSON.parse(localStorage.getItem('listUser'));

if (dataLocalStorage) {
    listUser = getlistUser;
}

console.log(listUser);

let btnLogin = document.querySelector('button#login')
let inputUsername = document.querySelector('input#username');
let inputPassword = document.querySelector('input#password');

btnLogin.onclick = function () {
    let username = inputUsername.value;
    let password = inputPassword.value;
    let flag = 1;
    for (let i = 0; i < listUser.length; i++) {
        if (listUser[i]['username'] !== username && listUser[i]['password'] !== password) {
            flag = 0;
        }
    }
    if (flag === 0) {
        console.log('Nhập sai tài khoản hoặc mật khẩu!');
        document.getElementById("notification").innerHTML = `<div class="notification">Tài khoản hoặc mật khẩu sai!</div>`;
    } else {
        alert('Đăng nhập thành công!');
        window.location.href = "/assets/HTML/spin.html";
    }
}