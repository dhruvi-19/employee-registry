import React from "react";

import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { CssBaseline } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

class App extends React.Component {
  state = {
    searchTerm: "",
  };

  handleEmployeeSearch = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    const { searchTerm } = this.state;
    return (
      <>
        <CssBaseline />
        <Container maxWidth="lg">
          <Box sx={{ bgcolor: "#cfe8fc", height: "100vh", padding: "2rem" }}>
            <Typography variant="h1" align="center" sx={{ fontSize: "3rem" }}>
              Employee Registry
            </Typography>

            <TextField
              id="employeeName"
              label="Employee Name"
              value={searchTerm}
              onChange={this.handleEmployeeSearch}
              variant="standard"
              margin="normal"
              sx={{ width: "100%" }}
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                padding: "32px 64px",
                gap: "16px",
              }}
            >
              <Card sx={{ width: "300px" }}>
                <CardHeader avatar={<Avatar>MS</Avatar>} title="Michel Scott" />
                <CardContent>
                  <Typography>Regional Manager</Typography>
                </CardContent>
              </Card>

              <Card sx={{ width: "300px" }}>
                <CardHeader
                  avatar={<Avatar>DS</Avatar>}
                  title="Dwight Schrute"
                />
                <CardContent>
                  <Typography>Assistant (to the) Regional Manager</Typography>
                </CardContent>
              </Card>

              <Card sx={{ width: "300px" }}>
                <CardHeader avatar={<Avatar>JH</Avatar>} title="Jim Halpert" />
                <CardContent>
                  <Typography>Salesman</Typography>
                </CardContent>
              </Card>

              <Card sx={{ width: "300px" }}>
                <CardHeader avatar={<Avatar>PB</Avatar>} title="Pam Beasley" />
                <CardContent>
                  <Typography>Front Desk Secretary</Typography>
                </CardContent>
              </Card>

              <Card sx={{ width: "300px" }}>
                <CardHeader
                  avatar={<Avatar>SH</Avatar>}
                  title="Stanley Hudson"
                />
                <CardContent>
                  <Typography>Salesman</Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Container>
      </>
    );
  }
}

export default App;
