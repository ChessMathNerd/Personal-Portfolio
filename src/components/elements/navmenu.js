import "../../css/elements/navmenu.css"

const NavMenu = (props) => {
    return (
        <div className="navmenu-wrapper">
            <div className="navmenu-content-wrapper">
                <div className="navmenu-invis"></div>
                <div className="navmenu-buttons-wrapper">
                    <button className="navmenu-button navmenu-button-1">CSS</button>
                    <button className="navmenu-button navmenu-button-2">HTML</button>
                    <button className="navmenu-button navmenu-button-3">JavaScript</button>
                </div>
            </div>
        </div>
    )
}

export default NavMenu;