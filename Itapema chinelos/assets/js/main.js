function changeIMG(value) {

    if (document.getElementById("type1") == value) {
        document.querySelector('#imagePrin').src = 'assets/img/image2.png',
        document.querySelector('#img001').style.display = 'flex',
        document.querySelector('#img002').style.display = 'flex',
        document.querySelector('#img003').style.display = 'none', 
        document.querySelector('#img004').style.display = 'none',
        document.querySelector('#img005').style.display = 'none'
    }
    if (document.getElementById("type2") == value) {
        document.querySelector('#imagePrin').src = 'assets/img/image3.png',
        document.querySelector('#img001').style.display = 'none',
        document.querySelector('#img002').style.display = 'none',
        document.querySelector('#img003').style.display = 'flex', 
        document.querySelector('#img004').style.display = 'flex',
        document.querySelector('#img005').style.display = 'none'
    }
    if (document.getElementById("type3") == value) {
        document.querySelector('#imagePrin').src = 'assets/img/image4.png',
        document.querySelector('#img001').style.display = 'none',
        document.querySelector('#img002').style.display = 'none',
        document.querySelector('#img003').style.display = 'none', 
        document.querySelector('#img004').style.display = 'none',
        document.querySelector('#img005').style.display = 'flex'
    }

}

document.addEventListener('DOMContentLoaded', function() {
    let table = new DataTable('#myTable');
});
