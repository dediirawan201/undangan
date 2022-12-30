import React, { useState } from 'react'
import './kartu.css';
import Bca from '../../../assets/gambar/bca.png'

const Kartu = () => {
    const rekening = 2434343434;
    const [codeText,SetCodeText] = useState("copy");
    const [ikon,setIkon] = useState('content_copy');
    const [warna,setWarna] = useState('');

  const copyCode = () =>{
    navigator.clipboard.writeText(rekening);
    SetCodeText("copied");
    setIkon('done')
    setWarna('rgb(0, 255, 140)')
    setTimeout(()=>{
        SetCodeText(codeText);
        setIkon('content_copy') 
        setWarna('')   
    },2000);
  }
  return (
    <div className='kartu'>
        <img src={Bca} width={60} height={20} alt='bca'/><br/>
        <p className='line'></p>
        <div className='wrapper-rek'>
        <span onClick={copyCode} className={`copas material-symbols-outlined`} style={{color:warna}}>{ikon}</span>
        <span>{rekening}</span>
        </div>
        <p className='nama-rekening'>Dedi Irawan</p>
    </div>
  )
}

export default Kartu;