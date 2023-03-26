import React from 'react'

import SidebarMenu from './SidebarMenu'
import SidebarFooter from './SidebarFooter'


export default function SidebarNav() {
    return (
        <div className='sidebar-nav'>
            <SidebarMenu />
            <SidebarFooter />
        </div>
    )
}
