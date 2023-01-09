import html from "html-literal";

export default () => html`
  <section id="contact">
    <h1>Contact</h1>
    <form
      id="contactMessage"
      action="https://formspree.io/f/moqbzodo"
      method="POST"
    >
      <label>
        Your email:
        <input type="email" name="email" />
      </label>
      <label>
        Your message:
        <textarea name="message"></textarea>
      </label>
      <button type="submit">Send</button>
    </form>

    <p id="sendCor">Send all correspondence to:</p>
    <a id="contactInfo" href="https://www.linkedin.com/in/leamanbrown/"
      >LinkedIN</a
    >
    <a id="contactInfo" href="https://github.com/LeamanB">Github</a>
  </section>
`;
