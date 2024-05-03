import React, { useContext, useState } from "react";
import { Badge, Typography, Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { BasketContext } from "@/context/BasketProvider";
import Drawer from "@/components/Drawer/index";

const AtDrawer = () => {
  const { foodsInBask } = useContext(BasketContext);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenDrawer = () => {
    return setOpenDrawer(true);
  };
  const handleCloseDrawer = () => {
    return setOpenDrawer(false);
  };

  return (
    <>
      <Button variant="text" sx={{ color: "white" }} onClick={handleOpenDrawer}>
        <Badge
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          badgeContent={foodsInBask?.length}
          color="error"
        >
          <AddShoppingCartIcon sx={{ color: "black" }} />
        </Badge>

        <Typography color={"black"}> Сагс</Typography>
      </Button>
      <Drawer closeDrawer={handleCloseDrawer} open={openDrawer} />
    </>
  );
};

export default AtDrawer;
