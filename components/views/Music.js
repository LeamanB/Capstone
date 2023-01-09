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
      <iframe id="wiki" width="2000" height="1700" src="https://www.allmusic.com/search/all/${checkHoliday(
        state.holidays
      )}" frameborder="0" allowfullscreen></iframe>
      </div>
      </body>

  </section>
  `;

function checkHoliday(holidays) {
  if (holidays) {
    return holidays.map(
      holiday =>
        `<tr><td>${holiday.name}</td><td>${holiday.description}</td></tr>`
    );
  } else {
    return `<tr><td>no holiday found</td></tr>`;
  }
}
