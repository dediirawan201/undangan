import React, { useState } from 'react'
import Bca from '../../../assets/gambar/bca.png'
import './alamat.css'; 

export const Alamat = ({setModal,modal}) => {
  console.log('apa itu modal ', modal)
    const [text,setText] = useState('Copy Alamat')
    const [codeText,SetCodeText] = useState("copy");
    const [ikon,setIkon] = useState('content_copy');
    const [warna,setWarna] = useState('');
    const alamat = 'Teluk Karang, Sedau, Singkawang Selatan, Kalimantan Barat';
    const copyCode = () =>{
        navigator.clipboard.writeText(alamat);
        SetCodeText("copied");
        setIkon('done') 
        setText('Copy Berhasil')
        setWarna('rgb(0, 255, 140)')
        setTimeout(()=>{
            SetCodeText(codeText);
            setIkon('content_copy') 
            setWarna('')   
            setText('Copy Alamat')
        },2000);
      }

      const closed = () => {
        setModal(!modal)
        document.body.classList.remove('active-modal')
      }
  return (
    <>
    {modal && (
    <div className='alamat-container'>
      <div className='wrapper-alamat'>
    <div className='alamat'>
         <div className='wrapper-alamat'>
         <p className='nama-alamat'>Alamat Penerima</p>
         <p><strong>Sofie</strong> <br/> 089612232323</p>
         <p>{alamat}</p>
         <div className='copy-alamat' onClick={copyCode}>
         <span  className={`copas material-symbols-outlined`} style={{color:warna}}>{ikon}</span>
         <span className='text'>{text}</span>
         </div>
         </div>
        </div>
      </div>
      <button onClick={closed} className="btn btn-danger" type="submit">Close</button>
    </div> )
  }
  </>
    )
}
