(() => {
  const menuBtnRef = document.querySelector("[data-menu-open]");
  const menuBtnRef2 = document.querySelector("[data-menu-close]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const bodyOverflow = document.querySelector("[overflow-body]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");

    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");

    bodyOverflow.classList.toggle("overflow--blocked");
  });

  menuBtnRef2.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");

    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");

    bodyOverflow.classList.toggle("overflow--blocked");

  });
  
})();