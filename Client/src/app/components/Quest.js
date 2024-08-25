import React from 'react'
import '../style.css'

const Quest = ({ challangeNo, title, description, imgAdd }) => {
  return (
    <div className='questArea'>
      <div className="qinfoArea">
        <div className="qHeadings">
            <div className="challangeNo">Challange #{challangeNo}</div>
            <div className="questHeading">{title}</div>
        </div>
        <div className=".descArea">
            <div className="qDesc">{description}</div>
            <button className="qBut">Submit</button>
        </div>
      </div>
      <img className='thumbnail' src={imgAdd} alt="" />
    </div>
  )
}

export default Quest
