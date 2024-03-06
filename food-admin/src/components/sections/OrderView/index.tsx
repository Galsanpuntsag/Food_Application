// "use client";

// import { ChangeEvent, useContext, useEffect, useState } from "react";
// import { sample } from "lodash";
// import { faker } from "@faker-js/faker";
// import Card from "@mui/material/Card";
// import Stack from "@mui/material/Stack";
// import Table from "@mui/material/Table";
// import Button from "@mui/material/Button";
// import Container from "@mui/material/Container";
// import TableBody from "@mui/material/TableBody";
// import Typography from "@mui/material/Typography";
// import TableContainer from "@mui/material/TableContainer";
// import TablePagination from "@mui/material/TablePagination";

// import Iconify from "@/components/iconify";
// import Scrollbar from "@/components/scrollbar";

// import TableNoData from "../userView/table-no-data";
// import OrderTableHead from "./order-table-head";
// import OrderTableRow from "./order-table-row";
// import TableEmptyRows from "../userView/table-empty-rows";
// import UserTableToolbar from "../userView/user-table-toolbar";
// import { emptyRows, applyFilter, getComparator } from "../userView/functions";
// import { OrderContext } from "@/context/userProvider";

// import axios from "axios";

// export default function OrderView() {
//   const { orders } = useContext(OrderContext);

//   const [page, setPage] = useState(0);

//   const [order, setOrder] = useState("asc");

//   const [selected, setSelected] = useState<string[]>([]);

//   const [orderBy, setOrderBy] = useState("name");

//   const [filterName, setFilterName] = useState("");

//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const handleSort = (event: any, id: any) => {
//     const isAsc = orderBy === id && order === "asc";
//     if (id !== "") {
//       setOrder(isAsc ? "desc" : "asc");
//       setOrderBy(id);
//     }
//   };

//   const handleSelectAllClick = (event: any) => {
//     if (event.target.checked) {
//       const newSelecteds = users.map((n) => n.name);
//       setSelected(newSelecteds);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (event: any, name: string) => {
//     const selectedIndex = selected.indexOf(name);
//     let newSelected: string[] = [];
//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, name);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1)
//       );
//     }
//     setSelected(newSelected);
//   };

//   const handleChangePage = (_: unknown, newPage: any) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
//     setPage(0);
//     setRowsPerPage(parseInt(event.target.value, 10));
//   };

//   const handleFilterByName = (event: any) => {
//     setPage(0);
//     setFilterName(event.target.value);
//   };

//   const dataFiltered = applyFilter({
//     inputData: orders,
//     comparator: getComparator(order, orderBy),
//     filterName,
//   });

//   const notFound = !dataFiltered.length && !!filterName;

//   return (
//     <Container>
//       <Stack
//         direction="row"
//         alignItems="center"
//         justifyContent="space-between"
//         mb={5}
//       >
//         <Typography variant="h4">Хэрэглэгчид</Typography>

//         <Button
//           variant="contained"
//           color="inherit"
//           startIcon={<Iconify icon="eva:plus-fill" />}
//         >
//           Шинэ хэрэглэгч
//         </Button>
//       </Stack>

//       <Card sx={{}}>
//         <UserTableToolbar
//           numSelected={selected.length}
//           filterName={filterName}
//           onFilterName={handleFilterByName}
//         />

//         <Scrollbar>
//           <TableContainer sx={{ overflow: "unset" }}>
//             <Table sx={{ minWidth: 800 }}>
//               <OrderTableHead
//                 order={order}
//                 orderBy={orderBy}
//                 rowCount={users.length}
//                 numSelected={selected.length}
//                 onRequestSort={handleSort}
//                 onSelectAllClick={handleSelectAllClick}
//                 headLabel={[
//                   { id: "name", label: "OrderNo" },
//                   { id: "company", label: "Buyer info" },
//                   { id: "role", label: "Payment" },
//                   { id: "isVerified", label: "Address", align: "center" },
//                   { id: "status", label: "Delivery state" },
//                   { id: "" },
//                 ]}
//               />
//               <TableBody>
//                 {dataFiltered
//                   .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                   .map((row: any) => (
//                     <OrderTableRow
//                       key={row.id}
//                       name={row.name}
//                       role={row.role}
//                       status={row.status}
//                       company={row.email}
//                       avatarUrl={row.avatarUrl}
//                       isVerified={row.isVerified}
//                       selected={selected.indexOf(row.name) !== -1}
//                       handleClick={(event: any) => handleClick(event, row.name)}
//                     />
//                   ))}

//                 <TableEmptyRows
//                   height={77}
//                   emptyRows={emptyRows(page, rowsPerPage, users.length)}
//                 />

//                 {notFound && <TableNoData query={filterName} />}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Scrollbar>

//         <TablePagination
//           page={page}
//           component="div"
//           count={users.length}
//           rowsPerPage={rowsPerPage}
//           onPageChange={handleChangePage}
//           rowsPerPageOptions={[5, 10, 25]}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Card>
//     </Container>
//   );
// }
