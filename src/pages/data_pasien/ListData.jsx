//src/pages/data_pasien/ListData.jsx
//import { tbPasien } from "../../datadummy/dbPasien.js"
import { useContext } from "react"
import { DtPasienContext } from "./ContextDataPasien"

function ListData() {
  const { dtPasien } = useContext(DtPasienContext)
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ACTION</th>
            <th>id</th>
            <th>Nama</th>
            <th>Alamat</th>
            <th>Telepon</th>
          </tr>
        </thead>
        <tbody>
          {dtPasien.map((row) => (
            <tr key={row.id}>
              <td>
                <span style={{ display: 'flex', gap: 4 }}>
                  <button>
                    EDT
                  </button>
                  <button>
                    DETAIL
                  </button>
                </span>
              </td>
              <td>
                {row.id}
              </td>
              <td>{row.namapasien}</td>
              <td>{row.alamat}</td>
              <td>{row.telepon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListData