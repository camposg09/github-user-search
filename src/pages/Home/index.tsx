import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../core/components/Button';
import './styles.css'

const Home = () => (
    <div className="row-home">
        <div className="column-home">
            <h1 className="font-weight-700">Desafio do Capítulo 3,<br />Bootcamp DevSuperior</h1>
            <div className="description">
                <p>
                    Bem-vindos ao desafio do capítulo 3 do Bootcamp
                    DevSuperior.
                </p>
                <p>
                    Favor observar as instruções passadas no capítulo
                    sobre a elaboração<br /> deste projeto.
                </p>
                <p>
                    Este design foi adaptado a partir de Ant Design
                    System for Figma, de <br />
                    Mateusz Wierzbicki: <a className="mail-to" href="mailto:antforfigma@gmail.com">antforfigma@gmail.com</a>
                </p>
            </div>
            <Link to="/search" className="btn-link">
                <Button text="começar" />
            </Link>
        </div >
        <div className="column-home"></div>
    </div >
);

export default Home;