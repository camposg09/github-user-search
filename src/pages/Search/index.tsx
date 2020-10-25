import React, { useState } from 'react';
import Button from '../../core/components/Button';
import Result from './components/Result';
import './styles.css';

const Search = () => {
    const [userName, setUserName] = useState('');
    const [showResult, setShowResult] = useState(false);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
        setShowResult(false);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(userName);
        setShowResult(true);
    }

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <div className="top-container row">
                    <div className="search-card">
                        <h1 className="search-title font-weight-500">
                            Encontre um perfil Github
                        </h1>
                        <input
                            type="text"
                            value={userName}
                            name="search"
                            className="search-field"
                            onChange={handleOnChange}
                            placeholder="Usuário Github"
                        />
                        <Button text="encontrar" />
                    </div>
                </div>
            </form>
            <div className="bottom-container row">
                {showResult ? <Result userName={userName} /> : null}
            </div>
        </div>
    );
}

export default Search;