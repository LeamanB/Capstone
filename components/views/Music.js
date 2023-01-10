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
      <iframe id="songPlayer" width="2000" height="1700" src="https://en.wikibooks.org/w/index.php?go=Go&search=${checkHoliday(
        state.holidays
      )}" frameborder="0" allowfullscreen></iframe>
      </div>

      <div>
</div>
      </body>

  </section>
  `;

function checkHoliday(holidays) {
  if (holidays) {
    return holidays.map(holiday => `${holiday.name}`);
  } else {
    return `<tr><td>no holiday found</td></tr>`;
  }
}
