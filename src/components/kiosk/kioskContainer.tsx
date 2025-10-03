import MenuComponent from "./menuComponent.tsx";
import CartComponent from "./CartComponent.tsx";
import {useState} from "react";

// Define the Menu and CartItem types if they are not globally defined
interface Menu {
    mno: number;
    name: string;
    price: number;
    imgName: string;
    category: string;
}

interface CartItem {
    menu: Menu;
    qty: number;
}

function KioskContainer() {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const menuArr: Menu[] = [
        {mno: 1, name: 'Drip Coffee', price: 4000, imgName: 'https://images.unsplash.com/photo-1512568400610-62da2848a094?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'C'},
        {mno: 2, name: 'Latte', price: 5000, imgName: 'https://images.unsplash.com/photo-1561882468-91101f2e5f87?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'C'},
        {mno: 3, name: 'Apple Cake', price: 7000, imgName: 'https://images.unsplash.com/photo-1621994153198-21c610480434?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'D'},
        {mno: 4, name: 'Key Ring', price: 3000, imgName: 'https://images.unsplash.com/photo-1583573636257-6931585def5a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'G'}
    ];

    const addCart = (mno: number) => {
        const targetMenu = menuArr.find(menu => menu.mno === mno);
        if (!targetMenu) return;

        const existingCartItem = cartItems.find(item => item.menu.mno === mno);

        if (existingCartItem) {
            setCartItems(cartItems.map(item =>
                item.menu.mno === mno ? { ...item, qty: item.qty + 1 } : item
            ));
        } else {
            setCartItems([...cartItems, { menu: targetMenu, qty: 1 }]);
        }
    };

    const changeCart = (mno: number, amount: number, del: boolean = false) => {
        if (del) {
            setCartItems(cartItems.filter(item => item.menu.mno !== mno));
            return;
        }

        const updatedCartItems = cartItems.map(item => {
            if (item.menu.mno === mno) {
                const newQty = item.qty + amount;
                return newQty > 0 ? { ...item, qty: newQty } : null;
            }
            return item;
        }).filter((item): item is CartItem => item !== null);

        setCartItems(updatedCartItems);
    };

    return (
        <div className={'flex h-screen bg-gray-100 font-sans'}>
            <div className={'w-3/5 p-4'}>
                <MenuComponent menus={menuArr} addCart={addCart} />
            </div>
            <div className={'w-2/5 p-4'}>
                <CartComponent cartItems={cartItems} changeCart={changeCart} />
            </div>
        </div>
    );
}

export default KioskContainer;