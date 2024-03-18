import React from "react";

const Contact = () => {
  return (
    <>
      <div class="wrap-contact my-4 container p-4">
        <section class="row">
          <div class="col-lg-6 pr-5">
            <h3>Contact</h3>
            <form>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="contact-name"
                  placeholder="Name"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="contact-email"
                  placeholder="Email"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="contact-phone"
                  placeholder="phone"
                />
              </div>
              <div class="mb-3">
                <textarea
                  class="form-control"
                  name="contact-cmt"
                  id="contact-cmt"
                  cols="30"
                  rows="5"
                  placeholder="Comment"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-contact-submit">
                Send
              </button>
            </form>
          </div>
          <div class="col-lg-6">
            <h3>Get In Touch With Us</h3>
            <div class="contact-with-us-row">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
              </svg>
              <a href="https://www.facebook.com/profile.php?id=100056096654353&mibextid=ZbWKwL">
                My facebook
              </a>
            </div>
            <div class="contact-with-us-row">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
              <a href="https://www.google.com/intl/vi/gmail/about/">
                huyendndev@gmail.com
              </a>
            </div>
            <div class="contact-with-us-row">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
              </svg>
              <a href="/contact">0333.385.229</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
