import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = new Navigo("/");
var calendar;

function render(state = store.Home) {
  console.log("state", state);
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(store.Links)}
  ${Main(state)}
  ${Footer()}
  `;

  // afterRender(state);

  router.updatePageLinks();
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
}

function addEventListeners(st) {
  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );

  if (st.view === "Schedule") {
    document.querySelector("form").addEventListener("submit", event => {
      alert("Hi");
      const inputList = event.target.elements;
      const start = new Date(inputList.start.value);
      const country = inputList.Countries.value;

      axios
        .get(
          `https://calendarific.com/api/v2/holidays?api_key=${
            process.env.CALENDARIFIC_API_KEY
          }&country=${country}&year=${start.getFullYear()}&month=${start.getMonth()}&day=${start.getDay()}`
        )
        .then(response => {

        let (store.Home) = response.data;
        console.log(`${store.Home}`)
        })
        .catch(error => {
          console.log(error);
        });

      // Puerto Rico: pr
      // Sweden: se
      // Japan: jp

      // event.preventDefault();

      // axios
      //   .post(`${process.env.API_URL}/appointments`, requestData)
      //   .then(response => {
      //     // Push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
      //     store.Appointments.appointments.push(response.data);
      //     router.navigate("/appointments");
      //   })
      //   .catch(error => {
      //     console.log("It puked", error);
      //   });
    });
  }
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
