// カート
let cart = JSON.parse(localStorage.getItem("cart")) || [];


// カートに入れるボタン
const cartButtons = document.querySelectorAll(".add-cart");


// カートの数字
const cartCount = document.getElementById("cart-count");
cartCount.textContent = cart.length;


// ボタンを全部取得
cartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // 商品情報を取得
        const name = button.dataset.name;
        const price = Number(button.dataset.price);


        // カートに追加
        // すでにカートにある商品を探す
const existingItem = cart.find(function(item) {
    return item.name === name;
});

if (existingItem) {

    // すでにあるなら数量を1増やす
    existingItem.quantity += 1;

} else {

    // なければ新しく追加
    cart.push({
        name: name,
        price: price,
        quantity: 1
    });

}

        localStorage.setItem("cart", JSON.stringify(cart));


        // カートの個数を表示
        cartCount.textContent = cart.length;


        // メッセージ
        alert(name + "をカートに追加しました！");

    });

});
