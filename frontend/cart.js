// localStorageからカート情報を取得
let cart = JSON.parse(localStorage.getItem("cart")) || [];


// 商品を表示する場所を取得
const cartItems = document.getElementById("cart-items");


// 合計金額を表示する場所を取得
const totalPrice = document.getElementById("total-price");


// 合計金額
let total = 0;


// カートの商品を1つずつ確認
cart.forEach(function(item, index) {

    // 商品を表示するHTMLを作る
    const itemElement = document.createElement("div");

    itemElement.classList.add("cart-item");

    itemElement.innerHTML = `

        <h3>${item.name}</h3>

        <p>¥${item.price.toLocaleString()}</p>

    <div>
        <button onclick="decreaseQuantity(${index})">−</button>

        <span>${item.quantity}</span>

        <button onclick="increaseQuantity(${index})">＋</button>
    </div>

    <p>小計：¥${item.price * item.quantity}</p>


         <button class="delete-button">削除</button>
    `;
    const deleteButton = itemElement.querySelector(".delete-button");
    deleteButton.addEventListener("click", function() {

    // カートから商品を削除
    cart = cart.filter(function(cartItem) {
        return cartItem !== item;
    });

    // localStorageを更新
    localStorage.setItem("cart", JSON.stringify(cart));

    // ページを再読み込み
    location.reload();

});

    // 商品を画面に追加
    cartItems.appendChild(itemElement);

    // 合計金額に追加
    total += item.price * item.quantity;

});


// 合計金額を画面に表示
totalPrice.textContent = "¥" + total.toLocaleString();

// 商品の個数を1増やす
function increaseQuantity(index) {

    cart[index].quantity += 1;

    localStorage.setItem("cart", JSON.stringify(cart));

    location.reload();
}


// 商品の個数を1減らす
function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity -= 1;

        localStorage.setItem("cart", JSON.stringify(cart));

        location.reload();

    }

}