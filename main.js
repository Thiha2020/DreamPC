
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
const nameHint=document.getElementById("name-hint");
const example=document.getElementById("name-eg");
const name = document.getElementById("name");

name.addEventListener('keydown', ()=>{

if(name.value.length < 5 || name.value.length > 20){
  nameHint.textContent = "Name must be at least 5 characters or not longer than 20 characters";
  example.textContent = "e.g (Steven)";
  nameHint.style.color ="#ff0000";
    nameHint.style.fontStyle ="italic";
    example.style.color ="#ff0000";
    example.style.fontStyle ="italic";

}else{
  nameHint.textContent = "";
  example.textContent = "";
} 
});

name.addEventListener('blur', ()=>{
  if(name.value.length < 5 || name.value.length > 20){
    nameHint.textContent = "Name must be at least 5 characters or not longer than 20 characters";
      example.textContent = "e.g (Steven)";
      name.value="";
  }else{
    name.value;
  }
});

//Email validation


email.addEventListener('keyup', ()=>{
var email = document.getElementById('email').value;
var form = document.getElementById('survey-form');
var emailHint = document.getElementById('email-hint');
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)){
    emailHint.textContent ="Your email address is valid";
    emailHint.style.color ="#00ff00";
    emailHint.style.fontStyle ="italic";
  }else{
    emailHint.textContent ="Please enter valid email address";
    emailHint.style.color ="#ff0000";
    emailHint.style.fontStyle ="italic";
  }
  });


email.addEventListener('blur', ()=>{
var emailInput = document.getElementById('email');
var email = document.getElementById('email').value;
var form = document.getElementById('survey-form');
var emailHint = document.getElementById('email-hint');
var emailEG = document.getElementById('email-eg');
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(!email.match(pattern)){
    emailHint.textContent ="Please enter valid email address";
    emailEG.textContent="e.g(steven@email.com)";

    ;
  }else{
    emailHint.textContent ="Your email address is valid";

  }
});


//Age Validation
const age = document.getElementById("number");
const ageHint = document.getElementById("age-hint");
age.addEventListener('blur',function(){
  if(this.value < 14){
    ageHint.textContent="You are under age";
    ageHint.style.color ="#ff0000";
    ageHint.style.fontStyle ="italic";
   
  }else{
    ageHint.textContent="";
  };
});
