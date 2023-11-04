import React from 'react';



const Education = () => {
    return (
        <section id="education">
        <div className="flex">
            <div className="w-full text-left">
                <h1 className="text-7xl font-extrabold mb-2 pb-10 ">Education</h1>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <img src="/images/banta.png" alt="" className="mb-4 image-size" />
                        <h3 className="text-2xl font-semibold mb-2">Primary School</h3>
                        <p className="text-lg mb-4">bantakim</p>
                    </div>

                    <div>
                        <img src="/images/bsru.png" alt="" className="mb-4 image-size" />
                        <h3 className="text-2xl font-semibold mb-2">Middle School</h3>
                        <p className="text-lg mb-4">The Demonstration School of Bansomdejchaopraya Rajabhat University</p>
                    </div>

                    <div>
                        <img src="/images/bsru.png" alt="" className="mb-4 image-size" />
                        <h3 className="text-2xl font-semibold mb-2">High School</h3>
                        <p className="text-lg mb-4">The Demonstration School of Bansomdejchaopraya Rajabhat University</p>
                    </div>

                    <div>
                        <img src="/images/KMUTT-Logo.png" alt="" className="mb-4 image-size" />
                        <h3 className="text-2xl font-semibold mb-2">University</h3>
                        <p className="text-lg mb-4">King Mongkut's University of Technology Thonburi.</p>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Education;
