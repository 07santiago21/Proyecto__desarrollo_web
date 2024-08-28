function validate(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let valid_username = /^[A-Za-z][A-Za-z0-9]{7,14}$/.test(username);
    let valid_password = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@*$#&])[A-Za-z0-9@$*#&]{12,20}$/.test(password);
    
    if(valid_username && valid_password){
        read_validate_data(username, password)
    }
    else{
        alert("Ingrese bien los datos");
    }
    
}


function read_validate_data(username, password){
    let json_data = localStorage.getItem(username);
    let data = JSON.parse(json_data);
    let storaged_password = data.password;
    
    if(storaged_password == password){
        window.location.href="home.html"
    }
    else{
        alert("Contraseña incorrecta")
    }
    
}

