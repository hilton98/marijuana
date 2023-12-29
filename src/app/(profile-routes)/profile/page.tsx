'use client'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ganjaData from "../../../../data/ganjaData.json"
import { Box, Pagination, Stack } from "@mui/material";
import React from 'react';


export default function Profile(){
    const totalItems = ganjaData.length;
    const itemsPerPage = 6
    const [initialIndex, setInitialIndex] = React.useState(0);
    const [lastIndex, setlastIndex] = React.useState(itemsPerPage-1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        let base = (value-1)* itemsPerPage
        let roof = value * itemsPerPage
        setInitialIndex(base)
        setlastIndex(roof)
    };
    
    return (
        <>
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "3.5rem",
            paddingBottom: "3.5rem"
        }}>
            <Box sx={{
                width: 1000,
                display: "grid",
                gridTemplateColumns: "auto auto auto",
                gap: 2,
                padding: 2,
            }}>
                {ganjaData.sort((a, b) => (a.name > b.name) ? 1 : -1)
                .slice(initialIndex, lastIndex)
                .map( specificMarijuana => (
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
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            paddingBottom: "4rem"
        }}>
            <Stack spacing={2}>
                <Pagination count={Math.round(totalItems/itemsPerPage)} defaultPage={1} shape="rounded" onChange={handleChange}/>
            </Stack>
        </Box>

        </>
    )
}