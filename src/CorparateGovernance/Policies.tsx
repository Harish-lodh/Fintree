import { Box, Button, Typography } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import interestmodel from "../Documents/INTEREST-RATE-MODEL-1.3.pdf"
import fairpractise from "../Documents/Fair-Practice-Code-v3.pdf"
import itoutstanding from "../Documents/IT_Outsourcing_Policy_version1.pdf"
import statutoryauditpolicy from "../Documents/Policy_on_Appointment_of_Statutory_Auditor.pdf"
import cg from '../assets/img/corporate-governance.webp'
import Fpc_hindi from '../Documents/Fair practice code_Hindi.pdf'
import Fpc_marathi from '../Documents/Fair practice code_marathi.pdf'
import GrievanceRedressal from '../Documents/Grievance-redressal-mechanism.pdf'
import compromiseAndsettlement from '../Documents/Compromise-Settlements _Technical_Write_off_Policy.pdf'
 

const policies = [
  { title: 'Grievance Redressal Mechanism', link: `${GrievanceRedressal}` },
  { title: 'Compromise & Settlement Policy', link: `${compromiseAndsettlement}` },
  { title: 'Interest Rate Model', link: `${interestmodel}` },
  { title: 'Fair Practice Code', link: `${fairpractise}` },
  { title: 'IT Outsourcing Policy', link: `${itoutstanding}` },
  { title: 'Statutory Audit Policy', link: `${statutoryauditpolicy}` },
  { title: 'Fair Practice Code (Hindi)', link: `${Fpc_hindi}` },
  { title: 'Fair Practice Code (Marathi)', link: `${Fpc_marathi}` }

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
