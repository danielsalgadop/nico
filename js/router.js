page = 'manzana';


function fillAlert(alertSelector) {
    alert = '<div class="alert alert-success" role="alert">';
    alert += fillAlertHeading('manzana');
    alert += fillAlertContent();
    alert += '<hr>';
    alert += fillAlertFinal();
    alert += '</div>';
    alertSelector.innerHTML = alert;
}

function fillAlertHeading(headingContent) {
    return `<h4 class="alert-heading">${headingContent}</h4>`;
}

function fillAlertContent() {
    return '<p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>';
}

function fillAlertFinal() {
    return '<p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>';
}

fillAlert(document.getElementById('main'));
