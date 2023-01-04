import html from "html-literal";

export default state => html`
  <section id="title">
    <tr>
      <th>Holiday name:</th>
    </tr>
    ${checkHoliday(state.holidays)}
    ${state.holidays.map(holiday => {
      if (holiday.name) {
        return `<tr><td>${holiday.name}</td></tr>`;
      } else {
        return `<tr><td>no holiday found</td></tr>`;
      }
    })};

    <form id="schedule-form" method="POST" action="">
      <input id="start" name="start" type="date" />

      <label for="Countries">Select a country</label>
      <select name="Countries" id="Countries">
        <option value="PR">Puerto Rico</option>
        <option value="SE">Sweden</option>
        <option value="JP">Japan</option>
      </select>

      <input type="submit" name="submit" value="Submit" />
    </form>
  </section>

  <!-- <div>${JSON.stringify(state.holidays)}</div> -->
`;
function checkHoliday(holidays) {
  if (holidays) {
    return holidays.map(holiday => `<tr><td>${holiday.name}</td></tr>`);
  } else {
    return `<tr><td>no holiday found</td></tr>`;
  }
}
