
 menu = document.querySelector(".menu");
    menu.onclick = function () {
    nav = document.querySelector(".nav");
    nav.classList.toggle("active");
};

function showDropSearch() {
    let dropDiv = document.querySelector(".dropdownSearch");

    if (dropDiv.style.display === "block") {
        dropDiv.style.display = "";
    } 
    else {
        dropDiv.style.display = "block";
    }
}
