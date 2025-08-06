

// Define the functional component
const ImageButton: React.FC = () => {
  // Function to handle the click event
  const handleClick = () => {
    console.log('Image clicked!');
  };

  return (
    // Using Bootstrap classes for centering and styling
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg rounded-3" style={{ width: '18rem' }}>
        <img
          src="https://placehold.co/300x200/cccccc/000000?text=Click+Me" // Placeholder image
          className="card-img-top rounded-top"
          alt="Clickable Placeholder"
          onClick={handleClick} // Attach the click handler
          style={{ cursor: 'pointer' }} // Indicate it's clickable
        />
        <div className="card-body text-center">
          <p className="card-text">Click the image above!</p>
        </div>
      </div>
    </div>
  );
};

export default ImageButton; // Export the component as default
