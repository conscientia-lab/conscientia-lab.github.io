import { Box, Container, Typography, keyframes } from "@mui/material";
import { useState, useEffect, useMemo, useCallback, memo } from "react";
import logo from "../../assets/logo_white.png";

// Hook otimizado para detectar seção ativa com throttling
const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = ["home", "about", "services", "contact"];

          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              if (rect.top <= 100 && rect.bottom >= 100) {
                setActiveSection(section);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSection;
};

// Animações originais (memoizadas)
const glow = keyframes`
  0%, 100% { text-shadow: 0 0 30px rgba(16, 185, 129, 0.3), 0 0 60px rgba(16, 185, 129, 0.1); }
  50% { text-shadow: 0 0 40px rgba(16, 185, 129, 0.5), 0 0 80px rgba(16, 185, 129, 0.2); }
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

const matrixFall = keyframes`
  0% {
    transform: translate3d(0, -100vh, 0);
  }
  100% {
    transform: translate3d(0, 100vh, 0);
  }
`;

const matrixGlitch = keyframes`
  0% { 
    transform: translateX(0); 
    filter: hue-rotate(0deg);
  }
  20% { 
    transform: translateX(-2px); 
    filter: hue-rotate(90deg);
  }
  40% { 
    transform: translateX(2px); 
    filter: hue-rotate(180deg);
  }
  60% { 
    transform: translateX(-1px); 
    filter: hue-rotate(270deg);
  }
  80% { 
    transform: translateX(1px); 
    filter: hue-rotate(360deg);
  }
  100% { 
    transform: translateX(0); 
    filter: hue-rotate(0deg);
  }
`;

const matrixFlicker = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`;

interface MatrixChar {
  id: number;
  x: number;
  chars: string[];
  delay: number;
  duration: number;
}

// Estados combinados para melhor performance
interface MatrixState {
  showRain: boolean;
  opacity: number;
  chars: MatrixChar[];
}

interface LogoState {
  decoding: boolean;
  glitchIntensity: number;
}

const Home = memo(() => {
  // Detectar mobile para otimizações
  const [isMobile, setIsMobile] = useState(false);

  // Usar o hook para detectar seção ativa
  const activeSection = useActiveSection();

  // Estados combinados para reduzir re-renders
  const [matrixState, setMatrixState] = useState<MatrixState>({
    showRain: false,
    opacity: 0,
    chars: [],
  });

  const [logoState, setLogoState] = useState<LogoState>({
    decoding: false,
    glitchIntensity: 1,
  });

  const [showContent, setShowContent] = useState(false);
  const [hasAnimationStarted, setHasAnimationStarted] = useState(false);

  // Memoizar caracteres Matrix
  const matrixCharacters = useMemo(
    () =>
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzﾊﾐﾋｰｳｼﾅﾓﾆｻﾜ",
    []
  );

  // Função memoizada para gerar caracteres Matrix com otimizações mobile
  const generateMatrixChars = useCallback(() => {
    const maxColumns = isMobile ? 25 : 100; // Reduzir colunas no mobile
    const columnSpacing = isMobile ? 20 : 15;
    const charsPerColumn = isMobile ? 8 : 10; // Menos caracteres por coluna no mobile

    const screenWidth = window.innerWidth;
    const numColumns = Math.min(
      Math.floor(screenWidth / columnSpacing),
      maxColumns
    );

    // Calcular offset para centralizar as colunas
    const totalWidth = numColumns * columnSpacing;
    const offsetX = (screenWidth - totalWidth) / 2;

    return Array.from({ length: numColumns }, (_, i) => ({
      id: i,
      x: offsetX + i * columnSpacing + Math.random() * 15,
      chars: Array.from(
        { length: charsPerColumn },
        () =>
          matrixCharacters[Math.floor(Math.random() * matrixCharacters.length)]
      ),
      delay: Math.random() * 2,
      duration: 5 + Math.random() * 5,
    }));
  }, [matrixCharacters, isMobile]);

  // Detectar mobile com debounce
  useEffect(() => {
    let resizeTimer: NodeJS.Timeout;

    const checkMobile = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const newIsMobile = window.innerWidth < 768;
        if (newIsMobile !== isMobile) {
          setIsMobile(newIsMobile);
        }
      }, 150);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });

    return () => {
      window.removeEventListener("resize", checkMobile);
      clearTimeout(resizeTimer);
    };
  }, [isMobile]);

  // Verificar se deve executar animação baseado na seção ativa
  useEffect(() => {
    if (activeSection === "home" && !hasAnimationStarted) {
      setMatrixState((prev) => ({ ...prev, showRain: true }));
      setLogoState((prev) => ({ ...prev, decoding: true }));
      setHasAnimationStarted(true);
    } else if (activeSection !== "home") {
      setShowContent(true);
      setMatrixState((prev) => ({ ...prev, showRain: false }));
      setLogoState((prev) => ({ ...prev, decoding: false }));
    }
  }, [activeSection, hasAnimationStarted]);

  // Efeito principal da animação Matrix otimizado
  useEffect(() => {
    if (!matrixState.showRain) {
      return;
    }

    // Gerar caracteres
    const chars = generateMatrixChars();
    setMatrixState((prev) => ({ ...prev, chars }));

    // Fade in otimizado
    const fadeInTimer = setTimeout(() => {
      setMatrixState((prev) => ({ ...prev, opacity: 1 }));
    }, 100);

    // Decodificação da logo otimizada
    let decodingCounter = 0;
    const decodingInterval = setInterval(() => {
      decodingCounter += 1;

      if (decodingCounter < 50) {
        setLogoState((prev) => ({
          ...prev,
          glitchIntensity: 1 - decodingCounter / 50,
        }));
      } else {
        setLogoState((prev) => ({ ...prev, decoding: false }));
        clearInterval(decodingInterval);
      }
    }, 200);

    // Timers de transição
    const fadeOutTimer = setTimeout(() => {
      setMatrixState((prev) => ({ ...prev, opacity: 0 }));
    }, 10500);

    const showContentTimer = setTimeout(() => {
      setShowContent(true);
    }, 12000);

    const removeTimer = setTimeout(() => {
      setMatrixState((prev) => ({ ...prev, showRain: false }));
    }, 12000);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(showContentTimer);
      clearTimeout(removeTimer);
      clearInterval(decodingInterval);
    };
  }, [matrixState.showRain, generateMatrixChars]);

  // Estilos memoizados para melhor performance
  const matrixColumnStyle = useMemo(
    () => ({
      position: "absolute" as const,
      top: 0,
      display: "flex",
      flexDirection: "column" as const,
      color: "#00ff00",
      fontSize: isMobile ? "16px" : "18px",
      fontFamily: "monospace",
      fontWeight: "bold",
      textShadow: "0 0 5px #00ff00",
      willChange: "transform",
      transform: "translate3d(0, 0, 0)",
    }),
    [isMobile]
  );

  const matrixOverlayStyle = useMemo(
    () => ({
      position: "fixed" as const,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 1000,
      pointerEvents: "none" as const,
      opacity: matrixState.opacity,
      transition: "opacity 1.5s ease-in-out",
      willChange: "opacity",
    }),
    [matrixState.opacity]
  );

  // Número reduzido de elementos para decodificação da logo
  const logoDecodingElements = useMemo(() => {
    const numElements = isMobile ? 150 : 200; // Reduzido drasticamente
    return Array.from({ length: numElements }, (_, i) => (
      <span
        key={i}
        style={{
          margin: "1px",
          opacity: Math.random(),
          animation: `${matrixFlicker} ${0.1 + Math.random() * 0.3}s infinite`,
          willChange: "opacity",
        }}
      >
        {matrixCharacters[Math.floor(Math.random() * matrixCharacters.length)]}
      </span>
    ));
  }, [matrixCharacters, isMobile]);

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        color: "white",
        position: "relative",
      }}
    >
      {/* Matrix Rain Overlay Otimizado */}
      {matrixState.showRain && (
        <Box sx={matrixOverlayStyle}>
          {matrixState.chars.map((column) => (
            <Box
              key={column.id}
              sx={{
                ...matrixColumnStyle,
                left: `${column.x}px`,
                animation: `${matrixFall} ${column.duration}s linear ${column.delay}s infinite`,
              }}
            >
              {column.chars.map((char, index) => (
                <Box
                  key={index}
                  sx={{
                    opacity: 1 - index * 0.1,
                    lineHeight: isMobile ? "18px" : "20px",
                  }}
                >
                  {char}
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      )}

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Hero Section */}
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            px: 2,
            position: "relative",
          }}
        >
          {/* Logo com efeitos otimizada */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 2,
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
                zIndex: -1,
              },
            }}
          >
            <Box
              sx={{
                width: { xs: "330px", sm: "500px" },
                filter: "drop-shadow(0 0 20px rgba(16, 185, 129, 0.3))",
                animation: showContent
                  ? `${glow} 3s ease-in-out infinite`
                  : "none",
                position: "relative",
                willChange: showContent ? "filter" : "auto",
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

              {/* Overlay de decodificação Matrix otimizado */}
              {logoState.decoding && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#000",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: logoState.glitchIntensity,
                    animation:
                      logoState.glitchIntensity > 0.5
                        ? `${matrixGlitch} 0.1s infinite`
                        : "none",
                    fontSize: isMobile ? "10px" : "12px",
                    fontFamily: "monospace",
                    color: "#00ff00",
                    textShadow: "0 0 10px #00ff00",
                    overflow: "hidden",
                    zIndex: 10,
                    willChange: "opacity, transform",
                  }}
                >
                  {logoDecodingElements}
                </Box>
              )}
            </Box>
          </Box>

          {/* Tagline Principal */}
          {showContent && (
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.8rem", md: "2.5rem" },
                fontWeight: 600,
                mb: 3,
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
                willChange: "transform, opacity",
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
          )}

          {/* Descrição */}
          {showContent && (
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1.1rem", md: "1.4rem" },
                mb: 4,
                opacity: 0.95,
                maxWidth: "700px",
                mx: "auto",
                lineHeight: 1.8,
                fontWeight: 300,
                animation: `${slideUp} 1s ease-out 0.6s both`,
                textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
                willChange: "transform, opacity",
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
          )}

          {/* Elementos decorativos */}
          {showContent && (
            <Box
              sx={{
                mt: 6,
                position: "relative",
                "&::before, &::after": {
                  content: '""',
                  position: "absolute",
                  height: "2px",
                  background:
                    "linear-gradient(90deg, transparent, #10b981, transparent)",
                  animation: `${pulse} 3s ease-in-out infinite`,
                  willChange: "opacity",
                },
                "&::before": {
                  width: "280px",
                  top: "-50px",
                  left: "50%",
                  transform: "translateX(-50%)",
                },
                "&::after": {
                  width: "200px",
                  // bottom: "-50px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background:
                    "linear-gradient(90deg, transparent, #f59e0b, transparent)",
                  animationDelay: "1.5s",
                },
              }}
            />
          )}
        </Box>
      </Container>
    </Box>
  );
});

Home.displayName = "Home";

export default Home;

// import { Box, Container, Typography, keyframes } from "@mui/material";
// import { useState, useEffect } from "react";
// import logo from "../../assets/logo_white.png";

// // Hook para detectar seção ativa
// const useActiveSection = () => {
//   const [activeSection, setActiveSection] = useState("home");

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ["home", "about", "services", "contact"];

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           if (rect.top <= 100 && rect.bottom >= 100) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return activeSection;
// };

// // Animações originais
// const glow = keyframes`
//   0%, 100% { text-shadow: 0 0 30px rgba(16, 185, 129, 0.3), 0 0 60px rgba(16, 185, 129, 0.1); }
//   50% { text-shadow: 0 0 40px rgba(16, 185, 129, 0.5), 0 0 80px rgba(16, 185, 129, 0.2); }
// `;

// const pulse = keyframes`
//   0%, 100% { opacity: 0.4; }
//   50% { opacity: 0.8; }
// `;

// const slideUp = keyframes`
//   0% {
//     opacity: 0;
//     transform: translateY(50px);
//   }
//   100% {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// // Nova animação para Matrix Rain
// const matrixFall = keyframes`
//   0% {
//     transform: translateY(-100vh);
//   }
//   100% {
//     transform: translateY(100vh);
//   }
// `;

// // Animações para decodificação da logo
// const matrixGlitch = keyframes`
//   0% {
//     transform: translateX(0);
//     filter: hue-rotate(0deg);
//   }
//   20% {
//     transform: translateX(-2px);
//     filter: hue-rotate(90deg);
//   }
//   40% {
//     transform: translateX(2px);
//     filter: hue-rotate(180deg);
//   }
//   60% {
//     transform: translateX(-1px);
//     filter: hue-rotate(270deg);
//   }
//   80% {
//     transform: translateX(1px);
//     filter: hue-rotate(360deg);
//   }
//   100% {
//     transform: translateX(0);
//     filter: hue-rotate(0deg);
//   }
// `;

// const matrixFlicker = keyframes`
//   0%, 100% { opacity: 1; }
//   50% { opacity: 0.3; }
// `;

// interface MatrixChar {
//   id: number;
//   x: number;
//   chars: string[];
//   delay: number;
//   duration: number;
// }

// const Home = () => {
//   // Usar o hook para detectar seção ativa
//   const activeSection = useActiveSection();

//   const [showMatrixRain, setShowMatrixRain] = useState(false);
//   const [matrixOpacity, setMatrixOpacity] = useState(0);
//   const [showContent, setShowContent] = useState(false);
//   const [logoDecoding, setLogoDecoding] = useState(false);
//   const [logoGlitchIntensity, setLogoGlitchIntensity] = useState(1);
//   const [matrixChars, setMatrixChars] = useState<MatrixChar[]>([]);
//   const [hasAnimationStarted, setHasAnimationStarted] = useState(false);

//   // Caracteres para a chuva Matrix
//   const matrixCharacters =
//     "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzﾊﾐﾋｰｳｼﾅﾓﾆｻﾜ";

//   // Verificar se deve executar animação baseado na seção ativa
//   useEffect(() => {
//     // Só executa animação se estivermos na home E não tiver começado ainda
//     if (activeSection === "home" && !hasAnimationStarted) {
//       setShowMatrixRain(true);
//       setLogoDecoding(true);
//       setHasAnimationStarted(true);
//     } else if (activeSection !== "home") {
//       // Se não estamos na home, mostrar conteúdo direto
//       setShowContent(true);
//       setShowMatrixRain(false);
//       setLogoDecoding(false);
//     }
//   }, [activeSection, hasAnimationStarted]);

//   useEffect(() => {
//     // Só executa a animação se showMatrixRain for true
//     if (!showMatrixRain) {
//       return;
//     }
//     // Gerar caracteres para a chuva
//     const chars: MatrixChar[] = [];
//     const numColumns = Math.floor(window.innerWidth / 20);

//     for (let i = 0; i < numColumns; i++) {
//       chars.push({
//         id: i,
//         x: i * 20 + Math.random() * 15,
//         chars: Array.from(
//           { length: 15 },
//           () =>
//             matrixCharacters[
//               Math.floor(Math.random() * matrixCharacters.length)
//             ]
//         ),
//         delay: Math.random() * 2,
//         duration: 5 + Math.random() * 5,
//       });
//     }
//     setMatrixChars(chars);

//     // Fade in nos primeiros 0.5 segundos
//     const fadeInTimer = setTimeout(() => {
//       setMatrixOpacity(1);
//     }, 100);

//     // Decodificação da logo - diminui intensidade gradualmente
//     let decodingCounter = 0;
//     const decodingInterval = setInterval(() => {
//       decodingCounter += 1;

//       // A cada 200ms diminui a intensidade do glitch - agora 10 segundos de decodificação
//       if (decodingCounter < 50) {
//         setLogoGlitchIntensity(1 - decodingCounter / 50);
//       } else {
//         setLogoDecoding(false);
//         clearInterval(decodingInterval);
//       }
//     }, 200);

//     // Começar fade out após 10.5 segundos
//     const fadeOutTimer = setTimeout(() => {
//       setMatrixOpacity(0);
//     }, 10500);

//     // Mostrar conteúdo após Matrix terminar - 12 segundos
//     const showContentTimer = setTimeout(() => {
//       setShowContent(true);
//     }, 12000);

//     // Remove a chuva após 12 segundos
//     const removeTimer = setTimeout(() => {
//       setShowMatrixRain(false);
//     }, 12000);

//     return () => {
//       clearTimeout(fadeInTimer);
//       clearTimeout(fadeOutTimer);
//       clearTimeout(showContentTimer);
//       clearTimeout(removeTimer);
//       clearInterval(decodingInterval);
//     };
//   }, [showMatrixRain]);

//   /*
//     LÓGICA COM useActiveSection:
//     1. Usa o hook personalizado para detectar qual seção está ativa
//     2. Só executa animação Matrix quando activeSection === "home"
//     3. Previne múltiplas execuções com hasAnimationStarted
//     4. Se não estiver na home → mostra conteúdo direto

//     RESULTADO:
//     ✅ Refresh na home → Animação roda
//     ❌ Refresh em outras seções → NÃO roda animação
//     ✅ Navegar para home → Animação roda
//   */

//   return (
//     <Box
//       id="home"
//       sx={{
//         minHeight: "100vh",
//         color: "white",
//         position: "relative",
//       }}
//     >
//       {/* Matrix Rain Overlay */}
//       {showMatrixRain && (
//         <Box
//           sx={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             zIndex: 1000,
//             pointerEvents: "none",
//             opacity: matrixOpacity,
//             transition: "opacity 1.5s ease-in-out",
//           }}
//         >
//           {matrixChars.map((column) => (
//             <Box
//               key={column.id}
//               sx={{
//                 position: "absolute",
//                 left: `${column.x}px`,
//                 top: 0,
//                 display: "flex",
//                 flexDirection: "column",
//                 animation: `${matrixFall} ${column.duration}s linear ${column.delay}s infinite`,
//                 color: "#00ff00",
//                 fontSize: "18px",
//                 fontFamily: "monospace",
//                 fontWeight: "bold",
//                 textShadow: "0 0 5px #00ff00",
//               }}
//             >
//               {column.chars.map((char, index) => (
//                 <Box
//                   key={index}
//                   sx={{
//                     opacity: 1 - index * 0.08,
//                     lineHeight: "20px",
//                   }}
//                 >
//                   {char}
//                 </Box>
//               ))}
//             </Box>
//           ))}
//         </Box>
//       )}

//       <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
//         {/* Hero Section */}
//         <Box
//           sx={{
//             minHeight: "100vh",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             textAlign: "center",
//             py: 8,
//           }}
//         >
//           {/* Logo com efeitos */}
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               mb: 3,
//               position: "relative",
//               animation: `${slideUp} 1s ease-out`,
//               "&::before": {
//                 content: '""',
//                 position: "absolute",
//                 top: "50%",
//                 left: "50%",
//                 transform: "translate(-50%, -50%)",
//                 width: "400px",
//                 height: "100px",
//                 background:
//                   "linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.15), transparent)",
//                 zIndex: -1,
//               },
//             }}
//           >
//             <Box
//               sx={{
//                 width: { xs: "360px", sm: "430px" },
//                 filter: "drop-shadow(0 0 20px rgba(16, 185, 129, 0.3))",
//                 animation: showContent
//                   ? `${glow} 3s ease-in-out infinite`
//                   : "none",
//                 position: "relative",
//               }}
//             >
//               <img
//                 src={logo}
//                 alt="Logo"
//                 style={{
//                   width: "100%",
//                   height: "auto",
//                 }}
//               />

//               {/* Overlay de decodificação Matrix */}
//               {logoDecoding && (
//                 <Box
//                   sx={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     width: "100%",
//                     height: "100%",
//                     backgroundColor: "#000",
//                     display: "flex",
//                     flexWrap: "wrap",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     opacity: logoGlitchIntensity,
//                     animation:
//                       logoGlitchIntensity > 0.5
//                         ? `${matrixGlitch} 0.1s infinite`
//                         : "none",
//                     fontSize: "12px",
//                     fontFamily: "monospace",
//                     color: "#00ff00",
//                     textShadow: "0 0 10px #00ff00",
//                     overflow: "hidden",
//                     zIndex: 10,
//                   }}
//                 >
//                   {Array.from({ length: 200 }, (_, i) => (
//                     <span
//                       key={i}
//                       style={{
//                         margin: "1px",
//                         opacity: Math.random(),
//                         animation: `${matrixFlicker} ${
//                           0.1 + Math.random() * 0.3
//                         }s infinite`,
//                       }}
//                     >
//                       {
//                         matrixCharacters[
//                           Math.floor(Math.random() * matrixCharacters.length)
//                         ]
//                       }
//                     </span>
//                   ))}
//                 </Box>
//               )}
//             </Box>
//           </Box>

//           {/* Tagline Principal */}
//           {showContent && (
//             <Typography
//               variant="h2"
//               sx={{
//                 fontSize: { xs: "1.8rem", md: "2.5rem", lg: "2.8rem" },
//                 fontWeight: 600,
//                 mb: 4,
//                 background:
//                   "linear-gradient(135deg, #10b981 0%, #22c55e 30%, #f59e0b 60%, #10b981 100%)",
//                 backgroundSize: "300% 100%",
//                 backgroundClip: "text",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 textShadow: "0 0 40px rgba(16, 185, 129, 0.4)",
//                 animation: `${slideUp} 1s ease-out 0.3s both, ${glow} 4s ease-in-out infinite`,
//                 letterSpacing: "2px",
//                 textTransform: "uppercase",
//               }}
//             >
//               Transformando ideias em{" "}
//               <Box
//                 component="span"
//                 sx={{
//                   color: "#10b981",
//                   fontWeight: 700,
//                   display: "block",
//                   mt: 1,
//                 }}
//               >
//                 soluções inteligentes
//               </Box>
//             </Typography>
//           )}

//           {/* Descrição */}
//           {showContent && (
//             <Typography
//               variant="body1"
//               sx={{
//                 fontSize: { xs: "1.1rem", md: "1.4rem" },
//                 mb: 6,
//                 opacity: 0.95,
//                 maxWidth: "700px",
//                 mx: "auto",
//                 lineHeight: 1.8,
//                 fontWeight: 300,
//                 animation: `${slideUp} 1s ease-out 0.6s both`,
//                 textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
//               }}
//             >
//               Somos uma{" "}
//               <Box
//                 component="span"
//                 sx={{
//                   color: "#10b981",
//                   fontWeight: 500,
//                   textDecoration: "underline",
//                   textDecorationColor: "rgba(16, 185, 129, 0.3)",
//                 }}
//               >
//                 software house
//               </Box>{" "}
//               especializada em desenvolver aplicações modernas e soluções de{" "}
//               <Box
//                 component="span"
//                 sx={{
//                   color: "#f59e0b",
//                   fontWeight: 500,
//                 }}
//               >
//                 inteligência artificial
//               </Box>{" "}
//               que impulsionam o sucesso do seu negócio.
//             </Typography>
//           )}

//           {/* Elementos decorativos */}
//           {showContent && (
//             <Box
//               sx={{
//                 position: "relative",
//                 "&::before, &::after": {
//                   content: '""',
//                   position: "absolute",
//                   height: "2px",
//                   background:
//                     "linear-gradient(90deg, transparent, #10b981, transparent)",
//                   animation: `${pulse} 3s ease-in-out infinite`,
//                 },
//                 "&::before": {
//                   width: "200px",
//                   top: "-50px",
//                   left: "50%",
//                   transform: "translateX(-50%)",
//                 },
//                 "&::after": {
//                   width: "150px",
//                   bottom: "-50px",
//                   left: "50%",
//                   transform: "translateX(-50%)",
//                   background:
//                     "linear-gradient(90deg, transparent, #f59e0b, transparent)",
//                   animationDelay: "1.5s",
//                 },
//               }}
//             />
//           )}
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Home;
