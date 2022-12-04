// Необходимо реализовать интерфейс, с полем ввода (textarea). 
// При обновлении страницы текст должен сохраняться в поле ввода. 
// Реализуйте данное приложение через textarea и событие input.

const textarea = document.querySelector('.text');
textarea.placeholder = 'При обновлении страницы текст должен сохраняться в поле ввода'

textarea.value = localStorage.getItem('message')

textarea.addEventListener('input', (event) => {
    const value = event.target.value
    localStorage.setItem('message', value);
})







