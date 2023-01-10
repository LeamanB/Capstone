import html from "html-literal";
import { Links2 } from "../store";

export default () => html`
  <footer>
    <body>
      Listen, Learn, & Celebrate!
      <br>
      <br>
      <i>
        This API was provided by
        <a href="https://calendarific.com/">Calendarific</a>
      </i>

  </footer>
  <nav>
    <ul class="navLinks">
      ${Links2.map(
        link =>
          `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
      ).join("")}
    </ul>
  </nav>
  </body>


`;
