import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
export default function Alpha_listing({ allAlphaSeries }) {
    return (
        <div className="container">
            <ul className="alpha_listing">
                {allAlphaSeries.map(series => {
                    return (series.map(alpha => {
                        return <li><ScrollLink to={alpha} smooth={true} duration={1200}>{alpha}</ScrollLink></li>
                    }))
                })}
            </ul>
        </div>
    )
}