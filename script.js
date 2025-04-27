// Off-road gear listings with badges, UAE phone numbers, descriptions, compatibility & ratings
const items = [
  {
    id: 1,
    title: 'Heavy-Duty Winch',
    price: '$250',
    image: 'images/winch.jpg',
    sellerPhone: '+971-50-123-4567',
    compatibility: ['LC80', 'LC100', 'LC105 (factory winch)'],
    description: 'A rugged, heavy-duty winch with a 9,500 lb pulling capacity—perfect for serious recovery.',
    rating: 5,
    verified: true,
    featured: true
  },
  {
    id: 2,
    title: 'LED Light Bar',
    price: '$120',
    image: 'images/light-bar.jpg',
    sellerPhone: '+971-55-234-7890',
    compatibility: ['Universal'],
    description: 'A versatile 20-inch LED light bar delivering bright, energy-efficient illumination for night driving.',
    rating: 4,
    verified: false,
    featured: false
  },
  {
    id: 3,
    title: 'Front Bull Bar',
    price: '$350',
    image: 'images/bull-bar.jpg',
    sellerPhone: '+971-52-345-6789',
    compatibility: ['Ford F-150'],
    description: 'A durable front bull bar offering superior protection and a sleek look for your F-150.',
    rating: 4,
    verified: false,
    featured: false
  }
];

const container = document.getElementById('listing-container');

// Render each item as a card
items.forEach(item => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${item.image}" alt="Photo of ${item.title}">
    <div class="card-content">
      <div class="badges">
        ${item.verified ? '<span class="badge verified">Verified Seller</span>' : ''}
        ${item.featured ? '<span class="badge featured">Featured</span>' : ''}
      </div>
      <h3>${item.title}</h3>
      <p class="description">${item.description}</p>
      <p>Price: ${item.price}</p>
      <p class="compatibility">Compatibility: ${item.compatibility.join(', ')}</p>
      <p class="rating">Rating: ${item.rating}/5</p>
      <button>Buy</button>
      <p class="contact" style="display:none;">
        Seller: <a href="tel:${item.sellerPhone}">${item.sellerPhone}</a>
      </p>
    </div>
  `;
  container.appendChild(card);
});

// Reveal contact info on “Buy”
container.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    const card = e.target.closest('.card');
    card.querySelector('.contact').style.display = 'block';
    e.target.disabled = true;
    e.target.textContent = 'Contact Shown';
  }
});
