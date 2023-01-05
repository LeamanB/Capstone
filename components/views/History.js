import html from "html-literal";

export default state => html`
  <section id="history">

        <h1>History</h1>
        <p>Learn the History of
${state.holidays.map(
  holiday => `<tr><td>${holiday.name}</td><td>${holiday.description}</td></tr>`
)}
</p>
        <div>
          <h3>History Lesson</h3>
          <!-- <form method="get" action="https://en.wikipedia.org/wiki/"> -->
  <!-- <input type="text" name="search">
  <input type="submit">
</form> -->

        </div>
        <h2>Books</h2>

        <div>
          <h3>Documentaries</h3>
          <iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/results?search_query=(SEARCH-TERM-HERE)"
  frameborder="0"></iframe>
        </div>
      </body>

  </section>
`;
