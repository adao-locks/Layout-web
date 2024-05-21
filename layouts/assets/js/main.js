function changeIMG() {
    var imagemProduto = document.querySelector("#imagePrin");
    if (document.querySelector("#img001")) {
        imagemProduto.src = "assets/img/Itapema/image2.png";
    } else if (document.querySelector("#img002")) {
        imagemProduto.src = "assets/img/Itapema/image.png";
    }
}