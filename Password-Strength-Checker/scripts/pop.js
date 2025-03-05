
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


