import {
    CircularProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAllUser } from "../../hooks/user";
import "./styles.css";

function UserList() {
  const navigate = useNavigate();
  const { userList, isLoading } = useAllUser();

  if (isLoading) {
    return (
      <div className="min-h-[calc(100vh-100px)] grid place-content-center">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="p-2">
      <Typography variant="h5" className="!mb-4 font-semibold text-gray-800">
        User Directory
      </Typography>

      <TableContainer
        component={Paper}
        elevation={4}
        className="shadow-md rounded-xl"
      >
        <Table aria-label="user table">
          <TableHead className="bg-gray-100">
            <TableRow>
              <TableCell className="font-bold text-gray-700">Order</TableCell>
              <TableCell align="right" className="font-bold text-gray-700">
                First name
              </TableCell>
              <TableCell align="right" className="font-bold text-gray-700">
                Last name
              </TableCell>
              <TableCell align="right" className="font-bold text-gray-700">
                Location
              </TableCell>
              <TableCell align="right" className="font-bold text-gray-700">
                Occupation
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.map((row, index) => (
              <TableRow
                key={row._id}
                hover
                className="transition-all duration-100 cursor-pointer hover:bg-blue-50"
                onClick={() => navigate(`/users/${row._id}`)}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell align="right">{row.first_name}</TableCell>
                <TableCell align="right">{row.last_name}</TableCell>
                <TableCell align="right">{row.location}</TableCell>
                <TableCell align="right">{row.occupation}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default UserList;
