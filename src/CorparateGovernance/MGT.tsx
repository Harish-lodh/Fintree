import { Button, Container, Stack, Typography, Box } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf"
;

import pdf1 from '../Documents/MGT-7_23-24.pdf'
import pdf2 from '../Documents/FORM_MGT-7-FY_22-23.pdf'
import pdf3 from '../Documents/FORM_MGT-7-FY_21-22.pdf'
import pdf4 from '../Documents/FORM_MGT-7-FY_20-21.pdf'
import pdf5 from '../Documents/FORM_MGT-7-FY_19-20.pdf';
import cg from '../assets/img/corporate-governance.webp'
const downloadLinks = [
  { label: "MGT-7 2023-24", url: pdf1 },
  { label: "MGT-7 2022-23", url: pdf2 },
  { label: "MGT-7 2021-22", url: pdf3 },
  { label: "MGT-7 2020-21", url: pdf4 },
  { label: "MGT-7 2019-20", url:pdf5},
];

const MGTNotices = () => {
  return (
    <>
<div className='w-full mt-1'>
  <img src={cg} className='h-80 object-cover w-full' />
</div>
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Stack spacing={3}>
        {downloadLinks.map((doc, index) => (
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

export default MGTNotices