import React from 'react'
function Cards({item}) {
  return (
      <>
          <div className='my-3 p-3 px-8'>
              <div className="card bg-base-100 w-92 shadow-xl hover: scale-105 duration-150 bg dark:bg-slate-900 dark:text-white">
                  <figure>
                      <img className='rounded-lg'
                          src={window.location.origin+item.image}
                          alt="Shoes" />
                  </figure>
                  <div className="card-body">
                      <div className="flex justify-between items-center">
                          <h2 className="card-title">
                              {item.title}
                          </h2>
                          <div className="badge badge-secondary">NEW</div>
                      </div>

                      {/* <h2 className="card-title justify-center">
                          {item.title}
                          <div className="badge badge-secondary">NEW</div>
                      </h2> */}
                      <h3>{item.author}</h3>
                      
                      <div className="card-actions justify-between">
                          <div className="badge badge-outline cursor-pointer hover:bg-pink-600">{item.category}</div>
                          <div className="badge badge-outline ">{item.price}$</div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Cards
