import React from 'react'

function Home(props) {
    function uppercase(city) {
        if (city.length > 1) {

            return city[0].toUpperCase() + city.substring(1);
        }
        else {
            return city;
        }

    }
    return (
        <div className="mx-auto p-4  h-screen flex justify-center">
            <div className="flex flex-wrap">
                <div className="w-full px-2">
                    <div className="bg-gray-900 text-white relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm mb-4 w-full bg-white dark:bg-gray-600">
                        <div className="px-6 py-6 relative">
                            <div className="flex mb-4 justify-between items-center">
                                <div>
                                    <h5 className="mb-0 font-medium text-xl">{uppercase(props.city)}</h5>
                                    <h6 className="mb-0">{props.date}</h6>
                                </div>
                                <div className="text-right">
                                    <h3 className="font-bold text-4xl mb-0"><span>{props.element.temp}&deg;</span></h3>
                                </div>
                            </div>
                            <div className="block sm:flex justify-between items-center flex-wrap">
                                <div className="w-full sm:w-1/2">
                                    <div className="flex mb-2 justify-between items-center"><span>Temp</span><small className="px-2 inline-block">{props.element.temp}&nbsp;&deg;</small></div>
                                </div>
                                <div className="w-full sm:w-1/2">
                                    <div className="flex mb-2 justify-between items-center"><span>Feels like</span><small className="px-2 inline-block">{props.element.feels_like}&nbsp;&deg;</small></div>
                                </div>
                                <div className="w-full sm:w-1/2">
                                    <div className="flex mb-2 justify-between items-center"><span>Temp min</span><small className="px-2 inline-block">{props.element.min_temp}&nbsp;&deg;</small></div>
                                </div>
                                <div className="w-full sm:w-1/2">
                                    <div className="flex mb-2 justify-between items-center"><span>Temp max</span><small className="px-2 inline-block">{props.element.max_temp}&nbsp;&deg;</small></div>
                                </div>
                                <div className="w-full sm:w-1/2">
                                    <div className="flex mb-2 justify-between items-center"><span>Humidity</span><small className="px-2 inline-block">{props.element.humidity}&nbsp;</small></div>
                                </div>
                                <div className="w-full sm:w-1/2">
                                    <div className="flex mb-2 justify-between items-center"><span>Wind Speed</span><small className="px-2 inline-block">{props.element.wind_speed}&nbsp;</small></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home