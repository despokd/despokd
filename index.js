const thisYear = new Date().getFullYear();
const startTimeOfThisYear = new Date(
  `${thisYear}-01-01T00:00:00+00:00`
).getTime();
const endTimeOfThisYear = new Date(
  `${thisYear}-12-31T23:59:59+00:00`
).getTime();
const progressOfThisYear =
  (Date.now() - startTimeOfThisYear) /
  (endTimeOfThisYear - startTimeOfThisYear);
const progressBarOfThisYear = generateProgressBar();

function generateProgressBar() {
  const progressBarCapacity = 30;
  const passedProgressBarIndex = parseInt(
    progressOfThisYear * progressBarCapacity
  );
  const progressBar = Array(progressBarCapacity)
    .fill("▁")
    .map((value, index) => (index < passedProgressBarIndex ? "█" : value))
    .join("");
  return `{ ${progressBar} }`;
}

const readme = `\
# <p align="center"> Hi, I'm Kilian <img src="https://github.com/TheDudeThatCode/TheDudeThatCode/blob/master/Assets/wave.gif" width="29px"></p>
<p align="center">CV & Skills on <a href="https://kdomaratius.de">kdomaratius.de</a></p>
<p align="center">Personal interests, code snippets and more on <a href="https://tequilian.de">tequilian.de</a></p>

### About Me
- 🏦 I have recently completed my training as an IT specialist and created websites and web modules in a small company in Dresden, Germany.
      <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="30">

- 🔭 I’m currently working on my [Portfolio](https://github.com/despokd/portfolio)  
- 📝 I post code snippets on [tequilian.de](https://tequilian.de/snippets/)
- 🌱 I’m currently learning  Svelte.js and Docker 
- ❓ Ask me about anything related to Elementor (WordPress)  
- 😄 Pronouns: he / his  

---

### Coding stats

<!--START_SECTION:waka-->

<!--END_SECTION:waka-->

⏳ **Year Progress** ${progressBarOfThisYear} ${(
  progressOfThisYear * 100
).toFixed(2)} % as on ⏰ ${
  new Date().getDate() +
  "-" +
  (new Date().getMonth() + 1) +
  "-" +
  new Date().getFullYear() +
  "."
}

---

## Recent Blog Posts  
<!-- BLOG-POST-LIST:START -->
- [Portfolio / kdomaratius.de](https://tequilian.de/projekte/portfolio-kdomaratius-de/)
- [Contact reader](https://tequilian.de/projekte/web-contact-reader/)
- [Fix: SVG not shown in Firefox (Elementor)](https://tequilian.de/snippets/fix-svg-not-shown-in-firefox-elementor/)
- [Add dark mode based on system preferences in Vuetify](https://tequilian.de/snippets/add-dark-mode-based-on-system-preferences-in-vuetify/)
- [PrestaShop: More characters for article names](https://tequilian.de/snippets/prestashop-more-characters-for-article-name/)
<!-- BLOG-POST-LIST:END -->  

`;
console.log(readme);
