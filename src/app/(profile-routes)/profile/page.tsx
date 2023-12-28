'use client'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import testData from "../../../../data/test_data.json"
import { Box, Grid, autocompleteClasses } from "@mui/material";


export default function Profile(){
    const animalsData = testData.animals;
    return (
        <>
        <Box sx={{
            display: "flex",
            justifyContent: "center"
        }}>
            <Box sx={{
                width: 1000,
                display: "grid",
                gridTemplateColumns: "auto auto auto",
                gap: 2,
                padding: 2
            }}>
                {animalsData.map( animal => (
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={animal.image_url}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {animal.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {animal.description}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
        </>
    )
}