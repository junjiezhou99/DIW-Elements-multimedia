var modal = document.getElementById("myModal");

var img = document.getElementById("img1");
var modalImg = document.getElementById("img01");
function click(){
    console.log("start");
    modal.style.display = "block";
    modalImg.src = this.src;
    console.log("as");
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
function close() { 
  modal.style.display = "none";
}