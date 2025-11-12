
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector("nav.menu");

toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    console.log("isOpen : ", isOpen, "isClosed : ", isClosed);


    if (isClosed) {
        nav.ariaHidden = "false";
        toggle.ariaExpanded = "true";
    }
    
    else {
        nav.ariaHidden = "true";
        toggle.ariaExpanded = "false";
    }
});