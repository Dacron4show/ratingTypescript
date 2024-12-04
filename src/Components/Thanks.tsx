import { Typography, Paper, Stack, Box } from "@mui/material";
import { appStore } from "../Store/appStore";
export default function Thanks() {
  const { value } = appStore();
  return (
    <Paper
      sx={{
        padding: "30px",
        margin: "auto",
        maxWidth: { xs: "300px", sm: "360px" },
        backgroundColor: "#1c232d",
        borderRadius: "25px",
      }}
      elevation={4}
    >
      <Stack
        sx={{
          alignItems: "center",
          textAlign: "center",
        }}
        spacing={2}
      >
        <Box
          component="img"
          role="just shows phone"
          alt="img for thanks"
          src="/illustration-thank-you.svg"
        />
        <Box
          sx={{
            backgroundColor: "#262f38",
            padding: "8px",
            borderRadius: "22px",
          }}
        >
          <Typography variant="subtitle2" sx={{ color: "#fc7613" }}>
            You selected {value} out of 5
          </Typography>
        </Box>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "white" }}>
          Thank you!
        </Typography>
        <Typography variant="body1" sx={{ opacity: "70%", color: "white" }}>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </Typography>
      </Stack>
    </Paper>
  );
}
