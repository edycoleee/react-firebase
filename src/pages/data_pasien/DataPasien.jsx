//src/pages/data_pasien/DataPasien.jsx
import DtPasienProvider from "./ContextDataPasien.jsx"
import AddData from "./AddData.jsx"
import ListData from "./ListData.jsx"

function DataPasien() {
  return (
    <DtPasienProvider>
      <AddData />
      <ListData />
    </DtPasienProvider>
  )
}

export default DataPasien