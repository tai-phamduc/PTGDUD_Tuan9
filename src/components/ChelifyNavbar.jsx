import React from 'react';

const ChefifyNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom py-2 px-4">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src="/src/assets/chelify-icon.png"
            alt="Chefify Logo"
            className="d-inline-block align-text-top me-2"
          />
        </a>

        <form className="d-flex flex-grow-1 mx-4" role="search">
          <div className="input-group w-100">
            <span className="input-group-text bg-light border-0">
              <img
                src="/src/assets/search-icon.png"
                className="d-inline-block align-text-top me-2"
              />
            </span>
            <input
              className="form-control bg-light border-0"
              type="search"
              placeholder="What would you like to cook?"
              aria-label="Search"
            />
          </div>
        </form>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item"><a className="nav-link text-secondary" href="#">What to cook</a></li>
          <li className="nav-item"><a className="nav-link text-secondary" href="#">Recipes</a></li>
          <li className="nav-item"><a className="nav-link text-secondary" href="#">Ingredients</a></li>
          <li className="nav-item"><a className="nav-link text-secondary" href="#">Occasions</a></li>
          <li className="nav-item"><a className="nav-link text-secondary" href="#">About Us</a></li>
        </ul>

        <div className="d-flex">
          <a href="#" className="btn text-danger me-2" style={{ backgroundColor: '#ffeaf1' }}>Login</a>
          <a href="#" className="btn btn-danger text-white">Subscribe</a>
        </div>
      </div>
    </nav>
  );
};

export default ChefifyNavbar;
