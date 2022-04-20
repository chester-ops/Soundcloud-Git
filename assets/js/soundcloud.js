// Making sure document is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Mobile Button
    var mobileBtn = document.querySelector(".soundcloud-mobile__btn");
    // Mobile Menu
    var mobileMenu = document.querySelector(".soundcloud-mobile__menu");
    // Menu Overlay
    var mobileOverlay = document.querySelector(".mobile-menu__overlay");
    var body = document.querySelector("body");

    mobileBtn.addEventListener("click",(e)=>{
        // Menu Functionality
        e.currentTarget.classList.toggle("open");
        mobileOverlay.classList.toggle("open");
        mobileMenu.classList.toggle("open");
        body.classList.toggle("mobile-menu__open");

        // Closing Menu When Outside Is Clicked
        if(mobileMenu.classList.contains("open")){
            document.addEventListener("click",(e)=>{
                if(e.target !== mobileMenu && !mobileMenu.contains(e.target) && mobileBtn !== e.target){
                    mobileBtn.classList.remove("open");
                    mobileOverlay.classList.remove("open");
                    mobileMenu.classList.remove("open");
                    document.querySelector("body").classList.remove("mobile-menu__open");
                }
            })
        }
        
    });

});