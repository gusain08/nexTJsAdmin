import Image from 'next/image'
import Sidebar from './sidebar/Sidebar'
import Dashboard from './homepage/Dashboard' 
import styles from './page.module.css'

export default function Home() {
  return (
    <>
    <div className='layoutSidenav'>
      <Sidebar/>
      <Dashboard/>
    </div>      
    </>
  )
}
