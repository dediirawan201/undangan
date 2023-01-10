import React from 'react'
import {BungaKecil, Frame2} from '../../../assets/gambar'
import Coutdown from '../../molecules/coutdown/Coutdown';
import './hero.css';

const Hero = ({id}) => {
    
  return (
        <section  className="hero" data-aos="fade-bottom" data-aos-duration="2000" id={`content${id}`} > 
                <img  data-aos="fade-right" data-aos-duration="3000"  src={Frame2} height="600" width="600" alt='hero'/>
            <div className="set">
                <div><img src={BungaKecil} alt='bunga'/></div>
                <div><img src={BungaKecil} alt='bunga'/></div>
                <div><img src={BungaKecil} alt='bunga'/></div>
                <div><img src={BungaKecil} alt='bunga'/></div>
                <div><img src={BungaKecil} alt='bunga'/></div>
                <div><img src={BungaKecil} alt='bunga'/></div>
                <div><img src={BungaKecil} alt='bunga'/></div>
                <div><img src={BungaKecil} alt='bunga'/></div>
                <div><img src={BungaKecil} alt='bunga'/></div>
                <div><img src={BungaKecil} alt='bunga'/></div>
                <div><img src={BungaKecil} alt='bunga'/></div>
                <div><img src={BungaKecil} alt='bunga'/></div>
            </div>
            <p className="title" data-aos="fade-up" data-aos-duration="3000">Kami yang berbahagia</p>
            <h1 data-aos="zoom-in" data-aos-duration="3000" className="nama-pasangan">Sofia & Sigit</h1>
            <p className="tanggal" data-aos="fade-down-left" data-aos-duration="3000">Minggu, 12 Februari 2023</p>
            <a  href='https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MzY4cTNmdDU2dmpsZXJ1aXZpOWdnOWQwdjcgZGVkaWlyd2Fuc3lhaDE5MjVAbQ&tmsrc=dediirwansyah1925%40gmail.com' terget="_blank" role="button" tabindex="-1" className="mb-3 btn btn-outline-light"  data-aos="fade-up-right" data-aos-duration="3000">- Save To Google Calendar -</a>
            <Coutdown/>
            <span className="inisial" data-aos="fade-up-left" data-aos-duration="3000">- S & S -</span>
            
        </section>
  )
}

export default Hero;