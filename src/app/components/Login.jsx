"use Client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  TextField,
  Stack,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [errorMessage, setErrorMessage] = useState("TEST ERROR");

  return (
    <div>
      <Button
        onClick={handleOpen}
        className="bg-[#ff7f00] text-white hover:text-black"
      >
        Login
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="flex flex-col items-center gap-2 border border-[#ff7f00] rounded-lg"
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="text-3xl text-center"
          >
            Login
          </Typography>
          <TextField id="outlined-basic" label="Username" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
          />
          <Stack spacing={2} direction="row">
            <Button className="bg-[#ff7f00] text-white hover:text-black">
              Login
            </Button>
            <Button className="bg-[#ff7f00] text-white hover:text-black">
              Register
            </Button>
          </Stack>
          {errorMessage}
        </Box>
      </Modal>
    </div>
  );
}
