import { Outlet } from "react-router-dom"
import { AnchorTag } from "../../ui/AnchorTag"
import { Header } from "../../ui/Header"
import { Sidebar } from "./Sidebar"

export const StaffLayout = () => {

  return (
    <>
      <Sidebar/>
      <Header
        isClient={false}
      >
        <AnchorTag
          href='/logout'
          label='logout'
          itemClassName='header__user--nav-item'
          linkClassName='header__user--nav-link'
        />
      </Header>
      <Outlet />
    </>

  )
}
