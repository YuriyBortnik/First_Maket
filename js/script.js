(function () {
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
    });

}());

// menu.onclick = function myFunction() {
//     var x = document.getElementById("myTopnav");
//
//     if (x.className === "topnav") {
//         x.className += " responsive";
//     } else {
//         x.className = "topnav";
//     }
// };

// $('.sl').slick();