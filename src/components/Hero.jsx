import React from 'react'

function Hero() {
  return (
    <div className='hero'>
        <img src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Hero from freepik"/>
        <div  className='hero-btns'>
            <button className='btn btn-primary'>Explore</button>
            <button className='btn btn-secondary'>Visit</button>
        </div>
    </div>
  )
}

export default Hero