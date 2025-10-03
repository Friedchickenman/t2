

interface CartComponentProps {

    cartItems: CartItem[]

}

function CartComponent({cartItems} : CartComponentProps) {

    let total = 0

    const lis = cartItems.map(({menu, qty}:CartItem) => {

        total += menu.price * qty

    return (
        <li key={menu.mno}>
        {menu.name} - {menu.price} - {qty}
    </li>
    )
})

    return (
        <div>
            <div>Cart</div>

            <div>
                <ul>
                    {lis}
                </ul>
            </div>

            <div>
                TOTAL: {total}
            </div>
        </div>
    );
}

export default CartComponent;