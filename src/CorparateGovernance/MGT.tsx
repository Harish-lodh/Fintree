import { Button, Container, Stack, Typography, Box } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf"
;

const downloadLinks = [
  { label: "MGT-7 2023-24", url: "" },
  { label: "MGT-7 2022-23", url: "/pdfs/MGT7_2022_23.pdf" },
  { label: "MGT-7 2021-22", url: "/pdfs/MGT7_2021_22.pdf" },
  { label: "MGT-7 2020-21", url: "/pdfs/MGT7_2020_21.pdf" },
  { label: "MGT-7 2019-20", url: "/pdfs/MGT7_2019_20.pdf" },
];

const MGTNotices = () => {
  return (
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
  );
};

export default MGTNotices