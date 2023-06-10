/* eslint-disable jsx-a11y/alt-text */
function Contact() {
  return (
    <>
      <section id="contact-section">
        <h2>Let's work together...</h2>
        <p>How do you like your code?</p>
      </section>
      <div class="contact-links">
        <a
          href="https://www.linkedin.com/in/john-fuller-03044322a/"
          target="_blank"
          class="btn contact-details"
          rel="noreferrer"
        >
          <i class="fa-brands fa-linkedin fa-2x"></i> Linkedin
        </a>
        <a
          id="profile-link"
          href="https://github.com/JohnFull30"
          target="_blank"
          class="btn contact-details"
          rel="noreferrer"
        >
          <i class="fab fa-github fa-2x"></i> GitHub
        </a>
        <a href="mailto:johnathanfuller0@gmail.com" class="btn contact-details">
          <i class="fas fa-at fa-2x"></i> johnathanfuller0@gmail.com
        </a>
        <a href="tel:555-555-5555" class="btn contact-details">
          <i class="fas fa-mobile-alt fa-2x"></i> (919)-987-6632
        </a>
      </div>
      <ion-icon size="large" name="logo-linkedin"></ion-icon>
    </>
  );
}

export default Contact;
