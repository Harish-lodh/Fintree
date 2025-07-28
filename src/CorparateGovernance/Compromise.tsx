import { Box, Button, Typography, Container } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import compromise from "../Documents/Compromise-Settlement-Technical-Write-off-Policy_V.01.pdf"
import cg from '../assets/img/corporate-governance.webp'
const CompromisePolicy = () => {
  return (
    <>  <div className='w-full mt-1'>
  <img src={cg} className='h-80 object-cover w-full' />
</div>
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 3,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 500 }}>
          Compromise &amp; Settlement Policy
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#D32F2F",
            "&:hover": { backgroundColor: "#B71C1C" },
            textTransform: "none",
            px: 3,
            py: 1,
            fontWeight: 500,
          }}
          startIcon={<PictureAsPdfIcon />}
          href= {compromise}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Now
        </Button>
      </Box>
    </Container>
    </>
  );
};

export default CompromisePolicy;
