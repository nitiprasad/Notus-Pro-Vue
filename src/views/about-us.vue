<template>
  <div class="about-us-container">
    <div class="about-us-image">
      <app-header></app-header>
      <img
        alt="image"
        src="/playground_assets/gray-vector.svg"
        class="about-us-image1"
      />
      <div class="about-us-bg"></div>
    </div>
    <div class="about-us-container1">
      <div class="about-us-container2">
        <div class="about-us-container3">
          <app-counter></app-counter>
          <app-counter type="Photos" number="10"></app-counter>
          <app-counter type="Comments" number="89"></app-counter>
        </div>
        <img
          alt="image"
          src="/playground_assets/international%20center%20of%20agroecology%20logo%20%5B2500%20x%201500%20px%5D-200h.jpeg"
          loading="eager"
          class="about-us-image2"
        />
        <div class="about-us-container4">
          <div class="about-us-container5">
            <primary-button button="connect"></primary-button>
          </div>
          <secondary-button button="message"></secondary-button>
        </div>
      </div>
      <div class="about-us-container6">
        <h3 class="about-us-text text2XL">
          International Center for Agroecology
        </h3>
        <div class="about-us-container7">
          <svg viewBox="0 0 1024 1024" class="about-us-icon">
            <path
              d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"
            ></path>
          </svg>
          <span class="about-us-text1 textSM">Old Bridge, New Jersey, USA</span>
        </div>
        <div class="about-us-container8"></div>
        <span class="about-us-text2">
          <span class="about-us-text3">Description here with story and goal</span>
        </span>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import AppCounter from '../components/counter'
import PrimaryButton from '../components/primary-button'
import SecondaryButton from '../components/secondary-button'
import AppFooter from '../components/footer'

export default {
  name: 'AboutUs',
  components: {
    AppHeader,
    AppCounter,
    PrimaryButton,
    SecondaryButton,
    AppFooter,
  },
  metaInfo: {
    title: 'About Us - Notus Pro',
    meta: [
      {
        property: 'og:title',
        content: 'About Us - Notus Pro',
      },
    ],
  },
}
</script>

<style scoped>
.about-us-container {
  width: 100%;
  height: auto;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #f2f5f9ff;
}
.about-us-image {
  flex: 0 0 auto;
  width: 100%;
  height: 500px;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-image: url("/playground_assets/img_0256_%5B1%5D-1500w.jpeg");
}
.about-us-image1 {
  left: auto;
  right: auto;
  width: 100%;
  bottom: -1px;
  z-index: 100;
  position: absolute;
  object-fit: cover;
}
.about-us-bg {
  flex: 0 0 auto;
  right: -2px;
  width: 100%;
  bottom: -3px;
  height: 100%;
  display: flex;
  opacity: 0.5;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
  background-color: var(--dl-color-gray-black);
}
.about-us-container1 {
  flex: 0 0 auto;
  width: 90%;
  display: flex;
  z-index: 100;
  max-width: 1320px;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04);
  margin-top: -12rem;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-radius75);
  margin-bottom: var(--dl-space-space-tripleunit);
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.about-us-container2 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-unit);
  justify-content: space-around;
}
.about-us-container3 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.about-us-image2 {
  top: -67px;
  left: 462px;
  width: 150px;
  height: 146px;
  margin: auto;
  position: absolute;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
.about-us-container4 {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.about-us-container5 {
  display: flex;
  align-items: center;
  margin-right: var(--dl-space-space-unit);
  flex-direction: row;
  justify-content: center;
}
.about-us-container6 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-top: var(--dl-space-space-tripleunit);
  align-items: center;
  margin-bottom: var(--dl-space-space-tripleunit);
  flex-direction: column;
}
.about-us-text {
  color: var(--dl-color-secondary-300);
}
.about-us-container7 {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.about-us-icon {
  fill: var(--dl-color-secondary-500);
  width: 18px;
  height: 18px;
}
.about-us-text1 {
  color: var(--dl-color-secondary-500);
  font-weight: 600;
  margin-left: var(--dl-space-space-halfunit);
}
.about-us-container8 {
  flex: 0 0 auto;
  width: 90%;
  height: 0.5px;
  display: flex;
  opacity: 0.5;
  margin-top: var(--dl-space-space-doubleunit);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-doubleunit);
  flex-direction: column;
  background-color: var(--dl-color-gray-700);
}
.about-us-text2 {
  width: 75%;
  font-size: 1.125rem;
  text-align: center;
  font-weight: 300;
  line-height: 1.625;
  margin-bottom: var(--dl-space-space-unit);
}
.about-us-text3 {
  color: var(--dl-color-secondary-300);
}
@media(max-width: 991px) {
  .about-us-container2 {
    flex-direction: column;
  }
  .about-us-container3 {
    margin-top: var(--dl-space-space-doubleunit);
    margin-bottom: var(--dl-space-space-doubleunit);
  }
}
</style>
