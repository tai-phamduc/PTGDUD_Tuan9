import React from 'react';
import bgImage from '/src/assets/recipe-for-the-day-background-image.png'; // Replace with your image path
import authorImage from '/src/assets/avatar-icon.png'; // Replace with the author image path if needed

const RecipeOfTheDay = () => {
  return (
    <div
      className="position-relative text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: '5%',
      }}
    >
      {/* Card */}
      <div
        className="bg-white text-dark p-4 rounded shadow"
        style={{
          maxWidth: '400px',
          border: '2px dotted #f75ba4',
          borderRadius: '1rem',
          position: 'relative',
        }}
      >
        {/* Badge */}
        <div
          className="position-absolute top-0 start-50 translate-middle text-white px-3 py-1"
          style={{
            backgroundColor: '#ffc107',
            borderRadius: '0 0.5rem 0.5rem 0',
            transform: 'translate(-50%, -50%)',
            fontWeight: 'bold',
          }}
        >
          Recipe of the day
        </div>

        {/* Title */}
        <h5 className="text-center fw-bold text-danger mt-4" style={{ color: '#f75ba4' }}>
          Salad Caprese
        </h5>

        {/* Description */}
        <p className="text-center text-muted">
          Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and
          balsamic vinegar create a refreshing dish for lunch or appetizer.
        </p>

        {/* Author */}
        <div className="d-flex flex-column align-items-center mb-3">
          <img
            src={authorImage}
            alt="Author"
            className="rounded-circle mb-1"
            style={{ width: '40px', height: '40px' }}
          />
          <small className="text-dark">Salad Caprese</small>
        </div>

        {/* Button */}
        <div className="text-center">
          <button
            className="btn text-white px-4"
            style={{ backgroundColor: '#f75ba4', borderRadius: '999px' }}
          >
            View now →
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeOfTheDay;
