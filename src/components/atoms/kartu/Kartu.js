import React, { useState } from 'react'
import './kartu.css';

import Wallet from '../../../assets/gambar/wallet.png'
import Hadiah from '../../../assets/gambar/redeem_FILL0_wght400_GRAD0_opsz48.png';
import { NomerRekening } from '../nomerRekening/NomerRekening';
import { Alamat } from '../alamat/Alamat';


const Kartu = ({gambar,type,blurr}) => {
    const [popup,setPopup] = useState('')
    const [modal,setModal] = useState(false)
    const [modalHadiah, setModalHadiah] = useState(false)

    const dompet = () => {
      if(type === 'rekening'){
        setModal(!modal)
          document.body.classList.add('active-modal')
          
      }
      else if(type === 'hadiah'){
        setModalHadiah(!modalHadiah)
        document.body.classList.add('active-modal')
      }
      else{
        return 
      }
    }

  return (
    <div>
    <div className={`kartu ${popup}`} data-aos="fade-up" onClick={dompet}>
      <img src={gambar === 'walet' ? Wallet : Hadiah} alt='wallet' width={50} height={50}/>
    </div>
    <div className={`container-dompet`}>
    {modal && <NomerRekening modal={modal} setModal={setModal} nama='sofie' rekening={43434343}/>}
    {modalHadiah && <Alamat modal={modalHadiah} setModal={setModalHadiah}/>}
    </div>
    </div>
  )
}

export default Kartu;