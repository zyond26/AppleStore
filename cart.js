// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Hàm để thêm sản phẩm vào giỏ hàng
function addToCart(name, price, image) {
    // Kiểm tra nếu sản phẩm đã tồn tại trong giỏ hàng
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        // Tăng số lượng nếu sản phẩm đã có
        existingItem.quantity += 1;
    } else {
        // Thêm sản phẩm mới với số lượng là 1
        cart.push({ name, price, image, quantity: 1 });
    }

    // Lưu cart vào localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${name} added to cart!`);
    updateCartTotal();
    updateCartQuantity();
}

// Hàm để cập nhật tổng số lượng sản phẩm hiển thị trên thông báo nổi
function updateCartQuantity() {
    const cartQuantityBadge = document.getElementById("cartQuantityBadge");

    // Tính tổng số lượng sản phẩm
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // Cập nhật nội dung của thẻ thông báo
    cartQuantityBadge.textContent = totalQuantity;

    // Ẩn/hiện thẻ thông báo dựa trên số lượng
    cartQuantityBadge.style.display = totalQuantity > 0 ? "block" : "none";
}

// Hàm để mở/đóng modal giỏ hàng
function toggleCartModal() {
    const cartModal = document.getElementById("cartModal");
    const overlay = document.querySelector(".overlay");
    const cartItems = document.getElementById("cartItems");

    // Xóa nội dung hiện có trong danh sách sản phẩm giỏ hàng
    cartItems.innerHTML = "";

    // Tải lại giỏ hàng từ localStorage
    cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Thêm các sản phẩm từ giỏ hàng vào danh sách
    cart.forEach(item => {
        const li = document.createElement("li");
        li.className = "cart-item";
        li.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <span>${item.name}</span> - $${item.price} x ${item.quantity}
        `;
        cartItems.appendChild(li);
    });

    // Chuyển đổi trạng thái hiển thị của modal
    const isDisplayed = cartModal.style.display === "block";
    cartModal.style.display = isDisplayed ? "none" : "block";
    overlay.style.display = isDisplayed ? "none" : "block";
}

// Hàm để cập nhật tổng giá trị giỏ hàng
function updateCartTotal() {
    const cartTotal = document.getElementById("cartTotal");

    // Tính tổng giá trị
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotal.textContent = total.toFixed(2);
}

// Hàm xử lý khi nhấn nút "Check"
function checkout() {
    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }

    // Thông báo thanh toán thành công
    alert("Checkout Successful!");

    // Làm mới giỏ hàng
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart)); // Cập nhật lại localStorage

    updateCartTotal(); // Cập nhật lại tổng giá trị giỏ hàng
    updateCartQuantity(); // Cập nhật số lượng sản phẩm hiển thị
    toggleCartModal(); // Đóng modal giỏ hàng
}

// Gọi updateCartTotal và updateCartQuantity để khởi tạo tổng giá trị và số lượng khi tải trang
updateCartTotal();
updateCartQuantity();
