import React from 'react'
import { Bunga } from '../../../assets/gambar';
import './tanggalPernikahan.css';

const TanggalPernikahan = () => {
  return (  
    <div className="section-tanggal">
            <span className="title-tanggal">Bismillahirahmanirrahim</span>
            <p className="desc">Maha suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan.
                Ya Allah, perkenankanlah kami merangkai kasih sayang yang Kau ciptakan di antara putra-putri kami:</p>
                <p className="desc-2">Pasangan Mempelai</p>
            <div className="mempelai">
                <div className="laki">
                    <div className="foto-laki"></div>
                    <div className="desc">
                        <p className="nama">Dedi Irawan</p>
                        <p>Putra dari Bapak Indu & Ibu Mariah</p>
                    </div>
                </div>
                <img src={Bunga} width={200} height={200} alt="bunga"/>
                <div className="pr">
                    <div className="foto-pr"></div>
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