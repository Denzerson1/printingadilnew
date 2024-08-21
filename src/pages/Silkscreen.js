import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Showcase from '../components/SilkscreenOptions';
import backgroundImage from '../images/silkscreen.jpg'; // Replace with the path to your background image

const SilkscreenPage = () => {
    return (
        <div>
            <Header />
            <div className="bg-white">
                {/* Hero Section */}
                <div
                    className="relative bg-cover bg-center h-60"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                >
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                        <h1 className="text-4xl font-bold text-white">SERIGRAPH & SILKSCREEN TRANSFERS</h1>
                    </div>
                </div>

                {/* Breadcrumb Navigation */}
                <nav className="bg-gray-100 py-3">
                    <div className="container mx-auto px-4">
                        <ol className="flex text-gray-500 text-sm">
                            <li>
                                <a href="#" className="hover:underline">WELCOME</a>
                            </li>
                            <li className="mx-2">/</li>
                            <li className="text-gray-800">SERIGRAPH & SILKSCREEN TRANSFERS</li>
                        </ol>
                    </div>
                </nav>

                {/* Content Section */}
                <div className="container mx-auto px-4 py-8">
                    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                        <p className="text-gray-800">
                            <strong>Serigraphy</strong> is a printing process that uses a blade to press ink through mesh screens of various gauges.
                            <strong> A silkscreen transfer</strong>, printed onto a specific paper, is a graphic that is applied with a thermal press onto multiple forms of support (textile, non-woven fabrics, cardboard, etc,...).
                        </p>
                        <h2 className="text-xl font-semibold mt-6">Silkscreen transfers have a number of advantages:</h2>
                        <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-800">
                            <li><strong>Quick and easy application</strong>: Branding applied in a few seconds with a thermal press.</li>
                            <li><strong>Durable quality</strong>: Ideal solution for a perfect, long-lasting result. Economically and environmentally advantageous, promoting a favourable long term image.</li>
                            <li><strong>Limitless creativity</strong>: Printing of all sorts of visuals, simple or complex, clean-cut or finely detailed (labels, illustrations, logos, photographic images...), giving free rein to your imagination.</li>
                            <li><strong>Special effects</strong>: Potential to stand-out by incorporating options such as glitter or fluorescent colours, for example.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Showcase />
            <Footer />
        </div>
    );
};

export default SilkscreenPage;
