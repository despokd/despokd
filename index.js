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
<p align="center">Work related stuff on <a href="https://gitlab.com/kdomaratius">Gitlab @kdomaratius</a></p>


### About Me
- 🏦 I completed my training as an IT specialist and create e-commerce / cms websites in Germany.
      <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="30">

- 🔭 I’m currently working on my private website [tequilian.de](https://github.com/despokd/tequilian)  
- 🌱 I’m currently learning Docker + Symfony
- ❓ Ask me about anything related to Shopware 6 Frontend
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

`;
console.log(readme);
