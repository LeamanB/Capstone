import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";

const router = new Navigo("/");

async function afterRender(state) {
  if (state.view === "About") {
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(store.Links)}
  ${Main(state)}
  ${Footer()}
  `;
  router.updatePageLinks();
}
function afterRender() {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
}



router.hooks({
  before: (done, params) => {
    const view = params && params.data && params.data.view
      ? capitalize(params.data.view)
      : "Home"; // Add a switch case statement to handle multiple routes
      switch (view) {
        case "Home":
    axios.get('https://holidays.abstractapi.com/v1/?api_key=4038832f283143ebb69fc81911aaea82&country=US&year=2020&month=12&day=25')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
});
break;
default:
  done();
}}});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();
