import './Art.css';

function Art() {
  const artworks = [
    {
      title: 'Digital Painting',
      description: 'A vibrant digital painting showcasing creativity and color.',
      image: '/src/assets/art1.png', // Replace with your image path
    },
    {
      title: '3D Model',
      description: 'A detailed 3D model created for a virtual environment.',
      image: '/src/assets/art2.png', // Replace with your image path
    },
    {
      title: 'Sketch',
      description: 'A hand-drawn sketch with intricate details.',
      image: '/src/assets/art3.png', // Replace with your image path
    },
  ];

  return (
    <section className="art-section" id="Art">
      <h2>Art and Culture</h2>
      <div className="art-gallery">
        {artworks.map((art, index) => (
          <div className="sticky-note" key={index}>
            <img src={art.image} alt={art.title} className="art-image" />
            <h3>{art.title}</h3>
            <p>{art.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Art;