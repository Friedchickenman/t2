import {useState} from "react";

interface Menu {
    mno: number;
    name: string;
    price: number;
    imgName: string;
    category: string;
}

interface MenuComponentProps {
    menus: Menu[],
    addCart: (mno:number) => void
}

function MenuComponent( {menus, addCart} : MenuComponentProps) {
    const [cat, setCat] = useState('A')

    const categories = [
        { key: 'A', name: 'All' },
        { key: 'C', name: 'Coffee' },
        { key: 'D', name: 'Desserts' },
        { key: 'G', name: 'Goods' }
    ];

    const targetMenus = menus.filter(menu => cat === 'A' || menu.category === cat);

    const handleClick = (mno:number) => {
        if(confirm('장바구니에 추가하시겠습니까?')) {
            addCart(mno);
        }
    }

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Menus</h1>
            <div className="flex space-x-2 mb-6 border-b-2 border-gray-200">
                {categories.map(category => (
                    <button
                        key={category.key}
                        className={`px-4 py-2 rounded-t-lg font-semibold text-lg transition duration-300 ${cat === category.key ? 'bg-amber-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-amber-400 hover:text-white'}`}
                        onClick={() => setCat(category.key)}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 overflow-y-auto">
                {targetMenus.map(menu => (
                    <div
                        onClick={() => handleClick(menu.mno)}
                        key={menu.mno}
                        className="bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                    >
                        <img src={menu.imgName} alt={menu.name} className="w-full h-48 object-cover" />
                        <div className="p-4 text-center">
                            <h2 className="text-xl font-semibold text-gray-800">
                                {menu.name}
                            </h2>
                            <p className="text-gray-700 mt-2 text-lg font-bold">
                                {menu.price.toLocaleString()}원
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MenuComponent;