import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  keyframes,
} from "@mui/material";
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Schedule as ScheduleIcon,
  WhatsApp as WhatsAppIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Business as BusinessIcon,
  Support as SupportIcon,
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

const Contact = () => {
  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 32 }} />,
      title: "E-mail",
      content: "contato@conscientia.com.br",
      link: "mailto:contato@conscientia.com.br",
      color: "#10b981",
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 32 }} />,
      title: "Telefone",
      content: "+55 (41) 99999-9999",
      link: "tel:+5541999999999",
      color: "#f59e0b",
    },
    {
      icon: <WhatsAppIcon sx={{ fontSize: 32 }} />,
      title: "WhatsApp",
      content: "+55 (41) 99999-9999",
      link: "https://wa.me/5541999999999",
      color: "#10b981",
    },
    {
      icon: <LocationIcon sx={{ fontSize: 32 }} />,
      title: "Localização",
      content: "Curitiba, PR - Brasil",
      link: "#",
      color: "#f59e0b",
    },
    {
      icon: <ScheduleIcon sx={{ fontSize: 32 }} />,
      title: "Horário",
      content: "Seg - Sex: 8h às 18h",
      link: "#",
      color: "#10b981",
    },
    {
      icon: <BusinessIcon sx={{ fontSize: 32 }} />,
      title: "Consultoria",
      content: "Estratégia & Inovação",
      link: "#",
      color: "#f59e0b",
    },
  ];

  const contactMethods = [
    {
      icon: <SupportIcon sx={{ fontSize: 40 }} />,
      title: "Suporte Especializado",
      description:
        "Estamos prontos para entender suas necessidades e oferecer soluções personalizadas.",
      color: "#10b981",
    },
    {
      icon: <BusinessIcon sx={{ fontSize: 40 }} />,
      title: "Consultoria Estratégica",
      description:
        "Análise completa do seu negócio para identificar oportunidades de crescimento e otimização.",
      color: "#f59e0b",
    },
  ];

  return (
    <Box
      id="contact"
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
            mb: 8,
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
            Entre em Contato
          </Typography>
        </Box>

        {/* Contact Methods Section */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
            mb: 8,
          }}
        >
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              sx={{
                background: `rgba(${
                  method.color === "#10b981" ? "16, 185, 129" : "245, 158, 11"
                }, 0.05)`,
                backdropFilter: "blur(16px)",
                border: `1px solid rgba(${
                  method.color === "#10b981" ? "16, 185, 129" : "245, 158, 11"
                }, 0.2)`,
                borderRadius: 4,
                animation: `${slideUp} 1s ease-out ${0.3 + index * 0.2}s both`,
                "&:hover": {
                  border: `1px solid rgba(${
                    method.color === "#10b981" ? "16, 185, 129" : "245, 158, 11"
                  }, 0.3)`,
                  boxShadow: `0 20px 40px rgba(${
                    method.color === "#10b981" ? "16, 185, 129" : "245, 158, 11"
                  }, 0.1)`,
                  transform: "translateY(-5px)",
                },
              }}
            >
              <CardContent sx={{ p: 4, textAlign: "center" }}>
                <Box
                  sx={{
                    color: method.color,
                    mb: 3,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {method.icon}
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: "1.3rem", md: "1.5rem" },
                    fontWeight: 600,
                    mb: 2,
                    color: method.color,
                  }}
                >
                  {method.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    opacity: 0.9,
                    lineHeight: 1.6,
                    fontSize: "1.05rem",
                  }}
                >
                  {method.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Contact Information */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "1.8rem", md: "2.2rem" },
              fontWeight: 600,
              mb: 4,
              background: "linear-gradient(135deg, #10b981 0%, #f59e0b 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textAlign: "center",
              animation: `${slideUp} 1s ease-out 0.6s both`,
            }}
          >
            Informações de Contato
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                lg: "repeat(3, 1fr)",
              },
              gap: 3,
              animation: `${slideUp} 1s ease-out 0.8s both`,
            }}
          >
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                component="a"
                href={info.link}
                target={info.link.startsWith("http") ? "_blank" : "_self"}
                rel={
                  info.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                sx={{
                  background: `rgba(${
                    info.color === "#10b981" ? "16, 185, 129" : "245, 158, 11"
                  }, 0.05)`,
                  backdropFilter: "blur(16px)",
                  border: `1px solid rgba(${
                    info.color === "#10b981" ? "16, 185, 129" : "245, 158, 11"
                  }, 0.2)`,
                  borderRadius: 3,
                  textDecoration: "none",
                  color: "inherit",
                  transition: "all 0.3s ease",
                  animation: `${slideUp} 1s ease-out ${
                    0.8 + index * 0.1
                  }s both`,
                  "&:hover": {
                    transform: "translateY(-5px)",
                    border: `1px solid rgba(${
                      info.color === "#10b981" ? "16, 185, 129" : "245, 158, 11"
                    }, 0.4)`,
                    boxShadow: `0 15px 30px rgba(${
                      info.color === "#10b981" ? "16, 185, 129" : "245, 158, 11"
                    }, 0.2)`,
                    background: `rgba(${
                      info.color === "#10b981" ? "16, 185, 129" : "245, 158, 11"
                    }, 0.1)`,
                  },
                }}
              >
                <CardContent sx={{ p: 3, textAlign: "center" }}>
                  <Box
                    sx={{
                      color: info.color,
                      mb: 2,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: info.color,
                      mb: 1,
                      fontSize: "1.1rem",
                    }}
                  >
                    {info.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      opacity: 0.9,
                      fontSize: "0.95rem",
                    }}
                  >
                    {info.content}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Call to Action */}
        <Box
          sx={{
            textAlign: "center",
            animation: `${slideUp} 1s ease-out 1.4s both`,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem" },
              fontWeight: 600,
              mb: 2,
              background: "linear-gradient(135deg, #10b981 0%, #f59e0b 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Vamos construir algo incrível juntos?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              opacity: 0.8,
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Estamos prontos para transformar suas ideias em soluções
            tecnológicas que impulsionam resultados excepcionais.
          </Typography>
        </Box>

        {/* Footer */}
        <Box
          sx={{
            textAlign: "center",
            mt: 8,
            pt: 4,
            borderTop: "1px solid rgba(16, 185, 129, 0.2)",
            animation: `${slideUp} 1s ease-out 1.6s both`,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: "1.2rem",
              fontWeight: 500,
              mb: 3,
              background: "linear-gradient(135deg, #10b981 0%, #f59e0b 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Conecte-se conosco
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
              mb: 4,
            }}
          >
            <Box
              component="a"
              href="https://github.com/conscientia-lab"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "rgba(16, 185, 129, 0.1)",
                border: "1px solid rgba(16, 185, 129, 0.3)",
                color: "#10b981",
                textDecoration: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 10px 20px rgba(16, 185, 129, 0.2)",
                  background: "rgba(16, 185, 129, 0.2)",
                  border: "1px solid rgba(16, 185, 129, 0.5)",
                },
              }}
            >
              <GitHubIcon sx={{ fontSize: 24 }} />
            </Box>

            <Box
              component="a"
              href="https://linkedin.com/company/conscientia-lab"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "rgba(245, 158, 11, 0.1)",
                border: "1px solid rgba(245, 158, 11, 0.3)",
                color: "#f59e0b",
                textDecoration: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 10px 20px rgba(245, 158, 11, 0.2)",
                  background: "rgba(245, 158, 11, 0.2)",
                  border: "1px solid rgba(245, 158, 11, 0.5)",
                },
              }}
            >
              <LinkedInIcon sx={{ fontSize: 24 }} />
            </Box>
          </Box>

          <Typography
            variant="body2"
            sx={{
              opacity: 0.6,
              fontSize: "0.95rem",
            }}
          >
            © 2025 ConscientIA. Transformando ideias em soluções inteligentes.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
