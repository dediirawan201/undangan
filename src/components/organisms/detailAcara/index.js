import React from 'react'
import { Rose } from '../../../assets/gambar';
import './detailAcara.css'

const DetailAcara = ({id}) => {
  return (
    <section className="detail-acara" id={`content${id}`}>
            <p className="judul" data-aos="fade-up">Detail Acara</p>
            <div className="acara">
                <div className="acara-1" data-aos="fade-left">
                    <h1>Akad Nikah</h1>
                    <p>Minggu, 12 Januari 2022 <br/>
                    08:00 - 10:00 WIB <br/> 
                    <strong>Kediaman Keluarga Wanita</strong><br/>
                    Teluk Karang, Sedau, Singkawang Selatan, Kalimantan Barat</p>
                    <div className="map-live">
                    <a  href='https://www.google.com/maps/place/Sedau/@0.867808,108.9316602,17z/data=!3m1!4b1!4m5!3m4!1s0x31e373aa88220993:0x4d292b32ec09f420!8m2!3d0.8678026!4d108.9338489' terget="_blank" role="button" tabindex="-1" className="btn">
            <span>Buka Map</span> <span className="material-symbols-outlined">
                            location_on
                             </span></a>
                             <a  href='https://www.google.com/maps/place/Sedau/@0.867808,108.9316602,17z/data=!3m1!4b1!4m5!3m4!1s0x31e373aa88220993:0x4d292b32ec09f420!8m2!3d0.8678026!4d108.9338489' terget="_blank" role="button" tabindex="-1" className="btn">
                            <span>Live</span> <span className="material-symbols-outlined">
                            join_right
                            </span></a>
                    </div>
                    
                </div>
                <div className="acara-1" data-aos="fade-right">
                    <h1>Resepsi Nikah</h1>
                    <p>Minggu, 12 Januari 2022 <br/> 
                    10:00 WIB - Selesai <br/>
                    <strong>Kediaman Keluarga Wanita</strong><br/>
                    Teluk Karang, Sedau, Singkawang Selatan, Kalimantan Barat</p>
                    <div className="map-live">
                    <a  href='https://www.google.com/maps/place/Sedau/@0.867808,108.9316602,17z/data=!3m1!4b1!4m5!3m4!1s0x31e373aa88220993:0x4d292b32ec09f420!8m2!3d0.8678026!4d108.9338489' terget="_blank" role="button" tabindex="-1" className="btn">
            <span>Buka Map</span> <span className="material-symbols-outlined">
                            location_on
                             </span></a>
                             <a  href='https://www.google.com/maps/place/Sedau/@0.867808,108.9316602,17z/data=!3m1!4b1!4m5!3m4!1s0x31e373aa88220993:0x4d292b32ec09f420!8m2!3d0.8678026!4d108.9338489' terget="_blank" role="button" tabindex="-1" className="btn">
                            <span>Live</span> <span className="material-symbols-outlined">
                            join_right
                            </span></a>
                    </div>
                   
                </div>
            </div>
        </section>
  )
}

export default DetailAcara;