import { Snackbar, Alert } from "@mui/material";

const ErrorAlert = (props: {
  isOpen: boolean;
  message: string;
  onClose: (isOpen: boolean) => void;
}) => {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    props.onClose(false);
  };

  return (
    <div>
      <Snackbar
        sx={{ paddingTop: "10vh" ,  zIndex: 0}}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={props.isOpen}
        onClose={handleClose}
        autoHideDuration={2000}
        ContentProps={{
          sx: {
            width: "auto", // Allow the width to auto size based on content
            maxWidth: "300px", // Optional: Set a max width
            padding: "8px 16px", // Adjust padding if necessary
            margin: "0", // Remove margin to prevent excess spacing
          },
        }}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          {props.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ErrorAlert;
