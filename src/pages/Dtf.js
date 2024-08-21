import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Showcase from '../components/DtfOptions';
import backgroundImage from '../images/dtfmain.jpg'; // Replace with the path to your background image

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
            <h1 className="text-4xl font-bold text-white">DIRECT TO FILM</h1>
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
              <li className="text-gray-800">DTF</li>
            </ol>
          </div>
        </nav>
        {/* Content Section */}
        <div className="container mx-auto px-4 py-8">

          {/* DTF Transfers Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <p className="text-gray-800">
              <strong>DTF (Direct To Film) Transfers</strong> are the cutting-edge in digital printing, allowing for precise artwork application directly onto transparent film. This innovative method is ideal for small to medium-sized orders, offering unmatched versatility and efficiency for textile supports.
            </p>
            <h2 className="text-xl font-semibold mt-6">Advantages of DTF Transfers:</h2>
            <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-800">
              <li><strong>Unrestricted Creative Freedom</strong>: Reproduce intricate designs, including detailed artwork, images, photos, and logos. DTF transfers allow for both vivid color gradients and solid color blocks, expanding your creative possibilities.</li>
              <li><strong>Clean and Precise Application</strong>: Achieve sharp, clean edges and accurate color placement without unwanted outlines or color overrun, enhancing the visual appeal of your designs.</li>
              <li><strong>Versatility Across Textiles</strong>: Suitable for most traditional textiles, whether light or dark, DTF transfers offer exceptional adaptability.</li>
              <li><strong>Durability and Wash Resistance</strong>: With excellent resistance to washing, DTF transfers maintain their vibrancy and integrity even after multiple machine washes at temperatures up to 60ºC (140°F).</li>
              <li><strong>Quick and Easy Application</strong>: Supplied on a transparent paper backing, these transfers are easy to position and apply, streamlining your production process with a heat press.</li>
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
