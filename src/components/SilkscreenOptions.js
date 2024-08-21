import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation
import image1 from '../images/taffeta.jpg';
import image2 from '../images/holograph.jpg';
import image3 from '../images/foil.jpg';
import image4 from '../images/glitter.jpg';
import image5 from '../images/flock.jpg';
import image6 from '../images/puff.jpg';
import image7 from '../images/glow.jpeg';
import image8 from '../images/showcase1.jpg';

const TransferOptions = () => {
    const options = [
        {
            image: image1,
            label: 'SERIGRAPH FOR TAFFETA FABRIC',
            link: '/serigraph-taffeta',
        },
        {
            image: image8,
            label: 'MULTI-STRETCH',
            link: '/multi-stretch',
        },
        {
            image: image6,
            label: 'PUFFY',
            link: '/puffy',
        },
        {
            image: image3,
            label: 'FOIL',
            link: '/foil',
        },
        {
            image: image4,
            label: 'GLITTER',
            link: '/glitter',
        },
        {
            image: image5,
            label: 'FLOCK MULTICOLOR',
            link: '/flock-multicolor',
        },
        {
            image: image2,
            label: 'REFLECTIVE',
            link: '/reflective',
        },
        {
            image: image7,
            label: 'GLOWING IN THE DARK',
            link: '/glowing-dark',
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8 space-y-6">
            {options.map((option, index) => (
                <Link to={option.link} key={index} className="block">
                    <div className="flex items-center border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:shadow-md hover:scale-105">
                        {/* Image */}
                        <div className="w-2/3 h-32 md:h-48 bg-cover bg-center" style={{ backgroundImage: `url(${option.image})` }}></div>

                        {/* Label */}
                        <div className="w-1/3 p-4 flex items-center justify-center bg-white">
                            <h3 className="text-lg md:text-xl font-semibold text-right transition-colors hover:text-blue-600">
                                {option.label}
                            </h3>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default TransferOptions;
