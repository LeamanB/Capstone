import html from "html-literal";

const holidayDate = new Date();

export default () => html`
  <section id="title">
    <hr />

    <form id="schedule-form" method="POST" action="">
      <input
        id="start"
        name="start"
        type="datetime-local"
        value="${holidayDate.toJSON().substring(0, 16)}"
      />

      <label for="Countries">Select a country</label>
      <select name="Countries" id="Countries">
        <option value="PR">Puerto Rico</option>
        <option value="SE">Sweden</option>
        <option value="JP">Japan</option>
      </select>

      <input type="submit" name="submit" value="Submit" />
    </form>
  </section>
`;
