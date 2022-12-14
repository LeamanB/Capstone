import html from "html-literal";

export default () => html`
  <section id="title">
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
      </head>
      <img
        src="https://images.pexels.com/photos/431722/pexels-photo-431722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <body>
        <nav>
          <a href="./index.html">Home</a>
          <a href="./history.html">History</a>
          <a href="./music.html">Music</a>
        </nav>
        <hr />
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

    <div id="root"></div>
    <script type="module" src="index.js"></script>
  </section>
`;
