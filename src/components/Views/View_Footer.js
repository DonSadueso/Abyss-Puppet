import React from 'react'
import '../Style/View_Footer.css';

export default function View_Footer() {
  return (
    <div className='Container_Footer'>
      <div className='Footer_List'>
        <div className='Footer_List_Services List'>
            <p>SERVICES</p>
            <ul>
                <li>Lorem</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem</li>
                <li>Lorem ipsum</li>
            </ul>
        </div>
        <div className='Footer_List_Products List'>
            <p>PRODUCTS</p>
            <ul>
                <li>Lorem</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem</li>
                <li>Lorem ipsum</li>
            </ul>
        </div>
        <div className='Footer_List_Account List'>
            <p>ACCOUNT</p>
            <ul>
                <li>Lorem</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem</li>
                <li>Lorem ipsum</li>
            </ul>
        </div>
        <div className='Footer_List_Newsletter List'>
            <p>NEWSLETTER</p>
            <ul>
                <li>Lorem</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum dolor</li>
            </ul>
            <input placeholder='Enter your Email'></input>
        </div>
      </div>
    </div>
  )
}
