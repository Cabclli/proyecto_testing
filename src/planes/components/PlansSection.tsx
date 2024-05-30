import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { Plan } from "../types/Plan";
import CardPlanSection from "./CardPlanSection";

export const plans: Plan[] = [
  {
    title: "Website",
    img: "https://imgs.search.brave.com/BIzS0mdp96TeOi6Q2OAEuhZGXh4MGqWJhlXbhaXkmso/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9lMDAt/ZWxtdW5kby51ZWNk/bi5lcy9hc3NldHMv/bXVsdGltZWRpYS9p/bWFnZW5lcy8yMDIz/LzA0LzEyLzE2ODEz/MTE1NTQwMDA1Lmpw/Zw",
    description: "PC AMD RYZEN 9 7900X RTX 3090 FOUNDERS.",
    price: 500,
    hrefViewMore: "#",
    hrefSelectPlan: "/comprar/0",
  },
  {
    title: "Business",
    img:"https://imgs.search.brave.com/BIzS0mdp96TeOi6Q2OAEuhZGXh4MGqWJhlXbhaXkmso/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9lMDAt/ZWxtdW5kby51ZWNk/bi5lcy9hc3NldHMv/bXVsdGltZWRpYS9p/bWFnZW5lcy8yMDIz/LzA0LzEyLzE2ODEz/MTE1NTQwMDA1Lmpw/Zw",
    description:
      "Comienza a vender al instante con los elementos esenciales del eCommerce.",
    price: 5990,
    hrefViewMore: "#",
    hrefSelectPlan: "/comprar/1",
  },
  {
    title: "Advanced Store",
    img:"https://imgs.search.brave.com/BIzS0mdp96TeOi6Q2OAEuhZGXh4MGqWJhlXbhaXkmso/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9lMDAt/ZWxtdW5kby51ZWNk/bi5lcy9hc3NldHMv/bXVsdGltZWRpYS9p/bWFnZW5lcy8yMDIz/LzA0LzEyLzE2ODEz/MTE1NTQwMDA1Lmpw/Zw",
    description:
      "Haz crecer tu negocio con potentes herramientas de marketing.",
    price: 8990,
    hrefViewMore: "#",
    hrefSelectPlan: "/comprar/2",
  },
];

const PlansSection = () => {
  return (
    <Stack spacing={2}>
      <Typography textAlign={"center"} variant="h4" className="title">
        Elije el plan que mejor te convenga
      </Typography>
      <Box>
        <Grid container spacing={4}>
          {plans.map((item, index) => (
            <Grid item key={index} xs={12} md={4}>
              <CardPlanSection item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
};

export default PlansSection;
