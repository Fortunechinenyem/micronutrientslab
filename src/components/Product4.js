import React from "react";

const Product4 = () => {
  return (
    <section className="container mt-4 mb-4">
      <div className="text-center mt-5 mb-3">
        <h4>GOT A QUESTION FOR US?</h4>
        <p>We're always happy to reply our customers.</p>
      </div>

      <form className="w-75 mx-auto">
        <div className="d-flex row">
          <div className="col-md-6">
            <label for="exampleFormControlInput1" className="form-label">
              First Name
            </label>
            <input
              type="firstname"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
            />
          </div>

          <div className="col-md-6">
            <label for="exampleFormControlInput1" className="form-label">
              Last Name
            </label>
            <input
              type="lastname"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
            />
          </div>
        </div>

        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder=""
        />
        <label for="exampleFormControlInput1" className="form-label">
          Subject
        </label>
        <input
          type="subject"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder=""
        />
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Comments / Questions
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>

        <div className="col-12 text-center">
          <button className="btn btn-warning" type="submit">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};
export default Product4;
