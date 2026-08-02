import React, { useEffect } from 'react'
import Url from './Url'
import Displayurl from './Displayurl'
import Navbar from './Navbar'
const Home = ({url}) => {
return (
    <div>
      <Navbar url={url}/>
      <div className='mt-20'>
      <Url url={url}/>
      <Displayurl url={url}/>
      </div>
      
    </div>
  )
}

export default Home
