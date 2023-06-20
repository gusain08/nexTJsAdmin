import React from 'react'
import Styledash from './dashboard.module.css'
import Cards from './Cards'
const Dashboard = () => {
  return (
    <>
  <div className={Styledash.layoutSidenav_content}>
  <main>
  <div className="container-fluid px-4">
  <h1 class="mt-4">Dashboard</h1>
  <ol class="breadcrumb mb-4">
    <li class="breadcrumb-item active">Dashboard</li>
    </ol>
    <div className="row">
      <Cards title='Primary Card' color="#0d6efd"/>
      <Cards title='Warning Card' color="#ffc107"/>
      <Cards title='Success Card' color="#198754"/>
      <Cards title='Danger Card' color="#dc3545"/>
    </div>
  </div>                
  </main>
  </div>
</>

   
  )
}

export default Dashboard