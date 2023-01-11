import html from "html-literal";

export default state => html`
  <section id="title">
    <table id="holiday-name">
      <tr>
        <th>Holiday</th>
        <th>Description</th>
      </tr>
      <tr>
        ${checkHoliday(state.holidays)}
      </tr>
    </table>

    <form id="schedule-form" method="POST" action="">
      <label class="holidayForm" for="date">Select a Date</label>
      <input id="start" name="start" type="date" />

      <label class="holidayForm" for="Countries">Select a Country</label>
      <select name="Countries" id="Countries">
        <option value="PR">Puerto Rico</option>
        <option value="SE">Sweden</option>
        <option value="JP">Japan</option>
      </select>

      <input type="submit" name="submit" value="Submit" />
    </form>
  </section>
`;

function checkHoliday(holidays) {
  if (holidays > [0]) {
    return holidays.map(
      holiday =>
        `<tr><td>${holiday.name}</td><td>${holiday.description}</td></tr>`
    );
  } else {
    return `<tr><td>No holiday found.</td><td>Select a new date.</td></tr>`;
  }
}
