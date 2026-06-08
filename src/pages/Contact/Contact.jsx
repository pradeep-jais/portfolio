const Contact = () => {
  return (
    <section className="contact section">
      <div className="title">
        <h1>Contact me</h1>
        <div className="underline"></div>
      </div>
      <div className="section-center contact-center">
        <article className="contact-info">
          <h4>Ready to get hired</h4>
          <p>&rarrb; Looking for a Developer who is also a good learner:)</p>
          <p>
            &rarrb; Contact me @
            <strong>
              <i className="fas fa-envelope"></i>email : pradeepjais13@gmail.com
            </strong>
          </p>
        </article>
        <article className="contact-form">
          <h4>Get in touch</h4>
          <p>In case you want me to work for your project</p>
          <form
            action="https://formspree.io/f/mjvdpgly"
            method="post"
            className="form"
            autoComplete="true"
          >
            <div className="form-row">
              <label htmlFor="name" className="form-label">
                name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-input"
                placeholder="your name"
              />
            </div>

            <div className="form-row">
              <label htmlFor="email" className="form-label">
                email
              </label>
              <input
                type="email"
                name="email"
                placeholder="your mail"
                id="email"
                className="form-input"
              />
            </div>
            <div className="form-row">
              <textarea
                name="message"
                className="form-textarea"
                placeholder="message..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-block">
              submit
            </button>
          </form>
        </article>
      </div>
    </section>
  );
};
export default Contact;
