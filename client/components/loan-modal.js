import React from "react";



const LoanModal = () => {


  return (
    <>
      <div class="modal-register mfp-hide" id="modal-register">
        <div class="card mx-auto" style={{ maxWidth: '400px' }}>
          <div class="card-header py-3 bg-transparent center">
            <h3 class="mb-0 font-weight-normal">Hello, Welcome Back</h3>
          </div>
          <div class="card-body mx-auto p-5">
            <form
              id="login-form"
              name="login-form"
              class="mb-0 row"
              action="#"
              method="post"
            >
              <div class="col-12">
                <input
                  type="text"
                  id="login-form-username"
                  name="login-form-username"
                  value=""
                  class="form-control not-dark"
                  placeholder="How much is your annual rent?"
                />
              </div>

              <div class="col-12 mt-4">
                <input
                  type="password"
                  id="login-form-password"
                  name="login-form-password"
                  value=""
                  class="form-control not-dark"
                  placeholder="How much is you net monthly salary? "
                />
              </div>

              <div class="col-12 mt-4">
                <input
                  type="password"
                  id="login-form-password"
                  name="login-form-password"
                  value=""
                  class="form-control not-dark"
                  placeholder="When is the rent due for payment?  "
                />
              </div>

              <div class="col-12 mt-4">
                <input
                  type="password"
                  id="login-form-password"
                  name="login-form-password"
                  value=""
                  class="form-control not-dark"
                  placeholder="What is the duration?  "
                />
              </div>

              <div class="col-12 mt-4">
                <input
                  type="password"
                  id="login-form-password"
                  name="login-form-password"
                  value=""
                  class="form-control not-dark"
                  placeholder="Email "
                />
              </div>

              <div class="col-12 text-right mt-2">
                <a href="#" class="text-dark font-weight-light text-smaller">
                  Forgot Password?
                </a>
              </div>

              <div class="col-12 mt-4">
                <button
                  class="button btn-block m-0"
                  id="login-form-submit"
                  name="login-form-submit"
                  value="login"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
          <div class="card-footer py-4 center">
            <p class="mb-0">
              Don't have an account?{' '}
              <a href="#">
                <u>Sign up</u>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};


export default LoanModal;