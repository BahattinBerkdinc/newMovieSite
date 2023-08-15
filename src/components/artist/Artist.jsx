import { useEffect, useState } from "react";
import "./artist.scss";
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from "axios";

const Artist = () => {

    const { castId } = useParams();
    console.log(castId, "castId");

    const [artistDetail, setArtistDetail] = useState({});

    const fetchArtistDetails = async (castId) => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/person/${castId}`, {
                params: {
                    api_key: '0e8368c16fab615ffc56aec01936d0c2',
                    append_to_response: 'movie_credits',
                }
            });

            setArtistDetail(response.data);
        } catch (error) {
            console.log(error);
            return null;
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchArtistDetails(castId);
    }, [castId]);

    console.log(artistDetail, "artistDetail");

    return (
        <div className='artist-bio'>
            <Container>
                <Row>
                    <Col md={3}>
                        <img src={`https://image.tmdb.org/t/p/original${artistDetail?.profile_path}`} style={{ width: "100%" }} alt="" />
                    </Col>
                    <Col md={9}>
                        <div className="actor-info">
                        <p className="text-white">Name : <span>{artistDetail?.name}</span></p>
                        <p className="text-white">Place of Birth : <span>{artistDetail?.place_of_birth}</span></p>
                        <p className="text-white">Name : <span>{artistDetail?.biography}</span></p>
                        <div className="other-movies">
                          <Row>
                            {
                              artistDetail?.movie_credits?.cast.splice(0,12).map((cast, index) => (
                                <Col sm={2} key={index} className="gy-4">
                                <img src={`https://image.tmdb.org/t/p/original${cast.poster_path}`} alt="" />
                              </Col> 
                              ))
                            }
                          </Row>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Artist;
