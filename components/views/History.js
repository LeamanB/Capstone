import html from "html-literal";

export default () => html`
  <section id="history">

        <h1>History</h1>
        <p>Learn the History</p>
        <div>
          <h3>History Lesson</h3>
          <form method="get" action="https://en.wikipedia.org/w/index.php">
  <input type="text" name="search">
  <input type="submit">
</form>

        </div>
        <h2>Books</h2>

        <div>
          <h3>Documentaries</h3>
          <iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
  frameborder="0"></iframe>
        </div>
      </body>

  </section>
`;
