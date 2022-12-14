import html from "html-literal";

export default () => html`
  <section id="history">
    <a>
      <header>
        HHM
      </header>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <meta charset="UTF-8" />
        <title>Holiday, History, & Music</title>
        <link rel="stylesheet" href="style.css" />
        <script type="module" src="./index.js"></script>
      </head>
      <body>
        <nav>
          <a href="./index.html">Home</a>
          <a href="./history.html">History</a>
          <a href="./music.html">Music</a>
        </nav>
        <hr />
        <h1>History</h1>
        <p>Learn the History</p>
        <div>
          <h3>History Lesson</h3>
        </div>
        <div>
          <h3>Documentaries</h3>
        </div>
      </body>

      <hr />
      <footer>
        <i>Listen, Learn, & Celebrate!</i>
        <nav>
          <a href="./about.html">About</a>
          <a href="./contact.html">Contact</a>
        </nav>
      </footer>
    </a>
  </section>
`;
