import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  console.log("state", state);
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(store.Links)}
  ${Main(state)}
  ${Footer()}
  `;

  afterRender(state);

  router.updatePageLinks();
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  // document.querySelector(".fa-bars").addEventListener("click", () => {
  //   document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  // });
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home"; // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home":
        axios
          .get(
            `https://calendarific.com/api/v2/holidays?api_key=${process.env.CALENDARIFIC_API_KEY}&country=US&year=2019`
          )
          .then(response => {
            console.log(response.data.response.holidays);
            done();
          })
          .catch(error => {
            console.log(error);
          });
        break;
      default:
        done();
    }
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      console.log("view", view);
      render(store[view]);
    }
  })
  .resolve();
