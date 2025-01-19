// components/SkeletonLoader.js
const SkeletonLoader = () => {
    return (
        <div className="loader-cards py-3 flex items-center gap-10 overflow-x-scroll">
            {Array(5).fill("").map((_, index) => (
                <div key={index} className="loader-card bg-slate-300 rounded-md w-56 h-64 animate-pulse">
                    <div className="loader-image w-full h-40 bg-gray-200 rounded-t-md"></div>
                    <div className="loader-info p-2">
                        <div className="loader-title bg-gray-200 h-6 rounded-md mb-2"></div>
                        <div className="loader-price bg-gray-200 h-4 w-16 rounded-md mb-2"></div>
                        <div className="loader-rating mt-1 flex items-center gap-5">
                            <div className="loader-star bg-gray-200 h-4 w-4 rounded-full"></div>
                            <div className="loader-star bg-gray-200 h-4 w-4 rounded-full"></div>
                            <div className="loader-star bg-gray-200 h-4 w-4 rounded-full"></div>
                            <div className="loader-star bg-gray-200 h-4 w-4 rounded-full"></div>
                            <div className="loader-star bg-gray-200 h-4 w-4 rounded-full"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkeletonLoader;
