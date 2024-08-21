import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation
import image1 from '../images/offsetpaper.jpeg';
import image2 from '../images/offsetantimigration.jpg';
import image3 from '../images/offsetreflective.jpeg';
import image4 from '../images/offsetglitter.jpeg';
import image5 from '../images/offsetmetallic.jpg';

const TransferOptions = () => {
    const options = [
        {
            image: image1,
            label: 'OFFSET ON PAPER',
            link: '/offset-paper',
        },
        {
            image: image2,
            label: 'OFFSET ANTI-MIGRATION',
            link: '/offset-anti-migration',
        },
        {
            image: image3,
            label: 'OFFSET REFLECTIVE',
            link: '/offset-reflective',
        },
        {
            image: image4,
            label: 'OFFSET GLITTER',
            link: '/offset-glitter',
        },
        {
            image: image5,
            label: 'OFFSET METALLIC/PEARL',
            link: '/offset-metallic-pearl',
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
