// Sample off-road gear listings
const items = [
    {
      id: 1,
      title: 'Heavy-Duty Winch',
      price: '$250',
      image: 'https://via.placeholder.com/300x200?text=Winch',
      sellerPhone: '+1-555-123-4567'
    },
    {
      id: 2,
      title: 'LED Light Bar',
      price: '$120',
      image: 'https://via.placeholder.com/300x200?text=Light+Bar',
      sellerPhone: '+1-555-987-6543'
    }
  ];
  
  const container = document.getElementById('listing-container');
  
  // Render each item as a card
  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <h3>${item.title}</h3>
      <p>Price: ${item.price}</p>
      <button>Buy</button>
      <p class="contact" style="display:none; margin-top:0.5rem;">
        Seller: <a href="tel:${item.sellerPhone}">${item.sellerPhone}</a>
      </p>
    `;
    container.appendChild(card);
  });
  
  // Show seller contact when “Buy” is clicked
  container.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
      const card = e.target.closest('.card');
      card.querySelector('.contact').style.display = 'block';
      e.target.disabled = true;
      e.target.textContent = 'Contact Shown';
    }
  });
  