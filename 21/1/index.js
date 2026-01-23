// ===== CÂU 1 =====
// Constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// ===== CÂU 2 =====
// Mảng products (ít nhất 6 sản phẩm, ít nhất 2 danh mục)
const products = [
    new Product(1, "iPhone 15 Pro", 35000000, 5, "Electronics", true),
    new Product(2, "MacBook Air M2", 28000000, 0, "Electronics", false),
    new Product(3, "AirPods Pro", 6000000, 10, "Accessories", true),
    new Product(4, "Apple Watch S9", 12000000, 3, "Accessories", true),
    new Product(5, "Logitech MX Master 3", 2500000, 7, "Accessories", true),
    new Product(6, "Samsung S24 Ultra", 34000000, 2, "Electronics", true),
];

// ===== CÂU 3 =====
// Tạo mảng mới chỉ chứa name và price
console.log("----- CÂU 3 -----");
const namePriceArr = products.map(p => ({
    name: p.name,
    price: p.price
}));
console.log(namePriceArr);

// ===== CÂU 4 =====
// Lọc sản phẩm còn hàng (quantity > 0)
console.log("----- CÂU 4 -----");
const inStockProducts = products.filter(p => p.quantity > 0);
console.log(inStockProducts);

// ===== CÂU 5 =====
// Kiểm tra có ít nhất 1 sản phẩm giá > 30.000.000 không
console.log("----- CÂU 5 -----");
const hasOver30m = products.some(p => p.price > 30000000);
console.log(hasOver30m);

// ===== CÂU 6 =====
// Kiểm tra tất cả sản phẩm thuộc danh mục "Accessories" có đang bán không
console.log("----- CÂU 6 -----");
const accessoriesProducts = products.filter(p => p.category === "Accessories");
const allAccessoriesAvailable = accessoriesProducts.every(p => p.isAvailable === true);
console.log(allAccessoriesAvailable);

// ===== CÂU 7 =====
// Tính tổng giá trị kho hàng
console.log("----- CÂU 7 -----");
const totalInventoryValue = products.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0
);
console.log(totalInventoryValue.toLocaleString("vi-VN") + " VND");

// ===== CÂU 8 =====
// Dùng for...of in ra: Tên – Danh mục – Trạng thái
console.log("----- CÂU 8 -----");
for (const p of products) {
    console.log(
        `${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}`
    );
}

// ===== CÂU 9 =====
// Dùng for...in in ra tên thuộc tính và giá trị tương ứng
console.log("----- CÂU 9 -----");
for (const p of products) {
    console.log("---- Product ----");
    for (const key in p) {
        console.log(key + ":", p[key]);
    }
}

// ===== CÂU 10 =====
// Lấy danh sách tên sản phẩm đang bán và còn hàng
console.log("----- CÂU 10 -----");
const sellingAndInStockNames = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);

console.log(sellingAndInStockNames);
