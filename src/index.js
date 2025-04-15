import generateJoke from "./generate.joke";
import './styles/main.scss'
import test from './assets/test-2.jpg'

const testImage = document.getElementById('test-img')
testImage.src = test

console.log(generateJoke())
