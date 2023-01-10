import html from "html-literal";

export default () => html`
  <section id="contact">
    <h1>Contact</h1>
    <form
      class="contactInfo"
      id="contactMessage"
      action="https://formspree.io/f/moqbzodo"
      method="POST"
    >
      <label>
        Your email:
        <input id="contactTextarea" type="email" name="email" />
      </label>

      <label>
        Your message:
        <textarea id="contactTextarea" name="message"></textarea>
      </label>
      <button type="submit">Send</button>
    </form>

    <p id="sendCor">Send all correspondence to:</p>
    <a class="contactInfo" href="https://www.linkedin.com/in/leamanbrown/"
      >LinkedIN</a
    >
    <a class="contactInfo" href="https://github.com/LeamanB">Github</a>
  </section>
`;
