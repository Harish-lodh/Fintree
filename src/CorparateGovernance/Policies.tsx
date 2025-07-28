import { Box, Button, Typography } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import interestmodel from "../Documents/INTEREST-RATE-MODEL-1.3.pdf"
import fairpractise from "../Documents/Fair-Practices-Code-v3.pdf"
import itoutstanding from "../Documents/IT-Outsourcing-Policy.pdf"
import auditpolicy from "../Documents/FFPL-Audit-Policy.pdf"
 import cg from '../assets/img/corporate-governance.webp'

 
const policies = [
  { title: 'Interest Rate Model', link: `${interestmodel}` },
  { title: 'Fair Practice Code', link: `${fairpractise}` },
  { title: 'IT Outsourcing Policy', link: `${itoutstanding}` },
  { title: 'Audit Policy', link: `${auditpolicy}` },
];

const PolicyDownloads = () => {
  return (
    <>
   
<div className='w-full mt-1'>
  <img src={cg} className='h-80 object-cover w-full' />
</div>
    <Box sx={{ px: 2, py: 6 }}>
      <Box
        sx={{
          maxWidth: 900,
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 5,
        }}
      >
        {policies.map((policy, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: {
                xs: 'column', // stack on small screens
                sm: 'row',    // row layout on medium+
              },
              gap: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              {policy.title}
            </Typography>

            <Button
              variant="contained"
              color="error"
              startIcon={<PictureAsPdfIcon />}
              href={policy.link}
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

export default PolicyDownloads;
