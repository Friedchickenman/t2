import {useState} from "react";

interface MenuComponentProps {

    menus: Menu[]

}

function MenuComponent( {menus} : MenuComponentProps) {

    const [arr, setArr] = useState<Menu[]>(menus)

    const showCategory = (cat:string) => {

        if(cat === 'A') {
            arr.forEach(menu => menu.show = true)
        }else{
            arr.forEach(menu=> {
                if(menu.category === cat){
                    menu.show = true
                }else{
                    menu.show = false
                }
            })
        }
        setArr([...arr])

    }

    const menuLis = arr.map( menu => menu.show ? <div key={menu.mno} className="max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
        <img src={menu.imgName} alt={menu.name} className="w-full h-48 object-cover" />
        <div className="p-4 text-center">
            <h2 className="text-lg font-semibold text-gray-800">
                {menu.name}
            </h2>
            <p className="text-gray-600 mt-1 text-lg font-bold">
                {menu.price}
            </p>
        </div>
    </div>:<></>)

    return (
        <div>
            <div>Menus</div>
            <div className={'flex m-4 p-2'}>
                <div
                    className={'m-2 p-2 bg-amber-500'}
                    onClick={() => showCategory('A')}
                >All</div>
                <div
                    className={'m-2 p-2 bg-amber-500'}
                    onClick={() => showCategory('C')}
                >Coffee</div>
                <div
                    className={'m-2 p-2 bg-amber-500'}
                    onClick={() => showCategory('D')}
                >Deserts</div>
                <div
                    className={'m-2 p-2 bg-amber-500'}
                    onClick={() => showCategory('G')}
                >Goods</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {menuLis}
            </div>
        </div>
    );
}

export default MenuComponent;