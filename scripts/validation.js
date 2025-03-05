// Global Vaiable

console.log("===================================");
const getId = (id) => document.getElementById(id);



// Main Function
getId('userPwd').addEventListener('keyup',function(){
    
    
    checklength(userPwd,'digits8'); 
    checkCapital(userPwd,'capital1'); 

    
})






































//  Check For if Number  is 8 Digits
function checklength(inputField,worningTextID){
    const condition = inputField.value.length >= 8
    worningTextChange(worningTextID, condition);
}

//  Check For if Contain A-Z
function checkCapital(inputField,worningTextID){
    const condition = /[A-Z]/.test(inputField);
    worningTextChange(worningTextID, condition);
}



// Worining Text Changes 
function worningTextChange(id,condition){
    const selectedTextField = document.getElementById(id);

    if(condition)
    {
        selectedTextField.style.opacity = '1';
        selectedTextField.querySelector('span').style.backgroundColor = '#86ff86';
    } 
    else {
        selectedTextField.style.opacity = '0.35';
        selectedTextField.style.color = '#ddd';
        selectedTextField.querySelector('span').style.backgroundColor = '#fb2c36';
    }
    
}