
import mainHTML from "./atoms/default/server/templates/main.html!text";
import share from "./atoms/default/server/templates/share.html!text";
import dropdown from "./atoms/default/server/templates/dropdown.html!text";
import graphic1 from "./atoms/default/server/templates/graphic_1.html!text";
import rp from "request-promise";
import { writeFileSync } from "fs";
import Mustache from "mustache";

const partials = { share, dropdown, graphic1 };

export async function render() {
  const html = await rp(
    "https://interactive.guim.co.uk/docsdata-test/1c6XFRYUS4KoRmtLXb6rO-mpjaBLQvxqqCx-xh4KgAsw.json"
  );
  let htmlJson = JSON.parse(html);
  writeFileSync("./assets/copy.json", htmlJson);
  // writeFileSync('./assets/related.json', related)

  Object.keys(htmlJson).map((key) => {
    if (key.indexOf("copy") > -1) {
      htmlJson[key] = htmlJson[key].replace(/[\r\n]+/g, "\n").split("\n");
    }
  });

  // console.log(htmlJson)

  const copy = Mustache.render(mainHTML, htmlJson, partials);
  return copy;
}