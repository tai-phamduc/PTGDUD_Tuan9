import React from 'react';

const videoRecipes = [
  {
    title: 'Salad with cabbage and shrimp',
    image: '/src/assets/cabbage-shrimp-salad.png',
    time: '32 minutes',
  },
  {
    title: 'Salad of cove beans, shrimp and potatoes',
    image: '/src/assets/bean-shrimp-potato-salad.png',
    time: '20 minutes',
  },
  {
    title: 'Sunny-side up fried egg',
    image: '/src/assets/fried-egg.png',
    time: '15 minutes',
  },
  {
    title: 'Lotus delight salad',
    image: '/src/assets/lotus-salad.png',
    time: '20 minutes',
  },
];

const RecipesWithVideos = () => {
  return (
    <section className="container py-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h2 className="fw-bold text-pink" style={{ color: '#ff2c9c' }}>
          Recipes With Videos
        </h2>
        <p className="text-muted">
          Cooking Up Culinary Creations with Step-by-Step Videos
        </p>
      </div>

      {/* Cards Grid */}
      <div className="row g-4">
        {videoRecipes.map((recipe, index) => (
          <div className="col-12 col-sm-6 col-lg-3" key={index}>
            <div className="card border-light shadow-sm h-100 rounded-4 overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="card-img-top"
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <div className="card-body position-relative d-flex flex-column justify-content-between">
                <h6 className="fw-bold">{recipe.title}</h6>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <span className="text-pink fw-medium" style={{ color: '#ff2c9c', fontSize: '14px' }}>
                    {recipe.time}
                  </span>
                  <button
                    className="btn p-1 rounded-circle border-0"
                    aria-label="Bookmark"
                    style={{ color: '#ff2c9c', backgroundColor: 'transparent' }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 2v13.5l5.5-3.5 5.5 3.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecipesWithVideos;
