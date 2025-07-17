import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
    return (
        <div className="mt-20">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
                Pricing
            </h2>
            <div className="flex flex-wrap justify-center">
                {pricingOptions.map((item, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-1/2 lg:w-1/3 p-4"
                    >
                        <div
                            //   className={`p-10 border rounded-xl transition duration-300 ${
                            //     item.title === "Pro"
                            //       ? "border-orange-500"
                            //       : "border-neutral-700"
                            //   } hover:shadow-lg`}

                            className={`p-10 border rounded-xl transition duration-300 border-neutral-700
              hover:shadow-lg`}


                        >
                            <p className="text-4xl mb-4 flex items-baseline">
                                {item.title}
                                {item.title === "Pro" && (
                                    <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl ml-2">
                                        (Most Popular)
                                    </span>
                                )}
                            </p>
                            <p className="mb-8">
                                <span className="text-5xl mr-2">{item.price}</span>
                                <span className="text-neutral-400 tracking-tight">/Month</span>
                            </p>
                            <ul>
                                {item.features.map((feature, idx) => (
                                    <li
                                        key={idx}
                                        className="mt-4 flex items-center"
                                    >
                                        <CheckCircle2 className="text-orange-500" />
                                        <span className="ml-2">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="#"
                                className="inline-flex justify-center items-center w-full h-12 p-5 mt-10 text-xl tracking-tight hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
                            >
                                Subscribe
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
