//get modal element
var modal = document.getElementById("simplemodal");
//open modal by clicking button
var modalbtn = document.getElementById("modalbtn");
//close button
var closebtn = document.getElementsByClassName("closebtn") [0]; //0 indicates first class 

modalbtn.addEventListener('click', openModal); // to open modal window
closebtn.addEventListener('click', closeModal); // to close modal window by clicking close button
window.addEventListener('click', outsideClick); // to close modal window by clicking outside the modal window

function openModal()
{
    modal.style.display = "block";
}

function closeModal()
{
    modal.style.display = "none";
}

function outsideClick(e)
{
    if(e.target == modal)
    {
        modal.style.display = "none";
    }
}