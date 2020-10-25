import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GitHubUser } from '../../../../core/types/GitHubUser';
import './styles.css'
import Button from '../../../../core/components/Button';
import { Link } from 'react-router-dom';

type Props = {
    userName: string;
}

const Result = ({ userName }: Props) => {
    const [userData, setUserData] = useState<GitHubUser>();

    console.log(userData);

    useEffect(() => {
        axios(`https://api.github.com/users/${userName}`)
            .then(response => setUserData(response.data));
    }, [userName]);

    return (
        <div className="result-card">
            <div className="result-col-1">
                <img src={userData?.avatar_url} alt="avatar" className="user-avatar" />
                <a href={`https://github.com/${userName}`} target="_blank" rel="noopener noreferrer" className="btn-link">
                    <Button text="ver perfil" />
                </a>
            </div>
            <div className="result-col-2">
                <div className="info-bar-container">
                    <ul className="info-bar">
                        <li className="info-bar-item">
                            repositórios públicos: {userData?.public_repos}
                        </li>
                        <li className="info-bar-item">
                            seguidores: {userData?.followers}
                        </li>
                        <li className="info-bar-item">
                            seguindo: {userData?.following}
                        </li>
                    </ul>
                </div>
                <div className="info-card">
                    <h3 className="info-card-title font-weight-500">informações</h3>
                    <ul className="info-card-list">
                        <li className="info-card-item">
                            <div className="list-label">Empresa:</div>
                            <div className="list-data">{userData?.company}</div>
                        </li>
                        <li className="info-card-item">
                            <div className="list-label">Website/Blog:</div>
                            <div className="list-data">{userData?.blog}</div>
                        </li>
                        <li className="info-card-item">
                            <div className="list-label">Localidade:</div>
                            <div className="list-data">{userData?.location}</div>
                        </li>
                        <li className="info-card-item">
                            <div className="list-label">Membro desde:</div>
                            <div className="list-data">{userData?.created_at}</div>

                        </li>
                    </ul>
                </div>
            </div>
        </div >
    );
}

export default Result;