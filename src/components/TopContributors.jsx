import React, { useState, useEffect } from "react";
import { mockTransactions } from "../mockData";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Paper,
  TableContainer,
  Button,
} from "@mui/material";

export default function Customers() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      //Apparently I need this? Simulating a delay to mimic asynchronous behavior (e.g., fetching data)
      setTimeout(() => {
        setData(mockTransactions);
        setLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>User ID</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Last Entry</TableCell>
              <TableCell>Journals</TableCell>
              <TableCell>More Info</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((transaction) => (
              <TableRow key={transaction.userId}>
                <TableCell>{transaction.userId}</TableCell>
                <TableCell>{transaction.user}</TableCell>
                <TableCell>
                  <img
                    src={transaction.img}
                    alt={`Image for ${transaction.user}`}
                    style={{ maxWidth: "50px", maxHeight: "50px" }}
                  />
                </TableCell>
                <TableCell>{transaction.lastEntry}</TableCell>
                <TableCell>{transaction.journals}</TableCell>
                <TableCell>
                  <Button
                  // variant="contained"
                  // size="small"
                  // href={`https://dummyjson.com/products/${transaction.txId}`}
                  // target="_blank"
                  >
                    USER PROFILE
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}