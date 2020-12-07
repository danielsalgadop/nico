
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

// 
function drop(ev){
    console.log('en drop');
    setCalories(5);
    ev.preventDefault();
    console.log(ev.dataTransfer.getData('product'));

}

// no entiendo porque tiene que existir este
function allowDrop(ev) {
    console.log('drop started');
    ev.preventDefault();
    // console.log(ev.dataTransfer)
}
