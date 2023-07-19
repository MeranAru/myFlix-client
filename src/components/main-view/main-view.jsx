import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { ProfileView } from "../profile-view/profile-view";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./main-view.scss";

export const MainView = () => {
    const [movies, setMovies] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("https://movie-api-meran.herokuapp.com/movies")
            .then((response) => response.json())
            .then((data) => {
                const moviesFromApi = data.map((doc) => {
                    return {
                        id: doc._id,
                        title: doc.Title,
                        description: doc.Description,
                        genre: doc.Genre.Name,
                        director: doc.Director.Name
                    };
                });
                
                setMovies(moviesFromApi);
                console.log("movies from api", data);
                });
            }, []);

        return (
            <BrowserRouter>
                <NavigationBar
                    user={user}
                    onLoggedOut={() => {
                    setUser(null);
                    }}
                />
                <Row className="justify-content-md-center">
                    <Routes>
                        <Route
                            path="/signup"
                            element= {
                                <>
                                    {user ? (
                                        <Navigate to="/" />
                                    ) : (
                                        <Col md={5}>
                                            <SignupView />
                                        </Col>
                                    )}
                                </>
                            }
                        />

                        <Route
                            path="/profile"
                            element={
                            <>
                                {!user ? (
                                <Navigate to="/login" replace />
                                ) : (
                                <Col>
                                    <ProfileView
                                    user={user}
                                    token={token}
                                    setUser={setUser}
                                    movies={movies}
                                    onLogout={onLogout}
                                    />
                                </Col>
                                )}
                            </>
                            }
                        />

                        <Route 
                            path="/login"
                            element= {
                                <>
                                    {user ? (
                                        <Navigate to="/" />
                                    ) : (
                                        <Col md={5}>
                                            <LoginView onLoggedIn={(user, token) => {
                                                setUser(user);
                                                setToken(token);
                                            }} />
                                        </Col>
                                    )}
                                </>
                            }
                        />

                        <Route 
                            path="./movies/:movieId"
                            element= {
                                <>
                                    {!user ? (
                                        <Navigate to="/login" replace />
                                    ) : movies.length === 0 ? (
                                        <Col>The list is empty!</Col>
                                    ) : (
                                        <Col md={8}>
                                            <MovieView movies={movies} />
                                        </Col>
                                    )}
                                </>
                            }
                        />

                        <Route 
                            path="/"
                            element={
                                <>
                                    {!user ? (
                                        <Navigate to="/login" replace />
                                    ): movies.length === 0 ? (
                                        <Col>The list is empty!</Col>
                                        ) : (
                                            <>
                                                {movies.map((movie) => (
                                                <Col className="mb-4" key={movie.id} md={3}>
                                                    <MovieCard movie={movie} />
                                                </Col>
                                            ))}
                                        </>
                                    )}
                                </>
                            }
                        />
                    </Routes>
                </Row>
            </BrowserRouter>
        );
    };