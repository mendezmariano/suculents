document.getElementById("header").innerHTML=`
        <h1 >Suculentas y Crasas</h1>
        <nav id="nav-bar">
            <a class="header-nav-item" href="./index.html">Home</a>
            <a class="header-nav-item" href="./especies.html">Especies</a>
            <a class="header-nav-item" href="./registro.html">Registro</a>
            <a class="header-nav-item" href="./sucursales.html">Sucursales</a>
        </nav>
        
`
document.getElementById("footer").innerHTML=`
<p>Todos los Derechos Reservados 2022 (R)</p>
<nav id="footer-nav">
    <a href="http://wwww.facebook.com" target="_blank">
        <i class="fa-brands fa-facebook-square"></i>
    </a>
    <a href="http://www.twitter.com" target="_blank">
        <i class="fa-brands fa-twitter"></i>
    </a>
    <a href="http://www.linkedin.com" target="_blank">
        <i class="fa-brands fa-linkedin"></i>
    </a>
    <a href="https://web.whatsapp.com/" target="_blank">
        <i class="fa-brands fa-whatsapp"></i>
    </a>
    <a href="https://www.pinterest.com/" target="_blank">
        <i class="fa-brands fa-pinterest"></i>
    </a>
</nav>
`


function validatePass(){
    
    //let  minusculas = /[a-z]/g;
    //let  mayusculas = /[A-Z]/g;
    //let  numeros=  /[0-9]/g;

    let password = document.forms["register-form"]["password"].value;

    if(password == "")
        {
            document.getElementById("message").innerHTML = "La contrasea debe tener almenos una letra";
            return false;
        }

    // longitud minima
    if (password.length < 6) {
        document.getElementById("message").innerHTML = "La contrasea no puede ser menos a 6 caracteres";
        return false;
    }

    // longitud maxima
    if (password.length > 12) {
        document.getElementById("message").innerHTML = "La contrasena no puede ser mayor a 12";
        return false;
    }

    if(!password.match(numeros)){
        document.getElementById("message").innerHTML = "La contrasena debe tener almenos un numero";
        return false;
    } 
    else {
        document.getElementById("message").innerHTML = "Contrasena Verificada!";
        document.getElementById("message").style.color="green";
        return true;
    }


  }






//---------------------------------------------------------
// VUE 
var especies= new Vue({
    el: '#especies',
    data: {
        especies: [
            {
                "nombre": "Abalone",
                "imagen": "./img/especies/Echeveria-Abalone.webp",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit placeat omnis rem illum sint sit fugiat reiciendis cupiditate ut eligendi molestias a dolorum inventore ab laboriosam non sunt magnam quaerat. Ipsam quae velit expedita cumque maiores aperiam ea nihil autem cupiditate aspernatur laboriosam quasi dolor a corrupti unde quaerat in asperiores molestias provident ad debitis deserunt? Nesciunt asperiores dolor ea?"
            },
            {
                "nombre": "Agavoides",
                "imagen": "./img/especies/Echeveria-agavoides-Mat-Lichtenstein.webp",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit placeat omnis rem illum sint sit fugiat reiciendis cupiditate ut eligendi molestias a dolorum inventore ab laboriosam non sunt magnam quaerat. Ipsam quae velit expedita cumque maiores aperiam ea nihil autem cupiditate aspernatur laboriosam quasi dolor a corrupti unde quaerat in asperiores molestias provident ad debitis deserunt? Nesciunt asperiores dolor ea?"
            },
            {
                "nombre": "Atlantis",
                "imagen": "./img/especies/Echeveria-Atlantis-ZL.webp",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit placeat omnis rem illum sint sit fugiat reiciendis cupiditate ut eligendi molestias a dolorum inventore ab laboriosam non sunt magnam quaerat. Ipsam quae velit expedita cumque maiores aperiam ea nihil autem cupiditate aspernatur laboriosam quasi dolor a corrupti unde quaerat in asperiores molestias provident ad debitis deserunt? Nesciunt asperiores dolor ea?"
            },
            {
                "nombre": "Affinis",
                "imagen": "./img/especies/Echeveria-affinis-alloe..webp",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit placeat omnis rem illum sint sit fugiat reiciendis cupiditate ut eligendi molestias a dolorum inventore ab laboriosam non sunt magnam quaerat. Ipsam quae velit expedita cumque maiores aperiam ea nihil autem cupiditate aspernatur laboriosam quasi dolor a corrupti unde quaerat in asperiores molestias provident ad debitis deserunt? Nesciunt asperiores dolor ea?"
            },
            {
                "nombre": "Agavoides Red Tips",
                "imagen": "./img/especies/Echeveria-agavoides-Red-Tips-Leo-Gonzalez.webp",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit placeat omnis rem illum sint sit fugiat reiciendis cupiditate ut eligendi molestias a dolorum inventore ab laboriosam non sunt magnam quaerat. Ipsam quae velit expedita cumque maiores aperiam ea nihil autem cupiditate aspernatur laboriosam quasi dolor a corrupti unde quaerat in asperiores molestias provident ad debitis deserunt? Nesciunt asperiores dolor ea?"
            },
            {
                "nombre": "Baron Bold",
                "imagen": "./img/especies/Echeveria-Baron-Bold-flickr.webp",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit placeat omnis rem illum sint sit fugiat reiciendis cupiditate ut eligendi molestias a dolorum inventore ab laboriosam non sunt magnam quaerat. Ipsam quae velit expedita cumque maiores aperiam ea nihil autem cupiditate aspernatur laboriosam quasi dolor a corrupti unde quaerat in asperiores molestias provident ad debitis deserunt? Nesciunt asperiores dolor ea?"
            },
            {
                "nombre": "Alba Beauty",
                "imagen": "./img/especies/Echeveria-Alba-Beauty.webp",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit placeat omnis rem illum sint sit fugiat reiciendis cupiditate ut eligendi molestias a dolorum inventore ab laboriosam non sunt magnam quaerat. Ipsam quae velit expedita cumque maiores aperiam ea nihil autem cupiditate aspernatur laboriosam quasi dolor a corrupti unde quaerat in asperiores molestias provident ad debitis deserunt? Nesciunt asperiores dolor ea?"
            },
            {
                "nombre": "Californica queen",
                "imagen": "./img/especies/echeveria-californica-queen.webp",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit placeat omnis rem illum sint sit fugiat reiciendis cupiditate ut eligendi molestias a dolorum inventore ab laboriosam non sunt magnam quaerat. Ipsam quae velit expedita cumque maiores aperiam ea nihil autem cupiditate aspernatur laboriosam quasi dolor a corrupti unde quaerat in asperiores molestias provident ad debitis deserunt? Nesciunt asperiores dolor ea?"
            },
            {
                "nombre": "Afterglow",
                "imagen": "./img/especies/Echeveria-Afterglow-Scott.webp",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit placeat omnis rem illum sint sit fugiat reiciendis cupiditate ut eligendi molestias a dolorum inventore ab laboriosam non sunt magnam quaerat. Ipsam quae velit expedita cumque maiores aperiam ea nihil autem cupiditate aspernatur laboriosam quasi dolor a corrupti unde quaerat in asperiores molestias provident ad debitis deserunt? Nesciunt asperiores dolor ea?"
            },
            {
                "nombre": "Albicans",
                "imagen": "./img/especies/echeveria-albicans.webp",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit placeat omnis rem illum sint sit fugiat reiciendis cupiditate ut eligendi molestias a dolorum inventore ab laboriosam non sunt magnam quaerat. Ipsam quae velit expedita cumque maiores aperiam ea nihil autem cupiditate aspernatur laboriosam quasi dolor a corrupti unde quaerat in asperiores molestias provident ad debitis deserunt? Nesciunt asperiores dolor ea?"
            },
            {
                "nombre": "Calycosa",
                "imagen": "./img/especies/Echeveria-calycosa-Zusung.webp",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit placeat omnis rem illum sint sit fugiat reiciendis cupiditate ut eligendi molestias a dolorum inventore ab laboriosam non sunt magnam quaerat. Ipsam quae velit expedita cumque maiores aperiam ea nihil autem cupiditate aspernatur laboriosam quasi dolor a corrupti unde quaerat in asperiores molestias provident ad debitis deserunt? Nesciunt asperiores dolor ea?"
            },
            {
                "nombre": "agavoides Lipstick",
                "imagen": "./img/especies/Echeveria-agavoides-Lipstick-Esin-Iscan.webp",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit placeat omnis rem illum sint sit fugiat reiciendis cupiditate ut eligendi molestias a dolorum inventore ab laboriosam non sunt magnam quaerat. Ipsam quae velit expedita cumque maiores aperiam ea nihil autem cupiditate aspernatur laboriosam quasi dolor a corrupti unde quaerat in asperiores molestias provident ad debitis deserunt? Nesciunt asperiores dolor ea?"
            },
            {
                "nombre": "Amoena",
                "imagen": "./img/especies/Echeveria-amoena-Liz21UK.webp",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit placeat omnis rem illum sint sit fugiat reiciendis cupiditate ut eligendi molestias a dolorum inventore ab laboriosam non sunt magnam quaerat. Ipsam quae velit expedita cumque maiores aperiam ea nihil autem cupiditate aspernatur laboriosam quasi dolor a corrupti unde quaerat in asperiores molestias provident ad debitis deserunt? Nesciunt asperiores dolor ea?"
            }
        ],    
    }

})
