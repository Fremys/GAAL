import React, { useState } from "react";
import {
  Typography,
  Grid,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Button,
  TextField,
} from "@mui/material";
import * as math from "mathjs";

const Main = () => {
  const [size, setSize] = useState(3); // tamanho inicial da matriz
  const [vector, setVector] = useState(Array(size).fill(0)); // vetor de valores
  const [matrix, setMatrix] = useState(createMatrix(size));
  const [solution, setSolution] = useState(null); // solução do sistema linear

  // Função para criar a matriz quadrada
  function createMatrix(size) {
    const newMatrix = [];
    for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < size; j++) {
        row.push(0);
      }
      newMatrix.push(row);
    }
    return newMatrix;
  }

  // Função para atualizar o tamanho da matriz e vetor
  function handleSizeChange(event) {
    const newSize = parseInt(event.target.value);
    setSize(newSize);
    setVector(Array(newSize).fill(0));
    setMatrix(createMatrix(newSize));
    setSolution(null);
  }

  // Função para atualizar um elemento da matriz
  function handleMatrixChange(event, rowIdx, colIdx) {
    const newValue = parseInt(event.target.value);
    const newMatrix = [...matrix];
    newMatrix[rowIdx][colIdx] = newValue;
    setMatrix(newMatrix);
    setSolution(null);
  }

  // Função para atualizar um valor do vetor
  function handleVectorChange(event, idx) {
    const newValue = parseInt(event.target.value);
    const newVector = [...vector];
    newVector[idx] = newValue;
    setVector(newVector);
    setSolution(null);
  }

  // Função para resolver o sistema linear
  function solveSystem() {
    try {
      const solution = math.lusolve(matrix, vector);
      console.log("Solução:", solution);
      setSolution(solution);
    } catch (error) {
      setSolution(null);
      alert("O sistema linear não possui solução.");
    }
  }

  return (
    <div>
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

      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <label>
          Tamanho da matriz:
          <Select
            value={size}
            onChange={handleSizeChange}
            sx={{ marginLeft: "1rem" }}
          >
            <MenuItem value={2}>2x2</MenuItem>
            <MenuItem value={3}>3x3</MenuItem>
            <MenuItem value={4}>4x4</MenuItem>
            {/* Adicione mais opções de tamanho, se desejar */}
          </Select>
        </label>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Table>
          <TableBody>
            {matrix.map((row, rowIdx) => (
              <TableRow key={rowIdx}>
                {row.map((cell, colIdx) => (
                  <TableCell key={colIdx}>
                    <TextField
                      type="number"
                      value={cell}
                      onChange={(event) =>
                        handleMatrixChange(event, rowIdx, colIdx)
                      }
                      variant="outlined"
                      size="small"
                      style={{ width: "5rem", marginRight: "0.5rem" }}
                    />
                  </TableCell>
                ))}
                <TableCell>
                  <TextField
                    type="number"
                    value={vector[rowIdx]}
                    onChange={(event) => handleVectorChange(event, rowIdx)}
                    variant="outlined"
                    size="small"
                    style={{ width: "5rem", marginRight: "0.5rem" }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <Button variant="contained" onClick={solveSystem}>
          Resolver Sistema Linear
        </Button>
      </Grid>

      {solution && (
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <div>
            <Typography variant="h6">Solução:</Typography>
            <ul>
              {solution.map((value, idx) => (
                <li key={idx}>
                  x{idx + 1} = {value}
                </li>
              ))}
            </ul>
          </div>
        </Grid>
      )}
    </div>
  );
};

export default Main;
