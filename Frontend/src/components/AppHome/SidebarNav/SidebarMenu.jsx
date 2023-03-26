import React, { useEffect, useState } from 'react'

import { sidebarMenuService } from '../../../services/sidebarMenuService'

export default function SidebarMenu() {

    const [menus, setMenus] = useState([])

    useEffect(() => {
        const loadMenu = async () => {
            const menus = await sidebarMenuService.query()
            setMenus(menus)
        }
        loadMenu()
    }, [])

    return (
        <ul className='sidebar-menu'>

            {menus.map(menu =>
                <li className='sidebar-item' key={menu.id}>
                    <div className='sidebar-icon-holder flex auto-center'>
                        <img src={menu.img} alt="" />
                    </div>
                    <div className='sidebar-desc flex'>{menu.desc}</div>
                </li>
            )}
        </ul>
    )
}
