// Global Variable 
const ID = (id) => document.getElementById(id);
const warningBox = ID('warningBox');
const warningBoxText = document.querySelectorAll("#warningBox li")
const userGivenPassword = ID('userPwd');
const strengthIndicator = ID('strength-indicate');
const strengthBar = ID('strength-bar');
const togglePassword = ID('toggle-password');
const eyeOpen = ID('eye-icon');
const eyeClosed = ID('eye-closed') ;
let GlobalProgress = 0;


togglePassword.addEventListener('click',()=>{
    if(userGivenPassword.type == 'password'){
        userGivenPassword.type = 'text';
        eyeOpen.style.display = 'none';
        eyeClosed.style.display = 'inline';
        
    }
    else
    {
        userGivenPassword.type = 'password';
        eyeOpen.style.display = 'inline';
        eyeClosed.style.display = 'none';
        
    } 
})


// Main Function
userGivenPassword.addEventListener('keyup',(event)=>{
    let progress = 0;
    progress+= EightDigitsWarning();
    progress+= OneCapWarning();
    progress+= OneLowerWarning();
    progress+= OneDigitsWarning();
    progress+= OneSimbolWarning();


    GlobalProgress = progress;
    progressBar(progress);


    ConfirmButtonAction(progress); // pop.js File

})

function progressBar(progress){
    strengthBar.style.width = `${progress*20}%`;
    if(progress == 1)
        {
            strengthIndicator.innerText = 'Very Weak';
            strengthIndicator.style.color = 'red';
            strengthBar.style.background = `red`;
        }
    
        if(progress == 2)
            {
                strengthIndicator.innerText = 'Weak';
                strengthIndicator.style.color = '#FFA500';
                strengthBar.style.background = `#FFA500`;
            }
        
            if(progress == 3)
                {
                    strengthIndicator.innerText = 'Medium';
                    strengthIndicator.style.color = 'yellow';
                    strengthBar.style.background = `yellow`;
                }
            
                if(progress == 4)
                    {
                        strengthIndicator.innerText = 'Strong';
                        strengthIndicator.style.color = '#8fff8f';
                        strengthBar.style.background = `#8fff8f`;
                    }
                
                    if(progress == 5)
                        {
                            strengthIndicator.innerText = 'Very Strong';
                            strengthIndicator.style.color = '#18ff18';
                            strengthBar.style.background = `#18ff18`;
                        }                              
    
}

function OneSimbolWarning(){
    const regex = /[!@#$%^&*(),.?":{}|<>_\-+]/.test(userGivenPassword.value);
    if(regex)
        {
            warningBoxText[4].style.opacity = '1';
            warningBoxText[4].querySelector('span').style.backgroundColor = '#85fd85';
            return 1;
        }
        else {
            warningBoxText[4].style.opacity = '0.35';
            warningBoxText[4].querySelector('span').style.backgroundColor = '';
            return 0;
        }
}

function OneDigitsWarning(){
    const regex = /[0-9]/.test(userGivenPassword.value);
    if(regex)
        {
            warningBoxText[3].style.opacity = '1';
            warningBoxText[3].querySelector('span').style.backgroundColor = '#85fd85';
            return 1;
        }
        else {
            warningBoxText[3].style.opacity = '0.35';
            warningBoxText[3].querySelector('span').style.backgroundColor = '';
            return 0;
        }
}



function OneLowerWarning(){
    const regex = /[a-z]/.test(userGivenPassword.value);
    if(regex)
        {
            warningBoxText[2].style.opacity = '1';
            warningBoxText[2].querySelector('span').style.backgroundColor = '#85fd85';
            return 1;
        }
        else {
            warningBoxText[2].style.opacity = '0.35';
            warningBoxText[2].querySelector('span').style.backgroundColor = '';
            return 0;
        }
}


function OneCapWarning(){
    const regex = /[A-Z]/.test(userGivenPassword.value);
    if(regex)
        {
            warningBoxText[1].style.opacity = '1';
            warningBoxText[1].querySelector('span').style.backgroundColor = '#85fd85';
            return 1;
        }
        else {
            warningBoxText[1].style.opacity = '0.35';
            warningBoxText[1].querySelector('span').style.backgroundColor = '';
            return 0;
        }
};



function EightDigitsWarning(){
    
    if(userGivenPassword.value.length >= 8)
    {
        warningBoxText[0].style.opacity = '1';
        warningBoxText[0].querySelector('span').style.backgroundColor = '#85fd85';
        return 1;
    }
    else {
        warningBoxText[0].style.opacity = '0.35';
        warningBoxText[0].querySelector('span').style.backgroundColor = '';
        return 0;
    }

}






// =====================================================================================

