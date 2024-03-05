"use client";
import React, { useContext } from "react";
import { Input } from "@/components";
import Radio from "@mui/material/Radio";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";

const khoroos = [
  "1-р хороо",
  "2-р хороо",
  "3-р хороо",
  "4-р хороо",
  "5-р хороо",
  "6-р хороо",
  "7-р хороо",
];
const duurguud = [
  "Багануур дүүрэг",
  "Багахангай дүүрэг",
  "Баянгол дүүрэг",
  "Баянзүрх дүүрэг",
  "Налайх дүүрэг",
  "Сонгинохайрхан дүүрэг",
  "Сүхбаатар дүүрэг",
  "Хан-Уул дүүрэг",
  "Чингэлтэй дүүрэг",
];
const buildings = [
  "Нархан хотхон",
  "26-р байр",
  "Хоймор хотхон",
  "45-р байр",
  "Зайсан хотхон ",
];

const Address = ({ values, errors, handleChange }: any) => {
  //   const { userForm } = useContext(UserContext);
  return (
    <Box>
      <Box display={"flex"} alignItems={"center"} gap={3}>
        <FormControlLabel value="female" control={<Radio />} label="" />
        <div>
          <Typography component="p" variant="subtitle2">
            Алхам 1
          </Typography>
          <Typography component="p">Хаягийн мэдээлэл оруулах</Typography>
          <Typography variant="body2" component="p" sx={{ color: "#0468C8" }}>
            Хүлээгдэж байна
          </Typography>
        </div>
      </Box>
      <Stack my={10} boxShadow={3} gap={10} p={5} borderRadius={2}>
        <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
          <Typography>Хаяг аа сонгоно уу</Typography>
          <Select
            value={values?.duureg}
            label="asfasdfadsdfd"
            name="duureg"
            onChange={handleChange}
            sx={{ bgcolor: "#ECEDF0" }}
          >
            <MenuItem disabled value="">
              <em>Дүүрэг сонгоно уу</em>
            </MenuItem>
            {duurguud.map((duureg) => (
              <MenuItem key={duureg} value={duureg}>
                {duureg}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText sx={{ color: "error" }}>
            {errors?.duureg}
          </FormHelperText>
          <Select
            name="khoroo"
            value={values?.khoroo}
            onChange={handleChange}
            sx={{ bgcolor: "#ECEDF0" }}
          >
            <MenuItem disabled value="">
              <em>Хороо сонгоно уу</em>
            </MenuItem>
            {khoroos.map((khoroo) => (
              <MenuItem key={khoroo} value={khoroo}>
                {khoroo}
              </MenuItem>
            ))}
          </Select>
          <Select
            name="street"
            onChange={handleChange}
            value={values?.street}
            sx={{ bgcolor: "#ECEDF0" }}
          >
            <MenuItem disabled value="">
              <em>Байр гудамж сонгоно уу</em>
            </MenuItem>
            {buildings.map((building) => (
              <MenuItem key={building} value={building}>
                {building}
              </MenuItem>
            ))}
          </Select>
        </div>

        <Input
          label="Нэмэлт мэдээлэл"
          name="info"
          value={values?.info}
          onChange={handleChange}
        />
        <Input label="Утасны дугаар*" name="phone" onChange={handleChange} />
        <div>
          <Typography>Төлбөр төлөх</Typography>
          <FormGroup
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <FormControlLabel sx={{}} control={<Checkbox />} label="Бэлнээр" />
            <FormControlLabel control={<Checkbox />} label="Картаар" />
            <FormControlLabel control={<Checkbox />} label="QPay" />
          </FormGroup>
        </div>
      </Stack>
    </Box>
  );
};

export default Address;
