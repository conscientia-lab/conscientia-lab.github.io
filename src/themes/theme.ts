// // import { createTheme } from "@mui/material/styles";

// // export const theme = createTheme({
// //   palette: {
// //     mode: "dark",
// //     primary: {
// //       main: "#ffffff",
// //       light: "#f5f5f5",
// //       dark: "#e0e0e0",
// //     },
// //     secondary: {
// //       main: "#9e9e9e",
// //       light: "#bdbdbd",
// //       dark: "#616161",
// //     },
// //     background: {
// //       default: "transparent",
// //       paper: "#1a1a1a",
// //     },
// //     text: {
// //       primary: "#ffffff",
// //       secondary: "#bdbdbd",
// //     },
// //   },
// //   typography: {
// //     fontFamily: '"JetBrains Mono", "Roboto Mono", monospace',
// //     h1: {
// //       fontSize: "3rem",
// //       fontWeight: 700,
// //       letterSpacing: "-0.02em",
// //     },
// //     h2: {
// //       fontSize: "2.25rem",
// //       fontWeight: 600,
// //       letterSpacing: "-0.01em",
// //     },
// //     body1: {
// //       fontSize: "1rem",
// //       lineHeight: 1.6,
// //       letterSpacing: "0.01em",
// //     },
// //   },
// //   components: {
// //     MuiCssBaseline: {
// //       styleOverrides: {
// //         "html, body, #root": {
// //           minHeight: "100vh",
// //           width: "100%",
// //         },
// //         "body, .css-37z01r, .css-37z01c": {
// //           backgroundColor: "#000000 !important",
// //           backgroundAttachment: "fixed",
// //           position: "relative",

// //           // Gradiente base para profundidade
// //           background: `
// //             radial-gradient(ellipse at top, rgba(64, 64, 64, 0.15) 0%, #000000 70%),
// //             linear-gradient(135deg, rgba(32, 32, 32, 0.1) 0%, rgba(0, 0, 0, 1) 100%)
// //           `,

// //           // Grid tecnológico de fundo
// //           "&::before": {
// //             content: '""',
// //             position: "fixed",
// //             top: 0,
// //             left: 0,
// //             width: "100%",
// //             height: "100%",
// //             zIndex: -1,
// //             backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800' width='1200' height='800'%3E%3Cstyle%3E.circuit%7Bfill:none;stroke:rgba(255,255,255,0.03);stroke-width:1;%7D.node%7Bfill:rgba(255,255,255,0.08);%7D.data-flow%7Bfill:none;stroke:rgba(158,158,158,0.05);stroke-width:1.5;%7D.ai-core%7Bfill:rgba(255,255,255,0.02);stroke:rgba(255,255,255,0.06);stroke-width:1;%7D.grid%7Bfill:none;stroke:rgba(255,255,255,0.01);stroke-width:0.5;%7D%3C/style%3E%3C!-- Grid base tecnológico --%3E%3Cdefs%3E%3Cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath class='grid' d='M 40 0 L 0 0 0 40'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C!-- Núcleo central da IA --%3E%3Cg transform='translate(600,400)'%3E%3C!-- Círculo central --%3E%3Ccircle class='ai-core' cx='0' cy='0' r='60'/%3E%3Ccircle class='ai-core' cx='0' cy='0' r='40'/%3E%3Ccircle class='ai-core' cx='0' cy='0' r='20'/%3E%3C!-- Hexágono externo --%3E%3Cpath class='ai-core' d='M 0,-80 L 69.28,-40 L 69.28,40 L 0,80 L -69.28,40 L -69.28,-40 Z'/%3E%3C!-- Pontos de conexão --%3E%3Ccircle class='node' cx='0' cy='-80' r='4'/%3E%3Ccircle class='node' cx='69.28' cy='-40' r='4'/%3E%3Ccircle class='node' cx='69.28' cy='40' r='4'/%3E%3Ccircle class='node' cx='0' cy='80' r='4'/%3E%3Ccircle class='node' cx='-69.28' cy='40' r='4'/%3E%3Ccircle class='node' cx='-69.28' cy='-40' r='4'/%3E%3C/g%3E%3C!-- Circuitos que se estendem do núcleo --%3E%3C!-- Circuito superior esquerdo --%3E%3Cpath class='circuit' d='M 530.72,360 L 450,300 L 380,250 L 300,200 L 220,180 L 150,160'/%3E%3Cpath class='circuit' d='M 450,300 L 420,280 L 390,290 L 360,270'/%3E%3Ccircle class='node' cx='450' cy='300' r='3'/%3E%3Ccircle class='node' cx='300' cy='200' r='3'/%3E%3Ccircle class='node' cx='150' cy='160' r='3'/%3E%3C!-- Circuito superior direito --%3E%3Cpath class='circuit' d='M 669.28,360 L 750,300 L 820,250 L 900,200 L 980,180 L 1050,160'/%3E%3Cpath class='circuit' d='M 750,300 L 780,280 L 810,290 L 840,270'/%3E%3Ccircle class='node' cx='750' cy='300' r='3'/%3E%3Ccircle class='node' cx='900' cy='200' r='3'/%3E%3Ccircle class='node' cx='1050' cy='160' r='3'/%3E%3C!-- Circuito inferior esquerdo --%3E%3Cpath class='circuit' d='M 530.72,440 L 450,500 L 380,550 L 300,600 L 220,620 L 150,640'/%3E%3Cpath class='circuit' d='M 450,500 L 420,520 L 390,510 L 360,530'/%3E%3Ccircle class='node' cx='450' cy='500' r='3'/%3E%3Ccircle class='node' cx='300' cy='600' r='3'/%3E%3Ccircle class='node' cx='150' cy='640' r='3'/%3E%3C!-- Circuito inferior direito --%3E%3Cpath class='circuit' d='M 669.28,440 L 750,500 L 820,550 L 900,600 L 980,620 L 1050,640'/%3E%3Cpath class='circuit' d='M 750,500 L 780,520 L 810,510 L 840,530'/%3E%3Ccircle class='node' cx='750' cy='500' r='3'/%3E%3Ccircle class='node' cx='900' cy='600' r='3'/%3E%3Ccircle class='node' cx='1050' cy='640' r='3'/%3E%3C!-- Circuito esquerdo --%3E%3Cpath class='circuit' d='M 530.72,400 L 450,400 L 380,400 L 300,380 L 220,370 L 150,360 L 80,350'/%3E%3Cpath class='circuit' d='M 380,400 L 380,370 L 350,370 L 350,340'/%3E%3Ccircle class='node' cx='450' cy='400' r='3'/%3E%3Ccircle class='node' cx='300' cy='380' r='3'/%3E%3Ccircle class='node' cx='150' cy='360' r='3'/%3E%3C!-- Circuito direito --%3E%3Cpath class='circuit' d='M 669.28,400 L 750,400 L 820,400 L 900,380 L 980,370 L 1050,360 L 1120,350'/%3E%3Cpath class='circuit' d='M 820,400 L 820,370 L 850,370 L 850,340'/%3E%3Ccircle class='node' cx='750' cy='400' r='3'/%3E%3Ccircle class='node' cx='900' cy='380' r='3'/%3E%3Ccircle class='node' cx='1050' cy='360' r='3'/%3E%3C!-- Fluxos de dados (linhas mais espessas) --%3E%3Cpath class='data-flow' d='M 600,320 Q 500,250 400,300 Q 300,350 200,280'/%3E%3Cpath class='data-flow' d='M 600,480 Q 500,550 400,500 Q 300,450 200,520'/%3E%3Cpath class='data-flow' d='M 600,320 Q 700,250 800,300 Q 900,350 1000,280'/%3E%3Cpath class='data-flow' d='M 600,480 Q 700,550 800,500 Q 900,450 1000,520'/%3E%3C!-- Módulos de processamento --%3E%3Crect class='ai-core' x='100' y='120' width='60' height='40' rx='8'/%3E%3Crect class='ai-core' x='940' y='120' width='60' height='40' rx='8'/%3E%3Crect class='ai-core' x='100' y='600' width='60' height='40' rx='8'/%3E%3Crect class='ai-core' x='940' y='600' width='60' height='40' rx='8'/%3E%3C!-- Pontos de dados menores --%3E%3Ccircle class='node' cx='200' cy='180' r='2'/%3E%3Ccircle class='node' cx='300' cy='150' r='2'/%3E%3Ccircle class='node' cx='400' cy='170' r='2'/%3E%3Ccircle class='node' cx='500' cy='160' r='2'/%3E%3Ccircle class='node' cx='700' cy='160' r='2'/%3E%3Ccircle class='node' cx='800' cy='170' r='2'/%3E%3Ccircle class='node' cx='900' cy='150' r='2'/%3E%3Ccircle class='node' cx='1000' cy='180' r='2'/%3E%3Ccircle class='node' cx='200' cy='620' r='2'/%3E%3Ccircle class='node' cx='300' cy='650' r='2'/%3E%3Ccircle class='node' cx='400' cy='630' r='2'/%3E%3Ccircle class='node' cx='500' cy='640' r='2'/%3E%3Ccircle class='node' cx='700' cy='640' r='2'/%3E%3Ccircle class='node' cx='800' cy='630' r='2'/%3E%3Ccircle class='node' cx='900' cy='650' r='2'/%3E%3Ccircle class='node' cx='1000' cy='620' r='2'/%3E%3C!-- Conexões verticais --%3E%3Cpath class='circuit' d='M 200,180 L 200,280 L 200,380 L 200,480 L 200,620'/%3E%3Cpath class='circuit' d='M 400,170 L 400,270 L 400,370 L 400,470 L 400,630'/%3E%3Cpath class='circuit' d='M 800,170 L 800,270 L 800,370 L 800,470 L 800,630'/%3E%3Cpath class='circuit' d='M 1000,180 L 1000,280 L 1000,380 L 1000,480 L 1000,620'/%3E%3C/svg%3E")`,
// //             backgroundSize: "100% 100%",
// //             backgroundPosition: "center center",
// //             backgroundRepeat: "no-repeat",
// //             opacity: 0.4,
// //             mixBlendMode: "screen",
// //             pointerEvents: "none",
// //           },

// //           // Código binário flutuante
// //           "&::after": {
// //             content: '""',
// //             position: "fixed",
// //             top: 0,
// //             left: 0,
// //             width: "100%",
// //             height: "100%",
// //             zIndex: -2,
// //             backgroundImage: `
// //               radial-gradient(circle at center, rgba(255, 255, 255, 0.02) 0, rgba(255, 255, 255, 0) 1px),
// //               radial-gradient(circle at center, rgba(158, 158, 158, 0.015) 0, rgba(158, 158, 158, 0) 1px)
// //             `,
// //             backgroundSize: "30px 30px, 45px 45px",
// //             backgroundPosition: "0 0, 15px 15px",
// //             animation: "dataFlow 12s ease-in-out infinite alternate",
// //             pointerEvents: "none",
// //             opacity: 0.6,
// //           },
// //         },

// //         // Animação para fluxo de dados
// //         "@keyframes dataFlow": {
// //           "0%": {
// //             backgroundSize: "30px 30px, 45px 45px",
// //             opacity: 0.3,
// //             transform: "translateX(0)",
// //           },
// //           "25%": {
// //             backgroundSize: "35px 35px, 50px 50px",
// //             opacity: 0.5,
// //             transform: "translateX(5px)",
// //           },
// //           "50%": {
// //             backgroundSize: "32px 32px, 47px 47px",
// //             opacity: 0.7,
// //             transform: "translateX(-3px)",
// //           },
// //           "75%": {
// //             backgroundSize: "38px 38px, 52px 52px",
// //             opacity: 0.4,
// //             transform: "translateX(2px)",
// //           },
// //           "100%": {
// //             backgroundSize: "30px 30px, 45px 45px",
// //             opacity: 0.3,
// //             transform: "translateX(0)",
// //           },
// //         },

// //         // Pulsos de processamento
// //         ".processing-pulse": {
// //           position: "fixed",
// //           width: "3px",
// //           height: "3px",
// //           borderRadius: "50%",
// //           backgroundColor: "rgba(255, 255, 255, 0.4)",
// //           filter: "blur(1px)",
// //           zIndex: -1,
// //           opacity: 0,
// //           animation: "processingMove 15s linear infinite",
// //           pointerEvents: "none",
// //         },

// //         // Animação de processamento
// //         "@keyframes processingMove": {
// //           "0%": {
// //             opacity: 0,
// //             transform: "translateX(-50px) translateY(0) scale(0.1)",
// //             boxShadow: "0 0 0 rgba(255, 255, 255, 0)",
// //           },
// //           "10%": {
// //             opacity: 0.8,
// //             transform: "translateX(0) translateY(-10px) scale(1)",
// //             boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
// //           },
// //           "25%": {
// //             opacity: 0.4,
// //             transform: "translateX(50px) translateY(-5px) scale(0.5)",
// //             boxShadow: "0 0 5px rgba(255, 255, 255, 0.2)",
// //           },
// //           "50%": {
// //             opacity: 0.9,
// //             transform: "translateX(100px) translateY(0) scale(1.2)",
// //             boxShadow: "0 0 15px rgba(255, 255, 255, 0.4)",
// //           },
// //           "75%": {
// //             opacity: 0.3,
// //             transform: "translateX(150px) translateY(5px) scale(0.3)",
// //             boxShadow: "0 0 3px rgba(255, 255, 255, 0.1)",
// //           },
// //           "90%": {
// //             opacity: 0.7,
// //             transform: "translateX(200px) translateY(0) scale(0.8)",
// //             boxShadow: "0 0 8px rgba(255, 255, 255, 0.25)",
// //           },
// //           "100%": {
// //             opacity: 0,
// //             transform: "translateX(250px) translateY(-10px) scale(0.1)",
// //             boxShadow: "0 0 0 rgba(255, 255, 255, 0)",
// //           },
// //         },

// //         // Texto de código flutuante
// //         ".code-fragment": {
// //           position: "fixed",
// //           color: "rgba(255, 255, 255, 0.02)",
// //           fontFamily: '"JetBrains Mono", monospace',
// //           fontSize: "10px",
// //           whiteSpace: "pre",
// //           lineHeight: 1.4,
// //           zIndex: -3,
// //           pointerEvents: "none",
// //           userSelect: "none",
// //           animation: "codeFloat 20s linear infinite",
// //         },

// //         "@keyframes codeFloat": {
// //           "0%": {
// //             transform: "translateY(100vh) translateX(0)",
// //             opacity: 0,
// //           },
// //           "10%": {
// //             opacity: 0.3,
// //           },
// //           "90%": {
// //             opacity: 0.3,
// //           },
// //           "100%": {
// //             transform: "translateY(-10vh) translateX(30px)",
// //             opacity: 0,
// //           },
// //         },

// //         // Efeito de scan line
// //         ".scan-line": {
// //           position: "fixed",
// //           top: 0,
// //           left: 0,
// //           width: "100%",
// //           height: "2px",
// //           background:
// //             "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)",
// //           zIndex: -1,
// //           animation: "scanMove 8s ease-in-out infinite",
// //           pointerEvents: "none",
// //         },

// //         "@keyframes scanMove": {
// //           "0%": {
// //             transform: "translateY(-2px)",
// //             opacity: 0,
// //           },
// //           "10%": {
// //             opacity: 0.5,
// //           },
// //           "90%": {
// //             opacity: 0.5,
// //           },
// //           "100%": {
// //             transform: "translateY(100vh)",
// //             opacity: 0,
// //           },
// //         },
// //       },
// //     },

// //     MuiButton: {
// //       styleOverrides: {
// //         root: {
// //           borderRadius: 8,
// //           textTransform: "none",
// //           fontWeight: 500,
// //           transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
// //           "&:hover": {
// //             transform: "translateY(-1px)",
// //             boxShadow: "0 4px 20px rgba(255, 255, 255, 0.1)",
// //           },
// //         },
// //         contained: {
// //           background: "linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)",
// //           color: "#000000",
// //           "&:hover": {
// //             background: "linear-gradient(135deg, #f5f5f5 0%, #bdbdbd 100%)",
// //           },
// //         },
// //         outlined: {
// //           borderColor: "rgba(255, 255, 255, 0.3)",
// //           color: "#ffffff",
// //           "&:hover": {
// //             borderColor: "rgba(255, 255, 255, 0.6)",
// //             backgroundColor: "rgba(255, 255, 255, 0.05)",
// //           },
// //         },
// //       },
// //     },

// //     MuiCard: {
// //       styleOverrides: {
// //         root: {
// //           borderRadius: 16,
// //           background:
// //             "linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(64, 64, 64, 0.1) 100%)",
// //           backdropFilter: "blur(16px)",
// //           border: "1px solid rgba(255, 255, 255, 0.08)",
// //           boxShadow: `
// //             0 8px 32px rgba(0, 0, 0, 0.4),
// //             inset 0 1px 0 rgba(255, 255, 255, 0.1)
// //           `,
// //           transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
// //           "&:hover": {
// //             transform: "translateY(-2px)",
// //             boxShadow: `
// //               0 12px 40px rgba(0, 0, 0, 0.5),
// //               inset 0 1px 0 rgba(255, 255, 255, 0.15)
// //             `,
// //             border: "1px solid rgba(255, 255, 255, 0.12)",
// //           },
// //         },
// //       },
// //     },

// //     MuiPaper: {
// //       styleOverrides: {
// //         root: {
// //           backgroundImage: "none",
// //           backgroundColor: "rgba(26, 26, 26, 0.95)",
// //           backdropFilter: "blur(12px)",
// //           border: "1px solid rgba(255, 255, 255, 0.06)",
// //         },
// //       },
// //     },

// //     MuiAppBar: {
// //       styleOverrides: {
// //         root: {
// //           backgroundColor: "rgba(0, 0, 0, 0.9)",
// //           backdropFilter: "blur(20px)",
// //           borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
// //           boxShadow: "0 1px 20px rgba(0, 0, 0, 0.3)",
// //         },
// //       },
// //     },

// //     MuiTextField: {
// //       styleOverrides: {
// //         root: {
// //           "& .MuiOutlinedInput-root": {
// //             "& fieldset": {
// //               borderColor: "rgba(255, 255, 255, 0.2)",
// //             },
// //             "&:hover fieldset": {
// //               borderColor: "rgba(255, 255, 255, 0.4)",
// //             },
// //             "&.Mui-focused fieldset": {
// //               borderColor: "#ffffff",
// //             },
// //           },
// //         },
// //       },
// //     },
// //   },
// // });

// import { createTheme } from "@mui/material/styles";

// export const theme = createTheme({
//   palette: {
//     mode: "dark",
//     primary: {
//       main: "#ffffff",
//       light: "#f5f5f5",
//       dark: "#e0e0e0",
//     },
//     secondary: {
//       main: "#9e9e9e",
//       light: "#bdbdbd",
//       dark: "#616161",
//     },
//     background: {
//       default: "transparent",
//       paper: "#1a1a1a",
//     },
//     text: {
//       primary: "#ffffff",
//       secondary: "#bdbdbd",
//     },
//   },
//   typography: {
//     fontFamily: '"JetBrains Mono", "Roboto Mono", monospace',
//     h1: {
//       fontSize: "3rem",
//       fontWeight: 700,
//       letterSpacing: "-0.02em",
//     },
//     h2: {
//       fontSize: "2.25rem",
//       fontWeight: 600,
//       letterSpacing: "-0.01em",
//     },
//     body1: {
//       fontSize: "1rem",
//       lineHeight: 1.6,
//       letterSpacing: "0.01em",
//     },
//   },
//   components: {
//     MuiCssBaseline: {
//       styleOverrides: {
//         "html, body, #root": {
//           minHeight: "100vh",
//           width: "100%",
//         },
//         "body, .css-37z01r, .css-37z01c": {
//           backgroundColor: "#000000 !important",
//           backgroundAttachment: "fixed",
//           position: "relative",

//           // Novo background mais escuro e sutil
//           background: `
//             radial-gradient(circle at 15% 85%, rgba(16, 185, 129, 0.03) 0%, transparent 60%),
//             radial-gradient(circle at 85% 15%, rgba(245, 158, 11, 0.02) 0%, transparent 60%),
//             radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.015) 0%, transparent 70%),
//             linear-gradient(135deg, #000000 0%, #020202 25%, #040404 50%, #020202 75%, #000000 100%)
//           `,

//           // Grid animado elegante
//           "&::before": {
//             content: '""',
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             zIndex: -1,
//             opacity: 0.02,
//             background: `
//               repeating-linear-gradient(
//                 90deg,
//                 transparent,
//                 transparent 80px,
//                 rgba(16, 185, 129, 0.04) 81px,
//                 rgba(16, 185, 129, 0.04) 82px
//               ),
//               repeating-linear-gradient(
//                 0deg,
//                 transparent,
//                 transparent 80px,
//                 rgba(245, 158, 11, 0.03) 81px,
//                 rgba(245, 158, 11, 0.03) 82px
//               )
//             `,
//             animation: "gridPulse 8s ease-in-out infinite",
//             pointerEvents: "none",
//           },

//           // Partículas flutuantes
//           "&::after": {
//             content: '""',
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             zIndex: -2,
//             background: `
//               radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.08) 0%, transparent 70%),
//               radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.06) 0%, transparent 70%)
//             `,
//             animation: "particleFloat 12s ease-in-out infinite",
//             pointerEvents: "none",
//           },
//         },

//         // Animações mais suaves e lentas
//         "@keyframes gridPulse": {
//           "0%, 100%": { opacity: 0.015 },
//           "50%": { opacity: 0.03 },
//         },

//         "@keyframes particleFloat": {
//           "0%, 100%": {
//             transform: "translateY(0px)",
//             opacity: 0.08,
//           },
//           "50%": {
//             transform: "translateY(-15px)",
//             opacity: 0.15,
//           },
//         },

//         // Pulsos de processamento mais sutis
//         ".processing-pulse": {
//           position: "fixed",
//           width: "1px",
//           height: "1px",
//           borderRadius: "50%",
//           backgroundColor: "rgba(16, 185, 129, 0.2)",
//           filter: "blur(0.5px)",
//           zIndex: -1,
//           opacity: 0,
//           animation: "processingMove 25s linear infinite",
//           pointerEvents: "none",
//         },

//         "@keyframes processingMove": {
//           "0%": {
//             opacity: 0,
//             transform: "translateX(-50px) translateY(0) scale(0.1)",
//             boxShadow: "0 0 0 rgba(16, 185, 129, 0)",
//           },
//           "10%": {
//             opacity: 0.3,
//             transform: "translateX(0) translateY(-5px) scale(0.8)",
//             boxShadow: "0 0 4px rgba(16, 185, 129, 0.2)",
//           },
//           "50%": {
//             opacity: 0.4,
//             transform: "translateX(100px) translateY(0) scale(1)",
//             boxShadow: "0 0 6px rgba(16, 185, 129, 0.25)",
//           },
//           "100%": {
//             opacity: 0,
//             transform: "translateX(200px) translateY(-5px) scale(0.1)",
//             boxShadow: "0 0 0 rgba(16, 185, 129, 0)",
//           },
//         },

//         // Efeito de scan line muito sutil
//         ".scan-line": {
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "1px",
//           background:
//             "linear-gradient(90deg, transparent 0%, rgba(16, 185, 129, 0.1) 50%, transparent 100%)",
//           zIndex: -1,
//           animation: "scanMove 20s ease-in-out infinite",
//           pointerEvents: "none",
//         },

//         "@keyframes scanMove": {
//           "0%": {
//             transform: "translateY(-1px)",
//             opacity: 0,
//           },
//           "10%": {
//             opacity: 0.1,
//           },
//           "90%": {
//             opacity: 0.1,
//           },
//           "100%": {
//             transform: "translateY(100vh)",
//             opacity: 0,
//           },
//         },
//       },
//     },

//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 8,
//           textTransform: "none",
//           fontWeight: 500,
//           transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//           "&:hover": {
//             transform: "translateY(-1px)",
//             boxShadow: "0 4px 20px rgba(255, 255, 255, 0.1)",
//           },
//         },
//         contained: {
//           background: "linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)",
//           color: "#000000",
//           "&:hover": {
//             background: "linear-gradient(135deg, #f5f5f5 0%, #bdbdbd 100%)",
//           },
//         },
//         outlined: {
//           borderColor: "rgba(255, 255, 255, 0.3)",
//           color: "#ffffff",
//           "&:hover": {
//             borderColor: "rgba(255, 255, 255, 0.6)",
//             backgroundColor: "rgba(255, 255, 255, 0.05)",
//           },
//         },
//       },
//     },

//     MuiCard: {
//       styleOverrides: {
//         root: {
//           borderRadius: 16,
//           background:
//             "linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(64, 64, 64, 0.1) 100%)",
//           backdropFilter: "blur(16px)",
//           border: "1px solid rgba(255, 255, 255, 0.08)",
//           boxShadow: `
//             0 8px 32px rgba(0, 0, 0, 0.4),
//             inset 0 1px 0 rgba(255, 255, 255, 0.1)
//           `,
//           transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//           "&:hover": {
//             transform: "translateY(-2px)",
//             boxShadow: `
//               0 12px 40px rgba(0, 0, 0, 0.5),
//               inset 0 1px 0 rgba(255, 255, 255, 0.15)
//             `,
//             border: "1px solid rgba(255, 255, 255, 0.12)",
//           },
//         },
//       },
//     },

//     MuiPaper: {
//       styleOverrides: {
//         root: {
//           backgroundImage: "none",
//           backgroundColor: "rgba(26, 26, 26, 0.95)",
//           backdropFilter: "blur(12px)",
//           border: "1px solid rgba(255, 255, 255, 0.06)",
//         },
//       },
//     },

//     MuiAppBar: {
//       styleOverrides: {
//         root: {
//           backgroundColor: "rgba(0, 0, 0, 0.9)",
//           backdropFilter: "blur(20px)",
//           borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
//           boxShadow: "0 1px 20px rgba(0, 0, 0, 0.3)",
//         },
//       },
//     },

//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           "& .MuiOutlinedInput-root": {
//             "& fieldset": {
//               borderColor: "rgba(255, 255, 255, 0.2)",
//             },
//             "&:hover fieldset": {
//               borderColor: "rgba(255, 255, 255, 0.4)",
//             },
//             "&.Mui-focused fieldset": {
//               borderColor: "#ffffff",
//             },
//           },
//         },
//       },
//     },
//   },
// });

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
      light: "#f5f5f5",
      dark: "#e0e0e0",
    },
    secondary: {
      main: "#9e9e9e",
      light: "#bdbdbd",
      dark: "#616161",
    },
    background: {
      default: "transparent",
      paper: "#1a1a1a",
    },
    text: {
      primary: "#ffffff",
      secondary: "#bdbdbd",
    },
  },
  typography: {
    fontFamily: '"JetBrains Mono", "Roboto Mono", monospace',
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: "2.25rem",
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      letterSpacing: "0.01em",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "html, body, #root": {
          minHeight: "100vh",
          width: "100%",
        },
        body: {
          backgroundColor: "#000000 !important",
          backgroundAttachment: "fixed",
          position: "relative",
          // Fundo preto puro - sem formas
        },

        // Animações
        "@keyframes lineGrow": {
          "0%": {
            width: "0%",
            opacity: 0,
          },
          "10%": {
            opacity: 0.8,
          },
          "70%": {
            width: "100%",
            opacity: 0.8,
          },
          "100%": {
            width: "100%",
            opacity: 0,
          },
        },

        "@keyframes lineGrowVertical": {
          "0%": {
            height: "0%",
            opacity: 0,
          },
          "10%": {
            opacity: 0.8,
          },
          "70%": {
            height: "100%",
            opacity: 0.8,
          },
          "100%": {
            height: "100%",
            opacity: 0,
          },
        },

        "@keyframes scanLine": {
          "0%": {
            transform: "translateY(-2px)",
            opacity: 0,
          },
          "10%": {
            opacity: 0.6,
          },
          "90%": {
            opacity: 0.6,
          },
          "100%": {
            transform: "translateY(100vh)",
            opacity: 0,
          },
        },

        // Classes para efeitos dinâmicos - linhas mais visíveis
        ".tech-line-h": {
          position: "fixed",
          height: "1px",
          background:
            "linear-gradient(90deg, rgba(16, 185, 129, 0.8), rgba(59, 130, 246, 0.6), rgba(16, 185, 129, 0.8))",
          boxShadow: "0 0 4px rgba(16, 185, 129, 0.4)",
          zIndex: -1,
          animation: "lineGrow 4s ease-out",
          pointerEvents: "none",
        },

        ".tech-line-v": {
          position: "fixed",
          width: "1px",
          background:
            "linear-gradient(180deg, rgba(59, 130, 246, 0.8), rgba(139, 92, 246, 0.6), rgba(59, 130, 246, 0.8))",
          boxShadow: "0 0 4px rgba(59, 130, 246, 0.4)",
          zIndex: -1,
          animation: "lineGrowVertical 5s ease-out",
          pointerEvents: "none",
        },

        ".tech-scan": {
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.6), rgba(59, 130, 246, 0.6), transparent)",
          boxShadow: "0 0 6px rgba(16, 185, 129, 0.5)",
          zIndex: -1,
          animation: "scanLine 8s linear infinite",
          pointerEvents: "none",
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0, 0, 0, 0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "0 1px 20px rgba(0, 0, 0, 0.3)",
          position: "fixed",
          zIndex: 1300,
          "&.MuiAppBar-positionFixed": {
            position: "fixed",
            zIndex: 1300,
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 500,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-1px)",
            boxShadow: "0 4px 20px rgba(255, 255, 255, 0.1)",
          },
        },
        contained: {
          background: "linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)",
          color: "#000000",
          "&:hover": {
            background: "linear-gradient(135deg, #f5f5f5 0%, #bdbdbd 100%)",
          },
        },
        outlined: {
          borderColor: "rgba(255, 255, 255, 0.3)",
          color: "#ffffff",
          "&:hover": {
            borderColor: "rgba(255, 255, 255, 0.6)",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          background:
            "linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(64, 64, 64, 0.1) 100%)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow:
            "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow:
              "0 12px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "rgba(26, 26, 26, 0.95)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.06)",
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "rgba(255, 255, 255, 0.2)",
            },
            "&:hover fieldset": {
              borderColor: "rgba(255, 255, 255, 0.4)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#ffffff",
            },
          },
        },
      },
    },
  },
});

// Variável para armazenar os intervalos
let techEffectsIntervals: NodeJS.Timeout[] = [];

// Função simples para adicionar efeitos tecnológicos
export const addTechEffects = () => {
  // Limpar efeitos existentes primeiro
  removeTechEffects();

  // Adicionar linha de scan
  const scanLine = document.createElement("div");
  scanLine.className = "tech-scan";
  scanLine.id = "tech-scan-line";
  document.body.appendChild(scanLine);

  // Função para criar linha horizontal
  const createHorizontalLine = () => {
    const line = document.createElement("div");
    line.className = "tech-line-h tech-effect";
    line.style.top = Math.random() * 100 + "%";
    line.style.left = "0";
    line.style.width = "0";
    document.body.appendChild(line);

    // Remover após animação
    setTimeout(() => {
      if (line.parentNode) {
        line.parentNode.removeChild(line);
      }
    }, 4000);
  };

  // Função para criar linha vertical
  const createVerticalLine = () => {
    const line = document.createElement("div");
    line.className = "tech-line-v tech-effect";
    line.style.left = Math.random() * 100 + "%";
    line.style.top = "0";
    line.style.height = "0";
    document.body.appendChild(line);

    // Remover após animação
    setTimeout(() => {
      if (line.parentNode) {
        line.parentNode.removeChild(line);
      }
    }, 5000);
  };

  // Criar linhas iniciais
  for (let i = 0; i < 2; i++) {
    setTimeout(createHorizontalLine, i * 800);
    setTimeout(createVerticalLine, i * 1200 + 400);
  }

  // Continuar criando linhas com mais frequência
  const horizontalInterval = setInterval(createHorizontalLine, 2500);
  const verticalInterval = setInterval(createVerticalLine, 3500);

  // Armazenar intervalos para limpeza
  techEffectsIntervals = [horizontalInterval, verticalInterval];
};

// Função para remover efeitos
export const removeTechEffects = () => {
  // Limpar intervalos
  techEffectsIntervals.forEach((interval: NodeJS.Timeout) =>
    clearInterval(interval)
  );
  techEffectsIntervals = [];

  // Remover elementos
  const elements = document.querySelectorAll(".tech-effect, #tech-scan-line");
  elements.forEach((el: Element) => {
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  });
};
