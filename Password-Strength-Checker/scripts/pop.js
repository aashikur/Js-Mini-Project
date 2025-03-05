
const popBox = ID('popBox');
const popClosed = ID('popClosed');
const confirmPass = ID('confirmBtn');
const mainForm = ID('mainForm');


// popBox.style.display ='none';

confirmPass.addEventListener('click',()=>{
    mainForm.classList.add('blur-lg');
    popBox.style.display = 'flex';
})


popClosed.addEventListener('click',()=>{
    location.reload();
})





function ConfirmButtonAction(progress){
    if(progress >= 3 ){
        confirmPass.style.color = "white";
        confirmPass.style.cursor = "pointer";
        confirmPass.removeAttribute('disabled');
    } else {
        confirmPass.style.color = "";
        confirmPass.style.cursor = "initial";
        confirmPass.setAttribute('disabled',true);
    }
}