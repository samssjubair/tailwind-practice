import React from 'react';
import imageOne from '../Images/egg.jpg'
import imageTwo from '../Images/egg-2.jpg'

const Content = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
                <img src={imageOne} alt="egg" className="h-full rounded mb-20 shadow"/>
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-2">Egg Muffins</h2>
                    <p className="mb-2">Crispy, Delicious, Nutritious</p>
                    <span>$16</span>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
                <img src={imageTwo} alt="egg" className="h-full rounded mb-20 shadow"/>
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-2">Egg Salad</h2>
                    <p className="mb-2">Crispy, Delicious, Nutritious</p>
                    <span>$12</span>
                </div>
            </div>

        </>
    );
};

export default Content;