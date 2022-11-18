fetch("js/converse.json").then(function(response){
    return response.json();
}).then(function(chuck70){
    let placerholder=document.querySelector("#data-output");
    let out="";
    for(let zap of chuck70){
        if(zap.seccion=="platform"){
            out+=`<div class="card m-1 mb-3" style="width: 18rem;">
            <img src="images/${zap.foto}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${zap.marca}</h5>
                <p class="card-text">${zap.modelo}</p>
                <p class="card-text">s/.${zap.precio}</p>
                <a href="#" class="w-100 btn btn-dark">Comprar</a>
                </div>
            </div>`;
        }
    }
    placerholder.innerHTML=out;
});