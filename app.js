
const  greetingWord = "Welcome to GitHub! Let’s begin the adventure"
const  emailSentences = "Your Email please" 
const passwordSentences = "Your password "
const passwordConfirmSentences = "confirm Your password "
const speed = 3

var step = 0 

const welcomeWord = document.querySelector(".welcomeWord")
const txtEmail = document.querySelector(".txtemail")
const txtPassword = document.querySelector(".txtpassword")
const inputs = document.querySelectorAll("input")
const showErrors = document.querySelectorAll(".showError")
const formElement = document.querySelector(".formElement")
const txtConfirmPassword = document.querySelector(".txtconfirmpassword")

formElement.addEventListener("submit",(e)=> {
    e.preventDefault()
})


const writeMachine = (index, sentences, elementHtml) => {
    return new Promise((resolve) => {
      const intervalId = setInterval(() => {
        if (index < sentences.length) {
          elementHtml.innerHTML += sentences.charAt(index);
          index++;
        } else {
          clearInterval(intervalId);
          resolve();
        }
      }, 10 * speed);
    });

  };
  




  const InputshowFunc = (inputSelect)=>{
        inputSelect.classList.remove("disableInput")
        inputSelect.classList.add("visibleInput")    
  }
  const InputHideFunc = (inputSelect)=>{
    inputSelect.disabled =true    
}





  
const run = async () => {
      if (step === 0) {
        const localIndex = 0;
        await writeMachine(localIndex, greetingWord, welcomeWord);
        step = 1;
        const stepInput = step-1
        inputs[stepInput].focus()
      }
  
      if (step === 1) {
        const localIndex = 0;
        await writeMachine(localIndex, emailSentences,  txtEmail);

        const stepInput = step-1

        InputshowFunc(inputs[stepInput])
            
        document.addEventListener("keyup", (e) => {
            e.preventDefault()
          if (e.keyCode === 13) {
              if (inputs[stepInput].value.trim() !== "") {
                if (inputs[stepInput].type === "email" && step === 1) {
                  step  = 2
                  InputHideFunc(inputs[stepInput])
                  inputs[stepInput + 1].focus()
                  run();
                }

              }else{
                showErrors[step-1].innerHTML += "Veuillez remplir ce champ correctement"
              }
          }
        });

      }

      if (step === 2) {
        const stepInput = step-1
        InputshowFunc(inputs[stepInput])
        const localIndex = 0 
        await writeMachine(localIndex, passwordSentences,  txtPassword);
            
        document.addEventListener("keyup", (e) => {
            e.preventDefault()
          if (e.keyCode === 13) {
              if (inputs[stepInput].value.trim() !== "") {
                if (inputs[stepInput].type === "password" && step === 2) {
                  step  = 3
                  
                  InputHideFunc(inputs[stepInput])
                  inputs[stepInput + 1].focus()
                  run()
                }
                
              }else{
                if(showErrors[step-1].innerHTML.trim()  === "" ) { 
                showErrors[step-1].innerHTML += "Veuillez remplir ce champ correctement"
            }else{
                
                showErrors[step-1].textContent = " 777777777"
            }
              }
          }
        });


      }













      if (step === 3) {
        const stepInput = step-1
        InputshowFunc(inputs[stepInput])
        const localIndex = 0 
        await writeMachine(localIndex, passwordConfirmSentences,  txtConfirmPassword);
            
        document.addEventListener("keyup", (e) => {
            e.preventDefault()
          if (e.keyCode === 13) {
              if (inputs[stepInput].value.trim() !== "") {
                if (inputs[stepInput].type === "password" && step === 3) {
                    if(inputs[stepInput].value === inputs[stepInput - 1].value  ){

                        step  = 4
                        
                  InputHideFunc(inputs[stepInput])
                  inputs[stepInput + 1].focus()
                        run()
                    }
                }
                
              }else{
                if(showErrors[step-1].innerHTML.trim()  === "" ) { 
                showErrors[step-1].innerHTML += "Veuillez remplir ce champ correctement"
            }else{
                
                showErrors[step-1].textContent = " 777777777"
            }
              }
          }
        });


      }
  };









  const checkInput = (input) => {
    
    document.addEventListener("keyup", (e) => {
        e.preventDefault()
      if (e.keyCode === 13) {
          if (input.value.trim() !== "") {
            if (input.type === "email" && step === 1) {
           
              step  = 2

              
            }
            if(input.type === "password" && step === 2) {
                console.log("password");
                step  = 3
            }
          }else{
            showErrors[step-1].innerHTML += "Veuillez remplir ce champ correctement"
          }
      }
    });
  };




  
  run();

