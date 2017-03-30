var chek = document.getElementById("chek")
var input = document.getElementById("pole");
var btn = document.getElementById("btn");
var check = document.getElementById("agree");
var Warning = document.getElementById("warning");
var input = document.getElementById("input");
var spanHolder = document.getElementById("result");
var FlagChek;
var FlagValid;
var userTxtArr;


function getStatus(event) {
    var chkbox = event.target;
    FlagChek = chkbox.checked;
};

function getLength(e) {
    if (e.target.value.length >= 16) {
        check.disabled = true;
        Warning.innerHTML = " ";
        Warning.innerHTML = "<span> Слишком длинное сообщение. Введите не более 15и символов</span>";
        FlagValid = false;
    } else if (e.target.value.length <= 3) {
        check.disabled = true;
        Warning.innerHTML = " ";
        Warning.innerHTML = "<span>Слишком короткое сообщение. Введите больше 3х символов</span>";
        FlagValid = false;
    } else {
        check.disabled = false;
        Warning.innerHTML = " ";
        FlagValid = true;
    }
};

function getText() {
    if (!FlagChek) {
        Warning.innerHTML = " ";
        Warning.innerHTML = "<span>Поставте галочку</span>";
    }
    if (FlagChek && FlagValid) {
        Warning.innerHTML = " ";
        var text = input.value;
        userTxtArr = text.split(",");
        input.value = " ";
        userTxtArr.map(function(item, index, arr) {
            var span = document.createElement("span");
            span.innerHTML = "<li>" + item + "</li>";
            span.onclick = function() {
                span.parentNode.removeChild(span);
                arr.splice(index, 1);
            }
            spanHolder.appendChild(span);
        });
    }
};

check.onchange = getStatus;
input.onkeypress = getLength;
btn.onclick = getText;