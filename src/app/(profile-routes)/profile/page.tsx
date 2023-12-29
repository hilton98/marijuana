'use client'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ganjaData from "../../../../data/ganjaData.json"
import { Box } from "@mui/material";


export default function Profile(){
    return (
        <>
        <Box sx={{
            display: "flex",
            justifyContent: "center",
        }}>
            <Box sx={{
                width: 1000,
                display: "grid",
                gridTemplateColumns: "auto auto auto",
                gap: 2,
                padding: 2,
                paddingBottom: "3.5rem",
            }}>
                {ganjaData.map( specificMarijuana => (
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={specificMarijuana.image_url}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {specificMarijuana.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {specificMarijuana.description}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
        </>
    )
}