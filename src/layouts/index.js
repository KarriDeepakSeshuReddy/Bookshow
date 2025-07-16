import React from 'react'
import{outlet} from 'react-router';
import styles from './layout.style.scss';

function Layout() {
  return (
    <main>
        {/*Header*/}

        {/*Outlet*/}
        <Outlet />

        {/*Footer*/}
    </main>
  )
}

export default Layout
