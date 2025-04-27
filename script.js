// Off-road gear listings with UAE phone numbers & compatibility info
const items = [
  {
    id: 1,
    title: 'Heavy-Duty Winch',
    price: 'AED 2500',
    image: 'https://via.placeholder.com/300x200?text=Winch',
    sellerPhone: '+971-50-123-4567',
    compatibility: ['LC80', 'LC100', 'LC105 (factory winch)']
  },
  {
    id: 2,
    title: 'LED Light Bar',
    price: 'AED 1200',
    image: 'https://via.placeholder.com/300x200?text=Light+Bar',
    sellerPhone: '+971-55-234-7890',
    compatibility: ['Universal']
  },
  {
    id: 3,
    title: 'Front Bull Bar',
    price: 'AED 3500',
    image: 'https://via.placeholder.com/300x200?text=Bull+Bar',
    sellerPhone: '+971-52-345-6789',
    compatibility: ['Ford F-150']
  }
];

const container = document.getElementById('listing-container');

// Render each item as a styled card
items.forEach(item => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${item.image}" alt="${item.title}">
    <div class="card-content">
      <h3>${item.title}</h3>
      <p>Price: ${item.price}</p>
      <p class="compatibility">
        Compatibility: ${item.compatibility.join(', ')}
      </p>
      <button>Buy</button>
      <p class="contact" style="display:none;">
        Seller: <a href="tel:${item.sellerPhone}">${item.sellerPhone}</a>
      </p>
    </div>
  `;
  container.appendChild(card);
});

// Reveal contact info when “Buy” is clicked
container.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    const card = e.target.closest('.card');
    card.querySelector('.contact').style.display = 'block';
    e.target.disabled = true;
    e.target.textContent = 'Contact Shown';
  }
});
