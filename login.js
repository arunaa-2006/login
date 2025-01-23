function handlelogin(){
    const username=document.getElementById('user').value;
    const password=document.getElementById('pass').value;
    const error=document.getElementById('error');

    const loginData=[
        { username:"user1", password:"pass1"},
        {username:"user2",password:"pass2"}
    ];
    const isValid=loginData.some(user=>user.username===username && user.password===password);
    if (isValid)
    {
        window.location.href="flexbox.html";
    }
    else{
        error.textContent="Invalid username or password";
    }
  
    }
