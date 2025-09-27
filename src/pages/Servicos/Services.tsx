import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  keyframes,
} from "@mui/material";
import {
  Code as CodeIcon,
  Psychology as AIIcon,
  SmartToy as RPAIcon,
  Cloud as CloudIcon,
  Support as SupportIcon,
  Assignment as AssignmentIcon,
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

const cardFloat = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
`;

const Services = () => {
  const services = [
    {
      icon: <CodeIcon sx={{ fontSize: 48 }} />,
      title: "Desenvolvimento de Software",
      description:
        "Criamos aplicações web e mobile modernas, escaláveis e seguras, utilizando as melhores práticas e tecnologias atuais do mercado.",
      highlights: [],
      color: "#10b981",
    },
    {
      icon: <AIIcon sx={{ fontSize: 48 }} />,
      title: "Inteligência Artificial",
      description:
        "Desenvolvemos soluções de IA personalizadas, desde chatbots inteligentes até sistemas de análise preditiva e machine learning.",
      highlights: [],
      color: "#f59e0b",
    },
    {
      icon: <RPAIcon sx={{ fontSize: 48 }} />,
      title: "RPA - Automação Robótica",
      description:
        "Automatizamos processos repetitivos e manuais, aumentando a eficiência operacional e reduzindo custos.",
      highlights: [],
      color: "#10b981",
    },
    {
      icon: <CloudIcon sx={{ fontSize: 48 }} />,
      title: "Serviços de Cloud",
      description:
        "Migramos, configuramos e gerenciamos sua infraestrutura na nuvem, garantindo alta disponibilidade e segurança.",
      highlights: [],
      color: "#f59e0b",
    },
    {
      icon: <AssignmentIcon sx={{ fontSize: 48 }} />,
      title: "Consultoria Tecnológica",
      description:
        "Orientamos sua empresa na escolha das melhores tecnologias e estratégias para atingir seus objetivos de negócio.",
      highlights: [],
      color: "#10b981",
    },
    {
      icon: <SupportIcon sx={{ fontSize: 48 }} />,
      title: "Manutenção e Suporte",
      description:
        "Oferecemos suporte técnico especializado e manutenção preventiva para garantir o funcionamento contínuo dos seus sistemas.",
      highlights: [],
      color: "#f59e0b",
    },
  ];

  return (
    <Box
      id="services"
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
            Nossos Serviços
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
            Soluções tecnológicas completas para impulsionar o{" "}
            <Box
              component="span"
              sx={{
                color: "#10b981",
                fontWeight: 500,
              }}
            >
              crescimento
            </Box>{" "}
            do seu negócio com{" "}
            <Box
              component="span"
              sx={{
                color: "#f59e0b",
                fontWeight: 500,
              }}
            >
              inovação
            </Box>{" "}
            e excelência técnica.
          </Typography>
        </Box>

        {/* Services Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: 4,
            mb: 8,
          }}
        >
          {services.map((service, index) => (
            <Card
              key={index}
              sx={{
                height: "100%",
                background: `rgba(${
                  service.color === "#10b981" ? "16, 185, 129" : "245, 158, 11"
                }, 0.05)`,
                backdropFilter: "blur(16px)",
                border: `1px solid rgba(${
                  service.color === "#10b981" ? "16, 185, 129" : "245, 158, 11"
                }, 0.2)`,
                borderRadius: 4,
                textAlign: "center",
                transition: "all 0.4s ease",
                animation: `${slideUp} 1s ease-out ${0.2 + index * 0.1}s both`,
                position: "relative",
                overflow: "hidden",
                "&:hover": {
                  transform: "translateY(-10px) scale(1.02)",
                  boxShadow: `0 25px 50px rgba(${
                    service.color === "#10b981"
                      ? "16, 185, 129"
                      : "245, 158, 11"
                  }, 0.2)`,
                  border: `1px solid rgba(${
                    service.color === "#10b981"
                      ? "16, 185, 129"
                      : "245, 158, 11"
                  }, 0.4)`,
                  background: `rgba(${
                    service.color === "#10b981"
                      ? "16, 185, 129"
                      : "245, 158, 11"
                  }, 0.1)`,
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "100%",
                  height: "2px",
                  background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`,
                  transition: "all 0.6s ease",
                },
                "&:hover::before": {
                  left: "100%",
                },
              }}
            >
              <CardContent
                sx={{
                  p: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    color: service.color,
                    mb: 3,
                    transition: "all 0.3s ease",
                    animation: `${cardFloat} ${
                      6 + index
                    }s ease-in-out infinite`,
                  }}
                >
                  {service.icon}
                </Box>

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    color: service.color,
                    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
                    fontSize: { xs: "1.3rem", md: "1.5rem" },
                  }}
                >
                  {service.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    opacity: 0.85,
                    lineHeight: 1.7,
                    textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
                    mb: 3,
                    flexGrow: 1,
                    fontSize: "1.05rem",
                  }}
                >
                  {service.description}
                </Typography>

                {/* Highlights */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 1,
                    mt: "auto",
                  }}
                >
                  {service.highlights.map((highlight, highlightIndex) => (
                    <Box
                      key={highlightIndex}
                      sx={{
                        px: 2,
                        py: 0.5,
                        backgroundColor: `rgba(${
                          service.color === "#10b981"
                            ? "16, 185, 129"
                            : "245, 158, 11"
                        }, 0.15)`,
                        border: `1px solid rgba(${
                          service.color === "#10b981"
                            ? "16, 185, 129"
                            : "245, 158, 11"
                        }, 0.3)`,
                        borderRadius: 2,
                        fontSize: "0.8rem",
                        fontWeight: 500,
                        color: service.color,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: `rgba(${
                            service.color === "#10b981"
                              ? "16, 185, 129"
                              : "245, 158, 11"
                          }, 0.25)`,
                        },
                      }}
                    >
                      {highlight}
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
