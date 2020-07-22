
import mainHTML from "./atoms/default/server/templates/main.html!text";
import share from "./atoms/default/server/templates/share.html!text";
import dropdown from "./atoms/default/server/templates/dropdown.html!text";
import graphic1 from "./atoms/default/server/templates/graphic_1.html!text";
import graphic2 from "./atoms/default/server/templates/graphic_2.html!text";
import graphic3 from "./atoms/default/server/templates/graphic_3.html!text";
import graphic4 from "./atoms/default/server/templates/graphic_4.html!text";
import graphic5 from "./atoms/default/server/templates/graphic_5.html!text";
import graphic6 from "./atoms/default/server/templates/graphic_6.html!text";
import graphic7 from "./atoms/default/server/templates/graphic_7.html!text";
import graphic8 from "./atoms/default/server/templates/graphic_8.html!text";
import graphic9 from "./atoms/default/server/templates/graphic_9.html!text";
import graphic10 from "./atoms/default/server/templates/graphic_10.html!text";
import rp from "request-promise";
import { writeFileSync } from "fs";
import Mustache from "mustache";

const partials = { share, dropdown, graphic1, graphic2, graphic3, graphic4, graphic5, graphic6, graphic7, graphic8, graphic9, graphic10 };

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