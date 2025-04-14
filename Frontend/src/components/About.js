import React from 'react'

export default function About() {
  return (
    <div className='container-fluid p-5'>
        <h1 className='home'>Inventory Management System - MERN CRUD App</h1>
        <div className='box1'>
          <p className='overview'>This project is a full-stack Inventory Management System built with the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to perform full CRUD (Create, Read, Update, Delete) operations on inventory items. The system helps track products, their quantities, descriptions, and categories in an organized dashboard, providing an efficient way to manage stock for small to medium-sized businesses.</p>
        </div>
        <div>
          <ul>
          🗂️ Functionalities:
          <li>
           Add New Items: Input name, quantity, category, description
          </li>
          <li> Update Items: Modify details of existing products</li>
           <li>Delete Items: Remove products from inventory</li>
           <li>View All Items: Paginated and searchable product table</li>
          </ul>
        </div>
        <p className='auother'>
        <b>By Ashfak Khan</b>
        </p>
        
    </div>
  )
}
