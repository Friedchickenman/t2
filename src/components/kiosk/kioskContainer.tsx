import MenuComponent from "./menuComponent.tsx";
import CartComponent from "./CartComponent.tsx";

function KioskContainer() {

    const menuArr: Menu[] = [
        {mno: 1, name: 'Drip Coffee', price:4000, imgName:'M1.jpg', category:'C', show:true},
        {mno: 2, name: 'Latte', price:5000, imgName:'M2.jpg', category:'C', show:true},
        {mno: 3, name: 'Apple Cake', price:7000, imgName:'M3.jpg', category:'D', show:true},
        {mno: 4, name: 'Key Ring', price:3000, imgName:'M4.jpg', category:'G', show:true},
    ]

    //메뉴 컴포넌트에서 특정 메뉴를 클릭했을때 호출하는 함수
    const addCart = (mno: number) => {
        console.log(mno)
    }


    return (
        <div className={'flex h-full'}>

            <div className={'w-2/3 h-full bg-orange-300 p-10'}>
            <MenuComponent menus={menuArr} addCart={addCart}></MenuComponent>
            </div>

            <div className={'w-2/3 h-full bg-green-300 p-10'}>
            <CartComponent></CartComponent>
            </div>

        </div>
    );
}

export default KioskContainer;