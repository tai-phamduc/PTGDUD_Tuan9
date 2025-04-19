import React from 'react';

const recipes = [
  {
    title: 'Italian-style tomato salad',
    image: '/src/assets/tomato-salad.png',
    time: '14 minutes',
  },
  {
    title: 'Spaghetti with vegetables and shrimp',
    image: '/src/assets/spaghetti-shrimp.png',
    time: '15 minutes',
  },
  {
    title: 'Lotus delight salad',
    image: '/src/assets/lotus-salad.png',
    time: '20 minutes',
  },
  {
    title: 'Snack cakes',
    image: '/src/assets/snack-cakes.png',
    time: '21 minutes',
  },
];

const SummerRecipes = () => {
  return (
    <section className="container py-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h2 className="fw-bold text-danger">This Summer Recipes</h2>
        <p className="text-muted">We have all your Independence Day sweets covered.</p>
      </div>

      {/* Cards */}
      <div className="row g-4">
        {recipes.map((recipe, idx) => (
          <div className="col-12 col-sm-6 col-lg-3" key={idx}>
            <div className="card h-100 border-light shadow-sm">
              <img
                src={recipe.image}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
                alt={recipe.title}
              />
              <div className="card-body position-relative">
                <h5 className="card-title fw-semibold">{recipe.title}</h5>
                <span className="badge bg-light text-danger border border-danger px-2 py-1">
                  {recipe.time}
                </span>
                <button
                  type="button"
                  className="btn btn-outline-danger position-absolute top-0 end-0 m-2 p-1 rounded-circle"
                  aria-label="Save recipe"
                >
                  <img src="/src/assets/tag-icon.png" alt="" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SummerRecipes;
