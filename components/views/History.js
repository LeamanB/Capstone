import html from "html-literal";

export default state => html`
  <section id="history">
        <h1>History</h1>
        <p>Learn the History of
${state.holidays.map(holiday => `<tr><td>${holiday.name}.</td></tr>`)}
</p>


        <div>
          <h3>History Lesson</h3>
          <iframe id="wiki" width="2000" height="1700" src="https://en.wikipedia.org/wiki/${checkHoliday(
            state.holidays
          )}" frameborder="0" allowfullscreen></iframe>
      </iframe>
        </div>

        <div>
        <h3>Poems</h3>
        <p>
        <iframe id="wiki" width="2000" height="1700" src="https://www.poetryfoundation.org/search?query=${checkHoliday(
          state.holidays
        )}" frameborder="0" allowfullscreen></iframe>
      </p>

        <div>
        <h3>Books to Read</h3>
        <iframe id="wiki" width="2000" height="1700" src="https://en.wikibooks.org/w/index.php?go=Go&search=${checkHoliday(
          state.holidays
        )}" frameborder="0" allowfullscreen></iframe>
      </body>
        </div>



        </div>
</section>
`;

function checkHoliday(holidays) {
  if (holidays) {
    return holidays.map(holiday => `${holiday.name}`);
  } else {
    return `<tr><td>no holiday found</td></tr>`;
  }
}
