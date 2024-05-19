const { fetchData } = require('./fetcher');

document.addEventListener('DOMContentLoaded', () => {
  const productListElement = document.getElementById('productList');

  const displayProducts = async () => {
    try {
      const products = await fetchData();
      console.log('test', products);

      productListElement.innerHTML = '';

      products.slice(0, 12).forEach((product) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('bg-white', 'shadow-lg', 'rounded-lg', 'overflow-hidden');

        cardElement.innerHTML = `
        <div>
            <img class="w-full h-64 object-cover" src="${product.image}
                "alt="Card Image" />
          <div class="p-6">
            <h1 class="text-xl font-bold mb-2">${product.title}</h1>
            <h2 class="text-lg font-bold mb-2 text-indigo-600">Price: ${product.price}</h2>
            <h2 class="text-lg font-bold mb-2 text-indigo-600">${product.category}</h2>
            <p class="text-gray-700 mb-4">${product.currency} ${product.description}</p>
            <a href="" class="text-indigo-500 hover:text-indigo-600 font-semibold">Read More</a>
          </div>
        </div>
        `;

        productListElement.appendChild(cardElement);
      });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  displayProducts();
});
