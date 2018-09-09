import React, {Component} from 'react';
import ImageSlide from './ImageSlide';
import imgUrls from './imgUrls';
import Navbar from './Navbar';

class Carousel extends Component {
    constructor(){
        super()

        this.state = {
            currentImageIndex: 0,
        }
    }

    componentDidMount(){
        setInterval(this.nextSlide,3000)
    }

    previousSlide = () => {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
    
        this.setState({
          currentImageIndex: index
        });
      }
    
      nextSlide = () => {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
    
        this.setState({
          currentImageIndex: index
        });
      }
    render () {
      return (
        <div>
          <Navbar />
          <div>
            <div className="carousel">
                <h1 id='logo'>HairByAlyse</h1>
                <ImageSlide url={ imgUrls[this.state.currentImageIndex] } />
            </div>
            <div id='overlay'></div>
          </div>
        </div>
      );
    }
}

export default Carousel;