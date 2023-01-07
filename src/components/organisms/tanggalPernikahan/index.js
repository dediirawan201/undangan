import React from 'react'
import { Bunga,Pria,Wanita} from '../../../assets/gambar';

import './tanggalPernikahan.css';


const TanggalPernikahan = () => {
    
  return (  
    <div className="section-tanggal">
            <span className="title-tanggal" data-aos="fade-up">بسم الله الرحمن الرحيم</span>
            <p className="desc" data-aos="fade-up">Maha suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan.
                Ya Allah, perkenankanlah kami merangkai kasih sayang yang Kau ciptakan di antara putra-putri kami:</p>
                <p className="desc-2" data-aos="zoom-in">Pasangan Mempelai</p>
            <div className="mempelai"> 
                <div className="laki" data-aos="fade-up">
                    <div className="foto-laki"></div>
                    <img src={Pria} width={200} height={200} alt='pria'/>
                    <div className="desc">
                    <p className="nama">Sigit Adianto, S.Si</p>
                        <p className='orangtua'>Putra dari Alm.Bapak Suparman & Ibu Sunarsih</p>
                    </div>
                </div>
                <img src={Bunga} data-aos="fade-up" width={200} height={200} alt="bunga"/>
                <div className="pr" data-aos="fade-up">
                    <div className="foto-pr"></div>
                    <img  src={Wanita} width={200} height={200} alt='wanita'/>
                    <div className="desc">
                    <p className="nama">Sofia, S.Pd</p>
                        <p>Putri dari Bapak Pawari & Ibu Nurlaila</p>
                        
                    </div>
                </div>
            </div>
        </div>
  )
}

export default TanggalPernikahan;