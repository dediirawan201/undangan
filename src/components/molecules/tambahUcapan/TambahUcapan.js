import axios from "axios";
import { useState } from "react";
import './tambahUcapan.css';

const TambahUcapan = ({ onTambahTamu }) => {
  //state untuk data inputan form
  const [formInput, setFormInput] = useState({
    nama: "",
    kehadiran: "",
    pesan: "",
  });

  //state untuk menampung pesan error
  const [errors, setErrors] = useState({
    nama: "",
    kehadiran: "",
    pesan: "",
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

    //validasi jurusan
    if (formInput.kehadiran.trim() === "") {
      pesanErrors.kehadiran = "email tidak boleh kosong";
    } else {
      pesanErrors.kehadiran = "";
    }

    //validasi pesan
    if (formInput.pesan.trim() === "") {
      pesanErrors.pesan = "pesan tidak boleh kosong";
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
      await axios.post("http://undangan.pejuangquran.org/user", formInput);
    } catch (error) {
      console.log("error post ", error);
    }
    //jika proses valid
    if (formValid) {
      onTambahTamu(formInput);
      // console.log(formInput)
    }

    //kosongkan inputan form
    setFormInput({
      nama: "",
      kehadiran: "",
      pesan: "",
    });
  };

  return (
    <form className="tambah-ucapan" onSubmit={handleFormSubmit} data-aos="fade-up">
      <div className="mb-4 col inputan">
        <label htmlFor="nama" className="form-label">
          Nama
        </label>
        <input
          id="nama"
          type="text"
          className="form-control "
          name="nama"
          placeholder="Nama Lengkap"
          onChange={handleInputChange}
          value={formInput.nama}
        />
        {errors.nama && <small>{errors.nama}</small>}
      </div>
      <div className="col mb-4">
        <label className="form-label">Kehadiran</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="kehadiran"
            id="hadir"
            value="hadir"
            onChange={handleInputChange}
          />
          <label className="form-check-label" htmlFor="hadir">
            Hadir
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="kehadiran"
            id="ragu"
            value="ragu"
            onChange={handleInputChange}
          />
          <label className="form-check-label" htmlFor="ragu">
            Ragu
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="kehadiran"
            id="tidakhadir"
            value="tidak hadir"
            onChange={handleInputChange}
          />
          <label className="form-check-label" htmlFor="tidakhadir">
            Tidak hadir
          </label>
        </div>
        {errors.kehadiran && <small>{errors.kehadiran}</small>}
      </div>
      <div className="col mb-4">
        <label htmlFor="pesan" className="form-label">
          Pesan
        </label>
        <textarea
          id="pesan"
          type="text"
          className="form-control"
          name="pesan"
          placeholder="pesan"
          onChange={handleInputChange}
          value={formInput.pesan}
        />
        {errors.pesan && <small>{errors.pesan}</small>}
      </div>

      <div className="col">
        <button type="submit" className="btn btn-simpan btn-primary">
          simpan
        </button>
      </div>
    </form>
  );
};

export default TambahUcapan;
