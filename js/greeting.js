const loginForm = document.querySelector(".login__form");
const loginInput = document.querySelector(".name__input");
const greeting = document.querySelector(".title");
const HIDDEN_CLASSNAME ="hidden";
const USERNAME_KEY ="username";
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);

}else{
    paintGreetings(savedUsername);
}

//*名前をlocalStorageへ保存
function onLoginSubmit(event){
    event.preventDefalut();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.ariaValueMax;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);

}

function paintGreetings(username){
    greeting.innerText = `Hello! ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}