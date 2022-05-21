let registro = document.getElementById('registrar');
registro.addEventListener('click', ()=>{
    let username = document.getElementById('usuario').value;
    let password = document.getElementById('contraseña').value;
    let rpassword = document.getElementById('rcontraseña').value;

    let text = {"username": username, "password": password, "password_repeat": rpassword};
    
    
    fetch('http://localhost:8030/api/sign-up',{
        method:'POST',
        body: JSON.stringify(text),
        headers:{'Content-Type':'application/json'}
    })
    .then(response => response.json())
    .then(json => {
       console.log(json) ;
       let msg=document.getElementById("mensaje");
       msg.innerHTML += json.msg
    })


});

let iniciar = document.getElementById('sesion');
iniciar.addEventListener('click', ()=>{
    let username = document.getElementById('usuario2').value;
    let password = document.getElementById('contraseña2').value;

    let text = {"username": username, "password": password};

    fetch('http://localhost:8030/api/login',{
        method:'POST',
        body: JSON.stringify(text),
        headers:{'Content-Type':'application/json'}
    })
    .then(response => response.json())
    .then(json => {
        console.log(json)
        let msg=document.getElementById('mensaje2');
        msg.innerHTML += json.msg
        let token = json.token
        console.log(token)

            fetch('http://localhost:8030/api/secret-route', {
            headers: {'Authorization': 'Bearer '+token}
            })
            .then(response => response.json())
            .then(json=> {
                console.log(json)
                let msg = document.getElementById('mensaje3');
                msg.innerHTML+= json.msg
            })      
    })
})