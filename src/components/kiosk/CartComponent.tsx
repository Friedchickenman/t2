import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';

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

interface CartComponentProps {
    cartItems: CartItem[];
    changeCart: (mno:number, amount:number, del?:boolean) => void;
}

function CartComponent({cartItems, changeCart} : CartComponentProps) {
    const total = cartItems.reduce((sum, {menu, qty}) => sum + menu.price * qty, 0);

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 pb-4">Cart</h1>

            <div className="flex-grow overflow-y-auto">
                {cartItems.length === 0 ? (
                    <div className="text-center text-gray-500 mt-10">
                        <p className="text-xl">Your cart is empty.</p>
                    </div>
                ) : (
                    <ul className="space-y-4">
                        {cartItems.map(({menu, qty}) => (
                            <li key={menu.mno} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm">
                                <div className="flex items-center">
                                    <img src={menu.imgName} alt={menu.name} className="w-16 h-16 object-cover rounded-md mr-4" />
                                    <div>
                                        <h2 className="text-lg font-semibold text-gray-800">{menu.name}</h2>
                                        <p className="text-gray-600">{menu.price.toLocaleString()}원 x {qty}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button
                                        className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition duration-300"
                                        onClick={() => changeCart(menu.mno, 1)}
                                    >
                                        <FaPlus />
                                    </button>
                                    <button
                                        className="p-2 rounded-full bg-yellow-500 text-white hover:bg-yellow-600 transition duration-300"
                                        onClick={() => changeCart(menu.mno, -1)}
                                    >
                                        <FaMinus />
                                    </button>
                                    <button
                                        className="p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition duration-300"
                                        onClick={() => changeCart(menu.mno, 0, true)}
                                    >
                                        <FaTrash />
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="mt-6 pt-6 border-t-2">
                <div className="flex justify-between items-center text-2xl font-bold">
                    <span className="text-gray-800">TOTAL:</span>
                    <span className="text-green-600">{total.toLocaleString()}원</span>
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
                    Checkout
                </button>
            </div>
        </div>
    );
}

export default CartComponent;