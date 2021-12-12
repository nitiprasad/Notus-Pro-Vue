<template>
  <div class="research-publications-container">
    <div class="research-publications-hero">
      <div class="research-publications-fixed-header">
        <app-header rootClassName="rootClassName"></app-header>
      </div>
      <img
        alt="image"
        src="/playground_assets/img_0256_%5B1%5D-600h.jpeg"
        class="research-publications-image"
      />
      <h1 class="research-publications-text text2XL">
        Research &amp; Publications
      </h1>
      <div class="research-publications-bg"></div>
    </div>
    <div class="research-publications-post-details">
      <div class="research-publications-container1">
        <svg
          viewBox="0 0 1170.2857142857142 1024"
          class="research-publications-icon"
        >
          <path
            d="M585.143 292.571h-219.429v219.429h219.429v-219.429zM658.286 658.286v73.143h-365.714v-73.143h365.714zM658.286 219.429v365.714h-365.714v-365.714h365.714zM1024 658.286v73.143h-292.571v-73.143h292.571zM1024 512v73.143h-292.571v-73.143h292.571zM1024 365.714v73.143h-292.571v-73.143h292.571zM1024 219.429v73.143h-292.571v-73.143h292.571zM146.286 768v-548.571h-73.143v548.571c0 20 16.571 36.571 36.571 36.571s36.571-16.571 36.571-36.571zM1097.143 768v-621.714h-877.714v621.714c0 12.571-2.286 25.143-6.286 36.571h847.429c20 0 36.571-16.571 36.571-36.571zM1170.286 73.143v694.857c0 60.571-49.143 109.714-109.714 109.714h-950.857c-60.571 0-109.714-49.143-109.714-109.714v-621.714h146.286v-73.143h1024z"
          ></path>
        </svg>
      </div>
      <span class="research-publications-text01 textXL">posted 18 Sept 2021</span>
      <span class="research-publications-text02">
        <span class="research-publications-text03">
          &apos;Started from the bottom now we here&apos;
        </span>
        <span class="research-publications-text04">
          -
          <span v-html="rawsnn1"></span>
        </span>
        <span class="research-publications-text05">Mark Jonson</span>
        <br />
      </span>
      <span class="research-publications-text06">
        <span class="research-publications-text07">
          As a result of growing emeraldhouse gas emissions, climate models
          predict that our planet will get significantly warmer, that ecosystems
          will be changed or destroyed, and that enormous human and economic costs
          will be incurred. These scenarios arenât guaranteed, but avoiding them
          will be very hard. Weâre trying to take small steps to mitigate our
          impact.
        </span>
        <br />
      </span>
    </div>
    <div class="research-publications-container2"></div>
    <div class="research-publications-posts">
      <a
        href="https://sites.google.com/view/icacontent/home"
        target="_blank"
        rel="noreferrer noopener"
        class="research-publications-link button"
      >
        Click here for Internal Research site
      </a>
      <div class="research-publications-container3">
        <app-label text="STORIES"></app-label>
        <h3 class="research-publications-text08 healine">
          <span class="research-publications-text09">Quote</span>
        </h3>
        <span class="research-publications-text10 textXL">
          something related to agroecology
          <span v-html="rawzoj5"></span>
        </span>
      </div>
      <article-card
        avatar_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
      ></article-card>
      <article-card
        avatar_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
      ></article-card>
      <article-card
        avatar_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
      ></article-card>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import AppLabel from '../components/label'
import ArticleCard from '../components/article-card'
import AppFooter from '../components/footer'

export default {
  name: 'ResearchPublications',
  components: {
    AppHeader,
    AppLabel,
    ArticleCard,
    AppFooter,
  },

  data() {
    return {
      rawsnn1: ' ',
      rawzoj5: ' ',
    }
  },

  metaInfo: {
    title: 'Research & Publications - Notus Pro',
    meta: [
      {
        property: 'og:title',
        content: 'Research & Publications - Notus Pro',
      },
    ],
  },
}
</script>

<style scoped>
.research-publications-container {
  width: 100%;
  height: auto;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.research-publications-hero {
  width: 100%;
  height: 558px;
  display: flex;
  min-height: 75vh;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  justify-content: flex-start;
  background-image: url("/playground_assets/whatsapp%20image%202021-10-29%20at%209.54.38%20am-1500w.jpeg");
}
.research-publications-fixed-header {
  width: 100%;
  display: flex;
  z-index: 200;
  position: fixed;
  box-shadow: 0px 0px 20px 0px rgba(17, 18, 38, 0.15);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--dl-color-secondary-300);
}
.research-publications-image {
  width: 100px;
  object-fit: cover;
}
.research-publications-text {
  top: 0px;
  left: 276px;
  color: var(--dl-color-gray-white);
  right: auto;
  bottom: 0px;
  margin: auto;
  z-index: 100;
  text-align: center;
}
.research-publications-bg {
  top: 77px;
  left: -2px;
  width: 100%;
  height: 629px;
  display: flex;
  opacity: 0.4;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--dl-color-gray-black);
}
.research-publications-post-details {
  flex: 0 0 auto;
  width: 95%;
  display: flex;
  position: relative;
  max-width: 1320px;
  box-shadow: 0px 10px 15px -10px #626262;
  margin-top: -100px;
  padding-left: var(--dl-space-space-tripleunit);
  border-radius: var(--dl-radius-radius-radius75);
  padding-right: var(--dl-space-space-tripleunit);
  flex-direction: column;
  background-color: var(--dl-color-secondary-300);
}
.research-publications-container1 {
  top: -2rem;
  flex: 0 0 auto;
  left: auto;
  right: auto;
  width: 4rem;
  bottom: auto;
  height: 4rem;
  display: flex;
  position: absolute;
  align-self: center;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-pimary-500);
}
.research-publications-icon {
  fill: var(--dl-color-gray-white);
  width: 24px;
  height: 24px;
}
.research-publications-text01 {
  color: var(--dl-color-gray-white);
  align-self: center;
  margin-top: var(--dl-space-space-tripleunit);
}
.research-publications-text02 {
  color: #94a3b8ff;
  align-self: center;
}
.research-publications-text03 {
  white-space: normal;
}
.research-publications-text04 {
  white-space: normal;
}
.research-publications-text05 {
  font-style: italic;
}
.research-publications-text06 {
  color: var(--dl-color-gray-white);
  font-size: 1rem;
  font-style: normal;
  text-align: center;
  font-weight: 300;
  padding-top: var(--dl-space-space-tripleunit);
  padding-bottom: var(--dl-space-space-tripleunit);
}
.research-publications-text07 {
  text-align: center;
}
.research-publications-container2 {
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}
.research-publications-posts {
  display: flex;
  max-width: 1320px;
  align-items: center;
  margin-bottom: var(--dl-space-space-tripleunit);
  flex-direction: column;
}
.research-publications-link {
  color: #ffffff;
  width: 321px;
  align-self: center;
  text-align: center;
  transition: 0.3s;
  font-family: Poppins;
  text-transform: uppercase;
  text-decoration: none;
  background-color: #2b9a89;
}

.research-publications-container3 {
  width: 66%;
  display: flex;
  max-width: 1320px;
  margin-top: var(--dl-space-space-fiveunits);
  align-items: center;
  padding-left: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-tripleunit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: column;
}
.research-publications-text08 {
  color: var(--dl-color-secondary-400);
}
.research-publications-text09 {
  font-weight: 700;
  white-space: normal;
  background-color: rgb(255, 255, 255);
}
.research-publications-text10 {
  color: var(--dl-color-secondary-500);
  text-align: center;
  margin-bottom: var(--dl-space-space-unitandhalf);
}
@media(max-width: 991px) {
  .research-publications-text {
    padding-left: var(--dl-space-space-tripleunit);
    padding-right: var(--dl-space-space-tripleunit);
  }
  .research-publications-container3 {
    width: 100%;
    padding-left: var(--dl-space-space-tripleunit);
    padding-right: var(--dl-space-space-tripleunit);
  }
}
@media(max-width: 767px) {
  .research-publications-text02 {
    text-align: center;
  }
  .research-publications-container3 {
    width: 100%;
  }
}
@media(max-width: 479px) {
  .research-publications-text02 {
    text-align: center;
  }
  .research-publications-container2 {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
