import React from 'react'

const Chatting = (props) => {
  return (
    <form className='g-bg-white g-brd-around g-brd-gray-light-v4 g-pa-30 g-mb-30' action='#'>
      <div className='media g-mb-30 g-mr-50'>
        <div className='media-body u-shadow-v22 g-bg-secondary g-pa-30'>
          <div className='g-mb-15'>
            <h5 className='d-flex justify-content-between align-items-center h5 g-color-gray-dark-v1 mb-0'>
              <span className='d-block g-mr-10'>James Coolman</span>
            </h5>
            <span className='g-color-gray-dark-v4 g-font-size-12'>2 days ago</span>
          </div>

          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
      felis in faucibus ras purus odio, vestibulum in vulputate at, tempus viverra turpis.
          </p>
        </div>
      </div>

      <div className='media g-ml-40 g-mb-50'>
        <div className='media-body u-shadow-v22 g-bg-secondary g-pa-30'>
          <div className='g-mb-15'>
            <h5 className='h5 g-color-gray-dark-v1 mb-0'>Alberta Watson</h5>
            <span className='g-color-gray-dark-v4 g-font-size-12'>6 hours ago</span>
          </div>

          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
      felis in faucibus ras purus odio, vestibulum in vulputate at, tempus viverra turpis.
          </p>

        </div>
      </div>

      <div className='media g-mb-30 g-mr-50'>
        <div className='media-body u-shadow-v22 g-bg-secondary g-pa-30'>
          <div className='g-mb-15'>
            <h5 className='h5 g-color-gray-dark-v1 mb-0'>David Lee</h5>
            <span className='g-color-gray-dark-v4 g-font-size-12'>5 days ago</span>
          </div>

          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
      felis in faucibus ras purus odio, vestibulum in vulputate at, tempus viverra turpis.
          </p>
        </div>
      </div>
      <div className='row g-mb-5'>
        <div className='col-lg-6'>
          <div className='input-group'>
            <input type='text' className='form-control rounded-0 form-control-md' placeholder='Type sonething...' />
            <div className='input-group-append'>
              <button className='btn btn-md u-btn-cyan rounded-0' type='button'>Go!</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Chatting
