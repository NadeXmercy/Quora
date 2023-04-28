import React from 'react'
import Header from "./Header"

import Filter from "./Filter"
import Feed from './Feed'
import "./Quora.css"
import Widget from './Widget'

const Quora = () => {
  return (
    <>
    <div className="quora">

    <Header />
    </div>
    <div className="quora-content">

    <Filter />
        <Feed />
        <Widget/>
    </div>
    
  </>
  )
}

export default Quora
