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
    employees: [
      {
        id: 1,
        name: "Michael Scott",
        initials: "MS",
        description: "Reginal Manager",
      },
      {
        id: 2,
        name: "Dwight Schrute",
        initials: "DS",
        description: "Assistant (to the) Regional Manager",
      },
      {
        id: 3,
        name: "Jim Halpert",
        initials: "JH",
        description: "Salesman",
      },
      {
        id: 4,
        name: "Pam Beasley",
        initials: "PB",
        description: "Front Desk Secretary",
      },
      {
        id: 5,
        name: "Stanley Hudson",
        initials: "SH",
        description: "Salesman",
      },
    ],
  };

  handleEmployeeSearch = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    const { searchTerm, employees } = this.state;
    const normalizedSearchTerm = searchTerm.toLowerCase();

    const filteredEmployees = employees.filter((employee) =>
      employee.name.toLowerCase().includes(normalizedSearchTerm)
    );

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
              {filteredEmployees.map((employee) => (
                <Card sx={{ width: "300px" }} key={employee.id}>
                  <CardHeader
                    avatar={<Avatar>{employee.initials}</Avatar>}
                    title={employee.name}
                  />
                  <CardContent>
                    <Typography>{employee.description}</Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        </Container>
      </>
    );
  }
}

export default App;
