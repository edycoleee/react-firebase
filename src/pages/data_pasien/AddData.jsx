//src/pages/data_pasien/AddData.jsx
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { DtPasienContext } from "./ContextDataPasien"

function AddData() {
  //CEK DATA DARI CONTEXT
  const { AddDataSave } = useContext(DtPasienContext)
  //console.log(MessageContext);
  const initData = {
    nama: "",
    alamat: "",
    telepon: "",
  }
  //STATE INPUT DAN STATUS
  const [inputData, setInputData] = useState(initData);
  const [addStatus, setAddStatus] = useState(false)
  //HANDLE PERUBAHAN STATE
  const handleChange = e => {
    const { name, value } = e.target;
    setInputData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  //FUNGSI SIMPAN
  function SimpanData() {
    console.log("SIMPAN DATA");
    AddDataSave(inputData)
    setInputData(initData)
    setAddStatus(false)
  }
  return (
    <div>
      {/* KOTAK DATA PASIEN */}
      <fieldset style={{ margin: "10px" }} >
        <h3>DATA PASIEN</h3>
        <button onClick={() => setAddStatus(true)}>ADD</button>
        {/* <Link to="/dashboard">Dashboard</Link>{" "} */}
      </fieldset>
      {/* KOTAK ADD DATA JIKA AKTIF */}
      {addStatus ? (
        <fieldset style={{ margin: "10px " }} >
          <legend>TAMBAH DATA PASIEN</legend>
          <label>
            Nama:
          </label>
          <input
            type="text"
            style={{ margin: "2px" }}
            name="nama"
            value={inputData.nama}
            onChange={handleChange}
          /><br />
          <label>
            Alamat:
          </label>
          <input
            type="text"
            style={{ margin: "2px" }}
            name="alamat"
            value={inputData.alamat}
            onChange={handleChange}
          /><br />
          <label>
            Telepon:
          </label>
          <input
            type="text"
            style={{ margin: "2px" }}
            name="telepon"
            value={inputData.telepon}
            onChange={handleChange}
          /><br />
          <button style={{ margin: "2px" }} onClick={() => SimpanData()}>SAVE</button>
        </fieldset>

      ) : ("")}
    </div>
  )
}

export default AddData