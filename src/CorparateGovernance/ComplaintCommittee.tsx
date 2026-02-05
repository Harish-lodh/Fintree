import { Button, Container, Stack, Typography, Box } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

import ComplaintCommittee from '../Documents/Internal Complaint Committee.pdf'

import cg from '../assets/img/corporate-governance.webp'
const viewLinks = [
  { label: "Internal Complaint Committee", url: ComplaintCommittee },
];

const InternalComplaintCommittee = () => {
  return (
    <>
      <div className='w-full mt-1'>
        <img src={cg} className='h-80 object-cover w-full' />
      </div>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Stack spacing={3}>
          {viewLinks.map((doc, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #e0e0e0",
                pb: 1.5,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                {doc.label}
              </Typography>
              <Button
                variant="contained"
                color="error"
                href={doc.url}
                target="_blank"
                startIcon={<PictureAsPdfIcon />}
                sx={{
                  textTransform: "none",
                  fontWeight: 500,
                  px: 3,
                  py: 1.2,
                }}
              >
                View Now
              </Button>
            </Box>
          ))}
        </Stack>
      </Container>
    </>
  );
};

export default InternalComplaintCommittee