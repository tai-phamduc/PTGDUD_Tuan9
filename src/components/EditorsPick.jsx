import React from 'react';

const editorPicks = [
  {
    title: 'Stuffed sticky rice ball',
    time: '34 minutes',
    author: 'Jennifer King',
    authorImage: '/src/assets/avatar-icon.png',
    description: 'Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling...',
    image: '/src/assets/rice-ball.png',
  },
  {
    title: 'Strawberry smoothie',
    time: '40 minutes',
    author: 'Matthew Martinez',
    authorImage: '/src/assets/avatar-icon.png',
    description: 'Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...',
    image: '/src/assets/strawberry-smoothie.png',
  },
  {
    title: 'Latte Art',
    time: '19 minutes',
    author: 'Sarah Hill',
    authorImage: '/src/assets/avatar-icon.png',
    description: 'Latte art is the skillful craft of creating captivating designs on the surface of a latte...',
    image: '/src/assets/latte-art.png',
  },
  {
    title: 'Butter fried noodles',
    time: '16 minutes',
    author: 'Julia Lopez',
    authorImage: '/src/assets/avatar-icon.png',
    description: 'Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal...',
    image: '/src/assets/butter-noodles.png',
  },
];

const EditorsPick = () => {
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold" style={{ color: '#ff2c9c' }}>Editor&apos;s pick</h2>
        <p className="text-muted">
          Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!
        </p>
      </div>

      <div className="row g-4">
        {editorPicks.map((item, idx) => (
          <div className="col-md-6" key={idx}>
            <div className="d-flex rounded-4 shadow-sm border p-3 align-items-start" style={{ minHeight: '180px' }}>
              <img
                src={item.image}
                alt={item.title}
                className="rounded-4 me-3"
                style={{ width: '130px', height: '130px', objectFit: 'cover' }}
              />
              <div className="flex-grow-1 d-flex flex-column">
                <div className="d-flex justify-content-between">
                  <h5 className="fw-bold mb-1">{item.title}</h5>
                  <button
                    className="btn p-0 border-0"
                    aria-label="Bookmark"
                    style={{ color: '#ff2c9c', background: 'transparent' }}
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
                <span className="text-muted mb-2" style={{ fontSize: '14px' }}>{item.time}</span>
                <div className="d-flex align-items-center mb-2">
                  <img
                    src={item.authorImage}
                    alt={item.author}
                    className="rounded-circle me-2"
                    style={{ width: '32px', height: '32px', objectFit: 'cover' }}
                  />
                  <span className="fw-bold" style={{ fontSize: '14px' }}>{item.author}</span>
                </div>
                <p className="text-muted mb-0" style={{ fontSize: '14px' }}>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EditorsPick;
