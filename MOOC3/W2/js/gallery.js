/*Name this external file gallery.js*/

function onStart()
{
    //document.getElementsByTagName('image')[0].focus();
    console.log("Loaded");
}

function upDate(previewPic) {
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById('image').innerHTML = previewPic.alt;
}

function unDo() {
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}

window.onload = function() {
    
    //addTabFocusAttribute();
    console.log("Page loaded successfully!");
};

function addTabFocusAttribute() {
    var previewImages = document.getElementsByClassName('preview');
    for (var i = 0; i < previewImages.length; i++) {
        previewImages[i].setAttribute('tabindex', i + 1);
    }
}