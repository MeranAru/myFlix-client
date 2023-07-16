import React, { useEffect, useState } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserInfo from "./user-info";
import FavoriteMovies from "./favorite-movies";
import UpdateUser from "./update-user";
import "./profile-view.scss";

export function ProfileView({ movies, onUpdatedUserInfo }) {
    const [ user, setUser ] = useState({
        Username: "",
        Email: "",
        FavoriteMovies:[],
    });
    const favoriteMovieList = movies.filter((movies) => {
        return user.FavoriteMovies.includes(movies._id);
    });

    useEffect(() => {
        let isMounted = true;
        isMounted && getUser();
        return () => {
            isMounted = false;
        }
    }, [])

    return (
        <Container>
            <Row>
                <Col xs={12} sm={4}>
                    <Card>
                        <Card.Body>
                            <UserInfo name={user.Username} email={user.Email} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={8}>
                    <Card>
                        <Card.Body>
                            <UpdateUser user={user} setUser={setUser} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <FavoriteMovies favoriteMovieList={favoriteMovieList} />
        </Container>
    )
}