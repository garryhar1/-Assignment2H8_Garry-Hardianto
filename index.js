// data
const FullName = document.getElementById("fullname")
const av = document.getElementById("av")
const us = document.getElementById("us")
const lo = document.getElementById("lo")
const pe = document.getElementById("pe")
const em = document.getElementById("em")
const ro = document.getElementById("ro")
// form

const fullname = document.getElementById("fullName")
const role = document.getElementById("role")
const ava = document.getElementById("ava")
const usi = document.getElementById("usi")
const lok = document.getElementById("lok")
const pen = document.getElementById("pen")
const ema = document.getElementById("ema")

//container
const hilang = document.getElementById("con")
let validEmail = Boolean


function ValidateEmail() {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (ema.value.match(validRegex)) {
        alert("Valid email address!");
        validEmail = true;
    } else {
        alert("Invalid email address!");
        validEmail = false;
    }
}
//button

const element = document.getElementById("myBtn");

if (validEmail) {
    element.addEventListener("click", function () {
        console.log(validEmail, "==> APA");
        FullName.innerHTML = fullname.value
        ro.innerHTML = role.value
        av.innerHTML = ava.value
        us.innerHTML = usi.value
        lo.innerHTML = lok.value
        pe.innerHTML = pen.value
        em.innerHTML = ema.value
        // console.log(ema, "==> INI EMA");
        // console.log(ema.value, "==> INI HASILNYA");
    
        // if (!ValidateEmail()) {
        //     em.innerHTML = ema.value + "@gmail.com"
        // }
        fullname.value = ""
        role.value = ""
        ava.value = ""
        usi.value = ""
        lok.value = ""
        pen.value = ""
        ema.value = ""
        // element.style.display = 'none';
        // hilang.style.display = 'none';
        // console.log(validEmail, '->> validate email')
        // if (validEmail == false) {
        //     em.innerHTML = ema.value + "@gmail.com"
        // }
        // else {
        //     em.innerHTML = ema.value
        // }
        
    })
} else {
    element.addEventListener("click", function () {
        alert("SALAH");
    })
}