function Validate(){
    const name=document.getElementById("name").value;
      const address=document.getElementById("address").value;
   const email=document.getElementById("email").value;
   const pwd=document.getElementById("pwd").value;
      const cpwd=document.getElementById("cpwd").value;

   const nameerror=document.getElementById("name-error");
   const addresserror=document.getElementById("address-error");
   const emailerror=document.getElementById("email-error");
   const pwdError=document.getElementById("pwd-error");
   const cpwdError=document.getElementById("cpwd-error");
   const mobileno=document.getElementById("mobileno").value;
   const mobilenoerror=document.getElementById("mobileno-error");
   
   nameerror.textContent="";
    addresserror.textContent="";
     emailerror.textContent="";
      pwdError.textContent="";
           cpwdError.textContent="";
        mobilenoerror.textContent="";
      
        let regex_mail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(name==""|| (/\d/.test(name)))  //regex
            
        {
            nameerror.textContent="Plz Enter ur name properly";
            return false;
        }
        if(address=="")
        {
            addresserror.textContent="Plz enter address";
            return false;
        }
        // if(email=="" || (!email.includes('@')))
       
        if(!regex_mail.test(email))
        {
            emailerror.textContent="Pz enter email with valid @,. symbol";
            console.log(!regex_mail.test(email));
            return false;
        }
       let pwdRegx= /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        // if(pwd=="" ||(pwd.length<7)){
        if(!pwdRegx.test(pwd)){
            pwdError.textContent="Pz enter password including alphabets,special charecter and number";
            console.log(pwd);
            
            return false;
        }
        if(cpwd!=pwd){
            cpwdError.textContent="The confirm pssword must match with entered password";
            console.log(cpwd);
            
            return false;
        }
       
        let phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
        if(!phoneRegex.test(mobileno)){
            mobilenoerror.textContent="plz enter the valid mobile number";
        return false;
        }

        return true;

}
const apiurl="https://692fd19a778bbf9e006e96b2.mockapi.io/signup"



// async function fetchsignupdetails() {
//   const res = await fetch(apiurl);
//   const users = await res.json();
//   console.log(users);
// }
// fetchsignupdetails() 

    
document.getElementById('signupform').addEventListener("submit", async function(e) {
  e.preventDefault();
  if (!Validate()) { 
        return;
    }
    const name=document.getElementById("name").value;

  const id = userid.value;
  const userdata = {
    Name:name.value,
    phonenumber:mobileno.value,
    city:address.value,
    password:pwd.value,
    email: email.value,
    confirmpassword:cpwd.value
    

  };
  console.log(id);

  // if (!id) {
  //   //save
  //   await fetch(apiurl, {
  //     method: "POST",
  //     headers: { "Content-type": "application/json" },
  //     body: JSON.stringify(userdata),
      
  //   }); }
    try {
        const response = await fetch('https://692fd19a778bbf9e006e96b2.mockapi.io/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userdata)
        });

        
        const result = await response.json();
console.log(result);

    
 if (response.ok) { 
            alert('Signup successful!');
            window.location.href = 'login.html';
            
        } else {
            
            console.error('Signup failed:', result.message);
            alert('Signup failed. Please try again.');
        }
      
    } catch (error) {
        console.error('Error during form submission:', error);
        alert('An error occurred. Please try again later.');
    }
 

   
    
    
 });


 
 