import React from "react";

const Contact1 = () => {
  return (
    <section className="container mt-4 mb-4">
      <form class="row g-3 needs-validation container" novalidate>
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label">
            Full name
          </label>
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            required
          />
        </div>
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label">
            Phone Number
          </label>
          <input
            type="text"
            class="form-control"
            id="validationCustom02"
            required
          />
        </div>

        <div class="col-md-6">
          <label for="validationCustom03" class="form-label">
            City
          </label>
          <input
            type="text"
            class="form-control"
            id="validationCustom03"
            required
          />
          <div class="invalid-feedback">Please provide a valid city.</div>
        </div>
        <div class="col-md-3">
          <label for="validationCustom04" class="form-label">
            State
          </label>
          <select class="form-select" id="validationCustom04" required>
            <option selected disabled value="">
              Choose...
            </option>
            <option>...</option>
          </select>
          <div class="invalid-feedback">Please select a valid state.</div>
        </div>

        <div class="col-12 text-center">
          <button class="btn btn-warning" type="submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};
export default Contact1;
