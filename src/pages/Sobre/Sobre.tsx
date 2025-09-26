import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  keyframes,
} from "@mui/material";
import {
  Lightbulb as LightbulbIcon,
  Visibility as VisibilityIcon,
  FavoriteOutlined as HeartIcon,
  TrendingUp as GrowthIcon,
  Groups as TeamIcon,
  Rocket as RocketIcon,
} from "@mui/icons-material";

// Animações suaves
const slideUp = keyframes`
  0% { 
    opacity: 0;
    transform: translateY(30px);
  }
  100% { 
    opacity: 1;
    transform: translateY(0);
  }
`;

const About = () => {
  const values = [
    {
      icon: <LightbulbIcon sx={{ fontSize: 40 }} />,
      title: "Inovação",
      description:
        "Buscamos constantemente novas tecnologias e metodologias para oferecer soluções únicas e eficientes.",
    },
    {
      icon: <HeartIcon sx={{ fontSize: 40 }} />,
      title: "Excelência",
      description:
        "Comprometimento com qualidade superior em cada linha de código e em cada solução desenvolvida.",
    },
    {
      icon: <TeamIcon sx={{ fontSize: 40 }} />,
      title: "Colaboração",
      description:
        "Trabalhamos em parceria com nossos clientes, construindo soluções de forma colaborativa e transparente.",
    },
    {
      icon: <GrowthIcon sx={{ fontSize: 40 }} />,
      title: "Evolução",
      description:
        "Investimos no desenvolvimento contínuo da nossa equipe e na adoção de tecnologias emergentes.",
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        minHeight: "100vh",
        color: "white",
        position: "relative",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, py: 8 }}>
        {/* Hero Section */}
        <Box
          sx={{
            textAlign: "center",
            mb: 10,
            pt: 8,
            animation: `${slideUp} 1s ease-out`,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
              fontWeight: 700,
              mb: 3,
              background:
                "linear-gradient(135deg, #10b981 0%, #22c55e 30%, #f59e0b 60%, #10b981 100%)",
              backgroundSize: "300% 100%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 30px rgba(16, 185, 129, 0.3)",
            }}
          >
            Quem somos
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              fontWeight: 300,
              mb: 4,
              opacity: 0.9,
              maxWidth: "700px",
              mx: "auto",
              lineHeight: 1.6,
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            Uma{" "}
            <Box
              component="span"
              sx={{
                color: "#10b981",
                fontWeight: 500,
              }}
            >
              software house
            </Box>{" "}
            nascida da paixão por tecnologia e{" "}
            <Box
              component="span"
              sx={{
                color: "#f59e0b",
                fontWeight: 500,
              }}
            >
              inteligência artificial
            </Box>
            , dedicada a criar soluções inteligentes que transformam negócios.
          </Typography>
        </Box>

        {/* Mission & Vision Section */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 6,
            mb: 10,
            // animation: `${slideUp} 1s ease-out 0.3s both`,
          }}
        >
          <Card
            sx={{
              pb: 3,
              height: "100%",
              background: "rgba(16, 185, 129, 0.08)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(16, 185, 129, 0.2)",
              borderRadius: 4,
              transition: "all 0.3s ease",
              //   animation: `${cardFloat} 6s ease-in-out infinite`,
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 20px 40px rgba(16, 185, 129, 0.2)",
                border: "1px solid rgba(16, 185, 129, 0.3)",
              },
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <RocketIcon sx={{ fontSize: 40, color: "#10b981", mr: 2 }} />
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 600, color: "#10b981" }}
                >
                  Missão
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  opacity: 0.9,
                }}
              >
                Desenvolver soluções tecnológicas inovadoras que potencializem o
                crescimento dos nossos clientes, utilizando{" "}
                <Box
                  component="span"
                  sx={{
                    color: "#f59e0b",
                    fontWeight: 500,
                  }}
                >
                  inteligência artificial
                </Box>{" "}
                e as melhores práticas de desenvolvimento para criar produtos
                que fazem a diferença.
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{
              pb: 3,
              height: "100%",
              background: "rgba(245, 158, 11, 0.08)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(245, 158, 11, 0.2)",
              borderRadius: 4,
              transition: "all 0.3s ease",
              //   animation: `${cardFloat} 6s ease-in-out infinite 3s`,
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 20px 40px rgba(245, 158, 11, 0.2)",
                border: "1px solid rgba(245, 158, 11, 0.3)",
              },
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <VisibilityIcon
                  sx={{ fontSize: 40, color: "#f59e0b", mr: 2 }}
                />
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 600, color: "#f59e0b" }}
                >
                  Visão
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  opacity: 0.9,
                }}
              >
                Ser referência em desenvolvimento de{" "}
                <Box
                  component="span"
                  sx={{
                    color: "#10b981",
                    fontWeight: 500,
                  }}
                >
                  software
                </Box>{" "}
                e soluções de IA, reconhecida pela qualidade, inovação e impacto
                positivo que geramos no mercado brasileiro.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Values Section */}
        <Box
          sx={{
            mb: 10,
            animation: `${slideUp} 1s ease-out 0.6s both`,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 600,
              mb: 6,
              textAlign: "center",
              background: "linear-gradient(135deg, #10b981 0%, #f59e0b 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 20px rgba(16, 185, 129, 0.2)",
            }}
          >
            Nossos Valores
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: 4,
            }}
          >
            {values.map((value, index) => (
              <Card
                key={index}
                sx={{
                  height: "100%",
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(16, 185, 129, 0.1)",
                  borderRadius: 3,
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  animation: `${slideUp} 1s ease-out ${
                    0.8 + index * 0.1
                  }s both`,
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(16, 185, 129, 0.15)",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                    background: "rgba(16, 185, 129, 0.05)",
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      color: index % 2 === 0 ? "#10b981" : "#f59e0b",
                      mb: 2,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {value.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: "white",
                      textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      opacity: 0.85,
                      lineHeight: 1.6,
                      textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
