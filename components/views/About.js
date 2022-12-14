import html from "html-literal";

export default () => html`
  <section id="about">
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
      <body>
        <nav>
          <a href="./index.html">Home</a>
          <a href="./history.html">History</a>
          <a href="./music.html">Music</a>
        </nav>
        <hr />
        <h1>About</h1>
        <p>HHM was made to educate and entertain you about Holidays</p>
        <div></div>
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
