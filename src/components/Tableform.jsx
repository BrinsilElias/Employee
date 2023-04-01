import React from 'react'
import "./Tableform.css"
import Add from './Add'

function Tableform() {
  return (
    <div className="tableform">
      <div className="search">
        <input id="search" type="search" name="searchterm" placeholder="Search" />
        <button className="btn btn-search" type="submit" data-icon="search-icon"></button>
      </div> 
      <div>
        <Add />
      </div>
    </div>
  )
}

export default Tableform