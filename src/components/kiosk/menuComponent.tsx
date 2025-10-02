
interface MenuComponentProps {

    menus: Menu[]

}

function MenuComponent( {menus} : MenuComponentProps) {

    const menuLis = menus.map( menu =>
        <div className="max-w-xs bg-gray-50 rounded-xl shadow-xl overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition duration-300 ease-in-out">

            {/* 🖼️ 이미지 영역: 상단 둥근 모서리만 적용 */}
            <img
                src={menu.imgName}
                alt={menu.name}
                className="w-full h-48 object-cover rounded-t-xl" // rounded-t-xl로 상단만 둥글게
            />

            {/* 📝 내용 영역: 중앙 정렬, 상하 패딩 강조 */}
            <div className="p-5 text-center">

                {/* 메뉴 이름: 더 간결하고 깔끔한 폰트(text-lg) */}
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                    {menu.name}
                </h2>

                {/* 💰 가격: 강조를 위해 메인 컬러(text-indigo-600) 사용 */}
                <p className="text-3xl font-extrabold text-indigo-600 mb-4">
                    ₩{menu.price.toLocaleString()}
                </p>

                {/* ✅ 버튼: 꽉 찬 스타일, 부드러운 그림자, 호버 시 색상 및 그림자 변화 */}

            </div>
        </div>
    )

    return (
        <div>
            <div>Menus</div>
            <div className={'flex m-4 p-2'}>
                <div className={'m-2 p-2 bg-amber-500'}>Coffee</div>
                <div className={'m-2 p-2 bg-amber-500'}>Deserts</div>
                <div className={'m-2 p-2 bg-amber-500'}>Goods</div>
            </div>
            <ul className={'flex justify-center items-center'}>
                {menuLis}
            </ul>
        </div>
    );
}

export default MenuComponent;