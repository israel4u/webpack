// import generateJoke from "./generate.joke";
import MobileMenu from './assets/modules/MobileMenu'
import './styles/style.scss'

// Images
import HeroImage from './assets/images/graduate_no_background.png'
import PersonalImage from './assets/images/graduate_flipped.png' 

const heroImage = document.querySelector('.hero__img-1')
const personalImage = document.querySelector('.personal__img-1')
heroImage.src = HeroImage
personalImage.src = PersonalImage


let mobileMenu = new MobileMenu();

if(module.hot) {
  module.hot.accept()
}
// import test from './assets/test-2.jpg'

// const testImage = document.getElementById('test-img')
// testImage.src = test

// console.log(generateJoke())
