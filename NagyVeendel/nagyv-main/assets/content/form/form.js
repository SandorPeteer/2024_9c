function subscribe() {
    var name = document.getElementById('useremail').value;
    if (name.includes("@")) {
        if (checkbox.checked == 1){
            localStorage.setItem('name', name)
            alert("Köszi hogy feliratkoztál!")
          } else {
            alert("ASZF elfogadása szükséges!")
          }
    }
}