var vModel=[];
var vPrecio=[];
var vFoto=[];
var fil=0;

function agregar(modelo,precio,foto) {
    vModel.push(modelo);
    vPrecio.push(precio);
    vFoto.push(foto);
    fil++; //incrementar número de registros
    window.alert('Agregado al carrito de compras');
}

function listado() {
    if(fil<1){
        alert("Aun no tiene nada en el carrito");

    }else{
        var Deuda=0;
        var lista=window.open('','ventana','width=640, height=480');
        lista.document.write('<h1 class="">Carrito de compras</h1><br><hr>');
        lista.document.write(`<table>
                                    <th>FOTO</th>
                                    <th>PRODUCTO</th>
                                    <th>PRECIO</th>
                                    
                                        `);
        for (let x = 0; x < fil; x++) {
            lista.document.write("<tr><td><img src='./images/"+vFoto[x]+"' width='100px'/></td><td>"+vModel[x] + "</td> <td>s/."+vPrecio[x] + "</td></tr>");
            Deuda=Deuda+parseInt(vPrecio[x]);
        }
        
        lista.document.write(`</table>`);
        lista.document.write("<h4> Total a pagar: s/."+Deuda+"</h4><hr>");
        lista.document.write("<input type='button' value='Cerrar' onclick='opener.cerrar(window)'/>");
    }
}



function cerrar(obj) {
    obj.close();
}