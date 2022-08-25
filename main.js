const suname = "admin";
const spass = "admin";
const unameInput = document.getElementById('uname');
const passInput = document.getElementById('pass');
const loginButton = document.querySelector(".b-log");
function login() {
    if (unameInput.value == suname && passInput.value==spass) 
      return  alert('LOGIN BERHASIL');
    else 
      return  alert('LOGIN GAGAL! MASUKKAN USERNAME DAN PASSWORD DENGAN BENAR');
    }
loginButton.addEventListener("click",login);

