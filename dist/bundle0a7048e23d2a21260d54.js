/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --black: hsl(0, 0%, 10%);
  --dark: hsl(0, 0%, 20%);
  --gray: hsl(0, 0%, 60%);
  --grayish: hsl(0, 0%, 75%);
  --lightGray: hsl(0, 0%, 90%);
  --lighterGray: hsl(0, 0%, 97%);
  --green: hsl(159, 100%, 31%);
  --lighterGreen: hsl(156, 17%, 94%);
  --lighterGold: hsl(60, 22%, 64%);
  --lighterBlue: hsl(215, 100%, 98%);
  --white: hsl(0, 0%, 100%);
  --color1: hsl(193, 100%, 33%);
  --color2: hsl(48, 38%, 95%);
  --color3: hsl(190, 36%, 83%);
  --color4: hsl(193, 37%, 65%);
}

a {
  display: inline-block;
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
}
a.green {
  background-color: var(--green);
  color: var(--white);
}
a.transparent {
  background-color: transparent;
  color: var(--green);
  border: 1px solid var(--green);
}
a.center {
  text-align: center;
}
a.full {
  width: 100%;
  text-align: center;
}

html {
  font-size: 100%;
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}

.body {
  margin: 0;
  padding: 0;
  font-family: "Inter", sans-serif;
  background-color: var(--white);
}
.body__container {
  margin-inline: 1rem;
}

img {
  display: block;
  width: 100%;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.svg {
  color: var(--green);
  margin-bottom: 1rem;
  cursor: pointer;
}

h1, h2, h3 {
  font-weight: 700;
  line-height: 1.1;
  margin-top: 0;
  color: var(--black);
}

h2 {
  margin-left: 0;
  margin-bottom: 5rem;
}
@media (min-width: 700px) {
  h2 {
    margin-left: 5rem;
    text-align: left;
  }
}

p {
  margin-top: 0;
  font-weight: 300;
  line-height: 1.5;
  color: var(--dark);
}

a, a:visited, a:active {
  text-decoration: none;
}

.section {
  padding-block: 5rem;
}
.section__full-width {
  width: 100%;
}
.section__container {
  max-width: 1200px;
  margin-inline: auto;
}
.section__bleedarea {
  margin-inline: 1rem;
}

.header__nav {
  display: none;
}
.header__mobile {
  width: 28px;
  height: 28px;
  background-color: black;
  margin-top: 0.5rem;
  cursor: pointer;
}
.header__container {
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-right: 0.5rem;
}
@media (min-width: 700px) {
  .header__container {
    justify-content: center;
  }
}
.header__links {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  text-align: center;
}
@media (min-width: 700px) {
  .header__links {
    flex-direction: row;
    column-gap: 20px;
  }
}
@media (min-width: 700px) {
  .header__nav {
    display: block;
  }
  .header__mobile {
    display: none;
  }
}

.hero__content {
  display: flex;
  flex-direction: column-reverse;
  row-gap: 2rem;
  align-items: center;
  margin-top: 5rem;
}
.hero__left {
  flex: 2;
}
.hero__text {
  text-align: center;
  font-size: 21px;
  font-weight: 300;
}
.hero__greeting {
  font-weight: 300;
  font-size: 21px;
  margin-bottom: 0;
}
.hero__post {
  font-weight: 700;
  font-size: 28px;
  line-height: 1.1;
}
.hero__sub-desc {
  display: block;
  font-size: 21px;
  font-weight: 300;
}
.hero__socials {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  text-align: center;
  margin-top: 2rem;
}
@media (min-width: 700px) {
  .hero__socials {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
.hero__subtitle {
  margin-bottom: 0;
}
@media (min-width: 700px) {
  .hero__content {
    flex-direction: row;
    justify-items: center;
    row-gap: none;
  }
  .hero__text, .hero__socials {
    text-align: left;
  }
  .hero__socials {
    display: flex;
    justify-content: left;
  }
  .hero__social {
    border-right: 1px solid var(--dark);
    padding-right: 1rem;
    padding-left: 1rem;
  }
  .hero__social:first-child {
    padding-left: 0;
  }
}

.personal {
  background-color: var(--lightGray);
}
@media (min-width: 700px) {
  .personal__content {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 3rem;
  }
}
.personal__img {
  display: none;
}
@media (min-width: 700px) {
  .personal__img {
    display: flex;
  }
}
.personal__faq {
  flex: 1;
}
.personal__info {
  color: var(--green);
  font-size: 1.25rem;
}
.personal__title {
  font-size: 1.125rem;
}
@media (min-width: 700px) {
  .personal__summary {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
.personal__full-desc {
  display: flex;
  column-gap: 0.5rem;
}
.personal__label {
  font-weight: 700;
}

.resume {
  background-color: var(--white);
  text-align: center;
}
.resume__main-content {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}
@media (min-width: 700px) {
  .resume__main-content {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    text-align: left;
  }
}
.resume__content {
  padding-top: 2rem;
  padding-left: 1rem;
}
@media (min-width: 700px) {
  .resume__content {
    border-left: 0.2rem solid var(--green);
  }
}

.services {
  background-color: var(--lighterGreen);
  text-align: center;
  padding-top: 2rem;
}
@media (min-width: 700px) {
  .services {
    text-align: left;
  }
}
.services__content {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  row-gap: 2rem;
}
@media (min-width: 700px) {
  .services__content {
    text-align: left;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 2.5rem;
  }
}
.services__task {
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: inset 0px -1px 3px var(--gray);
  padding: 1.5rem 2rem;
}

.portfolio__contents {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  text-align: center;
  overflow: hidden;
}
.portfolio__contents p {
  font-weight: 600;
}
@media (min-width: 700px) {
  .portfolio__contents {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5rem;
  }
}

.plan {
  background-color: var(--lighterGreen);
  text-align: center;
}
.plan__contents {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: center;
}
.plan__pricing {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.plan__subhead {
  margin-bottom: 2rem;
}
.plan__svg {
  color: var(--green);
  margin-bottom: 1rem;
}
.plan__title, .plan__price {
  margin-bottom: 0.2rem;
}
.plan__title {
  font-size: 1.3rem;
}
.plan__option {
  font-weight: 200;
  margin-bottom: 1rem;
}
@media (min-width: 700px) {
  .plan__heading {
    text-align: left;
  }
  .plan__contents {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.testimonials__user {
  display: flex;
  justify-content: space-between;
  column-gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}
@media (min-width: 700px) {
  .testimonials__user {
    margin-bottom: 2rem;
  }
}
.testimonials__img {
  border-radius: 50%;
  width: 25%;
}
.testimonials__sub-heading {
  flex: 2;
}
.testimonials__contents {
  display: flex;
  flex-direction: column;
  row-gap: 5rem;
}
@media (min-width: 700px) {
  .testimonials__contents {
    flex-direction: row;
    row-gap: 0;
    column-gap: 5rem;
  }
}
.testimonials__name {
  margin-bottom: 0;
}
.testimonials__svg {
  color: var(--green);
}

.teams {
  background-color: var(--lighterGreen);
}
.teams__contents {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  row-gap: 2rem;
}
@media (min-width: 700px) {
  .teams__contents {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 2rem;
    row-gap: 0;
  }
}
.teams__img {
  border: 1px solid yellow;
  border-radius: 20px;
  margin-bottom: 1rem;
}
.teams__desc {
  text-align: center;
}
.teams__name {
  margin-bottom: 0;
}

.blog__posts {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  row-gap: 2rem;
}
@media (min-width: 700px) {
  .blog__posts {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 2rem;
    row-gap: 0;
  }
}
.blog__img {
  margin-bottom: 0.5rem;
}
.blog__content {
  margin-bottom: 1rem;
}
.blog__topic {
  margin-bottom: 0.5rem;
}
.blog__all-blogs {
  text-align: center;
  margin-top: 2rem;
}

.contact {
  background-color: var(--lighterGreen);
}
.contact__content {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  row-gap: 2rem;
}
@media (min-width: 700px) {
  .contact__content {
    position: relative;
    grid-template-columns: 1fr 1fr;
    column-gap: 4rem;
    row-gap: 0;
    align-items: center;
  }
}
.contact__form {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-columns: repeat(4 1fr);
  grid-column: auto;
  margin-bottom: 1rem;
}
.contact input,
.contact textarea {
  width: 100%;
  background-color: var(--grayish);
  border: none;
}
.contact input {
  padding: 1rem;
  margin-bottom: 0.5rem;
}
.contact__desc {
  margin-bottom: 2rem;
}
.contact__info {
  display: flex;
  column-gap: 2rem;
  margin-bottom: 1rem;
}
.contact__svg {
  color: var(--green);
}
.contact__label {
  margin-bottom: 0;
  font-size: 1rem;
}
.contact__socials {
  display: flex;
  column-gap: 2rem;
  align-items: center;
  justify-items: center;
}
@media (min-width: 700px) {
  .contact__socials {
    position: absolute;
    flex-direction: column;
    row-gap: 5vh;
    top: 20%;
    left: -8%;
  }
}
.contact__follow {
  font-size: 0.8rem;
  margin-bottom: 0;
}
@media (min-width: 700px) {
  .contact__follow {
    transform: rotate(90deg);
  }
}
.contact__handles {
  text-align: center;
}
.contact__handles svg {
  margin-right: 1rem;
}
@media (min-width: 700px) {
  .contact__handles {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    text-align: none;
  }
  .contact__handles svg {
    margin-right: 0;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/globals/_color.scss","webpack://./src/styles/style.scss","webpack://./src/styles/util/_buttons.scss","webpack://./src/styles/globals/_boilerplate.scss","webpack://./src/styles/util/_fonts.scss","webpack://./src/styles/globals/_typography.scss","webpack://./src/styles/util/_breakpoints.scss","webpack://./src/styles/layout/_layout.scss","webpack://./src/styles/nav/_nav.scss","webpack://./src/styles/hero/_hero.scss","webpack://./src/styles/personal/_personal.scss","webpack://./src/styles/resume/_resume.scss","webpack://./src/styles/services/_services.scss","webpack://./src/styles/portfolio/_portfolio.scss","webpack://./src/styles/plan/_plan.scss","webpack://./src/styles/testimonials/_testimonials.scss","webpack://./src/styles/team/_team.scss","webpack://./src/styles/blog/_blog.scss","webpack://./src/styles/contact/_contact.scss"],"names":[],"mappings":"AAAA;EACE,wBAAA;EACA,uBAAA;EACA,uBAAA;EACA,0BAAA;EACA,4BAAA;EACA,8BAAA;EACA,4BAAA;EACA,kCAAA;EACA,gCAAA;EACA,kCAAA;EACA,yBAAA;EAGA,6BAAA;EACA,2BAAA;EACA,4BAAA;EACA,4BAAA;ACAF;;ACjBA;EACE,qBAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;ADoBF;ACdE;EACE,8BAAA;EACA,mBAAA;ADgBJ;ACbE;EACE,6BAAA;EACA,mBAAA;EACA,8BAAA;ADeJ;ACZE;EACE,kBAAA;ADcJ;ACVE;EACE,WAAA;EACA,kBAAA;ADYJ;;AEvCA;EACE,eAAA;EACA,sBAAA;AF0CF;;AEvCA;EACE,mBAAA;AF0CF;;AEvCA;EACE,SAAA;EACA,UAAA;EACA,gCCZM;EDaN,8BAAA;AF0CF;AExCE;EACE,mBAAA;AF0CJ;;AEtCA;EACE,cAAA;EACA,WAAA;AFyCF;;AErCA;EACE,gBAAA;EACA,UAAA;EACA,SAAA;AFwCF;;AErCA;EACE,mBAAA;EACA,mBAAA;EACA,eAAA;AFwCF;;AI3EA;EACE,gBAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;AJ8EF;;AI3EA;EACE,cAAA;EACA,mBAAA;AJ8EF;AKjFE;EDCF;IAKI,iBAAA;IACA,gBAAA;EJ+EF;AACF;;AI5EA;EACE,aAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;AJ+EF;;AI5EA;EACE,qBAAA;AJ+EF;;AMxGA;EACE,mBAAA;AN2GF;AMzGE;EACE,WAAA;AN2GJ;AMxGE;EACE,iBAAA;EACA,mBAAA;AN0GJ;AMvGE;EACE,mBAAA;ANyGJ;;AOrHE;EACE,aAAA;APwHJ;AOrHE;EACE,WAAA;EACA,YAAA;EACA,uBAAA;EACA,kBAAA;EACA,eAAA;APuHJ;AOpHE;EACE,aAAA;EACA,mBAAA;EACA,oBAAA;EACA,oBAAA;APsHJ;AKjIE;EEOA;IAOI,uBAAA;EPuHJ;AACF;AO3FE;EACE,aAAA;EACA,sBAAA;EACA,aAAA;EACA,kBAAA;AP6FJ;AK5IE;EE2CA;IAOI,mBAAA;IACA,gBAAA;EP8FJ;AACF;AKlJE;EEwDE;IACE,cAAA;EP6FJ;EO3FE;IACE,aAAA;EP6FJ;AACF;;AQ9JE;EACE,aAAA;EACA,8BAAA;EACA,aAAA;EACA,mBAAA;EACA,gBAAA;ARiKJ;AQ9JI;EACA,OAAA;ARgKJ;AQ7JI;EACE,kBAAA;EACA,eAAA;EACA,gBAAA;AR+JN;AQ3JE;EACE,gBAAA;EACA,eAAA;EACA,gBAAA;AR6JJ;AQ1JE;EACE,gBAAA;EACA,eAAA;EACA,gBAAA;AR4JJ;AQzJE;EACE,cAAA;EACA,eAAA;EACA,gBAAA;AR2JJ;AQxJE;EACE,aAAA;EACA,0BAAA;EACA,uBAAA;EACA,kBAAA;EACA,gBAAA;AR0JJ;AKhME;EGiCA;IASI,kCAAA;ER0JJ;AACF;AQvJE;EACE,gBAAA;ARyJJ;AKxME;EGoDE;IACE,mBAAA;IACA,qBAAA;IACA,aAAA;ERuJJ;EQpJE;IAEE,gBAAA;ERqJJ;EQlJE;IACE,aAAA;IACA,qBAAA;ERoJJ;EQjJE;IACE,mCAAA;IACA,mBAAA;IACA,kBAAA;ERmJJ;EQhJE;IACE,eAAA;ERkJJ;AACF;;ASpOA;EAEE,kCAAA;ATsOF;AKlOE;EIFA;IAEI,aAAA;IACA,uBAAA;IACA,mBAAA;IACA,gBAAA;ETsOJ;AACF;ASlOE;EACE,aAAA;AToOJ;AK7OE;EIQA;IAII,aAAA;ETqOJ;AACF;ASlOE;EACE,OAAA;AToOJ;AShOE;EACE,mBAAA;EACA,kBAAA;ATkOJ;AS/NE;EACE,mBAAA;ATiOJ;AK5PE;EIgCA;IAGI,aAAA;IACA,8BAAA;ET6NJ;AACF;AS3NE;EACE,aAAA;EACA,kBAAA;AT6NJ;AS1NE;EACE,gBAAA;AT4NJ;;AU/QA;EAEE,8BAAA;EACA,kBAAA;AViRF;AU9QE;EACE,aAAA;EACA,0BAAA;EACA,uBAAA;AVgRJ;AKnRE;EKAA;IAQI,8BAAA;IACA,+BAAA;IACA,gBAAA;EV+QJ;AACF;AU3QE;EACE,iBAAA;EACA,kBAAA;AV6QJ;AK9RE;EKeA;IAKI,sCAAA;EV8QJ;AACF;;AWvSA;EAEE,qCAAA;EAEA,kBAAA;EACA,iBAAA;AXwSF;AKzSE;EMJF;IAQI,gBAAA;EXySF;AACF;AWvSE;EACE,aAAA;EACA,0BAAA;EACA,uBAAA;EACA,aAAA;AXySJ;AKpTE;EMOA;IAQI,gBAAA;IACA,kCAAA;IACA,2BAAA;IACA,kBAAA;EXySJ;AACF;AWtSE;EACE,8BAAA;EACA,mBAAA;EACA,0CAAA;EACA,oBAAA;AXwSJ;;AYvUE;EACE,aAAA;EACA,0BAAA;EACA,uBAAA;EACA,kBAAA;EACA,gBAAA;AZ0UJ;AYxUI;EACE,gBAAA;AZ0UN;AK7UE;EOLA;IAcI,kCAAA;IACA,WAAA;EZwUJ;AACF;;AazVA;EACE,qCAAA;EACA,kBAAA;Ab4VF;Aa1VE;EACE,aAAA;EACA,0BAAA;EACA,uBAAA;EACA,mBAAA;Ab4VJ;AazVE;EACE,iBAAA;EACA,oBAAA;Ab2VJ;AaxVE;EACE,mBAAA;Ab0VJ;AavVE;EACE,mBAAA;EACA,mBAAA;AbyVJ;AatVE;EACE,qBAAA;AbwVJ;AapVE;EACE,iBAAA;AbsVJ;AanVE;EACE,gBAAA;EACA,mBAAA;AbqVJ;AKnXE;EQmCE;IACE,gBAAA;EbmVJ;EahVE;IACE,kCAAA;EbkVJ;AACF;;Ac/XE;EACE,aAAA;EACA,8BAAA;EACA,gBAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;AdkYJ;AKpYE;ESJA;IASI,mBAAA;EdmYJ;AACF;AchYE;EACE,kBAAA;EACA,UAAA;AdkYJ;Ac/XE;EACE,OAAA;AdiYJ;Ac9XE;EAEE,aAAA;EACA,sBAAA;EACA,aAAA;Ad+XJ;AKrZE;ESkBA;IAQI,mBAAA;IACA,UAAA;IACA,gBAAA;Ed+XJ;AACF;Ac5XE;EACE,gBAAA;Ad8XJ;Ac3XE;EACE,mBAAA;Ad6XJ;;AexaA;EAEE,qCAAA;Af0aF;AexaE;EACI,aAAA;EACA,0BAAA;EACA,uBAAA;EACA,aAAA;Af0aN;AK5aE;EUFA;IAOM,kCAAA;IACA,gBAAA;IACA,UAAA;Ef2aN;AACF;AenaE;EACE,wBAAA;EACA,mBAAA;EACA,mBAAA;AfqaJ;AelaE;EACE,kBAAA;AfoaJ;AejaE;EACE,gBAAA;AfmaJ;;AgBhcE;EACE,aAAA;EACA,0BAAA;EACA,uBAAA;EACA,aAAA;AhBmcJ;AKrcE;EWFA;IAQI,kCAAA;IACA,gBAAA;IACA,UAAA;EhBmcJ;AACF;AgBhcE;EACE,qBAAA;AhBkcJ;AgB/bE;EACE,mBAAA;AhBicJ;AgB9bE;EACE,qBAAA;AhBgcJ;AgB7bE;EACE,kBAAA;EACA,gBAAA;AhB+bJ;;AiB/dA;EAEE,qCAAA;AjBieF;AiBheE;EACE,aAAA;EACA,0BAAA;EACA,uBAAA;EACA,aAAA;AjBkeJ;AKneE;EYHA;IASI,kBAAA;IACA,8BAAA;IACA,gBAAA;IACA,UAAA;IACA,mBAAA;EjBieJ;AACF;AiB7dE;EACE,kBAAA;EACA,aAAA;EACA,0BAAA;EACA,oCAAA;EACA,iBAAA;EAEA,mBAAA;AjB8dJ;AiB3dE;;EAEE,WAAA;EACA,gCAAA;EACA,YAAA;AjB6dJ;AiB1dE;EACE,aAAA;EACA,qBAAA;AjB4dJ;AiBzdE;EACE,mBAAA;AjB2dJ;AiBxdE;EACE,aAAA;EACA,gBAAA;EACA,mBAAA;AjB0dJ;AiBvdE;EACE,mBAAA;AjBydJ;AiBtdE;EACE,gBAAA;EACA,eAAA;AjBwdJ;AiBrdE;EACE,aAAA;EACA,gBAAA;EACA,mBAAA;EACA,qBAAA;AjBudJ;AKnhBE;EYwDA;IAOI,kBAAA;IACE,sBAAA;IACA,YAAA;IACF,QAAA;IACA,SAAA;EjBwdJ;AACF;AiBrdE;EAEE,iBAAA;EACA,gBAAA;AjBsdJ;AKhiBE;EYuEA;IAMI,wBAAA;EjBudJ;AACF;AiBndE;EACE,kBAAA;AjBqdJ;AiBpdI;EACE,kBAAA;AjBsdN;AK3iBE;EYkFA;IAQE,aAAA;IACA,sBAAA;IACA,eAAA;IACA,gBAAA;EjBqdF;EiBpdI;IACE,eAAA;EjBsdN;AACF","sourcesContent":[":root {\r\n  --black: hsl(0, 0%, 10%);\r\n  --dark: hsl(0, 0%, 20%);\r\n  --gray: hsl(0, 0%, 60%);\r\n  --grayish: hsl(0, 0%, 75%);\r\n  --lightGray: hsl(0, 0%, 90%);\r\n  --lighterGray: hsl(0, 0%, 97%);\r\n  --green: hsl(159, 100%, 31%);\r\n  --lighterGreen: hsl(156, 17%, 94%);\r\n  --lighterGold: hsl(60, 22%, 64%);\r\n  --lighterBlue: hsl(215, 100%, 98%);\r\n  --white: hsl(0, 0%, 100%);\r\n\r\n\r\n  --color1: hsl(193, 100%, 33%);\r\n  --color2: hsl(48, 38%, 95%);\r\n  --color3: hsl(190, 36%, 83%);\r\n  --color4: hsl(193, 37%, 65%);\r\n}","@import url(\"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap\");\n:root {\n  --black: hsl(0, 0%, 10%);\n  --dark: hsl(0, 0%, 20%);\n  --gray: hsl(0, 0%, 60%);\n  --grayish: hsl(0, 0%, 75%);\n  --lightGray: hsl(0, 0%, 90%);\n  --lighterGray: hsl(0, 0%, 97%);\n  --green: hsl(159, 100%, 31%);\n  --lighterGreen: hsl(156, 17%, 94%);\n  --lighterGold: hsl(60, 22%, 64%);\n  --lighterBlue: hsl(215, 100%, 98%);\n  --white: hsl(0, 0%, 100%);\n  --color1: hsl(193, 100%, 33%);\n  --color2: hsl(48, 38%, 95%);\n  --color3: hsl(190, 36%, 83%);\n  --color4: hsl(193, 37%, 65%);\n}\n\na {\n  display: inline-block;\n  padding: 0.5rem 1.2rem;\n  font-size: 1rem;\n  font-weight: 400;\n  text-align: center;\n}\na.green {\n  background-color: var(--green);\n  color: var(--white);\n}\na.transparent {\n  background-color: transparent;\n  color: var(--green);\n  border: 1px solid var(--green);\n}\na.center {\n  text-align: center;\n}\na.full {\n  width: 100%;\n  text-align: center;\n}\n\nhtml {\n  font-size: 100%;\n  box-sizing: border-box;\n}\n\n*, *::before, *::after {\n  box-sizing: inherit;\n}\n\n.body {\n  margin: 0;\n  padding: 0;\n  font-family: \"Inter\", sans-serif;\n  background-color: var(--white);\n}\n.body__container {\n  margin-inline: 1rem;\n}\n\nimg {\n  display: block;\n  width: 100%;\n}\n\nul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.svg {\n  color: var(--green);\n  margin-bottom: 1rem;\n  cursor: pointer;\n}\n\nh1, h2, h3 {\n  font-weight: 700;\n  line-height: 1.1;\n  margin-top: 0;\n  color: var(--black);\n}\n\nh2 {\n  margin-left: 0;\n  margin-bottom: 5rem;\n}\n@media (min-width: 700px) {\n  h2 {\n    margin-left: 5rem;\n    text-align: left;\n  }\n}\n\np {\n  margin-top: 0;\n  font-weight: 300;\n  line-height: 1.5;\n  color: var(--dark);\n}\n\na, a:visited, a:active {\n  text-decoration: none;\n}\n\n.section {\n  padding-block: 5rem;\n}\n.section__full-width {\n  width: 100%;\n}\n.section__container {\n  max-width: 1200px;\n  margin-inline: auto;\n}\n.section__bleedarea {\n  margin-inline: 1rem;\n}\n\n.header__nav {\n  display: none;\n}\n.header__mobile {\n  width: 28px;\n  height: 28px;\n  background-color: black;\n  margin-top: 0.5rem;\n  cursor: pointer;\n}\n.header__container {\n  display: flex;\n  flex-direction: row;\n  justify-content: end;\n  margin-right: 0.5rem;\n}\n@media (min-width: 700px) {\n  .header__container {\n    justify-content: center;\n  }\n}\n.header__links {\n  display: flex;\n  flex-direction: column;\n  row-gap: 20px;\n  text-align: center;\n}\n@media (min-width: 700px) {\n  .header__links {\n    flex-direction: row;\n    column-gap: 20px;\n  }\n}\n@media (min-width: 700px) {\n  .header__nav {\n    display: block;\n  }\n  .header__mobile {\n    display: none;\n  }\n}\n\n.hero__content {\n  display: flex;\n  flex-direction: column-reverse;\n  row-gap: 2rem;\n  align-items: center;\n  margin-top: 5rem;\n}\n.hero__left {\n  flex: 2;\n}\n.hero__text {\n  text-align: center;\n  font-size: 21px;\n  font-weight: 300;\n}\n.hero__greeting {\n  font-weight: 300;\n  font-size: 21px;\n  margin-bottom: 0;\n}\n.hero__post {\n  font-weight: 700;\n  font-size: 28px;\n  line-height: 1.1;\n}\n.hero__sub-desc {\n  display: block;\n  font-size: 21px;\n  font-weight: 300;\n}\n.hero__socials {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  text-align: center;\n  margin-top: 2rem;\n}\n@media (min-width: 700px) {\n  .hero__socials {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n.hero__subtitle {\n  margin-bottom: 0;\n}\n@media (min-width: 700px) {\n  .hero__content {\n    flex-direction: row;\n    justify-items: center;\n    row-gap: none;\n  }\n  .hero__text, .hero__socials {\n    text-align: left;\n  }\n  .hero__socials {\n    display: flex;\n    justify-content: left;\n  }\n  .hero__social {\n    border-right: 1px solid var(--dark);\n    padding-right: 1rem;\n    padding-left: 1rem;\n  }\n  .hero__social:first-child {\n    padding-left: 0;\n  }\n}\n\n.personal {\n  background-color: var(--lightGray);\n}\n@media (min-width: 700px) {\n  .personal__content {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    column-gap: 3rem;\n  }\n}\n.personal__img {\n  display: none;\n}\n@media (min-width: 700px) {\n  .personal__img {\n    display: flex;\n  }\n}\n.personal__faq {\n  flex: 1;\n}\n.personal__info {\n  color: var(--green);\n  font-size: 1.25rem;\n}\n.personal__title {\n  font-size: 1.125rem;\n}\n@media (min-width: 700px) {\n  .personal__summary {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.personal__full-desc {\n  display: flex;\n  column-gap: 0.5rem;\n}\n.personal__label {\n  font-weight: 700;\n}\n\n.resume {\n  background-color: var(--white);\n  text-align: center;\n}\n.resume__main-content {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n}\n@media (min-width: 700px) {\n  .resume__main-content {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n    text-align: left;\n  }\n}\n.resume__content {\n  padding-top: 2rem;\n  padding-left: 1rem;\n}\n@media (min-width: 700px) {\n  .resume__content {\n    border-left: 0.2rem solid var(--green);\n  }\n}\n\n.services {\n  background-color: var(--lighterGreen);\n  text-align: center;\n  padding-top: 2rem;\n}\n@media (min-width: 700px) {\n  .services {\n    text-align: left;\n  }\n}\n.services__content {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  row-gap: 2rem;\n}\n@media (min-width: 700px) {\n  .services__content {\n    text-align: left;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    column-gap: 2.5rem;\n  }\n}\n.services__task {\n  background-color: var(--white);\n  border-radius: 10px;\n  box-shadow: inset 0px -1px 3px var(--gray);\n  padding: 1.5rem 2rem;\n}\n\n.portfolio__contents {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  text-align: center;\n  overflow: hidden;\n}\n.portfolio__contents p {\n  font-weight: 600;\n}\n@media (min-width: 700px) {\n  .portfolio__contents {\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 1.5rem;\n  }\n}\n\n.plan {\n  background-color: var(--lighterGreen);\n  text-align: center;\n}\n.plan__contents {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  align-items: center;\n}\n.plan__pricing {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.plan__subhead {\n  margin-bottom: 2rem;\n}\n.plan__svg {\n  color: var(--green);\n  margin-bottom: 1rem;\n}\n.plan__title, .plan__price {\n  margin-bottom: 0.2rem;\n}\n.plan__title {\n  font-size: 1.3rem;\n}\n.plan__option {\n  font-weight: 200;\n  margin-bottom: 1rem;\n}\n@media (min-width: 700px) {\n  .plan__heading {\n    text-align: left;\n  }\n  .plan__contents {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n\n.testimonials__user {\n  display: flex;\n  justify-content: space-between;\n  column-gap: 1rem;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1rem;\n}\n@media (min-width: 700px) {\n  .testimonials__user {\n    margin-bottom: 2rem;\n  }\n}\n.testimonials__img {\n  border-radius: 50%;\n  width: 25%;\n}\n.testimonials__sub-heading {\n  flex: 2;\n}\n.testimonials__contents {\n  display: flex;\n  flex-direction: column;\n  row-gap: 5rem;\n}\n@media (min-width: 700px) {\n  .testimonials__contents {\n    flex-direction: row;\n    row-gap: 0;\n    column-gap: 5rem;\n  }\n}\n.testimonials__name {\n  margin-bottom: 0;\n}\n.testimonials__svg {\n  color: var(--green);\n}\n\n.teams {\n  background-color: var(--lighterGreen);\n}\n.teams__contents {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  row-gap: 2rem;\n}\n@media (min-width: 700px) {\n  .teams__contents {\n    grid-template-columns: 1fr 1fr 1fr;\n    column-gap: 2rem;\n    row-gap: 0;\n  }\n}\n.teams__img {\n  border: 1px solid yellow;\n  border-radius: 20px;\n  margin-bottom: 1rem;\n}\n.teams__desc {\n  text-align: center;\n}\n.teams__name {\n  margin-bottom: 0;\n}\n\n.blog__posts {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  row-gap: 2rem;\n}\n@media (min-width: 700px) {\n  .blog__posts {\n    grid-template-columns: 1fr 1fr 1fr;\n    column-gap: 2rem;\n    row-gap: 0;\n  }\n}\n.blog__img {\n  margin-bottom: 0.5rem;\n}\n.blog__content {\n  margin-bottom: 1rem;\n}\n.blog__topic {\n  margin-bottom: 0.5rem;\n}\n.blog__all-blogs {\n  text-align: center;\n  margin-top: 2rem;\n}\n\n.contact {\n  background-color: var(--lighterGreen);\n}\n.contact__content {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  row-gap: 2rem;\n}\n@media (min-width: 700px) {\n  .contact__content {\n    position: relative;\n    grid-template-columns: 1fr 1fr;\n    column-gap: 4rem;\n    row-gap: 0;\n    align-items: center;\n  }\n}\n.contact__form {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-columns: repeat(4 1fr);\n  grid-column: auto;\n  margin-bottom: 1rem;\n}\n.contact input,\n.contact textarea {\n  width: 100%;\n  background-color: var(--grayish);\n  border: none;\n}\n.contact input {\n  padding: 1rem;\n  margin-bottom: 0.5rem;\n}\n.contact__desc {\n  margin-bottom: 2rem;\n}\n.contact__info {\n  display: flex;\n  column-gap: 2rem;\n  margin-bottom: 1rem;\n}\n.contact__svg {\n  color: var(--green);\n}\n.contact__label {\n  margin-bottom: 0;\n  font-size: 1rem;\n}\n.contact__socials {\n  display: flex;\n  column-gap: 2rem;\n  align-items: center;\n  justify-items: center;\n}\n@media (min-width: 700px) {\n  .contact__socials {\n    position: absolute;\n    flex-direction: column;\n    row-gap: 5vh;\n    top: 20%;\n    left: -8%;\n  }\n}\n.contact__follow {\n  font-size: 0.8rem;\n  margin-bottom: 0;\n}\n@media (min-width: 700px) {\n  .contact__follow {\n    transform: rotate(90deg);\n  }\n}\n.contact__handles {\n  text-align: center;\n}\n.contact__handles svg {\n  margin-right: 1rem;\n}\n@media (min-width: 700px) {\n  .contact__handles {\n    display: flex;\n    flex-direction: column;\n    row-gap: 0.5rem;\n    text-align: none;\n  }\n  .contact__handles svg {\n    margin-right: 0;\n  }\n}","a {\r\n  display: inline-block;\r\n  padding: 0.5rem 1.2rem;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  text-align: center;\r\n\r\n  // &:hover {\r\n  //   transition: all 200ms ease-out;\r\n  // }\r\n\r\n  &.green {\r\n    background-color: var(--green);\r\n    color: var(--white);\r\n  }\r\n\r\n  &.transparent {\r\n    background-color: transparent;\r\n    color: var(--green);\r\n    border: 1px solid var(--green);\r\n  }\r\n\r\n  &.center {\r\n    text-align: center;\r\n    // margin-inline: auto;\r\n  }\r\n\r\n  &.full {\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n\r\n  // &.transition {\r\n\r\n  // }\r\n}","@use '../util' as u;\r\n\r\nhtml{\r\n  font-size: 100%;\r\n  box-sizing: border-box;\r\n}\r\n\r\n*, *::before, *::after{\r\n  box-sizing: inherit;\r\n}\r\n\r\n.body {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: u.$font;\r\n  background-color: var(--white);\r\n\r\n  &__container {\r\n    margin-inline: 1rem;\r\n  }\r\n}\r\n\r\nimg {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n\r\nul{\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.svg {\r\n  color: var(--green);\r\n  margin-bottom: 1rem;\r\n  cursor: pointer;\r\n}","@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');\r\n\r\n$font : \"Inter\", sans-serif;","@use '../util' as u;\r\n\r\nh1, h2, h3{\r\n  font-weight: 700;\r\n  line-height: 1.1;\r\n  margin-top: 0;\r\n  color: var(--black);\r\n}\r\n\r\nh2 {\r\n  margin-left: 0;\r\n  margin-bottom: 5rem;\r\n\r\n  @include u.breakpoint(medium) {\r\n    margin-left: 5rem;\r\n    text-align: left;\r\n  }\r\n}\r\n\r\np{\r\n  margin-top: 0;\r\n  font-weight: 300;\r\n  line-height: 1.5;\r\n  color: var(--dark);\r\n}\r\n\r\na, a:visited, a:active{\r\n  text-decoration: none;\r\n}\r\n","// 700px, 900px, 1920px;\r\n$breakpoints-up: (\r\n  \"medium\": 700px,\r\n  \"large\": 900px,\r\n  \"xlarge\": 1920px,\r\n);\r\n\r\n@mixin breakpoint($size) {\r\n  @media (min-width: map-get($breakpoints-up, $size)) {\r\n    @content;\r\n  }\r\n}\r\n","@use '../util' as u;\r\n\r\n.section {\r\n  padding-block: 5rem;\r\n\r\n  &__full-width {\r\n    width: 100%;\r\n  }\r\n\r\n  &__container {\r\n    max-width: 1200px;\r\n    margin-inline: auto;\r\n  }\r\n\r\n  &__bleedarea {\r\n    margin-inline: 1rem;\r\n  }\r\n  \r\n}\r\n","@use '../util' as b;\r\n\r\n.header {\r\n  &__nav {\r\n    display: none;\r\n  }\r\n\r\n  &__mobile {\r\n    width: 28px;\r\n    height: 28px;\r\n    background-color: black;\r\n    margin-top: 0.5rem;\r\n    cursor: pointer;\r\n  }\r\n\r\n  &__container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: end;\r\n    margin-right: 0.5rem;\r\n\r\n    @include b.breakpoint(medium) {\r\n      justify-content: center;\r\n    }\r\n  }\r\n\r\n  // &__hamburger {\r\n  //   width: 30px;\r\n  //   height: 2px;\r\n  //   background-color: black;\r\n  //   cursor: pointer;\r\n  //   transform:translateY(12px);\r\n  // }\r\n\r\n  // &__hamburger::before {\r\n  //   display: block;\r\n  //   content: \"\";\r\n  //   // width: 28px;\r\n  //   height: 2px;\r\n  //   background-color: black;\r\n  //   transform: translateY(-12px);\r\n  // }\r\n\r\n  // &__hamburger::after {\r\n  //   display: block;\r\n  //   content: \"\";\r\n  //   height: 2px;\r\n  //   background-color: black;\r\n  //   transform: translateY(12px);\r\n  // }\r\n\r\n  &__links{\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: 20px;\r\n    text-align: center;\r\n\r\n    @include b.breakpoint(medium) {\r\n      flex-direction: row;\r\n      column-gap: 20px;\r\n    }\r\n  }\r\n\r\n  @include b.breakpoint(medium) {\r\n    &__nav {\r\n      display: block;\r\n    }\r\n    &__mobile {\r\n      display: none;\r\n    }\r\n  }\r\n\r\n}","@use '../util' as u;\r\n\r\n.hero {\r\n\r\n  &__content {\r\n    display: flex;\r\n    flex-direction: column-reverse;\r\n    row-gap: 2rem;\r\n    align-items: center;\r\n    margin-top: 5rem;\r\n  }\r\n\r\n    &__left {\r\n    flex: 2;\r\n    }\r\n\r\n    &__text {\r\n      text-align: center;\r\n      font-size: 21px;\r\n      font-weight: 300;\r\n    }\r\n  \r\n\r\n  &__greeting{\r\n    font-weight: 300;\r\n    font-size: 21px;\r\n    margin-bottom: 0;\r\n  }\r\n\r\n  &__post {\r\n    font-weight: 700;\r\n    font-size: 28px;\r\n    line-height: 1.1;\r\n  }\r\n\r\n  &__sub-desc {\r\n    display: block;\r\n    font-size: 21px;\r\n    font-weight: 300;\r\n  }\r\n\r\n  &__socials {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr;\r\n    text-align: center;\r\n    margin-top: 2rem;\r\n    \r\n    \r\n    @include u.breakpoint(medium) {\r\n      grid-template-columns: 1fr 1fr 1fr;\r\n    }\r\n  }\r\n\r\n  &__subtitle {\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  @include u.breakpoint(medium) {\r\n\r\n    &__content {\r\n      flex-direction: row;\r\n      justify-items: center;\r\n      row-gap: none;\r\n    }\r\n\r\n    &__text,\r\n    &__socials {\r\n      text-align: left;\r\n    }\r\n\r\n    &__socials {\r\n      display: flex;\r\n      justify-content: left;\r\n    }\r\n\r\n    &__social {\r\n      border-right: 1px solid var(--dark);\r\n      padding-right: 1rem;\r\n      padding-left: 1rem;\r\n    }\r\n\r\n    &__social:first-child {\r\n      padding-left: 0;\r\n    }\r\n  }\r\n  \r\n}","@use '../util' as b;\r\n\r\n.personal {\r\n\r\n  background-color: var(--lightGray);\r\n\r\n  &__content {\r\n    @include b.breakpoint(medium) {\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      column-gap: 3rem;\r\n    }\r\n  }\r\n\r\n\r\n  &__img {\r\n    display: none;\r\n\r\n    @include b.breakpoint(medium) {\r\n      display: flex;\r\n    }\r\n  } \r\n\r\n  &__faq{\r\n    flex: 1;\r\n    \r\n  }\r\n\r\n  &__info {\r\n    color: var(--green);\r\n    font-size: 1.25rem;\r\n  }\r\n\r\n  &__title {\r\n    font-size: 1.125rem;\r\n  }\r\n\r\n  // &__body-text{}\r\n  // &__description{}\r\n  &__summary{\r\n\r\n    @include b.breakpoint(medium) {\r\n      display: grid;\r\n      grid-template-columns: 1fr 1fr;\r\n    }\r\n  }\r\n  &__full-desc{\r\n    display: flex;\r\n    column-gap: 0.5rem;\r\n  }\r\n\r\n  &__label{\r\n    font-weight: 700;\r\n  }\r\n}","@use '../util' as u;\r\n\r\n.resume {\r\n  \r\n  background-color: var(--white);\r\n  text-align: center;\r\n  \r\n\r\n  &__main-content {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr;\r\n    \r\n\r\n\r\n    @include u.breakpoint(medium) {\r\n      grid-template-columns: 1fr 1fr;\r\n      grid-template-rows: 1fr 1fr 1fr;\r\n      text-align: left;\r\n      \r\n    }\r\n  }\r\n\r\n  &__content {\r\n    padding-top: 2rem;\r\n    padding-left: 1rem;\r\n    \r\n    @include u.breakpoint(medium) {\r\n      border-left: 0.2rem solid var(--green);\r\n    }\r\n\r\n  }\r\n}","@use '../util' as b;\r\n\r\n\r\n\r\n.services {\r\n\r\n  background-color: var(--lighterGreen);\r\n\r\n  text-align: center;\r\n  padding-top: 2rem;\r\n\r\n  @include b.breakpoint(medium) {\r\n    text-align: left;\r\n  }\r\n\r\n  &__content {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr;\r\n    row-gap: 2rem;\r\n    \r\n\r\n    @include b.breakpoint(medium) {\r\n      text-align: left;\r\n      grid-template-columns: 1fr 1fr 1fr;\r\n      grid-template-rows: 1fr 1fr;\r\n      column-gap: 2.5rem;\r\n    }\r\n  }\r\n\r\n  &__task {\r\n    background-color: var(--white);\r\n    border-radius: 10px;\r\n    box-shadow: inset 0px -1px 3px var(--gray);\r\n    padding: 1.5rem 2rem;\r\n  }\r\n}","@use '../util' as b;\r\n.portfolio {\r\n\r\n  &__contents {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr;\r\n    text-align: center;\r\n    overflow: hidden;\r\n\r\n    p {\r\n      font-weight: 600;\r\n    }\r\n\r\n    \r\n\r\n    @include b.breakpoint(medium) {\r\n      grid-template-columns: 1fr 1fr 1fr;\r\n      gap: 1.5rem;\r\n    }\r\n  }\r\n\r\n\r\n}","@use '../util' as b;\r\n\r\n.plan {\r\n  background-color: var(--lighterGreen);\r\n  text-align: center;\r\n\r\n  &__contents {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr;\r\n    align-items: center;\r\n  }\r\n\r\n  &__pricing {\r\n    padding-top: 1rem;\r\n    padding-bottom: 1rem;\r\n  }\r\n\r\n  &__subhead {\r\n    margin-bottom: 2rem;\r\n  }\r\n\r\n  &__svg {\r\n    color: var(--green);\r\n    margin-bottom: 1rem;\r\n  }\r\n\r\n  &__title, &__price {\r\n    margin-bottom: 0.2rem;\r\n  }\r\n\r\n\r\n  &__title {\r\n    font-size: 1.3rem;\r\n  }\r\n\r\n  &__option {\r\n    font-weight: 200;\r\n    margin-bottom: 1rem;\r\n  }\r\n\r\n\r\n  @include b.breakpoint(medium) {\r\n    &__heading {\r\n      text-align: left;\r\n    }\r\n\r\n    &__contents {\r\n      grid-template-columns: 1fr 1fr 1fr;\r\n    }\r\n    \r\n  }\r\n}","@use '../util' as b;\r\n.testimonials {\r\n\r\n  \r\n  &__user {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    column-gap: 1rem;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-bottom: 1rem;\r\n\r\n    @include b.breakpoint(medium) {\r\n      margin-bottom: 2rem;\r\n    }\r\n  }\r\n\r\n  &__img {\r\n    border-radius: 50%;\r\n    width: 25%;\r\n  }\r\n\r\n  &__sub-heading{\r\n    flex: 2;\r\n  }\r\n\r\n  &__contents {\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: 5rem;\r\n\r\n\r\n    @include b.breakpoint(medium) {\r\n      flex-direction: row;\r\n      row-gap: 0;\r\n      column-gap: 5rem;\r\n    }\r\n  }\r\n\r\n  &__name {\r\n    margin-bottom: 0;\r\n  }\r\n\r\n  &__svg{\r\n    color: var(--green);\r\n  }\r\n\r\n  \r\n}","@use '../util' as b;\r\n\r\n.teams {\r\n\r\n  background-color: var(--lighterGreen);\r\n\r\n  &__contents {\r\n      display: grid;\r\n      grid-template-columns: 1fr;\r\n      grid-template-rows: 1fr;\r\n      row-gap: 2rem;\r\n    \r\n      @include b.breakpoint(medium) {\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n        column-gap: 2rem;\r\n        row-gap: 0;\r\n      }\r\n  }\r\n\r\n  &__content{\r\n    // grid-auto-columns: auto;\r\n    // grid-auto-rows: auto;\r\n  }\r\n\r\n  &__img {\r\n    border: 1px solid yellow;\r\n    border-radius: 20px;\r\n    margin-bottom: 1rem;\r\n  }\r\n\r\n  &__desc {\r\n    text-align: center;\r\n  }\r\n\r\n  &__name {\r\n    margin-bottom: 0;\r\n  }\r\n}","@use '../util' as b;\r\n\r\n.blog {\r\n\r\n \r\n\r\n  &__posts {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr;\r\n    row-gap: 2rem;\r\n\r\n\r\n    @include b.breakpoint(medium) {\r\n      grid-template-columns: 1fr 1fr 1fr;\r\n      column-gap: 2rem;\r\n      row-gap: 0;\r\n    }\r\n  }\r\n\r\n  &__img {\r\n    margin-bottom: 0.5rem;\r\n  }\r\n\r\n  &__content {\r\n    margin-bottom: 1rem;\r\n  }\r\n\r\n  &__topic {\r\n    margin-bottom: 0.5rem;\r\n  }\r\n\r\n  &__all-blogs {\r\n    text-align: center;\r\n    margin-top: 2rem;\r\n  }\r\n}","@use '../util' as u;\r\n\r\n.contact {\r\n\r\n  background-color: var(--lighterGreen);\r\n  &__content {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr;\r\n    row-gap: 2rem;\r\n    // margin-left: 5rem;\r\n\r\n\r\n    @include u.breakpoint(medium) {\r\n      position: relative;\r\n      grid-template-columns: 1fr 1fr;\r\n      column-gap: 4rem;\r\n      row-gap: 0;\r\n      align-items: center;\r\n    }\r\n\r\n  }\r\n\r\n  &__form {\r\n    position: relative;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-columns: repeat(4 1fr);\r\n    grid-column: auto;\r\n    \r\n    margin-bottom: 1rem;\r\n  }\r\n\r\n  input,\r\n  textarea {\r\n    width: 100%;\r\n    background-color: var(--grayish);\r\n    border: none;\r\n  }\r\n\r\n  input {\r\n    padding: 1rem;\r\n    margin-bottom: 0.5rem;\r\n  }\r\n\r\n  &__desc {\r\n    margin-bottom: 2rem;\r\n  }\r\n\r\n  &__info {\r\n    display: flex;\r\n    column-gap: 2rem;\r\n    margin-bottom: 1rem;\r\n  }\r\n\r\n  &__svg {\r\n    color: var(--green);\r\n  }\r\n\r\n  &__label {\r\n    margin-bottom: 0;\r\n    font-size: 1rem;\r\n  }\r\n\r\n  &__socials {\r\n    display: flex;\r\n    column-gap: 2rem;\r\n    align-items: center;\r\n    justify-items: center;\r\n    \r\n    @include u.breakpoint(medium) {\r\n      position: absolute;\r\n        flex-direction: column;\r\n        row-gap: 5vh;\r\n      top: 20%;\r\n      left: -8%;\r\n    }\r\n  }\r\n\r\n  &__follow {\r\n    \r\n    font-size: 0.8rem;\r\n    margin-bottom: 0;\r\n    \r\n    @include u.breakpoint(medium) {\r\n      transform: rotate(90deg);\r\n\r\n    }\r\n  }\r\n\r\n  &__handles {\r\n    text-align: center;\r\n    svg {\r\n      margin-right: 1rem;\r\n    }\r\n    //   cursor: pointer;\r\n    \r\n    @include u.breakpoint(medium) {\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: 0.5rem;\r\n    text-align: none;\r\n      svg {\r\n        margin-right: 0;\r\n      }\r\n    }\r\n  }\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/test-2.jpg":
/*!*******************************!*\
  !*** ./src/assets/test-2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "test-2.jpg";

/***/ }),

/***/ "./src/generate.joke.js":
/*!******************************!*\
  !*** ./src/generate.joke.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function generateJoke() {
  return "I don't trust stairs. They're always up to something.";
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateJoke);

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generate_joke__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate.joke */ "./src/generate.joke.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _assets_test_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/test-2.jpg */ "./src/assets/test-2.jpg");



var testImage = document.getElementById('test-img');
testImage.src = _assets_test_2_jpg__WEBPACK_IMPORTED_MODULE_2__;
console.log((0,_generate_joke__WEBPACK_IMPORTED_MODULE_0__["default"])());
})();

/******/ })()
;
//# sourceMappingURL=bundle0a7048e23d2a21260d54.js.map