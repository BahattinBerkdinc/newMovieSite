
import { useContext, useEffect, useState } from "react"
import "./artist.scss"
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import axios from "axios"
import StoreContext from "../../store"
const Artist = () => {

    const store = useContext(StoreContext)

    const {castId} = useParams()
    console.log(castId , "castId");


    const [artistDetail, setArtistDetail]=useState([])
 
    const fetchMovieDetails = async (castId) => {
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/movie/${castId}`, {
            params: {
              api_key: '0e8368c16fab615ffc56aec01936d0c2',
              append_to_response: 'credits,keywords',
            }
          });
      
          setArtistDetail(response.data.credits.cast);
          
        } catch (error) {
          console.log(error);
          return null;
        }
      };

      
      useEffect(() => {
        window.scrollTo(0, 0);
        fetchMovieDetails(castId);
      }, [castId]);
    

      console.log(artistDetail , "artistDetail");
   

     
      
      
     

  return (
    <div className='artist-bio'>
      <Container>
        <Row>
            <Col>
            <img src="" style={{width:"100%"}} alt="" />
            </Col>
            <Col>
            
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Artist
