import { header_coomponente } from "./componete_header.js";
let principal = document.querySelector(".root");


function cargar_datos(){
    principal.innerHTML = `
    <div class="header">${header_coomponente}</div>
    <div class="footer"></div>
    <div class="contenido"></div>
`;
}

cargar_datos(); 

