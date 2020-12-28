// coded by @lasjorg
// eslint-disable-next-line no-unused-vars
const projectName = 'survey-form';
/*Overlay section*/
                /* Open when someone clicks on the img icon element */
                function openNav() {
                    document.getElementById("myNav").style.width = "100%";
                }
                /* Close when someone clicks on the "x" symbol inside the overlay */
                function closeNav() {
                    document.getElementById("myNav").style.width = "0%";
                }



//Name  validation
const name=document.getElementById("name");
const nameHint=document.getElementById("name-hint");
const example=document.getElementById("name-eg");
name.addEventListener('keydown',()=>{
 
  if(name.value.length < 5){
    nameHint.textContent="User name must be at least 5 character or more";
    nameHint.style.color="gray";
    nameHint.style.fontSize="15px";
  }else{
    nameHint.textContent="";
  }
});

name.addEventListener('blur',()=>{
  if(name.value.length < 5){
    name.value="";
 
    example.textContent="e.g (William)";
    example.style.color="gray";
    example.style.fontSize="15px";
  }else{
    name.value;
    nameHint.textContent="";
    example.textContent="";
  }
  
});

//Email validation
//Get user email element
const email=document.getElementById('email');
//Characters for  testing email  
const emailFormat=/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|0-9]{1,3})(\]?)$/;
const emailHint = document.getElementById('email-hint');
const emailEg = document.getElementById('email-eg');
email.addEventListener('keydown',function(){

  
//If one of the emailFormat character is  not contain  
  if(!emailFormat.test(this.value)){
    emailEg.textContent="e.g(thihaaung@gmail.com)";
    emailHint.textContent="Invalid email address";
    emailHint.style.color="gray";
    emailHint.style.fontSize="15px";
    emailEg.style.color="gray";
    emailEg.style.fontSize="15px";
    }else{//Otherwise
      emailHint.textContent="";
      emailEg.textContent="";
    }
  
});

//Age Validation
const age = document.getElementById("number");
const ageHint = document.getElementById("age-hint");
age.addEventListener('blur',function(){
  if(this.value < 14){
    ageHint.textContent="You are not old enough!";
    ageHint.style.fontSize="15px";
    ageHint.style.color="gray";
  }else{
    ageHint.textContent="";
  }
})


