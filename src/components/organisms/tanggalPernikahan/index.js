import React from 'react'
import { Bunga, Pria, Wanita } from '../../../assets/gambar';
import './tanggalPernikahan.css';


const TanggalPernikahan = () => {
    
  return (  
    <div className="section-tanggal" >
            <span className="title-tanggal" data-aos="fade-up">Bismillahirahmanirrahim</span>
            <p className="desc" data-aos="fade-up">Maha suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan.
                Ya Allah, perkenankanlah kami merangkai kasih sayang yang Kau ciptakan di antara putra-putri kami:</p>
                <p className="desc-2" data-aos="zoom-in">Pasangan Mempelai</p>
            <div className="mempelai"> 
                <div className="laki" data-aos="fade-left">
                    <div className="foto-laki"></div>
                    <img src={Pria} width={200} height={200} alt='pria'/>
                    <div className="desc">
                        <p className="nama">Dedi Irawan</p>
                        <p>Putra dari Bapak Indu & Ibu Mariah</p>
                    </div>
                </div>
                <img src={Bunga} data-aos="fade-up" width={200} height={200} alt="bunga"/>
                <div className="pr" data-aos="fade-right">
                    <div className="foto-pr"></div>
                    <img   src={Wanita} width={200} height={200} alt='wanita'/>
                    <div className="desc">
                        <p className="nama">Dedi Irawan</p>
                        <p>Putra dari Bapak Indu & Ibu Mariah</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default TanggalPernikahan;