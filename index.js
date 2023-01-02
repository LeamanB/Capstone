import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");
var calendar;

function render(state) {
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

      // const requestData = {
      //   Date: new Date(inputList.start.value).toJSON(),
      //   Countries: inputList.Countries.value
      // };

      // axios
      //   .post(`${process.env.API_URL}/home`, requestData)
      //   .then(response => {
      //     // Push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
      //     store.Home.userCalender.push(response.data);
      //     router.navigate("/home");
      //   })
      //   .catch(error => {
      //     console.log("It puked", error);
      //   });
      console.log(inputList.start.value);
      const [year, month, day] = inputList.start.value.split("-");
      console.log(start);
      axios
        .get(
          `https://calendarific.com/api/v2/holidays?api_key=${process.env.CALENDARIFIC_API_KEY}&country=${inputList.Countries.value}&year=${year}&month=${month}&day=${day}`
        )
        .then(response => {
          console.log("response", response.data);
          store.Home.holidays = response.data.response.holidays;
          router.navigate("/home");
        })
        .catch(err => console.log(err));
    });
  }
}

router.hooks({
  before: (done, params) => {
    let page = "Home";
    let id = "";

    if (params && params.data) {
      page = params.data.page ? capitalize(params.data.page) : "Home";
      id = params.data.id ? params.data.id : "";
    }

    // if (page === "Home") {
    //   axios
    //     .get(
    //       `https://calendarific.com/api/v2/holidays?api_key=${
    //         process.env.CALENDARIFIC_API_KEY
    //       }&country=${country}&year=${start.getFullYear()}&month=${start.getMonth()}&day=${start.getDay()}`
    //     )
    //     .then(response => {
    //       store.Home.userCalender = {};

    //       done();
    //     })
    //     .catch(err => console.log(err));
    done();
    // }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});

// Puerto Rico: pr
// Sweden: se
// Japan: jp

router
  .on({
    "/": () => render(store.Home),
    ":page/:id": params => {
      let page = capitalize(params.data.page);
      render(store[page]);
    },
    ":page": params => {
      let page = capitalize(params.data.page);
      render(store[page]);
    }
  })
  .resolve();
