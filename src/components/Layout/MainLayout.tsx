import ContactPageIcon from "@mui/icons-material/ContactPage";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import BusinessIcon from "@mui/icons-material/Business";
import InfoIcon from "@mui/icons-material/Info";
import TerminalIcon from "@mui/icons-material/Terminal";
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useActiveSection } from "../../hooks/useActiveSection";
import { ScrollToTop } from "../shared/ScrollToTop";
import logo from "../../assets/logo_white.png";

// Definição explícita de props
interface MainLayoutProps {
  children: React.ReactNode;
}

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  backdropFilter: "blur(12px)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  padding: theme.spacing(1.5, 2),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(1, 4),
  },
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  fontWeight: 600,
  letterSpacing: "-0.5px",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  background:
    "linear-gradient(135deg, #10b981 0%, #22c55e 30%, #f59e0b 60%, #10b981 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textDecoration: "none",
  transition: "all 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-2px)",
  },
}));

const NavLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(5),
  alignItems: "center",
}));

interface NavLinkProps {
  active?: boolean;
}

const NavLink = styled(motion.a)<NavLinkProps>(({ theme, active }) => ({
  color: active ? "#f59e0b" : theme.palette.text.primary,
  textDecoration: "none",
  fontSize: "12pt",
  fontFamily: "Arial",
  fontWeight: "600",
  position: "relative",
  padding: theme.spacing(0.5, 1),
  "&:hover": {
    color: "#f59e0b",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "2px",
    bottom: -4,
    left: 0,
    background: "#f59e0b",
    opacity: active ? 1 : 0,
    transition: "opacity 0.3s ease",
    borderRadius: "4px",
  },
}));

const MenuSection = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(2),
  backgroundColor: "rgba(16, 185, 129, 0.05)",
  borderRadius: theme.spacing(1),
  border: "1px solid rgba(16, 185, 129, 0.2)",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.4), transparent)",
  },
}));

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  zIndex: 1050, // Menor que o AppBar que é 1100
  "& .MuiDrawer-paper": {
    width: "100%",
    maxWidth: "320px",
    background: "rgba(10, 25, 15, 0.97)",
    backdropFilter: "blur(12px)",
    padding: theme.spacing(2),
    paddingTop: theme.spacing(10), // Espaço para a barra de navegação
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
    borderLeft: "1px solid rgba(16, 185, 129, 0.2)",
    backgroundImage: `linear-gradient(to bottom,
      rgba(10, 25, 15, 0.97),
      rgba(15, 30, 20, 0.97)),
      radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(245, 158, 11, 0.08) 0%, transparent 50%)`,
  },
  "& .MuiBackdrop-root": {
    zIndex: 1050,
    marginTop: "64px", // Altura da AppBar
  },
}));

interface DrawerNavLinkProps {
  active?: boolean;
}

const DrawerNavLink = styled(motion.a)<DrawerNavLinkProps>(
  ({ theme, active }) => ({
    color: active ? "#10b981" : theme.palette.text.primary,
    textDecoration: "none",
    fontSize: "1rem",
    fontFamily: '"Roboto Mono", monospace',
    padding: theme.spacing(1.2, 1.5),
    borderLeft: active ? "3px solid #10b981" : "3px solid transparent",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginBottom: theme.spacing(1.5),
    borderRadius: "0 6px 6px 0",
    position: "relative",
    backgroundColor: active ? "rgba(16, 185, 129, 0.1)" : "transparent",
    "&:hover": {
      backgroundColor: "rgba(16, 185, 129, 0.05)",
      color: "#10b981",
      "&::after": {
        width: "30px",
      },
    },
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: active ? "30px" : "0px",
      height: "1px",
      background: "linear-gradient(90deg, #10b981, transparent)",
      transition: "width 0.3s ease",
    },
  })
);

const DrawerNavIcon = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(1.5),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "22px",
  height: "22px",
  color: "#10b981",
  opacity: 0.8,
}));

const LineNumber = styled(Box)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  fontSize: "0.75rem",
  color: theme.palette.text.secondary,
  width: "20px",
  textAlign: "right",
  marginRight: theme.spacing(1.5),
  opacity: 0.4,
}));

const MenuFooter = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  borderTop: "1px solid rgba(16, 185, 129, 0.2)",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "20%",
    right: "20%",
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.4), transparent)",
  },
}));

const SocialSection = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: "15px !important",
  justifyContent: "center",
  gap: theme.spacing(3),
  position: "relative",
  padding: theme.spacing(2),
}));

const SocialLink = styled("a")(({ theme }) => ({
  color: theme.palette.text.secondary,
  padding: theme.spacing(1),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.3s ease",
  borderRadius: "50%",
  background: "rgba(16, 185, 129, 0.1)",
  border: "1px solid rgba(16, 185, 129, 0.2)",
  width: "42px",
  height: "42px",
  "&:hover": {
    color: "#10b981",
    transform: "translateY(-3px) scale(1.05)",
    boxShadow: "0 5px 15px rgba(16, 185, 129, 0.3)",
    background: "rgba(16, 185, 129, 0.2)",
    borderColor: "rgba(16, 185, 129, 0.4)",
  },
}));

const CodeLine = styled(Box)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  fontSize: "0.75rem",
  color: theme.palette.text.secondary,
  opacity: 0.5,
  marginBottom: theme.spacing(0.5),
  display: "flex",
  alignItems: "center",
}));

// Definição do componente principal
export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const activeSection = useActiveSection();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      handleDrawerClose();
    }
  };

  const menuLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "Quem somos" },
    { id: "services", label: "Serviços" },
    { id: "contact", label: "Contato" },
  ];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          transition: "all 0.3s ease",
          pr: { xs: 0, md: 20 },
          zIndex: 1100, // Z-index padrão para AppBar
        }}
      >
        <StyledToolbar
          sx={{
            ...(scrolled && {
              borderBottom: "1px solid rgba(255, 255, 255, 0.07)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            }),
          }}
        >
          <LogoText variant="h6" onClick={() => scrollToSection("home")}>
            <img src={logo} alt="Logo" style={{ width: "150px" }} />
          </LogoText>

          {isMobile ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{ color: "text.primary" }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          ) : (
            <NavLinks>
              {menuLinks.map((link) => (
                <NavLink
                  key={link.id}
                  href={`#${link.id}`}
                  active={activeSection === link.id}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.label}
                </NavLink>
              ))}
            </NavLinks>
          )}
        </StyledToolbar>
      </AppBar>

      <MobileDrawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            mb: 3,
            pt: 0.5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{
                width: "195px",
                // height: "auto",
              }}
            />
          </Box>
        </Box>

        <MenuSection>
          {menuLinks.map((link, index) => (
            <DrawerNavLink
              key={link.id}
              href={`#${link.id}`}
              active={activeSection === link.id}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
              whileTap={{ x: 6 }}
              whileHover={{ x: 6 }}
            >
              <LineNumber>{index + 1}</LineNumber>
              <DrawerNavIcon>
                {link.id === "home" && <HomeIcon fontSize="small" />}
                {link.id === "about" && <InfoIcon fontSize="small" />}
                {link.id === "services" && <BusinessIcon fontSize="small" />}
                {link.id === "contact" && <ContactPageIcon fontSize="small" />}
              </DrawerNavIcon>
              {link.label}
            </DrawerNavLink>
          ))}
        </MenuSection>

        <MenuFooter>
          <SocialSection>
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
              <Box sx={{ paddingBottom: "15px !important" }} />
              <SocialLink
                href="https://github.com/conscientia-lab"
                target="_blank"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </SocialLink>
            </motion.div>
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
              <Box sx={{ paddingBottom: "15px !important" }} />
              <SocialLink href="" target="_blank" aria-label="LinkedIn">
                <LinkedInIcon />
              </SocialLink>
            </motion.div>
          </SocialSection>

          <Box sx={{ mt: 2, textAlign: "center" }}>
            <CodeLine sx={{ justifyContent: "center" }}>
              <TerminalIcon sx={{ fontSize: 14, mr: 0.5, opacity: 0.5 }} />
              <Typography variant="caption" sx={{ opacity: 0.6 }}>
                v1.0.2 | {new Date().getFullYear()} © ConscientIA
              </Typography>
            </CodeLine>
          </Box>
        </MenuFooter>
      </MobileDrawer>

      <Container maxWidth="lg" sx={{ pt: { xs: 10, md: 12 } }}>
        {children}
      </Container>

      <ScrollToTop />
    </Box>
  );
};

export default MainLayout;
