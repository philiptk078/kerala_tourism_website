function validate()
{
    let fname = document.getElementById('first_name');
    let lname = document.getElementById('last_name');
    let uname = document.getElementById('user_name');
    let email = document.getElementById('email_addr').value;
    let phno = document.getElementById('phone_number');
    let nplace = document.getElementById('place');
    let pwdf = document.getElementById('password_first');
    let pwdc = document.getElementById('password_confirm');
    let email_regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    var phno_regexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var pwd_regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
   
    if(fname.value=="")
    {
     alert("All fields are required");
     return false;
    }

    // first name
    if(fname.value=="")
    {
      alert("All fields are required");
      return false;
    }
    // last name
    if(lname.value=="")
    {
      alert("All fields are required");
      return false;
    }
    // user name
    if(uname.value=="")
    {
      alert("All fields are required");
      return false;
    }
    // email address
    if(email.value=="")
    {
      alert("All fields are required");
      return false;
    }
    else if(email_regexp.test(email)==false)
    {
      alert("Enter a valid email id");
      return false;
    }
    // phone number
    if(phno.value=="")
    {
      alert("All fields are required");
      return false;
    }
    else if(phno_regexp.test(phno.value)==false)
    {
      alert("Enter a valid phone number");
      return false;
    }
    // place
    if(nplace.value=="")
    {
      alert("All fields are required");
      return false;
    }
    // password
    if(pwdf.value=="")
    {
      alert("All fields are required");
      return false;
    }
    else if(pwd_regexp.test(pwdf.value)==false)
    {
      alert("Enter valid password");
      return false;
    }
    // confirm password
    if(pwdc.value=="")
    {
    alert("All fields are required");
    return false;
    }
    else if(pwdf.value!=pwdc.value)
    {
      alert("Passwords doesnot match");
      return false;
    }
    else{
    alert("Successfully registered");
    return true;
    }

    }

    // password validation
    let pwdf = document.getElementById('password_first');
    pwdf.addEventListener('keyup',function(){
        checkPassword(pwdf.value)
      })
      function checkPassword(password)
      {
        var prog = document.getElementById('prog');
        var strengthBar = document.getElementById('strength');
        var strength = 0;
        if(password.match(/[a-zA-Z0-9]+/))
        {
          strength += 1;
      
        }
        if((password.length>=5)&&(password.match(/[a-zA-Z0-9]+/)))
        {
          strength += 1;
      
        }
    
        if((password.length>=8)&&(password.match(/[a-z]+/))&&(password.match(/[A-Z]+/))&&(password.match(/[0-9]+/)))
        {
          strength += 1;
      
        }
        switch(strength)
        {
          case 0: strengthBar.style.width='0%';
                  prog.style.visibility='hidden';
                  document.getElementById('strength1').style.visibility='hidden';
                  break;
          case 1: strengthBar.style.width='30%';
                  prog.style.visibility='visible';
                  strengthBar.style.backgroundColor='red';
                  document.getElementById('strength1').style.visibility='visible';
                  document.getElementById('strength1').innerText="Poor"
                  document.getElementById('strength1').style.color='red'
                  break;
          case 2: strengthBar.style.width='60%';
                  prog.style.visibility='visible';
                  strengthBar.style.backgroundColor='orange';
                  document.getElementById('strength1').style.visibility='visible';
                  document.getElementById('strength1').innerText="Medium"
                  document.getElementById('strength1').style.color='orange'
                  break;
          case 3: strengthBar.style.width='100%';
                  prog.style.visibility='visible';
                  strengthBar.style.backgroundColor='green';
                  document.getElementById('strength1').style.visibility='visible';
                  document.getElementById('strength1').innerText="Strong"
                  document.getElementById('strength1').style.color='green'
                  break;

      }

}