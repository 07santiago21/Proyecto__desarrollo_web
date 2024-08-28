function validate(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;

    let valid_username = /^[A-Za-z][A-Za-z0-9]{7,14}$/.test(username);
    let valid_password = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@*$#&])[A-Za-z0-9@$*#&]{12,20}$/.test(password);
    
    if(valid_username && valid_password){
        insert_validate_data(username, password, email);
        
    }
    else{
        alert("Ingrese bien los datos");
    }
}

function insert_validate_data(username, password, email){

    if(localStorage.getItem(username) == null)
    {
        let data = {
            password: password,
            email: email
        }
    
        localStorage.setItem(username, JSON.stringify(data));
        window.location.href = "home.html";
    }
    else{
        alert("El usuario ya existe");
    }
    
}