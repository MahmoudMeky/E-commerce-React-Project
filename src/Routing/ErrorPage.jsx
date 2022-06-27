import React from 'react'
import { NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ErrorPage() {




  return (
    <div className='row m-0 align-items-center mt-5 flex-column' style={{ height: "calc(100vh - 70px)", overflow: "hidden" }}>
      <div className='col-12 text-center w-75  p-2 p-md-4 p-lg-5 d-flex flex-column gap-2 align-items-center' style={{ height: "700px" }}>
        <img src="/404/404_lg.svg" className='d-none  d-sm-block image-fluid' style={{ width: "100%", maxHeight: "100%", objectFit: "contain" }} alt="Error 404 - Page Not Found" />
        <div className='d-block  d-sm-none row'>
          <img src="/404/404-sm.svg" className=' image-fluid' style={{ width: "100%", objectFit: "contain" }} alt="Error 404 - Page Not Found" />
          <h4 className='mt-3' >404 - Page not found</h4>
        </div>

        <Link to="/home" className='btn btn-danger'>Go Back!</Link>
      
      </div>
    </div>
  )
}
