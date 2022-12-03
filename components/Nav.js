import html from "html-literal";

export default links => html`
  <nav>
    <a href="./index.html">Home</a>
    <a href="./history.html">History</a>
    <a href="./music.html">Music</a>
    ${links
      .map(
        link =>
          `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
      )
      .join("")}
  </nav>
`;
