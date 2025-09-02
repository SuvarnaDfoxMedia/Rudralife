import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

function Pdf() {
  const [urls, setUrls] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || []).filter(
      (f) => f.type === "application/pdf"
    );

    // new selected files → convert to url
    const newUrls = files.map((f) => ({
      name: f.name,
      url: URL.createObjectURL(f),
    }));

    // जर आधीच 2 झाले असतील तर अजून add होऊ नये
    setUrls((prev) => {
      const combined = [...prev, ...newUrls];
      if (combined.length > 2) {
        alert("You can upload only 2 PDFs!");
        return combined.slice(0, 2); // फक्त पहिल्या 2 ठेव
      }
      return combined;
    });
  };

  return (
    <Box sx={{ p: 3, textAlign: "center" }}>
      <Typography variant="h5" gutterBottom>
        PDF Submission Task
      </Typography>

      <Button
        variant="contained"
        component="label"
        disabled={urls.length >= 2} // 2 झाल्यावर button disabled
      >
        Select PDFs
        <input
          type="file"
          accept="application/pdf"
          multiple
          hidden
          onChange={handleFileChange}
        />
      </Button>

      <Grid
        container
        spacing={2}
        sx={{ mt: 2 }}
        justifyContent="center"
        alignItems="center"
      >
        {urls.map(({ name, url }, i) => (
          <Grid item xs={12} md={6} sm={6} key={i}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
              }}
            >
              <iframe
                title={name}
                src={url}
                style={{
                  width: "600px",
                  height: "500px",
                  border: "1px solid #ccc",
                }}
              />
              <Typography
                variant="body2"
                sx={{ mt: 1, textAlign: "center" }}
              >
                {name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Pdf;
