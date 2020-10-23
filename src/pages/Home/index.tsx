import React from 'react';
import Button from '../../core/components/Button';
import './styles.css'

const Home = () => (
    <div className="row">
        <div className="column">
            <h1>Desafio do Capítulo 3,<br />Bootcamp DevSuperior</h1>
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
                    Mateusz Wierzbicki: <a href="mailto:antforfigma@gmail.com">antforfigma@gmail.com</a>
                </p>
            </div>
            <Button text="começar" />
        </div >
        <div className="column"></div>
    </div >
);

export default Home;