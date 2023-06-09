/* var email="yash@sankeysolutions.com";
var pwd="Yashsankey123";

document.getElementById("login-now").addEventListener("click",(e)=>{
  e.preventDefault();
  var enteredemail=document.getElementById("email").value;
  var enteredpwd= document.getElementById("password").value;
  var regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})$/;

  var inputElement = document.getElementById("email");
  inputElement.addEventListener("input", function(event) {
  if(event.target.value == email){
    if((regx.test(enteredemail) && email == enteredemail) && pwd == enteredpwd){
    
      document.getElementsByClassName("error1")[0].innerHTML = "Valid User and Password";
      document.getElementsByClassName("error1")[0].style.color = "green";
      window.location.assign("welcome.html");
  
    }
  
    else if(regx.test(enteredemail))
    {
      document.getElementsByClassName("error1")[0].innerHTML = "Valid User";
      document.getElementsByClassName("error1")[0].style.color = "green";
    }
    
  
    else {
      document.getElementsByClassName("error1")[0].innerHTML = "Invalid User";
      document.getElementsByClassName("error1")[0].style.color = "red";
    }
    
  
  }

      })
    
  
    )
  }
 */


/*   var email = "yash@sankeysolutions.com";
  var pwd = "Yashsankey123";
  
  document.getElementById("login-now").addEventListener("click", (e) => {
    e.preventDefault();
    var enteredemail = document.getElementById("email").value;
    var enteredpwd = document.getElementById("password").value;
    var regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})$/;
  
    var inputElement = document.getElementById("email");
    inputElement.addEventListener("input", function (event) {
      if (event.target.value == email) {
        document.getElementsByClassName("error1")[0].innerHTML = "Must Contain @";
      } else {
        if (regx.test(enteredemail) && email == enteredemail && pwd == enteredpwd) {
          document.getElementsByClassName("error1")[0].innerHTML = "Valid User and Password";
          document.getElementsByClassName("error1")[0].style.color = "green";
          window.location.assign("welcome.html");
        } else if (regx.test(enteredemail)) {
          document.getElementsByClassName("error1")[0].innerHTML = "Valid User";
          document.getElementsByClassName("error1")[0].style.color = "green";
        } else {
          document.getElementsByClassName("error1")[0].innerHTML = "Invalid User";
          document.getElementsByClassName("error1")[0].style.color = "red";
        }
      }
    });
  }); */
  

  var email = "yash@sankeysolutions.com";
  var pwd = "Yashsankey123";
  
  document.getElementById("login-now").addEventListener("click", (e) => {
    e.preventDefault();
    var enteredemail = document.getElementById("email").value;
    var enteredpwd = document.getElementById("password").value;
    var regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})$/;
  
    if (regx.test(enteredemail) && email == enteredemail && pwd == enteredpwd) {
      document.getElementsByClassName("error1")[0].innerHTML = "Valid User and Password";
      document.getElementsByClassName("error1")[0].style.color = "green";
      window.location.assign("welcome.html");
    } else if (regx.test(enteredemail)) {
      document.getElementsByClassName("error1")[0].innerHTML = "Valid User";
      document.getElementsByClassName("error1")[0].style.color = "green";
    } else {
      document.getElementsByClassName("error1")[0].innerHTML = "Invalid User";
      document.getElementsByClassName("error1")[0].style.color = "red";
    }
  });
  