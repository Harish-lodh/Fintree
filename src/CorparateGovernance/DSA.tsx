import {
  Box,
  Button,
  Typography,
  Container
} from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DSA_file from "../Documents/DSA_CodeOfConduct.pdf"
import cg from '../assets/img/corporate-governance.webp'
const DSA = () => {

  return (
      <>
<div className='w-full mt-1'>
  <img src={cg} className='h-80 object-cover w-full' />
</div>
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
          DSA - Code of Conduct
        </Typography>

        <Button
          variant="contained"
          color="error"
          startIcon={<PictureAsPdfIcon />}
          href= {`${DSA_file}`}
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
    </>
  );
};

export default DSA;
