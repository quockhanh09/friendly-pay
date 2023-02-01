let listUser = [];
const dataLocalStorage = localStorage.getItem("listUser");
let getAllUser = JSON.parse(localStorage.getItem('listUser'));

if (dataLocalStorage) {
    listUser = getAllUser;
}

console.log(listUser);

const btn = document.getElementById("sinup");
const inputName = document.getElementById("name");
const inputPass = document.getElementById("pass");
const inputCfPass = document.getElementById("cfPass");
const inputMail = document.getElementById("email");

let isCheckName = false;
let isCheckMail = false;
let isCheckPass = false;
let isCheckCfPass = false;
inputName.onchange = () => {
    if (!(inputName.value.length >= 2)) {
        document.getElementById("sub-info__name").innerHTML = `<div style ="color:red">Tên phải chứa tối thiểu 2 kí tự</div>`
    } else {
        isCheckName = true;
        document.getElementById("sub-info__name").innerHTML = `<div style ="color:green">Tài khoản hợp lệ</div>`
    }

}

inputPass.onchange = () => {
    if (!(inputPass.value.length >= 6)) {
        document.getElementById("sub-info__pass").innerHTML = `<div style ="color:red">Mật khẩu chứa tối thiểu 6 kí tự</div>`
    } else {
        isCheckPass = true;
        document.getElementById("sub-info__pass").innerHTML = `<div style ="color:green">Mật khẩu hợp lệ</div>`
    }

}

inputMail.onchange = () => {
    if (!(inputMail.value.includes("@gmail.com"))) {
        document.getElementById("sub-info__mail").innerHTML = `<div style ="color:red">Định dạng chưa đúng</div>`
    } else {
        isCheckMail = true;
        document.getElementById("sub-info__mail").innerHTML = `<div style ="color:green">Email hợp lệ</div>`
    }

}

inputCfPass.onchange = () => {
    if (!(inputCfPass.value.length == inputPass.value)) {
        document.getElementById("sub-info__cfpass").innerHTML = `<div style ="color:red">Mật khẩu xác nhận không đúng</div>`
    } else {
        isCheckPass = true;
        document.getElementById("sub-info__cfpass").innerHTML = `<div style ="color:green">Mật khẩu xác nhận đúng</div>`
    }

}

btn.addEventListener("click", () => {
    let isExistEmail = false;
    let isExistName = false;
    let isExitstPass = false;
    if (isCheckName == true && isCheckMail == true && isCheckPass == true) {
        for (let user of listUser) {
            if (user.mail === inputMail.value) {
                isExistEmail = true;
            }
            if (user.name === inputName.value) {
                isExistName = true;
            }
            if (inputPass.value !== inputCfPass.value) {
                isExitstPass = true;
            }
        }
        if (isExistEmail === false) {
            if (isExistName === false) {
                if (isExitstPass === false) {
                    const newUser = {
                        name: inputName.value,
                        mail: inputMail.value,
                        password: inputPass.value,
                    }

                    listUser.push(newUser);
                    // document.getElementById("sub-info__name").innerHTML = `<div></div>`
                    // document.getElementById("sub-info__mail").innerHTML = `<div style="font-size: 15px; color:rgb(32, 32, 224)">Mail phải chứa @gmail.com</div>`
                    // document.getElementById("sub-info__pass").innerHTML = `<div id="sub-info__pass" style="font-size: 15px; color:rgb(32, 32, 224)">Tối thiểu 6 kí tự</div>`

                    localStorage.setItem("listUser", JSON.stringify(listUser));
                    alert("Đăng kí thành công");
                    // document.getElementById("sub-info__singup").innerHTML = `<div style ="color:green">Đăng ký thành công</div>`;
                    window.location.href = "./login.html";
                } else {
                    // alert("Mật khẩu không trùng khớp");
                    document.getElementById("sub-info__cfpass").innerHTML = `<div style ="color:red">Mật khẩu xác nhận không trùng khớp</div>`
                }
            } else {
                // alert("Tài khoản đã tồn tại");
                document.getElementById("sub-info__name").innerHTML = `<div style ="color:red">Tài khoản đã tồn tại</div>`;
            }
        } else {
            // alert("Email đã tồn tại")
            document.getElementById("sub-info__mail").innerHTML = `<div style ="color:red">Email đã tồn tại</div>`;
        }
    } else {
        alert("Đăng kí không thành công");
        // document.getElementById("sub-info__mail").innerHTML = `<div style ="color:green">Đăng ký ko thành công</div>`;
    }
})