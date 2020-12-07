
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
    ev.dataTransfer.setData('product',ev.target.id);
}

// esto se parece a onmouseover
function drop(ev){
    console.log('en drop');
    setCalories(5);
    let hcArray = ['A1','B12'];
    setVitamins(hcArray);
    ev.preventDefault();
    console.log(ev.dataTransfer.getData('product'));

}

// esto se parace a contrario de onclick
function allowDrop(ev) {
    console.log('drop started');
    ev.preventDefault();
    // console.log(ev.dataTransfer)
}
