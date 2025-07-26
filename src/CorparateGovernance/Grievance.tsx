import {
  Box,
  Button,
  Container,
  Typography
} from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Grievance_folder from "../Documents/Grievance-redressal-mechanism.pdf"

const Grievance = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #e0e0e0",
          pb: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 500 }}>
          Grievance Redressal Mechanism
        </Typography>

        <Button
          variant="contained"
          color="error"
          startIcon={<PictureAsPdfIcon />}
          href={Grievance_folder}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            textTransform: "none",
            px: 3,
            py: 1.2,
            fontWeight: 500,
          }}
        >
          View Now
        </Button>
      </Box>
    </Container>
  );
};

export default Grievance;
