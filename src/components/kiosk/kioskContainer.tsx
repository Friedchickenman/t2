import MenuComponent from "./menuComponent.tsx";
import CartComponent from "./CartComponent.tsx";

function KioskContainer() {

    const menuArr: Menu[] = [
        {mno: 1, name: 'Drip Coffee', price:4000, imgName:'M1.jpg', category:'C'},
        {mno: 2, name: 'Latte', price:5000, imgName:'M2.jpg', category:'C'},
        {mno: 3, name: 'Apple Cake', price:7000, imgName:'M3.jpg', category:'D'},
        {mno: 4, name: 'Key Ring', price:3000, imgName:'M4.jpg', category:'G'},
    ]

    console.log(menuArr)

    return (
        <div className={'flex h-full'}>

            <div className={'w-2/3 h-100 bg-orange-300 p-10'}>
            <MenuComponent menus={menuArr}></MenuComponent>
            </div>

            <div className={'w-2/3 h-100 bg-green-300 p-10'}>
            <CartComponent></CartComponent>
            </div>

        </div>
    );
}

export default KioskContainer;