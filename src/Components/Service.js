import React from 'react';
import saveMoney from '../Assets/save-money.png'
import fabric from '../Assets/textile.png'
import bestWork from '../Assets/tailor-scissor.png'
import tailor from '../Assets/tailor.png'
import modal from '../Assets/metromodal1.png'

const ServicesSection = () => {
    return (
        <section className="bg-black text-white py-24 px-8">
            <div className="max-w-full mx-auto grid grid-cols-2 lg:grid-cols-2 gap-12">
                {/*  Left Column  */}
                <div className="relative ">
                    <img
                        src={modal}
                        alt="Tailoring Service"
                        className="w-[400px] h-[600px] object-fill absolute rounded-md left-[18%] transform " data-aos="fade-up" loading='lazy'
                    />
                </div>
                {/* Right Column */}
                <div className="space-y-6">
                    <h2 className="text-red-500 font-bold uppercase text-[40px]">Our Services</h2>
                    <h1 className="text-4xl font-bold">We Know The Best For You</h1>
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    <p className="text-lg">
                        Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                    </p>
                    <button className="bg-[#FFAF00] text-black px-6 py-2 rounded-full hover:bg-[#dd9e16] duration-300">
                        More Services
                    </button>

                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {/* Service Card 1 */}
                        <div className="flex flex-col items-start space-x-4">
                            <div className="bg-white rounded-full p-3 ml-3 mb-3" >
                                <img
                                    src={saveMoney}
                                    alt="Tailoring Service"
                                    className="w-10 h-10 text-red-700 " data-aos="fade-left"
                                    data-aos-duration="500" loading='lazy'
                                    
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Best Price</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</p>
                            </div>
                        </div>

                        {/* Service Card 2 */}
                        <div className="flex flex-col items-start space-x-4">
                            <div className="bg-white rounded-full p-3 ml-3 mb-3">
                                <img
                                    src={bestWork}
                                    alt="Tailoring Service"
                                    className="w-10 h-10 text-red-700 "  data-aos="fade-left"
                                    data-aos-duration="500" loading='lazy'
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Finest Work</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</p>
                            </div>
                        </div>

                        {/* Service Card 3 */}
                        <div className="flex flex-col items-start space-x-4">
                            <div className="bg-white rounded-full p-3 ml-3 mb-3">
                                <img
                                    src={fabric}
                                    alt="Tailoring Service"
                                    className="w-10 h-10 text-red-700 "  data-aos="fade-left"
                                    data-aos-duration="500" loading='lazy'
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Best Fabric</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</p>
                            </div>
                        </div>

                        {/* Service Card 4 */}
                        <div className="flex flex-col items-start space-x-4">
                            <div className="bg-white rounded-full p-3 ml-3 mb-3">
                                <img
                                    src={tailor}
                                    alt="Tailoring Service"
                                    className="w-10 h-10 text-red-700 " data-aos="fade-left"
                                    data-aos-duration="500" loading='lazy'
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Best Tailors</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ServicesSection;
