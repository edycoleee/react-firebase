import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { tbPasien } from "../../datadummy/dbPasien.js"

function ListData() {
  return (
    <div>
      <TableContainer>
        <Table aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>ACTION</TableCell>
              <TableCell>id</TableCell>
              <TableCell>Nama</TableCell>
              <TableCell>Alamat</TableCell>
              <TableCell>Telepon</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tbPasien.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Box display="flex">
                    <Button
                      variant="contained"
                      color="secondary"
                    >
                      EDT
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                    >
                      DETAIL
                    </Button>
                  </Box>
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.namapasien}</TableCell>
                <TableCell>{row.alamat}</TableCell>
                <TableCell>{row.telepon}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  )
}

export default ListData