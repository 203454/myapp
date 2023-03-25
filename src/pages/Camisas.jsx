import { Box, Grid } from '@mui/material';
import React from 'react';
import CardProduct from '../Components/CardProduct';

import camisa1 from '../assets/Camisas/1.png';
import camisa2 from '../assets/Camisas/2.png';
import camisa3 from '../assets/Camisas/3.png';
import camisa4 from '../assets/Camisas/4.png';
import camisa5 from '../assets/Camisas/5.png';
import camisa6 from '../assets/Camisas/6.png';
import camisa7 from '../assets/Camisas/7.png';
import camisa8 from '../assets/Camisas/8.png';
import camisa9 from '../assets/Camisas/9.png';
import camisa10 from '../assets/Camisas/10.png';
import camisa11 from '../assets/Camisas/11.png';
import camisa12 from '../assets/Camisas/12.png';
import camisa13 from '../assets/Camisas/13.png';
import camisa14 from '../assets/Camisas/14.png';
import camisa15 from '../assets/Camisas/15.png';
import camisa16 from '../assets/Camisas/16.png';
import camisa17 from '../assets/Camisas/17.png';
import camisa18 from '../assets/Camisas/18.png';
import camisa19 from '../assets/Camisas/19.png';
import camisa20 from '../assets/Camisas/20.png';
import camisa21 from '../assets/Camisas/21.png';
import camisa22 from '../assets/Camisas/22.png';
import camisa23 from '../assets/Camisas/23.png';
import camisa24 from '../assets/Camisas/24.png';
import camisa25 from '../assets/Camisas/25.png';
import camisa26 from '../assets/Camisas/26.png';
import camisa27 from '../assets/Camisas/27.png';
import camisa28 from '../assets/Camisas/28.png';
import camisa29 from '../assets/Camisas/29.png';
import camisa30 from '../assets/Camisas/30.png';


const Camisas = () => {

    const min = 1;
    const max = 100;
    let randomInt = 0

    const itemsCamisas = [
        {
            name: 'Camisa 1',
            description: 'Descripción del Item 1',
            image: camisa1,
            price:Math.floor(Math.random() * (max - min + 1)) + min 
        },
        {
            name: 'Camisa 2',
            description: 'Descripción del Item 2',
            image: camisa2,
            price:Math.floor(Math.random() * (max - min + 1)) + min 

        },
        {
            name: 'Camisa 3',
            description: 'Descripción del Item 3',
            image: camisa3,
            price:Math.floor(Math.random() * (max - min + 1)) + min 

        },
        {
            name: 'Camisa 4',
            description: 'Descripción del Item 4',
            image: camisa4,
            price:Math.floor(Math.random() * (max - min + 1)) + min 

        },
        {
            name: 'Camisa 5',
            description: 'Descripción del Item 5',
            image: camisa5,
            price:Math.floor(Math.random() * (max - min + 1)) + min 

        },
        {
            name: 'Camisa 6',
            description: 'Descripción del Item 6',
            image: camisa6,
            price:Math.floor(Math.random() * (max - min + 1)) + min 

        },
        {
            name: 'Camisa 7',
            description: 'Descripción del Item 7',
            image: camisa7,
            price:Math.floor(Math.random() * (max - min + 1)) + min 

        },
        {
            name: 'Camisa 8',
            description: 'Descripción del Item 8',
            image: camisa8,
            price:Math.floor(Math.random() * (max - min + 1)) + min 

        },
        {
            name: 'Camisa 9',
            description: 'Descripción del Item 9',
            image: camisa9,
            price:Math.floor(Math.random() * (max - min + 1)) + min 

        },
        {
            name: 'Camisa 10',
            description: 'Descripción del Item 10',
            image: camisa10,
            price:Math.floor(Math.random() * (max - min + 1)) + min 

        },
        {
            name: 'Camisa 11',
            description: 'Descripción del Item 11',
            image: camisa11,
            price:Math.floor(Math.random() * (max - min + 1)) + min 

        },
        {
            name: 'Camisa 12',
            description: 'Descripción del Item 12',
            image: camisa12,
            price:Math.floor(Math.random() * (max - min + 1)) + min 

        },
        {
            name: 'Camisa 13',
            description: 'Descripción del Item 13',
            image: camisa13,
            price:Math.floor(Math.random() * (max - min + 1)) + min 

        },
        {
            name: 'Camisa 14',
            description: 'Descripción del Item 14',
            image: camisa14,
            price:Math.floor(Math.random() * (max - min + 1)) + min 

        },
        {
            name: 'Camisa 15',
            description: 'Descripción del Item 15',
            image: camisa15,
            price:Math.floor(Math.random() * (max - min + 1)) + min 

        },
        {
            name: 'Camisa 16',
            description: 'Descripción del Item 16',
            image: camisa16,
            price:Math.floor(Math.random() * (max - min + 1)) + min 

        },
        {
            name: 'Camisa 17',
            description: 'Descripción del Item 17',
            image: camisa17,
            price:Math.floor(Math.random() * (max - min + 1)) + min 

        },
        {
            name: 'Camisa 18',
            description: 'Descripción del Item 18',
            image: camisa18,
            price:Math.floor(Math.random() * (max - min + 1)) + min 

        },
        {
            name: 'Camisa 19',
            description: 'Descripción del Item 19',
            image: camisa19,
            price:Math.floor(Math.random() * (max - min + 1)) + min 

        },
        {
            name: 'Camisa 20',
            description: 'Descripción del Item 20',
            image: camisa20,
            price:Math.floor(Math.random() * (max - min + 1)) + min 

        },
        {
            name: 'Camisa 21',
            description: 'Descripción del Item 21',
            image: camisa21,
            price:Math.floor(Math.random() * (max - min + 1)) + min 

        },
        {
            name: 'Camisa 22',
            description: 'Descripción del Item 22',
            image: camisa22,
            price:Math.floor(Math.random() * (max - min + 1)) + min 

        },
        {
            name: 'Camisa 23',
            description: 'Descripción del Item 23',
            image: camisa23,
            price:Math.floor(Math.random() * (max - min + 1)) + min 

        },
        {
            name: 'Camisa 24',
            description: 'Descripción del Item 24',
            image: camisa24,
            price:Math.floor(Math.random() * (max - min + 1)) + min 

        },
        {
            name: 'Camisa 25',
            description: 'Descripción del Item 25',
            image: camisa25,
            price:Math.floor(Math.random() * (max - min + 1)) + min 

        },
        {
            name: 'Camisa 26',
            description: 'Descripción del Item 26',
            image: camisa26,
            price:Math.floor(Math.random() * (max - min + 1)) + min 

        },
        {
            name: 'Camisa 27',
            description: 'Descripción del Item 27',
            image: camisa27,
            price:Math.floor(Math.random() * (max - min + 1)) + min 

        },
        {
            name: 'Camisa 28',
            description: 'Descripción del Item 28',
            image: camisa28,
            price:Math.floor(Math.random() * (max - min + 1)) + min 

        },
        {
            name: 'Camisa 29',
            description: 'Descripción del Item 29',
            image: camisa29,
            price:Math.floor(Math.random() * (max - min + 1)) + min 

        },
        {
            name: 'Camisa 30',
            description: 'Descripción del Item 30',
            image: camisa25,
            price:Math.floor(Math.random() * (max - min + 1)) + min 

        }
    ]



    return (

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        itemsCamisas.map(( product) => (
                            <Grid item xs={2} sm={4} md={4} >
                                <CardProduct
                                    image={product.image}
                                    title={product.name}
                                    description={product.description}
                                    price={product.price}
                                />
                            </Grid>
                        ))}                
            </Grid>


    );
}

export default Camisas;
