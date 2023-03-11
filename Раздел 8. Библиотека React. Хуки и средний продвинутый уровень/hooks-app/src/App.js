import {useEffect, useState, useCallback} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

// const getSomeImages = () => {
//     console.log('fetching');
//     return [
//         "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg",
//         "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg"
//     ]
// }

const Slider = (props) => {

    const [slide, setSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(false);

    useEffect(() => {
        document.title = `Slide ${slide}`;
    }, [slide]);

    useEffect(() => {
        console.log('Autoplay');
    }, [autoplay]);

    const getSomeImages = useCallback(() => {
        console.log('fetching');
        return [
            "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg",
            "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg"
        ]
    }, [slide]);

    function changeSlide(i) {
        setSlide(slide => slide + i);
    }

    function toggleAutoplay() {
        setAutoplay(!autoplay);
    }

    return (
        <Container>
            <div className="slider w-50 m-auto">
                {/* {
                    getSomeImages().map((url, i) => {
                        return (
                            <img key={i} className="d-block w-100" src={url} alt="slide" />
                        )
                    })
                } */}

                <Slide getSomeImages={getSomeImages}/>
                
                <div className="text-center mt-5">Active slide {slide} <br/> 
                    {autoplay ? 'auto' : null}
                </div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}

const Slide = ({getSomeImages}) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(getSomeImages())
    }, [getSomeImages]);

    return (
        <>
            {images.map((url, i) => <img key={i} className="d-block w-100" src={url} alt="slide" />)}
        </>
    )
}

function App() {
  return (
        <Slider/>
  );
}

export default App;
