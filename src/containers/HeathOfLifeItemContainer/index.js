import React from 'react';
import HeathOfLifeItem from './../../components/UserModule/HealthOfLifeItem';
import { animateScroll as scroll } from "react-scroll";


export default function HeatthOfLifeItemContainer() {
    scroll.scrollTo(0);

    return (
        <HeathOfLifeItem/>
    )
}
