import React, { useEffect, useState } from 'react'
import './coutdown.css';

const Coutdown = () => {
  let countDate = new Date('Feb 12 2023 00:00:00').getTime()
  const [time,setTime] = useState(countDate)

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1);
    },1000)
  },[time])

    let now = new Date().getTime()
    let gap = time - now

    let detik = 1000;
    let menit = detik * 60;
    let jam = menit * 60;
    let hari = jam * 24;

    let h = Math.floor(gap / (hari))
    let j = Math.floor((gap % (hari)) / (jam));
    let m = Math.floor((gap % (jam)) / (menit));
    let d = Math.floor((gap % (menit)) / (detik));

  return (
    <div className="coutdown">
    <div id="hari">{h}</div>
    <div id="jam">{j}</div>
    <div id="menit">{m}</div>
    <div id="detik">{d}</div>
</div>
  )
}

export default Coutdown