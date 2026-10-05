import { NavLink, Outlet } from 'react-router'

export const RootLayout = ()=> {
  return (
    <>
      <nav>
        <NavLink to="/" end>Сегодня</NavLink>
        <NavLink to="/tasks">Все задачи</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}