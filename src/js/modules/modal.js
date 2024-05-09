const modal = () => {
    var modal = document.getElementById("myModal");
    var modal2 = document.getElementById("myModal2");
    var modal3 = document.getElementById("myModal3");
    var btn = document.getElementById("openModalBtn");
    var btn2 = document.getElementById("openModalBtn2");
    var btn3 = document.getElementById("openModalBtn3");
    var span = document.getElementsByClassName("close")[0];
    var span2 = document.getElementsByClassName("close2")[0];
    var span3 = document.getElementsByClassName("close3")[0];
    var reg = document.getElementById("reg");
    var log = document.getElementById("log");
    var email = document.getElementById("emailul");

    // Когда пользователь кликает на кнопку, открываем модальное окно
    btn.onclick = function() {
        console.log('ttt')
        modal.style.display = "block";
    }
    btn2.onclick = function() {
        console.log('ttt')
        modal2.style.display = "block";
    }
    btn3.onclick = function() {
        console.log('ttt')
        modal3.style.display = "block";
    }
    reg.onclick = function() {
        email.style.display = "block";
    }
    log.onclick = function() {
        email.style.display = "none";
    }
    // Когда пользователь кликает на крестик, закрываем модальное окно
    span.onclick = function() {
        modal.style.display = "none";
    }
    span2.onclick = function() {
        modal2.style.display = "none";
    }
    span3.onclick = function() {
        modal3.style.display = "none";
    }

    // Когда пользователь кликает вне модального окна, закрываем его
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        if (event.target == modal2) {
            modal2.style.display = "none";
        }
    }
}
export default modal 