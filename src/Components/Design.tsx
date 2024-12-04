import { Button, Typography, Paper, Stack, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { appStore } from "../Store/appStore";

export default function Design() {
  const { submitHandler, clicked, setClicked, setValue } = appStore();
  const ratings: number[] = [1, 2, 3, 4, 5];

  const handleRating = (index: number, rate: number) => {
    setClicked(index);
    setValue(rate);
  };

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
      <Stack spacing={3}>
        <Stack
          sx={{
            borderRadius: "50%",
            backgroundColor: "#2a2e30",
            justifyContent: "center",
            alignItems: "center",
            width: "40px",
            height: "40px",
            cursor: "pointer",
          }}
        >
          <StarIcon sx={{ color: "orange" }} />
        </Stack>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "white" }}>
          How did we do?
        </Typography>
        <Typography variant="body1" sx={{ opacity: "70%", color: "white" }}>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offring!
        </Typography>
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          {ratings.map((rate, index) => (
            <Stack key={index}>
              <Box
                sx={{
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  fontSize: "16px",
                  backgroundColor: index === clicked ? "white" : "#262f38",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  color: index === clicked ? "#262f38" : "white",
                  "&:hover": {
                    backgroundColor: "#fc7613",
                  },
                }}
                onClick={() => handleRating(index, rate)}
              >
                {rate}
              </Box>
            </Stack>
          ))}
        </Stack>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#fc7613",
            color: "#1e252f",
            fontWeight: "bold",
            padding: "10px",
            "&:hover": {
              backgroundColor: "white",
            },
            borderRadius: "20px",
          }}
          onClick={submitHandler}
        >
          submit
        </Button>
      </Stack>
    </Paper>
  );
}
