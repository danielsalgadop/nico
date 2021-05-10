function fillAlert(alertSelector,productName) {

    // using string (productName) as property
    let product = data[productName];

    alert = '<div class="alert alert-success" role="alert">';
    alert += fillAlertHeading(productName);
    alert += fillAlertContent(product);
    alert += '<hr>';
    alert += fillAlertCaloriesAndVitamins(product);
    alert += '</div>';
    alertSelector.innerHTML = alert;
}

function fillAlertHeading(headingContent) {
    return `<h4 class="alert-heading">${headingContent}</h4>`;
}

function fillAlertContent(product) {
    // funciona igual con y sin atributo 'draggable' ??
    return '<div><img id="'+product.id+'" draggable="true" ondragstart="drag(event)" src="'+product.img+'"></div><p>'+product.info+'</p>';
}

function fillAlertCaloriesAndVitamins(product) {
    return '<p class="mb-0"><ul><li>Calorias = '+product.calories+'</li><li>Vitaminas = '+product.vitamins+'</li></ul></p>';
}


