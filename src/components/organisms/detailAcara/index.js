import React from 'react'
import { Rose } from '../../../assets/gambar';
import './detailAcara.css'

const DetailAcara = () => {
  return (
    <div className="detail-acara">
            <p className="judul">Detail Acara</p>
            <div className="acara">
                <div className="acara-1">
                    <h1>Akad Nikah</h1>
                    <p>Minggu, 12 Januari 2022 <br/>
                    10:00 - 12:00 WIB <br/> 
                    <strong>Kediaman Keluarga Wanita</strong><br/>
                    Jalan alamat nikahan</p>
                    <div className="map-live">
                        <button className="btn" type="button"><span>Buka Map</span> <span className="material-symbols-outlined">
                            location_on
                            </span></button>
                        <button className="btn" type="button"><span>Live</span> <span className="material-symbols-outlined">
                            join_right
                            </span></button>
                    </div>
                    <img src={Rose} width="100" height="100" alt='rose'/>
                </div>
                <div className="acara-1">
                    <h1>Resepsi Nikah</h1>
                    <p>Minggu, 12 Januari 2022 <br/>
                    10:00 - 12:00 WIB <br/>
                    <strong>Kediaman Keluarga Wanita</strong><br/>
                    Jalan alamat nikahan</p>
                    <div className="map-live">
                        <button className="btn" type="button"><span>Buka Map</span> <span className="material-symbols-outlined">
                            location_on
                            </span></button>
                        <button className="btn" type="button"><span>Live</span> <span className="material-symbols-outlined">
                            join_right
                            </span></button>
                    </div>
                    <img src={Rose} width="100" height="100" alt='rose'/>
                </div>
            </div>
        </div>
  )
}

export default DetailAcara;