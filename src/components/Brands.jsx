import React from 'react'
import './Brands.css'

import br1 from '../assets/br1.svg'
import br2 from '../assets/br2.svg'
import br3 from '../assets/br3.svg'
import br4 from '../assets/br4.svg'
import br5 from '../assets/br5.svg'
import br6 from '../assets/br6.svg'

const Brands = () => {
  return (
    <div className='brands'>
      <div>
        <img src={br1} />
      </div>
      <div>
        <img src={br2} />
      </div>
      <div>
        <img src={br3} />
      </div>
      <div>
        <img src={br4} />
      </div>
      <div>
        <img src={br5} />
      </div>
      <div>
        <img src={br6} />
      </div>
    </div>
  )
}

export default Brands
