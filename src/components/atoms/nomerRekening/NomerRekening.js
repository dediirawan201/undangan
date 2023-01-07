import React, { useState } from 'react'
import { Bsi, Mandiri } from '../../../assets/gambar';
import Bca from '../../../assets/gambar/bca.png'
import './nomerRekening.css'; 

const ModalCard = ({rekening,nama,logoBank}) => {
  const [text,setText] = useState('Copy Rekening')
    const [codeText,SetCodeText] = useState("copy");
    const [ikon,setIkon] = useState('content_copy');
    const [warna,setWarna] = useState('');
    // const rekeningLaki = 2434343434;
    // const rekeningPr = 1212121212;
  const copyCode = () =>{
    navigator.clipboard.writeText(rekening);
    SetCodeText("copied");
    setIkon('done') 
    setText('Copy Berhasil')
    setWarna('rgb(0, 255, 140)')
    setTimeout(()=>{
        SetCodeText(codeText);
        setIkon('content_copy') 
        setWarna('')   
        setText('Copy Rekening')
    },2000);
  }

  return (
<div className='rekening'>
          <img src={logoBank} width={120} height={40} alt='bca'/><br/>
         <p className='line'></p>
         <div className='wrapper-rek'>
         <p className='nama-rekening'>{nama}</p>
         <p>{rekening}</p>
         <div className='copy-rekening' onClick={copyCode}>
         <span  className={`copas material-symbols-outlined`} style={{color:warna}}>{ikon}</span>
         <span className='text'>{text}</span>
         </div>
         </div>
        </div>
  )
}

export const NomerRekening = ({setModal,modal}) => {
  console.log('apa itu modal ', modal)
    

      const closed = () => {
          setModal(!modal)
          document.body.classList.remove('active-modal')
      }
  return (
    <>
    {modal && (
    <div className='rekening-container'>
      <div className='wrapper-rekening'>
        <ModalCard nama='Sigit Adianto' rekening={1310013678422} logoBank={Mandiri}/>
        <ModalCard nama='Sofia' rekening={7042747108} logoBank={Bsi}/>
      </div>
      <button onClick={closed} className="btn btn-danger" type="submit">Close</button>
    </div> )
  }
  </>
    )
}
