const path = require("path");

const gulp = require("gulp");
const Pageres = require("pageres");
const webp = require("gulp-webp");

async function screenshotSites() {
  const sites = [
    { name: "michal-or", url: "https://urstar.co.il/" },
    { name: "demacia", url: "https://demacia5635.github.io/" },
    { name: "school", url: "https://noamalffasy.github.io/SchoolWebsite/" },
    { name: "oyah", url: "https://oyah-200816.appspot.com" },
    { name: "hebrew-game", url: "https://noamalffasy.github.io/HebrewWork/" },
    { name: "elmix", url: "https://elmix-website.herokuapp.com/" },
  ];

  for (const site of sites) {
    await new Pageres({
      filename: `${site.name}-<%= width %>`,
      format: "jpg",
      crop: true,
      delay: 15,
      launchOptions: { args: ["--autoplay-policy=no-user-gesture-required"] },
    })
      .src(site.url, [
        "375x667",
        "640x565",
        "768x1024",
        "1024x768",
        "1280x720",
        "1536x864",
      ])
      .dest(path.resolve(__dirname, "public", "img", "screenshots"))
      .run();
  }
}

function convertToWebP() {
  return gulp
    .src("public/img/screenshots/*.jpg")
    .pipe(webp())
    .pipe(gulp.dest("public/img/screenshots"));
}

exports.screenshotSites = screenshotSites;
exports.convertToWebP = convertToWebP;
exports.default = gulp.series(screenshotSites, convertToWebP);
