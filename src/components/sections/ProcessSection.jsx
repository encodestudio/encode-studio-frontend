import { Box, Container, Typography } from "@mui/material";

const steps = [
    {
        number: "01",
        title: "Requirement & Planning",
        description:
            "We understand your business, goals, and requirements to create a clear roadmap.",
    },
    {
        number: "02",
        title: "Design & Prototyping",
        description:
            "We design intuitive UI/UX and create prototypes for better visualization.",
    },
    {
        number: "03",
        title: "Development & Integration",
        description:
            "We build scalable, high-performance solutions using modern technologies.",
    },
    {
        number: "04",
        title: "Testing & Deployment",
        description:
            "We ensure quality, performance, and smooth deployment for a reliable product.",
    },
];

export default function ProcessSection() {
    return (
        <Box sx={{ py: 10, backgroundColor: "#FFFFFF" }}>
            <Container maxWidth="lg">

                {/* HEADING */}
                <Typography
                    variant="h3"
                    sx={{ fontWeight: 700, textAlign: "center", mb: 2 }}
                >
                    Our Process
                </Typography>

                <Typography
                    sx={{
                        textAlign: "center",
                        color: "text.secondary",
                        mb: 8,
                        maxWidth: "600px",
                        mx: "auto",
                    }}
                >
                    A simple and structured approach to turn your ideas into powerful digital solutions.
                </Typography>

                {/* TIMELINE */}
                <Box sx={{ position: "relative" }}>

                    {/* CONNECTING LINE */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: "20px",
                            left: 0,
                            right: 0,
                            height: "2px",
                            backgroundColor: "#E5E7EB",
                            zIndex: 0,
                        }}
                    />

                    {/* STEPS */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            position: "relative",
                            zIndex: 1,
                            flexWrap: { xs: "wrap", md: "nowrap" },
                            gap: { xs: 4, md: 0 },
                        }}
                    >
                        {steps.map((step, index) => (
                            <Box
                                key={index}
                                sx={{
                                    textAlign: "center",
                                    width: { xs: "100%", md: "25%" },
                                }}
                            >

                                {/* CIRCLE */}
                                <Box
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: "50%",
                                        backgroundColor: "primary.main",
                                        color: "#fff",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        margin: "0 auto",
                                        mb: 2,
                                        fontWeight: 600,
                                    }}
                                >
                                    {step.number}
                                </Box>

                                {/* TITLE */}
                                <Typography sx={{ fontWeight: 600, mb: 1 }}>
                                    {step.title}
                                </Typography>

                                {/* DESCRIPTION */}
                                <Typography
                                    sx={{
                                        color: "text.secondary",
                                        fontSize: "14px",
                                        px: 1,
                                    }}
                                >
                                    {step.description}
                                </Typography>

                            </Box>
                        ))}
                    </Box>

                </Box>

            </Container>
        </Box>
    );
}