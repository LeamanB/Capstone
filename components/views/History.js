import html from "html-literal";

export default state => html`
  <section id="history">
        <h1>History</h1>
        <p>Learn the History of
${state.holidays.map(holiday => `<tr><td>${holiday.name}.</td></tr>`)}
</p>


        <div>
          <h3>History Lesson</h3>
          <iframe width="700" height="400" src="https://en.wikipedia.org/wiki/${checkHoliday(
            state.holidays
          )}" frameborder="0" allowfullscreen></iframe>
      </iframe>
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
