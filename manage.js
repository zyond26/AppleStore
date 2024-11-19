 // Mannage //

// Danh sách sản phẩm
let products = [];
let productIdCounter = 1;

// Thêm sản phẩm
document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const productId = document.getElementById("productId").value;
    const productName = document.getElementById("productName").value;
    const productDescription = document.getElementById("productDescription").value;
    const productImportDate = document.getElementById("productImportDate").value;
    const productPrice = document.getElementById("productPrice").value;
    const productCategory = document.getElementById("productCategory").value;

    if (productId) {
        // Cập nhật sản phẩm
        const product = products.find(p => p.id === parseInt(productId));
        product.name = productName;
        product.description = productDescription;
        product.importDate = productImportDate;
        product.price = productPrice;
        product.category = productCategory;
    } else {
        // Thêm sản phẩm mới
        const newProduct = {
            id: productIdCounter++,
            name: productName,
            description: productDescription,
            importDate: productImportDate,
            price: productPrice,
            category: productCategory
        };
        products.push(newProduct);
    }

    document.getElementById("productForm").reset();
    displayProducts();
});

// Hiển thị danh sách sản phẩm
function displayProducts() {
    const tbody = document.getElementById("productTable").getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";
    products.forEach(product => {
        const row = tbody.insertRow();
        row.insertCell(0).innerText = product.id;
        row.insertCell(1).innerText = product.name;
        row.insertCell(2).innerText = product.description;
        row.insertCell(3).innerText = product.importDate;
        row.insertCell(4).innerText = product.price;
        row.insertCell(5).innerText = product.category;
        const actionCell = row.insertCell(6);
        actionCell.innerHTML = `<button class="edit" onclick="editProduct(${product.id})">Edit</button>
                                <button class="delete" onclick="deleteProduct(${product.id})">Delete</button>`;
    });
}

// Chỉnh sửa sản phẩm
function editProduct(id) {
    const product = products.find(p => p.id === id);
    document.getElementById("productId").value = product.id;
    document.getElementById("productName").value = product.name;
    document.getElementById("productDescription").value = product.description;
    document.getElementById("productImportDate").value = product.importDate;
    document.getElementById("productPrice").value = product.price;
    document.getElementById("productCategory").value = product.category;
}

// Xóa sản phẩm
function deleteProduct(id) {
    products = products.filter(p => p.id !== id);
    displayProducts();
}