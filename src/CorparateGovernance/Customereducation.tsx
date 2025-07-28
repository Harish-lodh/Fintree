import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { useTheme } from '@mui/material/styles';
import customereducation from "../Documents/Revised_SMA-on-Costumer-Education.pdf"
   import cg from '../assets/img/corporate-governance.webp'
const CustomerEducation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
 
<div className='w-full mt-1'>
  <img src={cg} className='h-80 object-cover w-full' />
</div>
    
    <Box sx={{ px: 2, py: 6 }}>
      <Box
        sx={{
          maxWidth: 1000,
          mx: 'auto',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: isMobile ? 'flex-start' : 'center',
          gap: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 500,
            textAlign: isMobile ? 'left' : 'inherit',
          }}
        >
          Customer Education on Special Mention Accounts
        </Typography>

        <Button
          variant="contained"
          color="error"
          startIcon={<PictureAsPdfIcon />}
          href= {customereducation}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            textTransform: 'none',
            px: 3,
            py: 1.2,
            fontWeight: 500,
          }}
        >
          View Now
        </Button>
      </Box>
    </Box>
    </>
  );
};

export default CustomerEducation;
