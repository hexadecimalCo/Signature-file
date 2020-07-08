const ghpages = require("gh-pages");

ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "https://github.com/hexadecimalCo/Signature-file",
  },
  (err) => {
    console.log("================");
    if (err) {
      console.log(err);
    } else {
      console.log("Deploy Complete!");
    }
    console.log("================");
  }
);
