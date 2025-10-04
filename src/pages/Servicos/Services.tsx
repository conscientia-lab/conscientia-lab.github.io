import React from "react";
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
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// Interfaces TypeScript
interface Service {
  icon: React.ReactElement;
  title: string;
  description: string;
  highlights: string[];
  color: string;
}

// Animação de float para os cards
const cardFloat = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
`;

// Variants para animações organizadas
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const heroVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
    },
  },
};

const Services: React.FC = () => {
  const services: Service[] = [
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
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 1, py: 8 }}
        >
          {/* Hero Section */}
          <motion.div variants={heroVariants}>
            <Box
              sx={{
                textAlign: "center",
                mb: 10,
                pt: 8,
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{}}
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{}}
              >
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
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    style={{ color: "#10b981", fontWeight: 500 }}
                  >
                    crescimento
                  </motion.span>{" "}
                  do seu negócio com{" "}
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.0, duration: 0.5 }}
                    style={{ color: "#f59e0b", fontWeight: 500 }}
                  >
                    inovação
                  </motion.span>{" "}
                  e excelência técnica.
                </Typography>
              </motion.div>
            </Box>
          </motion.div>

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
            {services.map((service: Service, index: number) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <Card
                  sx={{
                    height: "100%",
                    background: `rgba(${
                      service.color === "#10b981"
                        ? "16, 185, 129"
                        : "245, 158, 11"
                    }, 0.05)`,
                    backdropFilter: "blur(16px)",
                    border: `1px solid rgba(${
                      service.color === "#10b981"
                        ? "16, 185, 129"
                        : "245, 158, 11"
                    }, 0.2)`,
                    borderRadius: 4,
                    textAlign: "center",
                    transition: "all 0.4s ease",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
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
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.2 + index * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      viewport={{}}
                      whileHover={{ scale: 1.1, rotate: 5 }}
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
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      viewport={{}}
                    >
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
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      viewport={{}}
                      style={{ flexGrow: 1 }}
                    >
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
                    </motion.div>

                    {/* Highlights */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      viewport={{}}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          justifyContent: "center",
                          gap: 1,
                          mt: "auto",
                        }}
                      >
                        {service.highlights.map(
                          (highlight: string, highlightIndex: number) => (
                            <motion.div
                              key={highlightIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{
                                delay:
                                  0.6 + index * 0.1 + highlightIndex * 0.05,
                                duration: 0.3,
                              }}
                              whileHover={{ scale: 1.05 }}
                              viewport={{}}
                            >
                              <Box
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
                            </motion.div>
                          )
                        )}
                      </Box>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Container>
      </motion.div>
    </Box>
  );
};

export default Services;
