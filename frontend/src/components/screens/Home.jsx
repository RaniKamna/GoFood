import React from 'react';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { Card } from '../Card';
import { Carousel } from '../Carousel';

export const Home = () => {
    return (
        <div>
            <div> <Navbar /> </div>
            <div> <Carousel /> </div>
            <div> <Card /> </div>
            <div> <Footer /> </div>
        </div>
    )
}
