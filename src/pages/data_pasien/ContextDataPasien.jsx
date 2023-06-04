//src/pages/data_pasien/ContextDataPasien.jsx
import { createContext, useState } from 'react'
import { tbPasien } from "../../datadummy/dbPasien.js"
import { nanoid } from 'nanoid'

export const DtPasienContext = createContext()

function DtPasienProvider({ children }) {

  const [dtPasien, setDtPasien] = useState(tbPasien)

  const MessageContext = "ini pesan dari context"
  //Get Data All
  function GetDataAll() {
    console.log("GET ALL DATA");
  }

  //Get Data :id
  function GetDataId() {
    console.log("GET DATA ID");
  }

  //Add Data
  function AddDataSave(inputData) {
    const { nama, alamat, telepon } = inputData
    console.log("ADD DATA", nama, alamat, telepon);
    setDtPasien(currentDataPasien => {
      return [
        ...currentDataPasien,
        { id: nanoid(), namapasien: nama, alamat, telepon }
      ]
    })

  }

  //Delete Data
  function DelDataId() {
    console.log("DELETE DATA");
  }

  //Edit Data
  function EditDataSave() {
    console.log("EDIT DATA");
  }

  let value = {
    MessageContext,
    GetDataAll,
    GetDataId,
    AddDataSave,
    DelDataId,
    EditDataSave,
    dtPasien
  };
  return (
    <DtPasienContext.Provider value={value}>
      {children}
    </DtPasienContext.Provider>
  )
}
export default DtPasienProvider

