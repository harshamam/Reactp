// src/components/MenuBar.js



function MenuBar({ items }) {
    return (
        <ul className="menu-bar">
            {items.map((item) => (
                <li key={item.id}>
                    <a href={`#${item.id}`}>{item.name}</a>
                    {item.child && (
                        <ul className="submenu">
                            {item.child.map((subItem) => (
                                <li key={subItem.id}>
                                    <a href={`#${subItem.id}`}>{subItem.name}</a>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default MenuBar;
