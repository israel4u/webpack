class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector(".header__mobile")
    this.menuContent = document.querySelector(".header__links")
    this.siteHeader = document.querySelector(".header")
    this.events()
  }

  events() {
    this.menuIcon.addEventListener("click", ()=> this.toggleTheMenu());
  }

  toggleTheMenu() {
    this.menuContent.classList.toggle("header__links--is-visible")
    this.siteHeader.classList.toggle("header--is-expanded")
    this.menuIcon.classList.toggle("header__mobile-icon--close-x")
  }
}

export default MobileMenu