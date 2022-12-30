// Create variables for Open Button and Modal Container and the Close Button
let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

// create Event Listeners
openBtn.addEventListener('click', function() {

    modalContainer.style.display = 'block';
});

closeBtn.addEventListener('click', function(){

    modalContainer.style.display = 'none';
})

// e.target returns the element that triggers the event (the Window Object in the below example)
// when the modal appears we want to be able to click outside of it to make it close
window.addEventListener('click', function(e){

    if(e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
});