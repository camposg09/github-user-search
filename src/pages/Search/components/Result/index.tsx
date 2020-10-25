import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GitHubUser } from 'core/types/GitHubUser';
import './styles.css'
import Button from 'core/components/Button';
import { ErrorResponse } from 'core/types/ErrorObj';
import ImageLoader from '../Loaders/ImageLoader';
import InfoLoader from '../Loaders/InfoLoader';
import dayjs from 'dayjs';

type Props = {
    userName: string;
}

const Result = ({ userName }: Props) => {
    const [userData, setUserData] = useState<GitHubUser>();
    const [errorObj, setErrorObj] = useState<ErrorResponse>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios(`https://api.github.com/users/${userName}`)
            .then(response => setUserData(response.data))
            .catch(error => setErrorObj(error.response))
            .finally(() => {
                setIsLoading(false);
            });
    }, [userName]);

    return (
        <div className="result-card">
            <div className="result-col-1">
                {isLoading ? <ImageLoader /> : (
                    <>
                        {userData ? (
                            <>
                                <img src={userData?.avatar_url} alt="avatar" className="user-avatar" />
                                <a href={`https://github.com/${userName}`} target="_blank" rel="noopener noreferrer" className="btn-link">
                                    <Button text="ver perfil" />
                                </a>
                            </>
                        ) : (
                                <img
                                    src="https://forum.netgate.com/assets/uploads/profile/31786-profileavatar.png"
                                    alt="avatar"
                                    className="user-avatar"
                                />
                            )}

                    </>
                )}
            </div>
            <div className="result-col-2">
                {isLoading ? <InfoLoader /> : (
                    <>
                        {userData ? (
                            <>
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
                                            <div className="list-data">
                                                {dayjs(userData?.created_at).format("DD/MM/YYYY")}
                                            </div>

                                        </li>
                                    </ul>
                                </div>
                            </>
                        ) : (
                                <div className="error-container">
                                    <h1
                                        className="error-message">
                                        We're sorry but your request returned a&nbsp;
                                        {errorObj?.status} error:&nbsp;{errorObj?.statusText}.<br />
                                        Please verify if the user name you typed is correct.
                                    </h1>
                                </div>
                            )}
                    </>
                )}
            </div>
        </div >
    );
}

export default Result;