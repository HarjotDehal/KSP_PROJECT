import React, { useState } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";

const LoadEditForm = ({ load, onSave,onClose }) => {
  const [updatedLoad, setUpdatedLoad] = useState(load);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedLoad((prevLoad) => ({
      ...prevLoad,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    onSave(updatedLoad);
    onClose();
  };

  const handleCloseClick = () => {
    onClose();
  };

  return (
    <Modal open={true} onClose={handleCloseClick}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2">
          Edit Load
        </Typography>
        <TextField
          label="Company Name"
          name="CompanyName"
          value={updatedLoad.CompanyName}
          onChange={handleInputChange}
        />
        {/* Other input fields for load properties */}
        <Button onClick={handleSaveClick}>Save</Button>
      </Box>
    </Modal>
  );
};

export default LoadEditForm;