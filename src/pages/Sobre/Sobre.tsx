import React from "react";
import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import {
  Lightbulb as LightbulbIcon,
  Visibility as VisibilityIcon,
  FavoriteOutlined as HeartIcon,
  TrendingUp as GrowthIcon,
  Groups as TeamIcon,
  Rocket as RocketIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// Interfaces TypeScript
interface Value {
  icon: React.ReactElement;
  title: string;
  description: string;
}

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

const missionVisionVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const About: React.FC = () => {
  const values: Value[] = [
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
                  Quem somos
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
                  Uma{" "}
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    style={{ color: "#10b981", fontWeight: 500 }}
                  >
                    software house
                  </motion.span>{" "}
                  nascida da paixão por tecnologia e{" "}
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.0, duration: 0.5 }}
                    style={{ color: "#f59e0b", fontWeight: 500 }}
                  >
                    inteligência artificial
                  </motion.span>
                  , dedicada a criar soluções inteligentes que transformam
                  negócios.
                </Typography>
              </motion.div>
            </Box>
          </motion.div>

          {/* Mission & Vision Section */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 6,
              mb: 10,
            }}
          >
            <motion.div
              variants={missionVisionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
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
                  "&:hover": {
                    boxShadow: "0 20px 40px rgba(16, 185, 129, 0.2)",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{}}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                      <RocketIcon
                        sx={{ fontSize: 40, color: "#10b981", mr: 2 }}
                      />
                      <Typography
                        variant="h4"
                        sx={{ fontWeight: 600, color: "#10b981" }}
                      >
                        Missão
                      </Typography>
                    </Box>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{}}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        opacity: 0.9,
                      }}
                    >
                      Desenvolver soluções tecnológicas inovadoras que
                      potencializem o crescimento dos nossos clientes,
                      utilizando{" "}
                      <Box
                        component="span"
                        sx={{
                          color: "#f59e0b",
                          fontWeight: 500,
                        }}
                      >
                        inteligência artificial
                      </Box>{" "}
                      e as melhores práticas de desenvolvimento para criar
                      produtos que fazem a diferença.
                    </Typography>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={missionVisionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              transition={{ delay: 0.2 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
              <Card
                sx={{
                  pb: 3,
                  height: "100%",
                  background: "rgba(245, 158, 11, 0.08)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(245, 158, 11, 0.2)",
                  borderRadius: 4,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 20px 40px rgba(245, 158, 11, 0.2)",
                    border: "1px solid rgba(245, 158, 11, 0.3)",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{}}
                  >
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
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{}}
                  >
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
                      e soluções de IA, reconhecida pela qualidade, inovação e
                      impacto positivo que geramos no mercado brasileiro.
                    </Typography>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </Box>

          {/* Values Section */}
          <Box sx={{ mb: 10 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{}}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  fontWeight: 600,
                  mb: 6,
                  textAlign: "center",
                  background:
                    "linear-gradient(135deg, #10b981 0%, #f59e0b 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 20px rgba(16, 185, 129, 0.2)",
                }}
              >
                Nossos Valores
              </Typography>
            </motion.div>

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
              {values.map((value: Value, index: number) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      background: "rgba(255, 255, 255, 0.03)",
                      backdropFilter: "blur(16px)",
                      border: "1px solid rgba(16, 185, 129, 0.1)",
                      borderRadius: 3,
                      textAlign: "center",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        boxShadow: "0 20px 40px rgba(16, 185, 129, 0.15)",
                        border: "1px solid rgba(16, 185, 129, 0.3)",
                        background: "rgba(16, 185, 129, 0.05)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
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
                            color: index % 2 === 0 ? "#10b981" : "#f59e0b",
                            mb: 2,
                            transition: "all 0.3s ease",
                          }}
                        >
                          {value.icon}
                        </Box>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        viewport={{}}
                      >
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
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        viewport={{}}
                      >
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
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </Box>
        </Container>
      </motion.div>
    </Box>
  );
};

export default About;
