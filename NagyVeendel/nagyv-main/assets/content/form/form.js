function subscribe() {
    var name = document.getElementById('useremail').value;
    if (name.includes("@")) {
        localStorage.setItem('name', name)
    }
}