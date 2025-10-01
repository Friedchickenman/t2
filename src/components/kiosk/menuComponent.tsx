
interface MenuComponentProps {

    menus: Menu[]

}

function MenuComponent( {menus} : MenuComponentProps) {

    const menuLis = menus.map( menu =>
        <li key={menu.mno}>
            {menu.name} -- {menu.price}
        </li>
    )

    return (
        <div>
            <div>Menus</div>
            <ul>
                {menuLis}
            </ul>
        </div>
    );
}

export default MenuComponent;