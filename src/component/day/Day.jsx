import React from 'react'

function Day() {
  let date =new Date();
  let dayWeek = date.getUTCDate()
  console.log(date);
 console.log(dayWeek);




  return (
    <>
        <a href="#" style={{fontWeight: 'bold'}}>Thursday</a>
        <a href="#">Friday</a>
        <a href="#">Saturday</a>
        <a href="#">Sunday</a>
        <a href="#">Monday</a>             
    </>
  )
}

export default Day