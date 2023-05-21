import { Link } from "react-router-dom"
import ListData from "./ListData"
import AddData from "./AddData"
import DeleteData from "./DeleteData"
import EditData from "./EditData"
import { Container, Paper, Typography } from "@mui/material"

function DataPasien() {
  return (
    <div>
      <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
        <Paper
          elevation={4}
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <Typography component="h2" align="center">
            Data Pasien
          </Typography>
          <Link to="/dashboard">Dashboard</Link>
        </Paper>
      </Container>
      <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={4} sx={{ p: 2 }}>
          <ListData />
        </Paper>
      </Container>
      <AddData />
      <DeleteData />
      <EditData />
    </div>
  )
}

export default DataPasien