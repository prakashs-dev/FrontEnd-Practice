console.log("Product practice");

const groceryItems = [
  {
    name: "Apple",
    price: 1.99,
    description: "Fresh and juicy apples",
    image:
      "https://images.unsplash.com/photo-1584306670957-acf935f5033c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFwcGxlfGVufDB8fDB8fHww",
  },
  {
    name: "Banana",
    price: 0.99,
    description: "Ripe and delicious bananas",
    image:
      "https://images.unsplash.com/photo-1543218024-57a70143c369?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEJhbmFuYXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Milk",
    price: 2.49,
    description: "Organic whole milk",
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fE1pbGt8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Bread",
    price: 1.79,
    description: "Freshly baked bread",
    image:
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJyZWFkfGVufDB8fDB8fHww",
  },
  // Add more items similarly
  {
    name: "Carrots",
    price: 0.89,
    description: "Organic carrots",
    image:
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2Fycm90c3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Chicken",
    price: 5.99,
    description: "Free-range chicken",
    image:
      "https://media.istockphoto.com/id/168372570/photo/mans-hand-cutting-chicken-breast.webp?b=1&s=170667a&w=0&k=20&c=hsUXTSK3dEsvQ_TGhRYYq5K9IvUnOeyiw8uyShVId20=",
  },
  {
    name: "Eggs",
    price: 2.29,
    description: "Farm-fresh eggs",
    image:
      "https://images.unsplash.com/photo-1491524062933-cb0289261700?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEVnZ3N8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Spinach",
    price: 1.49,
    description: "Fresh spinach leaves",
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3BpbmFjaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Tomatoes",
    price: 2.09,
    description: "Ripe vine tomatoes",
    image:
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VG9tYXRvZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Orange Juice",
    price: 3.29,
    description: "Freshly squeezed orange juice",
    image: "https://example.com/orange-juice.jpg",
  },
  {
    name: "Pasta",
    price: 1.99,
    description: "Italian pasta",
    image: "https://example.com/pasta.jpg",
  },
  {
    name: "Yogurt",
    price: 1.49,
    description: "Greek yogurt",
    image: "https://example.com/yogurt.jpg",
  },
  {
    name: "Potatoes",
    price: 2.79,
    description: "Russet potatoes",
    image: "https://example.com/potatoes.jpg",
  },
  {
    name: "Onions",
    price: 0.79,
    description: "Yellow onions",
    image: "https://example.com/onions.jpg",
  },
  {
    name: "Cereal",
    price: 3.99,
    description: "Whole grain cereal",
    image: "https://example.com/cereal.jpg",
  },
  {
    name: "Cheese",
    price: 4.49,
    description: "Cheddar cheese block",
    image: "https://example.com/cheese.jpg",
  },
  {
    name: "Broccoli",
    price: 1.69,
    description: "Fresh broccoli florets",
    image: "https://example.com/broccoli.jpg",
  },
  {
    name: "Grapes",
    price: 2.99,
    description: "Sweet red grapes",
    image: "https://example.com/grapes.jpg",
  },
  {
    name: "Salmon",
    price: 8.99,
    description: "Wild-caught salmon fillet",
    image: "https://example.com/salmon.jpg",
  },
  {
    name: "Lettuce",
    price: 1.29,
    description: "Crisp iceberg lettuce",
    image: "https://example.com/lettuce.jpg",
  },
  {
    name: "Ground Beef",
    price: 6.49,
    description: "Lean ground beef",
    image: "https://example.com/ground-beef.jpg",
  },
];

const productContainer = document.getElementById("products");
const listener = (event) => {
  alert(event.target.id);
};

groceryItems.forEach((product) => {
  const productElement = document.createElement("div");
  productElement.className = "product";
  const image = document.createElement("img");
  image.src = product.image;
  image.alt = product.name;
  const title = document.createElement("b");
  title.innerHTML = product.name;
  const description = document.createElement("p");
  description.innerText = product.description;
  const price = document.createElement("span");
  price.innerText = `$${product.price}`;
  const button = document.createElement("button");
  button.innerText = "Add";
  button.className = "btn";
  button.addEventListener("click", listener);
  button.id = product.name;
  productElement.append(image, title, description, price, button);
  productContainer.append(productElement);
});
