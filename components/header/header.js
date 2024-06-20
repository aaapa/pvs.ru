export const header = () => {
  if (document.querySelector(".header")) {

   const header = document.querySelector(".header");
   const headerMenu = document.querySelector(".header__menu");
   const headerMenuButton = document.querySelector(".header__menu-button");
   const headerMenuIcon = document.querySelector(".header__menu-icon");

   headerMenuButton.addEventListener("click", () => {
    headerMenuIcon.classList.toggle("--open");
    headerMenu.classList.toggle("--open");
  });

   const mediaQuery = window.matchMedia("(max-width: 992px)");

   const observer = new IntersectionObserver((entries) => {
     if (entries[0].isIntersecting && mediaQuery.matches) {
       const headerHeight = header ? header.clientHeight : 0;
       headerMenu.style.marginBlockStart = `${headerHeight}px`;
     } else {
       headerMenu.style.marginBlockStart = "0px";
     };
   });
 
   if (header) {
     observer.observe(header);
 
     const resizeObserver = new ResizeObserver(() => {
       if (mediaQuery.matches) {
         const headerHeight = header.clientHeight;
         headerMenu.style.marginBlockStart = `${headerHeight}px`;
       } else {
         headerMenu.style.marginBlockStart = "0px";
       };
     });
 
     resizeObserver.observe(header);
   };
  };
};