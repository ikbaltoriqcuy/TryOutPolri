import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Pagination,
  Button,
  Box,
  IconButton,
  Typography
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

interface Order {
  id: number,
  name: string
}

const ordersData: Order[] = [
  {
    id: 59217,
    name: "soal 1",
  },
  {
    id: 59213,
    name: "soal 2",
  },
  {
    id: 59219,
    name: "soal 3",
  },
  {
    id: 59220,
    name: "soal 4",
  },
  {
    id: 59223,
    name: "soal 4",
  },
];

const TestKecermatanDashboard: React.FC = () => {
  const [filter, setFilter] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const handleStatusChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setStatusFilter(event.target.value as string);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleClick = () => {
    alert("Delete button clicked");
  };

  return (
    <Box
      maxWidth="md"
      maxHeight="md"
      sx={{
        borderRadius: "8px",
        border: "2px solid",
        borderColor: "#F1F1F1",
        padding: "16px",
        marginBottom: "24px",
        p: 3,
        margin: "32px",
        background: "white",
      }}
    >
      <Typography variant="h6" fontWeight="bold">
            Test Kecermatan
          </Typography>
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#f1db25", boxShadow: "none" }}
        >
          Buat Soal
        </Button>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Nama Test</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ordersData.slice((page - 1) * 10, page * 10).map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.name}</TableCell>
                <TableCell>
                  <IconButton
                    color="error"
                    onClick={handleClick}
                    aria-label="delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination
        count={Math.ceil(ordersData.length / 10)}
        page={page}
        onChange={handlePageChange}
        style={{ padding: "16px", display: "flex", justifyContent: "center" }}
      />
    </Box>
  );
};

// Function to assign colors to the status chip
const getChipColor = (status: string) => {
  switch (status) {
    case "New order":
      return "primary";
    case "Inproduction":
      return "warning";
    case "Shipped":
      return "success";
    case "Cancelled":
      return "error";
    case "Rejected":
      return "error";
    default:
      return "default";
  }
};

export default TestKecermatanDashboard;
