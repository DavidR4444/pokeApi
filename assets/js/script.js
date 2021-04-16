const API ="https://pokeapi.co/api/v2/pokemon?limit=30&offset=00";



//consumir API

const getData=(api)=>{

return fetch(api)
 .then((response)=>response.json())
 .then((json)=> {
     llenarDatos(json), paginacion(json.count);
 }) 
 .catch((error)=>{
     console.log("Error", error)
 });


}



//llenar card con personajes

const llenarDatos=(data)=>{
let html="";
data.results.forEach((pj) => {
    html +='<div class="col mt-5">';
    html +='<div class="card" style="width:10rem">';
    html +='<div class="card-body">';
    html  +=`<h5 class="card-title">${pj.name}</h5>`
    html +='</div>';
    html +='</div>';
    html +='</div>';

});
document.getElementById("datosPersonaje").innerHTML=html;
}

//paginacion
const paginacion=(count)=>{

      
        let html="";
        html+=`<li class="page-item ${count.prev ?"":"disabled"}"><a class="page-link" onclick="getData('${count.prev}')">prev</a></li>`;
        html+=`<li  class="page-item ${count.next ?"":"disabled"}"><a class="page-link" onclick="getData('${count.next}')">next</a></li>`;
       
        document.getElementById("paginacion").innerHTML=html;


}


//ejetar API

getData(API);