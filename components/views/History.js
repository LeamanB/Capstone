import html from "html-literal";

export default () => html`
  <section id="history">

        <h1>History</h1>
        <p>Learn the History</p>
        <div>
          <h3>History Lesson</h3>
          ${store.Home.userCalender}
        </div>
        <div>
          <h3>Documentaries</h3>
          ${store.Home.userCalender}
        </div>
      </body>

  </section>
`;
