// Global Vaiable

console.log("===================================");
const userPwd = document.getElementById('userPwd');
console.log(userPwd.length, 'top')



userPwd.addEventListener('keyup',function(){
    const pwd = userPwd;
    checklength(userPwd); 

    
})




// Check Length
function checklength(e){
    if(e.value.length >= 8)
        console.log(e.value.length);
}