const Contact = () => {
  return (
    <section className="contact section">
      {window.location.pathname !== "/contact" && (
        <div className="section-wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      )}

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
