import html from "html-literal";

export default state => html`
  <section id="history">
        <h1>History</h1>
        <p>Learn the History of
${state.holidays.map(holiday => `<tr><td>${holiday.name}.</td></tr>`)}
</p>


        <div>
          <h3>History Lesson</h3>
          <p>
          <iframe id="wiki" width="100%" height="1000vw" src="https://en.wikipedia.org/wiki/${checkHoliday(
            state.holidays
          )}" frameborder="0" allowfullscreen></iframe>
      </iframe>
          </p>
        </div>

        <div>
        <h3>Poems</h3>
        <p>
        <iframe id="wiki" width="100%" height="1000vw" src="https://www.poetryfoundation.org/search?query=${checkHoliday(
          state.holidays
        )}" frameborder="0" allowfullscreen></iframe>
      </p>
        </div>

        <div>
        <h3>Books to Read</h3>
        <p>
        <iframe id="wiki" width="100%" height="1000vw" src="https://en.wikibooks.org/w/index.php?go=Go&search=${checkHoliday(
          state.holidays
        )}" frameborder="0" allowfullscreen></iframe>
        </p>
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
