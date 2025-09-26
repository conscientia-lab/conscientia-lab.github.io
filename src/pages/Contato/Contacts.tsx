import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  keyframes,
} from "@mui/material";
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Schedule as ScheduleIcon,
  Send as SendIcon,
  WhatsApp as WhatsAppIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";
import { useState } from "react";

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

const pulseGlow = keyframes`
  0%, 100% { 
    box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
  }
  50% { 
    box-shadow: 0 0 30px rgba(16, 185, 129, 0.5);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar o envio do formulário
    console.log("Form submitted:", formData);
  };

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
      link: "",
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
            Pronto para{" "}
            <Box
              component="span"
              sx={{
                color: "#10b981",
                fontWeight: 500,
              }}
            >
              transformar{" "}
            </Box>
            sua empresa? Entre em contato e vamos construir o{" "}
            <Box
              component="span"
              sx={{
                color: "#f59e0b",
                fontWeight: 500,
              }}
            >
              futuro
            </Box>{" "}
            juntos.
          </Typography>
        </Box>
        {/* Main Content */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            gap: 6,
            mb: 8,
          }}
        >
          {/* Contact Form */}
          <Card
            sx={{
              background: "rgba(16, 185, 129, 0.05)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(16, 185, 129, 0.2)",
              borderRadius: 4,
              animation: `${slideUp} 1s ease-out 0.3s both`,
              "&:hover": {
                border: "1px solid rgba(16, 185, 129, 0.3)",
                boxShadow: "0 20px 40px rgba(16, 185, 129, 0.1)",
              },
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "1.8rem", md: "2.2rem" },
                  fontWeight: 600,
                  mb: 3,
                  color: "#10b981",
                  textAlign: "center",
                }}
              >
                Envie sua Mensagem
              </Typography>

              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                }}
              >
                <TextField
                  fullWidth
                  label="Nome Completo"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      "& fieldset": {
                        borderColor: "rgba(16, 185, 129, 0.3)",
                      },
                      "&:hover fieldset": {
                        borderColor: "rgba(16, 185, 129, 0.5)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#10b981",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "rgba(255, 255, 255, 0.7)",
                      "&.Mui-focused": {
                        color: "#10b981",
                      },
                    },
                    "& .MuiOutlinedInput-input": {
                      color: "white",
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="E-mail"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      "& fieldset": {
                        borderColor: "rgba(16, 185, 129, 0.3)",
                      },
                      "&:hover fieldset": {
                        borderColor: "rgba(16, 185, 129, 0.5)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#10b981",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "rgba(255, 255, 255, 0.7)",
                      "&.Mui-focused": {
                        color: "#10b981",
                      },
                    },
                    "& .MuiOutlinedInput-input": {
                      color: "white",
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="Empresa"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      "& fieldset": {
                        borderColor: "rgba(16, 185, 129, 0.3)",
                      },
                      "&:hover fieldset": {
                        borderColor: "rgba(16, 185, 129, 0.5)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#10b981",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "rgba(255, 255, 255, 0.7)",
                      "&.Mui-focused": {
                        color: "#10b981",
                      },
                    },
                    "& .MuiOutlinedInput-input": {
                      color: "white",
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="Mensagem"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      "& fieldset": {
                        borderColor: "rgba(16, 185, 129, 0.3)",
                      },
                      "&:hover fieldset": {
                        borderColor: "rgba(16, 185, 129, 0.5)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#10b981",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "rgba(255, 255, 255, 0.7)",
                      "&.Mui-focused": {
                        color: "#10b981",
                      },
                    },
                    "& .MuiOutlinedInput-input": {
                      color: "white",
                    },
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<SendIcon />}
                  sx={{
                    mt: 2,
                    py: 1.5,
                    background:
                      "linear-gradient(135deg, #10b981 0%, #22c55e 100%)",
                    borderRadius: 3,
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    textTransform: "none",
                    animation: `${pulseGlow} 3s ease-in-out infinite`,
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #059669 0%, #16a34a 100%)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 10px 30px rgba(16, 185, 129, 0.4)",
                    },
                  }}
                >
                  Enviar Mensagem
                </Button>
              </Box>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              animation: `${slideUp} 1s ease-out 0.6s both`,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "1.8rem", md: "2.2rem" },
                fontWeight: 600,
                mb: 2,
                background: "linear-gradient(135deg, #10b981 0%, #f59e0b 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textAlign: "center",
              }}
            >
              Informações de Contato
            </Typography>

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
                    0.6 + index * 0.1
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
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      sx={{
                        color: info.color,
                        mr: 3,
                        p: 1.5,
                        width: 56,
                        height: 56,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        background: `rgba(${
                          info.color === "#10b981"
                            ? "16, 185, 129"
                            : "245, 158, 11"
                        }, 0.1)`,
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: info.color,
                          mb: 0.5,
                        }}
                      >
                        {info.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          opacity: 0.9,
                          fontSize: "1.05rem",
                        }}
                      >
                        {info.content}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
        {/* Call to Action */}
        <Box
          sx={{
            textAlign: "center",
            animation: `${slideUp} 1s ease-out 0.9s both`,
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
            Nossa equipe está pronta para transformar suas ideias em soluções
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
            animation: `${slideUp} 1s ease-out 1.2s both`,
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
        </Box>{" "}
      </Container>
    </Box>
  );
};

export default Contact;
