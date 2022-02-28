// Модуль работы с меню (бургер) =======================================================================================================================================================================================================================
function menuInit() {
    let iconMenu = document.querySelector(".icon-menu");
    if (iconMenu) {
        iconMenu.addEventListener("click", function(e) {
            const menuBody = document.querySelector(".menu__body");
            menuBody.classList.toggle("_active");
            document.documentElement.classList.toggle("menu-open");
        });
    }

}
menuInit();
//===================================================================
let isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};



if (isMobile.any()) {
    let menuParents = document.querySelectorAll(".menu__item_parent a");
    for (let index = 0; index < menuParents.length; index++) {
        const menuParent = menuParents[index];
        menuParent.addEventListener("click", function(e) {
            menuParent.parentElement.classList.toggle("_active");
            e.preventDefault();
        })

    }
} else {
    let menuParents = document.querySelectorAll(".menu__item_parent");
    let submenuItems = document.querySelectorAll(".submenu__item");
    for (let index = 0; index < menuParents.length; index++) {
        const menuParent = menuParents[index];
        menuParent.addEventListener("mouseenter", function(e) {
            menuParent.classList.add("_active");
        })
        menuParent.addEventListener("mouseleave", function(e) {
            menuParent.classList.remove("_active");
        })
    }
}