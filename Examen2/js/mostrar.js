function ShowHide() {
    var section2 = document.getElementById("seccion2");
    var section3 = document.getElementById("section3");

    if (section2.style.display === "none") {
        section2.style.display = "block";
        section3.style.display = "block";
    } else {
        section2.style.display = "none";
        section3.style.display = "none";
    }
}