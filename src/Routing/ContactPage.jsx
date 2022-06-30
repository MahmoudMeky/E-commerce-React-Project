import React from 'react'
import "./ContactPage.css"


export default function ContactPage() {

  return (
    <div className="contact-page row py-3 m-0 text-center align-items-center  text-lg-start">
      <div className="contact-form col-12 col-lg-8 p-2">
        <div className="row m-0">
          <div className="col-md-12">
            <div className="">
              <h2 className="title fw-bold text-uppercase">Contact Us</h2>
              <p className='fs-5'>Let us know what you think! In order to provide better service,
                do not hesitate to give us your feedback. Thank you.</p><hr />
              <form id="contact-form" className='d-flex flex-column gap-3'
              >
                <div className="form-group   ">
                  <div className="row">
                    <div className="col-md-6 col-12">
                      <input placeholder="Name" id="name" type="text" required
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6 col-12 mt-3 mt-md-0">
                      <input placeholder="Email" id="email" type="email"
                        className="form-control" aria-describedby="emailHelp" required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input placeholder="Subject" id="subject" type="text" required
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <textarea placeholder="Message" id="message" required
                    className="form-control" rows="12"
                  />
                </div>
                <button type="submit" className="btn btn-dark submit">Submit</button>
              </form>
            </div>
          </div>

        </div>

      </div>

      <div className='col-12 col-lg-4  d-flex align-items-start justify-content-center mt-lg-5 py-lg-3 align-self-end   '>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3435.6630618353474!2d31.016569551027242!3d30.558822281608276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7d7223ff2d63f%3A0x9d531b61c0ebb81b!2sITI%20Menofia%20Branch!5e0!3m2!1sen!2snl!4v1656584146447!5m2!1sen!2snl"
          style={{ width: 500, height: 500, border: "1px solid #eee", maxWidth:"100%" }}
          className="contact-map shadow opacity-50 p-1"

        ></iframe>
      </div>

    </div>
  );
}


