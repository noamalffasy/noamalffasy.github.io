const Pageres = require("pageres");
const path = require("path");

async function screenshotTask() {
  const sites = [
    { name: "demacia", url: "https://demacia5635.github.io/" },
    { name: "school", url: "https://noamalffasy.github.io/SchoolWebsite/" },
    { name: "oyah", url: "https://oyah-200816.appspot.com" },
    { name: "hebrew-game", url: "https://noamalffasy.github.io/HebrewWork/" },
    { name: "elmix", url: "https://elmix-website.herokuapp.com/" },
  ];

  for (const site of sites) {
    await new Pageres({
      filename: `${site.name}-<%= width %>`,
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
        "1920x1080",
      ])
      .dest(path.resolve(__dirname, "public", "img", "screenshots"))
      .run();
  }
}

exports.default = screenshotTask;
