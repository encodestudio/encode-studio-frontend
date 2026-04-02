import { Box } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function WhatsAppButton() {
    return (
        <Box
            component="a"
            href="https://wa.me/918377031018"
            target="_blank"
            sx={{
                position: "fixed",
                bottom: 20,
                right: 20,
                width: 60,
                height: 60,
                borderRadius: "50%",
                backgroundColor: "#25D366",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                zIndex: 999,
                cursor: "pointer",
                "&:hover": {
                    transform: "scale(1.1)",
                },
            }}
        >
            <WhatsAppIcon sx={{ color: "#fff", fontSize: 30 }} />
        </Box>
    );
}