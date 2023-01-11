import html from "html-literal";

export default state => html`
  <section id="music">
        <h1>Music</h1>
        <p>Look up music about
          ${console.log(state)}
${state.holidays.map(holiday => `<tr><td>${holiday.name}.</td></tr>`)}
      </p>
        <div>
          <h3>Songs</h3>
            <p>
      <iframe id="songPlayer" width="100%" height="1000vw" src="https://archive.org/details/etree?query=${checkHoliday(
        state.holidays
      )}" frameborder="0" allowfullscreen></iframe>
            </p>
          </div>
      </body>

  </section>
  `;

function checkHoliday(holidays) {
  if (holidays > [0]) {
    return holidays.map(holiday => `${holiday.name}`);
  } else {
    return `<tr><td>no holiday found</td></tr>`;
  }
}
