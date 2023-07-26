// function toggleMenu() {
//     const mobileMenu = document.getElementById("mobile-menu");
//     const isOpen = mobileMenu.classList.toggle("menu-open");
    
//     mobileMenu.style.top = isOpen ? "0em" : "-100vh";
// }

function toggleMenu() {
    const borderMenu = document.getElementById("menu-cta");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileMenuItems = document.getElementById("mobile-menu-items");

    const isClose = mobileMenu.classList.contains("hidden");

    if (isClose) {
        borderMenu.classList.remove("border-b-2");
        mobileMenu.classList.remove("hidden");
        mobileMenuItems.classList.remove("-top-full");
        mobileMenu.classList.add("block");
        mobileMenuItems.classList.add("top-0");
    } else {
        borderMenu.classList.add("border-b-2");
        mobileMenu.classList.remove("block");
        mobileMenuItems.classList.remove("top-0");
        mobileMenu.classList.add("hidden");
        mobileMenuItems.classList.add("-top-full");
    }
}