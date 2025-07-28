import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { useTheme } from '@mui/material/styles';
import Ombudsmanfile from "../Documents/Integrated-Ombudsman-Scheme-2021.pdf";
import SilentOmbudsman from "../Documents/Salient-features_Integrated-Ombudsman-Scheme2021.pdf";
 import cg from '../assets/img/corporate-governance.webp'


const downloads = [
  {
    title: 'RBI Integrated Ombudsman Scheme 2021',
    file: `${Ombudsmanfile}`,
  },
  {
    title: 'Salient features_Integrated Ombudsman Scheme,2021',
    file: `${SilentOmbudsman}`,
  },
];

const Ombudsman = () => {
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
          flexDirection: 'column',
          gap: 6,
        }}
      >
        {downloads.map((doc, idx) => (
          <Box
            key={idx}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: isMobile ? 'flex-start' : 'center',
              flexDirection: isMobile ? 'column' : 'row',
              gap: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              {doc.title}
            </Typography>

            <Button
              variant="contained"
              color="error"
              startIcon={<PictureAsPdfIcon />}
              href={doc.file}
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
        ))}
      </Box>
    </Box>
    </>
  );
};

export default Ombudsman;
