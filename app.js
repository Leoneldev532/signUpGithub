
const  greetingWord = "Welcome to leoy website ! Let’s begin the adventure"
const  emailSentences = "Your Email please" 
const passwordSentences = "Your password "
const passwordConfirmSentences = "confirm Your password "
const verifierNumberWord = "Veuillez confirmer en ajouter le chiffre de votre boite gmail"
const congratulationWord = "congratulations leonel !!"
const speed = 3

var step = 0 

const welcomeWord = document.querySelector(".welcomeWord")
const txtEmail = document.querySelector(".txtemail")
const txtPassword = document.querySelector(".txtpassword")
const inputs = document.querySelectorAll("input")
const showErrors = document.querySelectorAll(".showError")
const formElement = document.querySelector(".formElement")
const txtConfirmPassword = document.querySelector(".txtconfirmpassword")
const verifiedElement = document.querySelectorAll(".verifiedElement")
const loading = document.querySelector(".loading")
const verifierNumber = document.querySelector(".verifierNumber")
const bloc = document.querySelectorAll(".bloc")
const verifiedField = document.querySelector(".verifiedField")
const containerform = document.querySelector(".containerform")
const verifiedeleminput = document.querySelectorAll(".verifiedeleminput")
const valider = document.querySelector("#valider")
const txtcongrat = document.querySelector(".txtcongrat")

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
        
         await new Promise(resolve => setTimeout(resolve, 2000));
        const localIndex = 0;
        await writeMachine(localIndex, greetingWord, welcomeWord);
        step = 1;
        const stepInput = step-1
        inputs[stepInput].focus()
      }
  
      if (step === 1) {
        containerform.classList.remove("h-20")
        
        containerform.classList.add("h-auto")


        const localIndex = 0;
        await writeMachine(localIndex, emailSentences,  txtEmail);

        const stepInput = step-1

        InputshowFunc(inputs[stepInput])
            
        document.addEventListener("keyup", (e) => {
            e.preventDefault()
          if (e.keyCode === 13) {
            if (inputs[stepInput].value.trim() !== "") {
              if (inputs[stepInput].type === "email" && step === 1) {
                const emailValue = inputs[stepInput].value;
                let errorMessage = "";
            
                if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emailValue)) {
                  errorMessage = "Veuillez saisir une adresse email valide.";
                }
            
                if (errorMessage !== "") {
                  showErrors[step - 1].innerHTML = errorMessage;
                } else {
                  showErrors[step - 1].innerHTML = "";
                  step = 2;
                  verifiedElement[stepInput].classList.remove("hidden");
                  verifiedElement[stepInput].classList.add("block");
                  InputHideFunc(inputs[stepInput]);
                  inputs[stepInput + 1].focus();
                  run();
                }
              }
            } else {
              if (showErrors[step - 1].innerHTML.trim() === "") {
                showErrors[step - 1].innerHTML = "Veuillez remplir ce champ correctement";
              } else {
                showErrors[step - 1].textContent = " ";
              }
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
                const passwordValue = inputs[stepInput].value;
                let errorMessage = "";
            
                if (passwordValue.length < 8) {
                  errorMessage = "Le mot de passe doit contenir au moins 8 caractères.";
                } else if (!/[A-Z]/.test(passwordValue)) {
                  errorMessage = "Le mot de passe doit contenir au moins une lettre majuscule.";
                } else if (!/[a-z]/.test(passwordValue)) {
                  errorMessage = "Le mot de passe doit contenir au moins une lettre minuscule.";
                } else if (!/[0-9]/.test(passwordValue)) {
                  errorMessage = "Le mot de passe doit contenir au moins un chiffre.";
                } else if (!/[!@#$%^&*()]/.test(passwordValue)) {
                  errorMessage = "Le mot de passe doit contenir au moins un caractère spécial.";
                }
            
                if (errorMessage !== "") {
                  showErrors[step - 1].innerHTML = errorMessage;
                } else {
                  
                  showErrors[step - 1].innerHTML = "";
                  step = 3;
                  verifiedElement[stepInput].classList.remove("hidden");
                  verifiedElement[stepInput].classList.add("block");
                  InputHideFunc(inputs[stepInput]);
                  inputs[stepInput + 1].focus();
                  run();
                }
              }
            } else {
              if (showErrors[step - 1].innerHTML.trim() === "") {
                showErrors[step - 1].innerHTML = "Veuillez remplir ce champ correctement";
              } else {
                showErrors[step - 1].textContent = " ";
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
                    if(inputs[stepInput].value === inputs[stepInput - 1].value ){

                        step  = 4
                  verifiedElement[stepInput].classList.remove("hidden")
                  verifiedElement[stepInput].classList.add("block")



                  InputHideFunc(inputs[stepInput])

                    
                  loading.classList.remove("hidden")
                  loading.classList.add("block")


                 



                  bloc.forEach(element => {
                    element.classList.add("hidden");
                    
                    step = 4
                    
                   });

                  setInterval(() => {

                     loading.classList.remove("block")
                    loading.classList.add("hidden")

                    

                   },2000)

                   setInterval(() => {

                  //  formElement.classList.remove("h-auto")
                  //  formElement.classList.add("h-4")



                   })


                  // inputs[stepInput + 1].focus()
                        run()
                    }else{
                        showErrors[step-1].innerHTML = "Les mots de passe ne correspondent pas"
                    }
                }
                
              }else{
                if(showErrors[step-1].innerHTML.trim()  === "" ) { 
                showErrors[step-1].innerHTML = "Veuillez remplir ce champ correctement"
            }else{
                
                showErrors[step-1].textContent = " "
            }
              }
          }
        });


      }

      
      if (step === 4) {
        
        verifiedField.classList.remove("hidden")
         verifiedField.classList.add("block")
        const localIndex = 0
        await writeMachine(localIndex, verifierNumberWord,  verifierNumber);
        
       
     
        verifiedeleminput.forEach((input) => {
          input.addEventListener('input', () => {
            const value = input.value;
            const numericOnly = value.replace(/[^0-9]/g, "");

            if (value !== numericOnly) {
              input.value = numericOnly;
            }
            // Vérifier si tous les champs input contiennent une valeur
            const tousRemplis = Array.from(inputs).every((input) => input.value.trim() !== '');
         if(tousRemplis){
           valider.classList.add("block") 
           valider.classList.remove("hidden") 

           valider.addEventListener("click", async() => {
   

            containerform.classList.add("scale-0")
            containerform.classList.add("hidden")
            txtcongrat.classList.add("scale-100")
            
            await writeMachine(localIndex, congratulationWord,  txtcongrat);
            
            confetti({
              particleCount: 100,
              startVelocity: 30,
              spread: 360,
             
            });
            // containerform.classList.add("sclae-0")

          })

         }else{
          
          valider.classList.remove("block") 
          valider.classList.add("hidden") 
         }
            // Activer ou désactiver le bouton en conséquence
          });
        });


      }
  };

  // const confetti = require('canvas-confetti');






  // const checkInput = (input) => {
    
  //   document.addEventListener("keyup", (e) => {
  //       e.preventDefault()
  //     if (e.keyCode === 13) {
  //         if (input.value.trim() !== "") {
  //           if (input.type === "email" && step === 1) {
           
  //             step  = 2

              
  //           }
  //           if(input.type === "password" && step === 2) {
  //               console.log("password");
  //               step  = 3
  //           }
  //         }else{
  //           showErrors[step-1].innerHTML += "Veuillez remplir ce champ correctement"
  //         }
  //     }
  //   });
  // };




  
  run();


