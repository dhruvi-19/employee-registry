import axios from "axios";

const url = "http://localhost:4000/employees";

// axios.get(url).then((response) => {
//   console.log(response.data);
// });

const getEmployees = async () => {
  const response = await axios.get(url);
  console.log(response.data);
};

getEmployees();
