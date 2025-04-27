// Make sure you have an 'images' folder containing:
// • winch.jpg
// • light-bar.jpg
// • bull-bar.jpg

const items = [
  {
    id: 1,
    title: 'Heavy-Duty Winch',
    price: '$250',
    image: 'images/winch.jpg',
    sellerPhone: '+971-50-123-4567',
    compatibility: ['LC80', 'LC100', 'LC105 (factory winch)']
  },
  {
    id: 2,
    title: 'LED Light Bar',
    price: '$120',
    image: 'images/light-bar.jpg',
    sellerPhone: '+971-55-234-7890',
    compatibility: ['Universal']
  },
  {
    id: 3,
    title: 'Front Bull Bar',
    price: '$350',
    image: 'images/bull-bar.jpg',
    sellerPhone: '+971-52-345-6789',
    compatibility: ['Ford F-150']
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

// Reveal contact info on “Buy”
container.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    const card = e.target.closest('.card');
    card.querySelector('.contact').style.display = 'block';
    e.target.disabled = true;
    e.target.textContent = 'Contact Shown';
  }
});
