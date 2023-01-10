import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(store.Links)}
  ${Main(state)}
  ${Footer()}
  `;

  router.updatePageLinks();

  afterRender(state);
}

function afterRender(state) {
  if (state.view === "Home") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;

      console.log(inputList.start.value);
      const [year, month, day] = inputList.start.value.split("-");
      axios
        .get(
          `https://calendarific.com/api/v2/holidays?api_key=${process.env.CALENDARIFIC_API_KEY}&country=${inputList.Countries.value}&year=${year}&month=${month}&day=${day}`
        )
        .then(response => {
          console.log("response", response.data);
          store.Home.holidays = response.data.response.holidays;
          store.History.holidays = response.data.response.holidays;
          store.Music.holidays = response.data.response.holidays;
          router.navigate("/Home");
        })
        .catch(err => console.log(err));
    });
  }
  if (state.view === "History") {
    let holidayWiki = store.Home.holidays;
    return console.log("This is History" + holidayWiki);
  }
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    switch (view) {
      case "Home":
        console.log(store.Home.holidays);
        done();
        break;
      case "History":
        console.log(store.Home.holidays.name);
        done();
        break;
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();
