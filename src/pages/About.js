import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const About = () => {
    return (
        <ScrollToTop>
            <section className="">
                <Header />
                <div className="container mx-auto px-6 lg:px-20 py-12">
                    <h2 className="text-3xl font-bold text-center mb-8">About PrintingAdil</h2>
                    <div className="text-gray-800 text-lg leading-relaxed space-y-6">
                        {/* Company Overview */}
                        <p>
                            Welcome to <span className="font-bold">PrintingAdil</span>! For over five years, we have been at the forefront of the custom transfer printing industry, delivering top-quality solutions to businesses and individuals alike. Our mission is simple: to provide cutting-edge printing technologies paired with unmatched customer service, helping you bring your designs to life.
                        </p>

                        {/* Expertise and Commitment */}
                        <p>
                            At PrintingAdil, we specialize in a wide array of transfer printing methods, including <strong>Direct-to-Film (DTF)</strong>, <strong>Serigraph (Silkscreen)</strong>, and <strong>Silicone Transfers</strong>. We pride ourselves on using the latest technology and materials to ensure that your products are vibrant, durable, and meet the highest standards. From fashion brands to promotional items, we've worked with businesses of all sizes, consistently delivering results that exceed expectations.
                        </p>

                        {/* Our Journey */}
                        <p>
                            Over the last five years, we have honed our skills, expanded our services, and built a reputation as a trusted partner in the printing industry. Our team of experienced designers and technicians work tirelessly to ensure every order is handled with precision and care, no matter how big or small.
                        </p>

                        {/* What Sets Us Apart */}
                        <p>
                            <span className="font-bold">Why choose PrintingAdil?</span> Because we believe in combining creativity with state-of-the-art printing techniques. We don’t just follow trends; we set them. Whether it's a high-quality silicone transfer for sportswear or a unique serigraph print with glitter effects, we bring your ideas to life with unmatched detail and craftsmanship. Every project is an opportunity to push the boundaries of what's possible.
                        </p>

                        {/* Customer Satisfaction */}
                        <p>
                            We understand that customer satisfaction is at the core of any business. That's why at PrintingAdil, we provide full-service support from the initial design phase to final production and delivery. Our dedicated team is here to assist you at every step, ensuring your experience is smooth and stress-free.
                        </p>

                        {/* Looking Ahead */}
                        <p>
                            As we look to the future, we are committed to continuing our growth, staying on top of the latest industry trends, and offering our clients innovative solutions. We are excited to expand our range of printing services, invest in new technologies, and explore new ways to serve our customers better.
                        </p>

                        {/* Closing Statement */}
                        <p className="font-bold text-center">
                            Choose PrintingAdil for quality, innovation, and reliability. Together, let's create something amazing!
                        </p>
                    </div>
                </div>
                <Footer />
            </section>
        </ScrollToTop>
    );
};

export default About;
