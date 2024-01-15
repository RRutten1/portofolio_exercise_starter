// pages/PortfolioItemPage.jsx

import React from 'react';

const PortfolioItemPage = ({ item }) => {
    // Destructuring the item prop to access its properties
    const { title, description, imageUrl } = item;
  
    return (
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={imageUrl} alt={title} />
        {/* Add more content as needed */}
      </div>
    );
  }

export default PortfolioItemPage;
