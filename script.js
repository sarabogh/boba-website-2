// Fetch and display the boba tea menu
fetch('boba_teas.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('boba-menu');
    data.boba_teas.forEach(tea => {
      const card = document.createElement('div');
      card.className = 'boba-card';
      card.innerHTML = `
        <img src="${tea.image}" alt="${tea.name}">
        <h2>${tea.name}</h2>
        <p>${tea.description}</p>
        <span class="price">$${tea.price.toFixed(2)}</span>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => console.error('Error loading boba teas:', error));