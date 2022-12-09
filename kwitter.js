function addUser(){
    var usuario = document.getElementById("userName")
    localStorage.setItem("Nome", usuario);
    window.location="kwitter_room.html"
}