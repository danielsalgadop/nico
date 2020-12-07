
// let productImg = document.getElementById("dragable-manzana");

// productImg.onclick = function () {
    // console.log('onclick FOTO');
// }


// let dietaElement = document.getElementById("dieta");

// dietaElement.onmouseover = function () { 
    // console.log('onmouseover dieta');
// };


function drag(ev){
    // console.log('drag started');
    ev.dataTransfer.setData('productName',ev.target.id);
}

// esto se parece a onmouseover
function drop(ev){
    // console.log('en drop');
    productName = ev.dataTransfer.getData('productName');
    product = data[productName];
    renderCalories(parseInt(product.calories));
    renderVitamins(product.vitamins);
    ev.preventDefault();

}

// esto se parace a contrario de onclick
function allowDrop(ev) {
    // console.log('drop started');
    ev.preventDefault();
}
