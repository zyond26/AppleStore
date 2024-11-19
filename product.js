function filterByCategory() {
  // Get the selected category
  const selectedCategory = document.getElementById("categoryFilter").value.toLowerCase();

  // Get all product sections
  const productSections = document.querySelectorAll(".product-category");

  // Flag to check if any products are displayed
  let productsVisible = false;

  // Loop through each product section to check for the category match
  productSections.forEach((section) => {
      const category = section.getAttribute("data-category").toLowerCase();

      // Check if the category matches the selected category or if "all" is selected
      if (category === selectedCategory || selectedCategory === "all") {
          section.style.display = "block";  // Show the product section

          // Scroll to the first matched section and set the flag
          if (!productsVisible) {
              section.scrollIntoView({ behavior: "smooth", block: "start" });
              productsVisible = true;
          }
      } else {
          section.style.display = "none";   // Hide the product section
      }
  });

  // Display message if no products match the selected category (optional)
  if (!productsVisible) {
      alert("No products found for the selected category.");
  }
}


function searchProduct() {
  // Get the search keyword
  const keyword = document.querySelector("#productSearch").value.trim();

  // Check if the search field is empty
  if (keyword === "") {
      alert("Please enter a search keyword.");
      return; // Exit the function if the input is empty
  }

  // Get all product elements (assuming each product has a class 'product' and a 'data-name' attribute)
  const products = document.querySelectorAll(".product-card");

  // Flag to check if a match was found
  let matchFound = false;

  // Loop through each product to check for keyword match
  products.forEach((product) => {
    const productName = product.getAttribute("data-name"); // Assuming product name is stored in data-name

    // Check if the keyword matches the product name
    if (productName.includes(keyword)) {
      // Get the product details (you can modify these based on your HTML structure)
      const productDescription = product.getAttribute("data-description");
      const productPrice = product.getAttribute("data-price");
      const productImage = product.getAttribute("data-image"); // Get the image URL

      // Fill modal with product details
      document.getElementById("modalProductName").innerText = productName;
      document.getElementById("modalProductDescription").innerText = productDescription;
      document.getElementById("modalProductPrice").innerText = productPrice;
      document.getElementById("modalProductImage").src = productImage; // Set the image URL in the modal

      // Display the modal
      document.getElementById("productModal").style.display = "block";

      // Set match found to true
      matchFound = true;
    }
  });

  // Display message if no match found
  if (!matchFound) {
    alert("No matching product found.");
  }
}

// Add event listener for Enter key in the search input field
document.querySelector("#productSearch").addEventListener("keypress", function(event) {
  // Check if the Enter key (key code 13) is pressed
  if (event.key === "Enter") {
      searchProduct(); // Call the searchProduct function
  }
});

// Close the modal when the user clicks on the close button
document.querySelector(".close-btn").addEventListener("click", function() {
  document.getElementById("productModal").style.display = "none";
});

// // Close the modal if the user clicks anywhere outside the modal content
// window.onclick = function(event) {
//   if (event.target == document.getElementById("productModal")) {
//       document.getElementById("productModal").style.display = "none";
//   }
// }

