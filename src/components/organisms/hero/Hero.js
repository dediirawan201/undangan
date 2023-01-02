import React from 'react'
import {BungaKecil, Frame2} from '../../../assets/gambar'
import Coutdown from '../../molecules/coutdown/Coutdown';
import './hero.css';

const Hero = () => {
    
  return (
        <div data-aos="zoom-in" data-aos-duration="2000"  className="hero">
                <img data-aos="zoom-in-up" data-aos-duration="3000"  src={Frame2} height="600" width="600" alt='hero'/>
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
            <h1 data-aos="zoom-in" data-aos-duration="3000" className="nama-pasangan">Dedi & Rifty</h1>
            <p className="tanggal" data-aos="fade-down-left" data-aos-duration="3000">Minggu, 14 Februari 2023</p>
            <span className="desc" data-aos="fade-up-right" data-aos-duration="3000">- Save The Date -</span>
            <Coutdown/>
            <span className="inisial" data-aos="fade-up-left" data-aos-duration="3000">- D & R -</span>
            
        </div>
  )
}

export default Hero;