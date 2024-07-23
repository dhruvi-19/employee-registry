import React, { useState, useEffect } from "react";
import axios from "axios";

import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { CssBaseline } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const url = "http://localhost:4000/employees";
      const response = await axios.get(url, { params: { q: searchTerm } });
      const employees = response.data;
      setEmployees(employees);
    };

    fetchEmployees();
  }, [searchTerm]);

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
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
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
            {employees.map((employee) => (
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
};

export default App;
