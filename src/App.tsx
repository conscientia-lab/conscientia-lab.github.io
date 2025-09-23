import { useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Suspense } from "react";
import Home from "./pages/Home";
import { theme } from "./themes/theme";
import { MainLayout } from "./components/Layout/MainLayout";
import "./i18n";
import { initializeLanguage } from "./i18n/languageInitializer";

const LoadingFallback = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
  >
    <CircularProgress />
  </Box>
);

function App() {
  useEffect(() => {
    initializeLanguage();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<LoadingFallback />}>
        <MainLayout>
          <Home />
        </MainLayout>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
