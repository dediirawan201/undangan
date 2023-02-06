import axios from 'axios';
import React, { useState } from 'react'
import Kartu from '../../atoms/kartu/Kartu';
import './gift.css';

const Gift = ({blurr,id}) => {
  const [formInput, setFormInput] = useState({
    nama: "",
    hadiah: "",
    tujuan: "", 
    nominal:"",
    catatan:"",
  });

  //state untuk menampung pesan error
  const [errors, setErrors] = useState({
    nama: "",
    hadiah: "",
    tujuan: "",
  });

  const handleInputChange = (event) => {
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let pesanErrors = {};
    // console.log('form isinya ', formInput)
    //validasi nama
    if (formInput.nama.trim() === "") {
      pesanErrors.nama = "nama tidak boleh kosong";
    } else {
      pesanErrors.nama = "";
    }

    //validasi hadiah
    if (formInput.hadiah.trim() === "") {
      pesanErrors.hadiah = "hadiah tidak boleh kosong";
    } else {
      pesanErrors.hadiah = "";
    }

    //validasi tujuan
    if (formInput.tujuan.trim() === "") {
      pesanErrors.tujuan = "tujuan tidak boleh kosong";
    } else {
      pesanErrors.pesan = "";
    }
    //update error
    setErrors(pesanErrors);

    //cek apakah form sudah benar semua
    let formValid = true;
    for (let inputName in pesanErrors) {
      if (pesanErrors[inputName].length > 0) {
        formValid = false;
      }
    }

    try {
      await axios.post("http://undangan.pejuangquran.org/hadiah", formInput);
    } catch (error) {
      console.log("error post ", error);
    }
    //jika proses valid
    if (formValid) {

      setFormInput(formInput);
      // console.log('hasilnya nih ',formInput)
    }

    //kosongkan inputan form
    setFormInput({
      nama: "",
      hadiah: "",
      tujuan: "",
      nominal:"",
      catatan:"",
    });
  };
  return (
    <section className={`gift ${blurr}`} id={`content${id}`}>
        <p className='gift-judul' data-aos="zoom-in"> Berikan Hadiah</p>
        <p className='desc' data-aos="fade-up">Bagi keluarga dan sahabat yang ingin mengirimkan hadiah, <br/> silakan mengirimkannya melalui tautan berikut:</p>
        <div className='kartu-rekening'>
    <Kartu gambar='walet' type='rekening' blurr={blurr}/>
    <Kartu type='hadiah'/>
        </div>
        <div className='konfirmasi' data-aos="fade-up">
          <h1 className='konfirm-hadiah' data-aos="zoom-in" >Konfirmasi Hadiah</h1>
        <p className='desc-konfirm' data-aos="zoom-in">Kami sangat berterima kasih kepada Bapak/Ibu/Saudara/i
        yang berkenan memberikan tanda kasih kepada kami.<br/> 
        Silakan melakukan konfirmasi pada kolom di bawah untuk mempermudah pendataan:</p>
        <form onSubmit={handleFormSubmit} data-aos="zoom-in">
        <div className="col mb-4">
        <label htmlFor="nama" className="form-label">
          Nama Pengirim <span>*</span>
        </label>
        <input
          id="nama"
          type="text"
          className="form-control"
          name="nama"
          placeholder="...."
          onChange={handleInputChange}
          value={formInput.nama}
        />
        {errors.nama && <small>{errors.nama}</small>}
      </div>
      <div className="col mb-4">
        <label className="form-label">Jenis Hadiah <span>*</span></label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="hadiah"
            id="transfer uang"
            value="transfer uang"
            onChange={handleInputChange}
          />
          <label className="form-check-label" htmlFor="transfer uang">
            Transfer Uang
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="hadiah"
            id="lainnya"
            value="lainnya"
            onChange={handleInputChange}
          />
          <label className="form-check-label" htmlFor="lainnya">
            Lainnya
          </label>
        </div>
        {errors.hadiah && <small>{errors.hadiah}</small>}
      </div>
      <div className='col'>
      <label  className="form-label">
          Tujuan <span>*</span>
        </label>
      <select name='tujuan'  onChange={handleInputChange} className="form-select" aria-label="Default select example">
  <option selected>...</option>
  <option value='BSI 7042747108 Sofia'>BSI 7042747108 Sofia</option>
  <option value='Mandiri 1310013678422 Sigit Adianto'>Mandiri 1310013678422 Sigit Adianto</option>
  <option value='Teluk Karang, Sedau, Singkawang Selatan, Kalimantan Barat'>Teluk Karang, Sedau, Singkawang Selatan, Kalimantan Barat</option>
</select>
{errors.tujuan && <small>{errors.tujuan}</small>}
      </div>
<div className="col mt-4 mb-4">
        <label htmlFor="nominal" className="form-label">
          Nominal (Jika transfer)
        </label>
        <input
          id="nominal"
          type="number"
          className="form-control"
          name="nominal"
          placeholder="..."
          onChange={handleInputChange}
          value={formInput.nominal}
        />
      </div>
      <div className="col mb-4">
        <label htmlFor="catatan" className="form-label">
          Catatan 
        </label>
        <textarea
          id="catatan"
          type="text"
          className="form-control"
          name="catatan"
          placeholder="..."
          onChange={handleInputChange}
          value={formInput.catatan}
        />
      </div>
      <div className="col">
        <button type="submit" className="btn btn-kirim btn-primary">
          Kirim
        </button>
      </div>
        </form>
        </div>
    </section>
  )
}

export default Gift;