import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation
import image1 from '../images/siliconehighdensity.jpg';
import image2 from '../images/usableimage.jpg';
import image3 from '../images/flatsilicone.jpg';
import image4 from '../images/siliconemolding.jpg';

const TransferOptions = () => {
    const options = [
        {
            image: image1,
            label: '3D SILICONE HIGH DENSITY TRANSFER',
            link: '/3d-high-density',
        },
        {
            image: image2,
            label: '3D SILICONE PATCH LOGO',
            link: '/3d-patch-logo',
        },
        {
            image: image3,
            label: 'FLAT SILICONE TRANSFER',
            link: '/flat-silicone',
        },
        {
            image: image4,
            label: 'SILICONE INJECTION MOLDING',
            link: '/silicone-injection-molding',
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            {options.map((option, index) => (
                <Link to={option.link} key={index} className="block mb-6">
                    <div className="flex flex-col md:flex-row items-center border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:shadow-md hover:scale-105">
                        {/* Image */}
                        <div className="w-full md:w-2/3 h-48 bg-cover bg-center" style={{ backgroundImage: `url(${option.image})` }}></div>

                        {/* Label */}
                        <div className="w-full md:w-1/3 p-4 flex items-center justify-center bg-white">
                            <h3 className="text-lg md:text-xl font-semibold text-center md:text-right transition-colors hover:text-blue-600">
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
