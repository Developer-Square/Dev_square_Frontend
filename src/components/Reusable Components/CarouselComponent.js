import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function CarouselComponent({packageType}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <img
            className="d-block w-100"
            // Choosing which image to display depending on the props
            src={`images/pricing-images/${packageType === 'basic' ? 'Business-basic-1' : packageType === 'classic' ? 'Bakery-classic-1': 'Interior Design2'}.webp`}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            // Choosing which image to display depending on the props
            src={`images/pricing-images/${packageType === 'basic' ? 'Business-basic-2' : packageType === 'classic' ? 'Bakery-classic-2': 'Interior Design1'}.webp`}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            // Choosing which image to display depending on the props
            src={`images/pricing-images/${packageType === 'basic' ? 'Business-basic-3' : packageType === 'classic' ? 'Bakery-classic-3': 'Interior Design3'}.webp`}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            // Choosing which image to display depending on the props
            src={`images/pricing-images/${packageType === 'basic' ? 'Business-basic-4' : packageType === 'classic' ? 'Bakery-classic-4': 'Wedding-planner-unique1'}.webp`}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            // Choosing which image to display depending on the props
            src={`images/pricing-images/${packageType === 'basic' ? 'Law-Basic-1' : packageType === 'classic' ? 'Bakery-classic2-1': 'Wedding-planner-unique2'}.webp`}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            // Choosing which image to display depending on the props
            src={`images/pricing-images/${packageType === 'basic' ? 'Law-Basic-2' : packageType === 'classic' ? 'Bakery-classic2-2': 'Wedding-planner-unique3'}.webp`}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            // Choosing which image to display depending on the props
            src={`images/pricing-images/${packageType === 'basic' ? 'Law-Basic-3' : packageType === 'classic' ? 'Bakery-classic2-3': 'Wedding-planner-unique4'}.webp`}
            alt="First slide"
            />
        </Carousel.Item>
    </Carousel>
  );
}