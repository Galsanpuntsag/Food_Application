import { useContext, useState } from "react";
import PropTypes from "prop-types";

import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import Label from "@/components/label";
import Iconify from "@/components/iconify";
import { Box, CardMedia, Grid } from "@mui/material";
import moment from "moment";
import { UserContext, UserProvider } from "@/context/userProvider";
import { OrderModal } from "@/components/Modal/order";

// ----------------------------------------------------------------------

type UserTableRowProps = {
  data: {
    address: {
      duureg: string;
      khoroo: string;
      buildingNo: string;
      phone: string;
    };
    orderNo: number;
    payment: {
      amount: string;
      createAt: string;
      paidDate: string;
      status: string;
    };
    delivery: {
      status: string;
    };
    products: [
      {
        food: {
          name: string;
          image: string;
        };
      }
    ];
  };
  selected: any;
  handleClick: any;
};

export default function OrderTableRow({
  selected,
  data,
  handleClick,
}: UserTableRowProps) {
  const [openOrder, setOpenOrder] = useState(false);

  const handleOpenOrder = () => {
    setOpenOrder(true);
  };

  const handleCloseOrder = () => {
    setOpenOrder(false);
  };

  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const { updateOrder } = useContext(UserContext);

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>

        <TableCell sx={{ display: "flex", gap: 2 }}>
          <CardMedia
            sx={{ height: 50, width: 50 }}
            image={data.products[0]?.food?.image}
            title="green iguana"
          />
          <Box component="th" width={"80%"} scope="row" padding="none">
            <Stack direction="column" spacing={0}>
              <Typography variant="subtitle2" noWrap>
                {data.orderNo}
              </Typography>
              <Typography fontSize={14} maxWidth={"100%"}>
                {data.products[0]?.food?.name}
              </Typography>
            </Stack>
          </Box>
        </TableCell>

        <TableCell>{data.address?.phone}</TableCell>

        <TableCell
          sx={{ justifyContent: "space-center", alignItems: "center" }}
        >
          <Stack display={"flex"} spacing={1}>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography variant="subtitle2" noWrap>
                {data.payment.amount}₮
              </Typography>
              <Label
                color={
                  (data.payment.status === "banned" && "error") || "success"
                }
              >
                {data.payment.status}
              </Label>
            </Box>
          </Stack>
          <Typography fontSize={11} width={130}>
            {moment(data.payment.createAt).format("LLL")}
          </Typography>
        </TableCell>

        <TableCell align="center">
          <Typography fontSize={11}>{data.address.duureg}</Typography>
          <Typography fontSize={11}>{data.address.khoroo}</Typography>
          <Typography fontSize={11}>{data.address.buildingNo}</Typography>
        </TableCell>

        <TableCell>
          <Label
            color={(data.delivery.status === "banned" && "error") || "success"}
          >
            {data.delivery.status}
          </Label>
        </TableCell>

        <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleOpenOrder}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={() => {}} sx={{ color: "error.main" }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
      <OrderModal
        open={openOrder}
        handleClose={handleCloseOrder}
        order={data}
      />
    </>
  );
}
