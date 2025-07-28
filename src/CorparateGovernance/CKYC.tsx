import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { useTheme } from '@mui/material/styles';

import video from "../video/CKYCvideoforReportingEntities.mp4";
import ckybanner from "../assets/img/CKYC-Banner.jpg";
import cg from '../assets/img/corporate-governance.webp'
const CKYCSection = () => {
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
          maxWidth: 900,
          mx: 'auto', // centers the content horizontally
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
        }}
      >
        {/* CKYC Banner */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: isMobile ? 'flex-start' : 'center',
            gap: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            CKYC Banner
          </Typography>

          <Button
            variant="contained"
            color="error"
            startIcon={<PictureAsPdfIcon />}
            href={ckybanner}
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

        {/* CKYC Awareness Video */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: isMobile ? 'flex-start' : 'center',
            gap: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            CKYC Awareness video
          </Typography>

          <Button
            variant="contained"
            color="error"
            startIcon={<VideoLibraryIcon />}
            href={video}
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
    </Box>
    </>
  );
};

export default CKYCSection;
