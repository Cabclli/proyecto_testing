import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Plan } from "../types/Plan";

const CardPlanSection = ({ item }: { item: Plan }) => {
  return (
    <Card
      sx={{
        minHeight: "345px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 2,
      }}
      elevation={4}
    >
      <CardMedia>
        <img src={item.img} alt="" />
      </CardMedia>
      <CardHeader title={item.title} subheader={item.description} />

      <Box>
        <CardContent>
          <Typography variant="caption">Desde</Typography>
          <Typography variant="h4" className="title">
            {`USD$ ${item.price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")},00`}
          </Typography>
          <Typography variant="caption">/mes</Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            className="button contained"
            href={item.hrefSelectPlan}
          >
            AGREGAR
          </Button>
          <Button
            variant="text"
            className="button button-text"
            href={item.hrefViewMore}
          >
            CONTACTAR
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};

export default CardPlanSection;
