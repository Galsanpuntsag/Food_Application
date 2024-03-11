import { useState } from "react";
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
import { CardMedia, Grid } from "@mui/material";

// ----------------------------------------------------------------------

type UserTableRowProps = {
  data: {
    address: { duureg: string; khoroo: string };
    orderNo: number;
    products: [
      food: {
        name: string;
        image: string;
      }
    ];
  };
  selected: any;
  handleClick: any;
};

export default function UserTableRow({
  selected,
  data,
  handleClick,
}: UserTableRowProps) {
  const [open, setOpen] = useState(null);
  console.log("DDDDDD+>", data);

  const handleOpenMenu = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>

        <TableCell sx={{ display: "flex", gap: 3 }}>
          <CardMedia
            sx={{ height: 50, width: 50 }}
            image={data.products[0].food?.image}
            title="green iguana"
          />
          <TableCell component="th" scope="row" padding="none">
            <Stack direction="column" alignItems="center" spacing={0}>
              <Typography variant="subtitle2" noWrap>
                {data.orderNo}
              </Typography>
              <Typography fontSize={14} maxWidth={90}>
                {data.products[0].food?.name}
              </Typography>
            </Stack>
          </TableCell>
        </TableCell>

        <TableCell>{data.address?.duureg}</TableCell>

        <TableCell>{data.address?.khoroo} || aahha</TableCell>

        <TableCell align="center">iiiii</TableCell>

        <TableCell>
          <Label color={(status === "banned" && "error") || "success"}>
            {status}
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
        <MenuItem onClick={handleCloseMenu}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={handleCloseMenu} sx={{ color: "error.main" }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}
