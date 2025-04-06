import React from 'react'
import '../Style/View_List_Main.css'

export const View_List_Main = () => {
  return (
    <div className="Container_List_Main">
      <div className="Container_List">
        <div className="Logo_Main">
          <div className="Logo_Main_Img"></div>
          <p className="Logon_Main_Text">Puppet Abyss</p>
        </div>
        <ul className="List_Main">
          <li>Home</li>
          <li>Sing Up</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  )
}

