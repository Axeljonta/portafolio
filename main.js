// ejecutar funcion de evento click
document.getElementById("open").addEventListener("click", open_close_menu);

// Declaracion de vars
let side_menu = document.getElementById("menu_side");
let open = document.getElementById("open");
let body= document.getElementById("body");

// Evento parra mostrar y guardar menu 

function open_close_menu (){
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu_side_move");
    } 

// Responcive 

if(window.innerWidth < 761){
    body.classList.add("body_move");
    side_menu.classList.add("menu_side_move");
}

window.addEventListener("resize", function(){
   if(window.innerWidth > 761){
       body.classList.remove("body_move");
       side_menu.classList.remove("menu_side_move");
   }
 if(window.innerWidth < 761){
    body.classList.add("body_move");
    side_menu.classList.add("menu_side_move");
}
}
) 


//Texto dinamico---------------------------------------------------------
const typed = new Typed (".typed", {
    strings : [
    "<b class='palabras_dinamicas'>Programador</b>",
    "<b class='palabras_dinamicas'>Front-end</b>",
    "<b class='palabras_dinamicas'>Creativo</b>",
    "<b class='palabras_dinamicas'>Maquetador</b>"],
     typeSpeed: 60, 
     backSpeed:30,
     startDelay:400,
     loop:true,
     backDelay:1200,
     cursorChar:"",
}) 



