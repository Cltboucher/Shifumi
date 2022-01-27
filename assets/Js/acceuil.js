fname.addEventListener('input', function(){
    var storeName = document.getElementById('fname').value;
    localStorage.setItem('firstName',storeName);
    // console.log(storeName);
})
