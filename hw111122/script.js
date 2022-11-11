// 1)Создайте кнопку в html при нажатию на которую
// в консоль выводится "привет".
const button = document.guerySelector('.button');

function showConsole(){
    console.log("привет");
}
button.addEventListener("click",showConsole);


