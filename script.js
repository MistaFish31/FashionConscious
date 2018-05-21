document.getElementById("navMenu").innerHTML =
    '<ul class="nav nav-pills">' +
        '<li role="presentation" class="dropdown active">' +
            '<a class="dropdown-toggle" data-toggle="dropdown" href="#" target="_top">Menu<b class="caret"></b></a>' +
            '<ul class="dropdown-menu dropdown-menu-right">' +
                '<li><a href="index.html" target="_top">Home</a></li>' +
                '<li><a href="campaign.html" target="_top">The Campaign</a></li>' +
                '<li><a href="stories.html" target="_top">Stories / News</a></li>' +
                '<li role="separator" class="divider"></li>' +
                '<li><a href="action.html" target="_top">Take Action</a></li>' +
                '<li><a href="pledge.html" target="_top">The Pledge</a></li>' +
            '</ul>' +
        '</li>' +
    '</ul>';



// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}