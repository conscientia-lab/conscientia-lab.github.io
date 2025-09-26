import { Box, Container, Typography, keyframes } from "@mui/material";
import logo from "../../assets/logo_white.png";

// Animações

const glow = keyframes`
  0%, 100% { text-shadow: 0 0 30px rgba(16, 185, 129, 0.3), 0 0 60px rgba(16, 185, 129, 0.1); }
  50% { text-shadow: 0 0 40px rgba(16, 185, 129, 0.5), 0 0 80px rgba(16, 185, 129, 0.2); }
`;

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
`;

const slideUp = keyframes`
  0% { 
    opacity: 0;
    transform: translateY(50px);
  }
  100% { 
    opacity: 1;
    transform: translateY(0);
  }
`;

const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        color: "white",
        position: "relative",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Hero Section */}
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            py: 8,
          }}
        >
          {/* Logo com efeitos */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 3,
              position: "relative",
              animation: `${slideUp} 1s ease-out`,
              "&::before": {
                content: '""',
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "400px",
                height: "100px",
                background:
                  "linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.15), transparent)",
                animation: `${shimmer} 3s ease-in-out infinite`,
                zIndex: -1,
              },
            }}
          >
            <Box
              sx={{
                width: { xs: "360px", sm: "430px" },
                filter: "drop-shadow(0 0 20px rgba(16, 185, 129, 0.3))",
                animation: `${glow} 3s ease-in-out infinite`,
              }}
            >
              <img
                src={logo}
                alt="Logo"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </Box>
          </Box>

          {/* Tagline Principal */}
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.8rem", md: "2.5rem", lg: "2.8rem" },
              fontWeight: 600,
              mb: 4,
              background:
                "linear-gradient(135deg, #10b981 0%, #22c55e 30%, #f59e0b 60%, #10b981 100%)",
              backgroundSize: "300% 100%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 40px rgba(16, 185, 129, 0.4)",
              animation: `${slideUp} 1s ease-out 0.3s both, ${glow} 4s ease-in-out infinite`,
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Transformando ideias em{" "}
            <Box
              component="span"
              sx={{
                color: "#10b981",
                fontWeight: 700,
                display: "block",
                mt: 1,
              }}
            >
              soluções inteligentes
            </Box>
          </Typography>

          {/* Descrição */}
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.4rem" },
              mb: 6,
              opacity: 0.95,
              maxWidth: "700px",
              mx: "auto",
              lineHeight: 1.8,
              fontWeight: 300,
              animation: `${slideUp} 1s ease-out 0.6s both`,
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
            }}
          >
            Somos uma{" "}
            <Box
              component="span"
              sx={{
                color: "#10b981",
                fontWeight: 500,
                textDecoration: "underline",
                textDecorationColor: "rgba(16, 185, 129, 0.3)",
              }}
            >
              software house
            </Box>{" "}
            especializada em desenvolver aplicações modernas e soluções de{" "}
            <Box
              component="span"
              sx={{
                color: "#f59e0b",
                fontWeight: 500,
              }}
            >
              inteligência artificial
            </Box>{" "}
            que impulsionam o sucesso do seu negócio.
          </Typography>

          {/* Elementos decorativos */}
          <Box
            sx={{
              position: "relative",
              "&::before, &::after": {
                content: '""',
                position: "absolute",
                height: "2px",
                background:
                  "linear-gradient(90deg, transparent, #10b981, transparent)",
                animation: `${pulse} 3s ease-in-out infinite`,
              },
              "&::before": {
                width: "200px",
                top: "-50px",
                left: "50%",
                transform: "translateX(-50%)",
              },
              "&::after": {
                width: "150px",
                bottom: "-50px",
                left: "50%",
                transform: "translateX(-50%)",
                background:
                  "linear-gradient(90deg, transparent, #f59e0b, transparent)",
                animationDelay: "1.5s",
              },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
