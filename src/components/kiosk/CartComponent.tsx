

interface CartComponentProps {

    cartItems: CartItem[]

}

function CartComponent({cartItems} : CartComponentProps) {

    console.log(cartItems)

    const lis = cartItems.map(({menu, qty}:CartItem) =>
    <li key={menu.mno}>
        {menu.name} - {menu.price} - {qty}
    </li>)

    return (
        <div>
            <div>Cart</div>

            <div>
                <ul>
                    {lis}
                </ul>
            </div>
        </div>
    );
}

export default CartComponent;