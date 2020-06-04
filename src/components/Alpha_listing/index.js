import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
//<li><ScrollLink to="core" smooth={true} duration={1200}>Maaia</ScrollLink></li>
export default function Alpha_listing() {

    return (
        <div className="container">
            <ul className="alpha_listing">
                <li><ScrollLink to="A" smooth={true} duration={1200}>A</ScrollLink></li>
                <li><ScrollLink to="B" smooth={true} duration={1200}>B</ScrollLink></li>
                <li><ScrollLink to="D" smooth={true} duration={1200}>D</ScrollLink></li>
                <li><ScrollLink to="E" smooth={true} duration={1200}>E</ScrollLink></li>
                <li><ScrollLink to="F" smooth={true} duration={1200}>F</ScrollLink></li>
                <li><ScrollLink to="G" smooth={true} duration={1200}>G</ScrollLink></li>
                <li><ScrollLink to="H" smooth={true} duration={1200}>H</ScrollLink></li>
                <li><ScrollLink to="I" smooth={true} duration={1200}>I</ScrollLink></li>
                <li><ScrollLink to="J" smooth={true} duration={1200}>J</ScrollLink></li>
                <li><ScrollLink to="K" smooth={true} duration={1200}>K</ScrollLink></li>
                <li><ScrollLink to="L" smooth={true} duration={1200}>L</ScrollLink></li>
                <li><ScrollLink to="M" smooth={true} duration={1200}>M</ScrollLink></li>
                <li><ScrollLink to="N" smooth={true} duration={1200}>N</ScrollLink></li>
                <li><ScrollLink to="O" smooth={true} duration={1200}>O</ScrollLink></li>
                <li><ScrollLink to="P" smooth={true} duration={1200}>P</ScrollLink></li>
                <li><ScrollLink to="R" smooth={true} duration={1200}>R</ScrollLink></li>
                <li><ScrollLink to="S" smooth={true} duration={1200}>S</ScrollLink></li>
                <li><ScrollLink to="Ś" smooth={true} duration={1200}>Ś</ScrollLink></li>
                <li><ScrollLink to="T" smooth={true} duration={1200}>T</ScrollLink></li>
                <li><ScrollLink to="U" smooth={true} duration={1200}>U</ScrollLink></li>
                <li><ScrollLink to="V" smooth={true} duration={1200}>V</ScrollLink></li>
                <li><ScrollLink to="W" smooth={true} duration={1200}>W</ScrollLink></li>
                <li><ScrollLink to="Z" smooth={true} duration={1200}>Inne</ScrollLink></li>
            </ul>
        </div>
    )
}