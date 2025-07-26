import {
  Container,
  Stack,
  Typography,
  Button,
  Box
} from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import csrpolicy from "../Documents/CSR-policy.pdf"
import csr_committe from "../Documents/CSR-Committee.pdf";
import csr_report_22 from "../Documents/CSR-Annexure-1.pdf"
import csr_report_21 from "../Documents/CSR-report_2021.pdf"
import csr_report_20 from "../Documents/CSR-report_2020.pdf"

const csrDocs = [
  { label: "CSR Policy", url: `${csrpolicy}`, buttonText: "View PDF" },
  { label: "Composition of CSR", url: `${csr_committe}`, buttonText: "View PDF" },
  { label: "CSR Report 2020", url: `${csr_report_20}`, buttonText: "View PDF" },
  { label: "CSR Report 2021", url: `${csr_report_21}`, buttonText: "View PDF" },
  { label: "CSR Report 2022", url: `${csr_report_22}`, buttonText: "View PDF" },
];

const Corporatesocialres = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Stack spacing={3}>
        {csrDocs.map((doc, index) => (
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
              startIcon={<PictureAsPdfIcon />}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textTransform: "none",
                px: 3,
                py: 1.2,
                fontWeight: 500,
              }}
            >
              {doc.buttonText}
            </Button>
          </Box>
        ))}
      </Stack>
    </Container>
  );
};

export default Corporatesocialres;
