import React from 'react';

const ChefifyFooter = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 px-4">
      <div className="container">
        <div className="row">

          {/* About Us & Email */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">About Us</h5>
            <p>
              Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
            </p>
            <div className="d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Enter your email"
              />
              <button className="btn text-white" style={{ backgroundColor: '#f75ba4' }}>
                Send
              </button>
            </div>
          </div>

          {/* Learn More */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Learn More</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Our Cooks</a></li>
              <li><a href="#" className="text-white text-decoration-none">See Our Features</a></li>
              <li><a href="#" className="text-white text-decoration-none">FAQ</a></li>
            </ul>
          </div>

          {/* Shop */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold mb-3">Shop</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Gift Subscription</a></li>
              <li><a href="#" className="text-white text-decoration-none">Send Us Feedback</a></li>
            </ul>
          </div>

          {/* Recipes */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Recipes</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">What to Cook This Week</a></li>
              <li><a href="#" className="text-white text-decoration-none">Pasta</a></li>
              <li><a href="#" className="text-white text-decoration-none">Dinner</a></li>
              <li><a href="#" className="text-white text-decoration-none">Healthy</a></li>
              <li><a href="#" className="text-white text-decoration-none">Vegetarian</a></li>
              <li><a href="#" className="text-white text-decoration-none">Vegan</a></li>
              <li><a href="#" className="text-white text-decoration-none">Christmas</a></li>
            </ul>
          </div>
        </div>

        <hr className="border-light" />

        {/* Footer bottom */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="d-flex align-items-center mb-2 mb-md-0">
            <img
              src="/src/assets/chelify-icon.png"
              alt="Chefify Logo"
              className="me-2"
            />
            <span className="ms-3 small">2023 Chefify Company</span>
          </div>
          <div>
            <a href="#" className="text-white text-decoration-none me-3">Terms of Service</a>
            <a href="#" className="text-white text-decoration-none">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ChefifyFooter;
