const products = [
  {
    id: 1,
    name: "Laptop",
    category: "electronics",
    price: 299999,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1491472253230-a044054ca35f?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "HandBag",
    category: "accesories",
    price: 25000,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1575201647632-45fae95c9ce4?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "T-shirts",
    category: "clothing",
    price: 5099,
    rating: 3.5,
    image:
      "https://images.unsplash.com/photo-1618354691438-25bc04584c23?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "watch",
    category: "accesories",
    price: 15000,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Bracelet",
    category: "accesories",
    price: 35000,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1623680604940-848c86b7d589?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Dress",
    category: "clothing",
    price: 50099,
    rating: 3.0,
    image:
      "https://images.unsplash.com/photo-1623609163859-ca93c959b98a?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "EarRings",
    category: "accesories",
    price: 100000,
    rating: 4.0,
    image:
      "https://images.unsplash.com/photo-1668718003259-650efe62fbca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    name: "shirts",
    category: "clothing",
    price: 2000,
    rating: 3.5,
    image:
      "https://images.unsplash.com/photo-1602810320073-1230c46d89d4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "smartphone",
    category: "electronics",
    price: 25999,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1649515530664-7a3150983c7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    name: "suit",
    category: "clothing",
    price: 34999,
    rating: 3.5,
    image:
      "https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    name: "buds",
    category: "electronics",
    price: 1999,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1655560378428-7605bda51749?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    name: "ring",
    category: "accesories",
    price: 199999,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    name: "Jacket",
    category: "clothing",
    price: 9999,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

let currentProducts = [...products];

function renderProducts(list) {
  const container = document.getElementById("productGrid");
  container.innerHTML = "";
  list.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>Rating: ${product.rating}</p>
        <div class="price">Rs.${product.price}</div>
      `;
    container.appendChild(card);
  });
}

function filterProducts() {
  const category = document.getElementById("Filter").value;
  currentProducts =
    category === "all"
      ? [...products]
      : products.filter((p) => p.category === category);
  sortProducts();
}

function sortProducts() {
  const sortBy = document.getElementById("sort").value;
  let sorted = [...currentProducts];
  if (sortBy === "price-asc") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    sorted.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating-desc") {
    sorted.sort((a, b) => b.rating - a.rating);
  }
  renderProducts(sorted);
}

window.onload = () => renderProducts(products);
