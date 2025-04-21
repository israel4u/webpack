import MobileMenu from './assets/modules/MobileMenu'
import './styles/style.scss'

// Images
import HeroImage from './assets/images/graduate_no_background.png'
import PersonalImage from './assets/images/graduate_flipped.png' 
import TestimonialImage from './assets/images/test-1.jpg'
import TestimonialImage2 from './assets/images/test-2.jpg'
import PortfolioImage from './assets/images/image_1.jpg'
import PortfolioImage2 from './assets/images/image_2.jpg'
import PortfolioImage3 from './assets/images/image_3.jpg'
import PortfolioImage4 from './assets/images/test-1.jpg'
import PortfolioImage5 from './assets/images/test-2.jpg'
import TeamImage1 from './assets/images/image_1.jpg'
import TeamImage2 from './assets/images/image_2.jpg'
import TeamImage3 from './assets/images/image_3.jpg'
import BlogImg1 from './assets/images/image_1.jpg'
import BlogImg2 from './assets/images/image_2.jpg'
import BlogImg3 from './assets/images/image_3.jpg'

const heroImage = document.querySelector('.hero__img-1')
const personalImage = document.querySelector('.personal__img-1')
const testimonialImage = document.querySelector('.testimonials__img-1')
const testimonialImage2 = document.querySelector('.testimonials__img-2')
const portfolioImage1 = document.querySelector('.portfolio__img-1')
const portfolioImage2 = document.querySelector('.portfolio__img-2')
const portfolioImage3 = document.querySelector('.portfolio__img-3')
const portfolioImage4 = document.querySelector('.portfolio__img-4')
const portfolioImage5 = document.querySelector('.portfolio__img-5')
const teamImage1 = document.querySelector('.teams__img1')
const teamImage2 = document.querySelector('.teams__img2')
const teamImage3 = document.querySelector('.teams__img3')
const blog__img1 = document.querySelector('.blog__img1')
const blog__img2 = document.querySelector('.blog__img2')
const blog__img3 = document.querySelector('.blog__img3')

heroImage.src = HeroImage
personalImage.src = PersonalImage
testimonialImage.src = TestimonialImage
testimonialImage2.src = TestimonialImage2
portfolioImage1.src = PortfolioImage
portfolioImage2.src = PortfolioImage2
portfolioImage3.src = PortfolioImage3
portfolioImage4.src = PortfolioImage4
portfolioImage5.src = PortfolioImage5
teamImage1.src = TeamImage1
teamImage2.src = TeamImage2
teamImage3.src = TeamImage3
blog__img1.src = BlogImg1
blog__img2.src = BlogImg2
blog__img3.src = BlogImg3


let mobileMenu = new MobileMenu();

if(module.hot) {
  module.hot.accept()
}
