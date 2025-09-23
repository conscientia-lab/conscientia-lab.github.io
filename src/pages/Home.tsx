import { Box, Container, useTheme } from "@mui/material";

const Home = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `
          radial-gradient(circle at 20% 80%, rgba(0, 229, 255, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(33, 150, 243, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(13, 33, 55, 0.3) 0%, transparent 50%),
          linear-gradient(135deg, #0a1929 0%, #1e3a8a 50%, #0f172a 100%)
        `,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(2),
      }}
    >
      <Container maxWidth="md">Teste CI/CD</Container>
    </Box>
  );
};

export default Home;
