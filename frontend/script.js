// カート
let cart = [];


// カートに入れるボタン
const cartButtons = document.querySelectorAll(".add-cart");


// カートの数字
const cartCount = document.getElementById("cart-count");


// ボタンを全部取得
cartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // 商品情報を取得
        const name = button.dataset.name;
        const price = Number(button.dataset.price);


        // カートに追加
        cart.push({
            name: name,
            price: price
        });


        // カートの個数を表示
        cartCount.textContent = cart.length;


        // メッセージ
        alert(name + "をカートに追加しました！");

    });

});