import React from "react";
import Spline from "@splinetool/react-spline";
import '../../App.css'
const AnimateFallModel = () => {
    return (
        <div className="absolute flex items-end">
            <Spline scene="https://prod.spline.design/POLDvVULDX5dVid6/scene.splinecode"/>
            <div className="bg-black w-[150px] h-[50px] relative ml-[-160px] mb-[15px] rounded-[20px] flex justify-center items-center cursor-pointer">
                <span className="text-white">Тык</span>
            </div>
        </div>
    )
}

export default AnimateFallModel