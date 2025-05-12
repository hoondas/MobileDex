// src/components/Shiny.jsx

import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../App.css";
import { Box, Button, Typography } from "@mui/material";

function Shiny() {
    const location = useLocation();
    const pokemonData = location.state?.pokemonData;

    return (
        <Box className="mobile-container" sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, textAlign: "center", padding: 3 }}>
            <Typography variant="h3" gutterBottom>
                Shiny Version
            </Typography>
            
            <Typography variant="h4" gutterBottom>
                {pokemonData.name.toUpperCase()}
            </Typography>
            
            <img
                src={pokemonData.sprites.front_shiny}
                alt={pokemonData.name}
                style={{ width: "100%", maxWidth: 300, borderRadius: 8 }}
            />
            
            <Button variant="contained" color="error" component={Link} to="/">
                Voltar para a Home
            </Button>
        </Box>
    );
}

export default Shiny;
