import {
    Box,
    Container,
    Typography,
    Grid,
    TextField,
    Button,
} from "@mui/material";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);

        emailjs
            .sendForm(
                "service_ok2e3b9", // 🔥 Replace with EmailJS Service ID
                "template_8c4pty7",
                formRef.current,
                "cxfvSX-ZafXVU5u5s" // 🔥 Replace with EmailJS Public Key
            )
            .then(() => {
                alert("Message sent successfully!");
                formRef.current.reset();
            })
            .catch((error) => {
                console.error(error);
                alert("Failed to send message. Try again.");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <Box sx={{ py: 10 }}>
            <Container maxWidth="lg">

                {/* HEADER */}
                <Typography
                    variant="h3"
                    sx={{ fontWeight: 700, textAlign: "center", mb: 2 }}
                >
                    Let’s Talk About Your Project
                </Typography>

                <Typography
                    sx={{
                        textAlign: "center",
                        color: "text.secondary",
                        mb: 8,
                    }}
                >
                    Have an idea or need a solution? Reach out to us — we’d love to hear from you.
                </Typography>

                {/* MAIN GRID */}
                <Grid
                    container
                    spacing={6}
                    alignItems="flex-start"
                    sx={{
                        flexWrap: { xs: "wrap", md: "nowrap" },
                    }}
                >

                    {/* LEFT SIDE — CONTACT INFO */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                            Contact Information
                        </Typography>

                        <Typography sx={{ mb: 2 }}>
                            📞 9811311260 / 8377031018
                        </Typography>

                        <Typography sx={{ mb: 2 }}>
                            📧 shivam@encodestudio.in
                        </Typography>

                        <Typography sx={{ mb: 2 }}>
                            📍 India
                        </Typography>

                        <Typography sx={{ mb: 2 }}>
                            📸 Instagram: @encodestudio.in
                        </Typography>

                        <Button
                            variant="contained"
                            href="https://wa.me/918377031018"
                            target="_blank"
                            sx={{
                                mt: 2,
                                backgroundColor: "#25D366",
                            }}
                        >
                            Chat on WhatsApp
                        </Button>
                    </Grid>

                    {/* RIGHT SIDE — FORM */}
                    <Grid item xs={12} md={8}>
                        <Box
                            component="form"
                            ref={formRef}
                            onSubmit={handleSubmit}
                            sx={{
                                p: 4,
                                borderRadius: "12px",
                                border: "1px solid rgba(0,0,0,0.08)",
                                width: "100%",
                            }}
                        >
                            <Grid container spacing={2}>

                                {/* ROW 1 */}
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="name"
                                        fullWidth
                                        label="Your Name *"
                                        required
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="phone"
                                        fullWidth
                                        label="Phone Number *"
                                        required
                                    />
                                </Grid>

                                {/* ROW 2 */}
                                <Grid item xs={12}>
                                    <TextField
                                        name="email"
                                        fullWidth
                                        label="Email Address *"
                                        required
                                    />
                                </Grid>

                                {/* ROW 3 */}
                                <Grid item xs={12}>
                                    <TextField
                                        name="message"
                                        fullWidth
                                        label="Your Message *"
                                        multiline
                                        rows={5}
                                        required
                                    />
                                </Grid>

                                {/* BUTTON */}
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        fullWidth
                                        disabled={loading}
                                        sx={{
                                            py: 1.5,
                                            fontWeight: 600,
                                        }}
                                    >
                                        {loading ? "Sending..." : "Send Message"}
                                    </Button>
                                </Grid>

                            </Grid>
                        </Box>
                    </Grid>

                </Grid>

            </Container>
        </Box>
    );
}