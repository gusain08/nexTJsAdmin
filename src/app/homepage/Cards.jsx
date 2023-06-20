import React from 'react'

const Cards = (props) => {
  return (
    <>
   <div className="col-xl-3 col-md-6">
    <div className="card  text-white mb-4" style={{backgroundColor: props.color}}>
        <div className="card-body">{props.title}</div>
        <div className="card-footer d-flex align-items-center justify-content-between">
            <a className="small text-white stretched-link" href="#">
        View Details
      </a>
            <div className="small text-white">
                 {/* <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com */}
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Cards