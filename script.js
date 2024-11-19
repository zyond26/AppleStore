document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function (event) {
    // Hiển thị màn hình loading
    document.getElementById("loading").style.display = "flex";

    // Tạm dừng 200ms để loading có thể hiển thị, sau đó chuyển trang
    setTimeout(function () {
      window.location.href = link.href;
    }, 1500); // Chờ 200ms trước khi chuyển trang

    event.preventDefault(); // Ngừng việc chuyển trang ngay lập tức

    // Ẩn loading sau 2 giây nếu trang chưa chuyển
    setTimeout(function () {
      document.getElementById("loading").style.display = "none";
    }, 1500); // Chờ 2 giây trước khi ẩn loading
  });
});

// Lấy phần tử Log Out
const logoutLink = document.getElementById("logout");

// Thêm sự kiện click để xử lý đăng xuất
logoutLink.addEventListener("click", function (event) {
  event.preventDefault(); // Ngăn chuyển hướng mặc định
  // Thực hiện đăng xuất (nếu có yêu cầu đặc biệt với backend thì gọi thêm ở đây)

  window.location.href = "home.html";
});

// // index //
// let currentIndex = 0;
// const totalSlides = document.querySelectorAll('.slide').length - 1; // Trừ bản sao cuối

// function showSlide(index) {
//     const slides = document.querySelector('.slides');
//     const dots = document.querySelectorAll('.dot');

//     slides.style.transition = 'transform 0.5s ease';
//     slides.style.transform = `translateX(-${index * 100}%)`;
//     currentIndex = index;

//     dots.forEach(dot => dot.classList.remove('active'));
//     dots[currentIndex]?.classList.add('active');

//     if (index === totalSlides) {
//         setTimeout(() => {
//             slides.style.transition = 'none';
//             slides.style.transform = 'translateX(0%)';
//             currentIndex = 0;
//             dots.forEach(dot => dot.classList.remove('active'));
//             dots[currentIndex]?.classList.add('active');
//         }, 500);
//     }
// }

// function nextSlide() {
// showSlide(currentIndex + 1);
// }

// function prevSlide() {
// if (currentIndex === 0) {
//         currentIndex = totalSlides;
//         document.querySelector('.slides').style.transition = 'none';
//         document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}%)`;
//         setTimeout(() => {
//         showSlide(currentIndex - 1);
//     }, 50);
//     } else {
// showSlide(currentIndex - 1);
//     }
// }

// // Tự động chuyển slide
// setInterval(nextSlide, 3000);

// function currentSlide(index) {
//     showSlide(index);
// }

// Mannage //

// // Danh sách sản phẩm
// let products = [];
// let productIdCounter = 1;

// // Thêm sản phẩm
// document.getElementById("productForm").addEventListener("submit", function(event) {
//     event.preventDefault();

//     const productId = document.getElementById("productId").value;
//     const productName = document.getElementById("productName").value;
//     const productDescription = document.getElementById("productDescription").value;
//     const productImportDate = document.getElementById("productImportDate").value;
//     const productPrice = document.getElementById("productPrice").value;
//     const productCategory = document.getElementById("productCategory").value;

//     if (productId) {
//         // Cập nhật sản phẩm
//         const product = products.find(p => p.id === parseInt(productId));
//         product.name = productName;
//         product.description = productDescription;
//         product.importDate = productImportDate;
//         product.price = productPrice;
//         product.category = productCategory;
//     } else {
//         // Thêm sản phẩm mới
//         const newProduct = {
//             id: productIdCounter++,
//             name: productName,
//             description: productDescription,
//             importDate: productImportDate,
//             price: productPrice,
//             category: productCategory
//         };
//         products.push(newProduct);
//     }

//     document.getElementById("productForm").reset();
//     displayProducts();
// });

// // Hiển thị danh sách sản phẩm
// function displayProducts() {
//     const tbody = document.getElementById("productTable").getElementsByTagName("tbody")[0];
//     tbody.innerHTML = "";
//     products.forEach(product => {
//         const row = tbody.insertRow();
//         row.insertCell(0).innerText = product.id;
//         row.insertCell(1).innerText = product.name;
//         row.insertCell(2).innerText = product.description;
//         row.insertCell(3).innerText = product.importDate;
//         row.insertCell(4).innerText = product.price;
//         row.insertCell(5).innerText = product.category;
//         const actionCell = row.insertCell(6);
//         actionCell.innerHTML = `<button onclick="editProduct(${product.id})">Sửa</button>
//                                 <button onclick="deleteProduct(${product.id})">Xóa</button>`;
//     });
// }

// // Chỉnh sửa sản phẩm
// function editProduct(id) {
//     const product = products.find(p => p.id === id);
//     document.getElementById("productId").value = product.id;
//     document.getElementById("productName").value = product.name;
//     document.getElementById("productDescription").value = product.description;
//     document.getElementById("productImportDate").value = product.importDate;
//     document.getElementById("productPrice").value = product.price;
//     document.getElementById("productCategory").value = product.category;
// }

// // Xóa sản phẩm
// function deleteProduct(id) {
//     products = products.filter(p => p.id !== id);
//     displayProducts();
// }

function handleFormSubmit(event) {
  event.preventDefault(); // Ngăn chặn gửi form

  // Lấy các giá trị của các trường từ form
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const notification = document.getElementById("notification");

  // Kiểm tra ràng buộc cho các trường
  if (name === "") {
    alert("Please enter your name.");
    return;
  }

  if (email === "") {
    alert("Please enter your email.");
    return;
  } else if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (message === "") {
    alert("Please enter your message.");
    return;
  }

  // Nếu tất cả các trường hợp hợp lệ, hiển thị thông báo
  notification.style.display = "block";
  alert("Your message has been sent successfully!");

  // Reset form sau khi gửi
  event.target.reset();
}

// Hàm kiểm tra định dạng email
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Mẫu email đơn giản
  return emailPattern.test(email);
}

// Gán sự kiện submit vào form
document
  .getElementById("contactForm")
  .addEventListener("submit", handleFormSubmit);

/* Reponsive cho Phone */
function toggleMenu() {
  var menu = document.getElementById("nav-menu");
  menu.classList.toggle("active");
}
