var elements = document.querySelectorAll(".page_link a");

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}
