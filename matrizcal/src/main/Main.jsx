import React, { useState } from "react";
import { Grid, Box, Typography, Input, TextField } from "@mui/material";

const Main = () => {
  const [matriz, setMatriz] = useState({
    dim: 0,
    matriz: null,
  });

  return (
    <div>
      <Box
        sx={{
          maxWidth: "100vw",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            //   backgroundColor: 'red',
            minWidth: "100vw",
          }}
        >
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Candara",
                fontWeight: "bold",
                color: "#006400",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                margin: "2%",
              }}
            >
              Calculadora de Matriz
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="subtitle2"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Candara",
                fontWeight: "bold",
                color: "black",
              }}
            >
              Digite o espaço do vetor (ex: 2 para R2, 3 para R3):
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              margin: "3%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Input
              type="number"
              onChange={(e) => {

                if(e.target.value <= 3 && e.target.value >= 0){

                  setMatriz({
                    ...matriz,
                    dim: e.target.value,
                  });
                }
                }}
              value={matriz.dim}
            />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          maxWidth: "100vw",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          sx={{
            maxWidth: "80vw",
          }}
          spacing={10}
        >
          {/* Colunas da matriz */}
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Linhas */}
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  type="number"
                  onChange={(e) => {
                    setMatriz({
                      ...matriz,
                      dim: e.target.value,
                    });
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  type="number"
                  onChange={(e) => {
                    setMatriz({
                      ...matriz,
                      dim: e.target.value,
                    });
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  type="number"
                  onChange={(e) => {
                    setMatriz({
                      ...matriz,
                      dim: e.target.value,
                    });
                  }}
                />
              </Grid>

            </Grid>
          </Grid>

          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
             {/* Linhas */}
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  type="number"
                  onChange={(e) => {
                    setMatriz({
                      ...matriz,
                      dim: e.target.value,
                    });
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  type="number"
                  onChange={(e) => {
                    setMatriz({
                      ...matriz,
                      dim: e.target.value,
                    });
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  type="number"
                  onChange={(e) => {
                    setMatriz({
                      ...matriz,
                      dim: e.target.value,
                    });
                  }}
                />
              </Grid>

            </Grid>
          </Grid>

          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Linhas */}
            <Grid container  spacing={3}>
              <Grid item xs={12}>
                <TextField
                  type="number"
                  onChange={(e) => {
                    setMatriz({
                      ...matriz,
                      dim: e.target.value,
                    });
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  type="number"
                  onChange={(e) => {
                    setMatriz({
                      ...matriz,
                      dim: e.target.value,
                    });
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  type="number"
                  onChange={(e) => {
                    setMatriz({
                      ...matriz,
                      dim: e.target.value,
                    });
                  }}
                />
              </Grid>

            </Grid>
          </Grid>

          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Linhas */}
            <Grid container  spacing={3} sx={{
              borderLeft: "1px solid"
            }}>
              <Grid item xs={12}>
                <TextField
                  type="number"
                  onChange={(e) => {
                    setMatriz({
                      ...matriz,
                      dim: e.target.value,
                    });
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  type="number"
                  onChange={(e) => {
                    setMatriz({
                      ...matriz,
                      dim: e.target.value,
                    });
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  type="number"
                  onChange={(e) => {
                    setMatriz({
                      ...matriz,
                      dim: e.target.value,
                    });
                  }}
                />
              </Grid>

            </Grid>
          </Grid>

        </Grid>
      </Box>
    </div>
  );
};

export default Main;
