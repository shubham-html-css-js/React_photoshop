import React from 'react'

function SidebarItem(props) {
return <button className={`sidebar-item ${props.active?'active':''}`} onClick={props.handleclick}>{props.name}</button>
}

export default SidebarItem
