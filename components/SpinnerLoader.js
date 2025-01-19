// components/SpinnerLoader.js
const SpinnerLoader = () => {
    return (
        <div className="flex justify-center items-center w-full h-[500px]">
            <div className="spinner-border animate-spin inline-block w-32 h-32 border-4 border-t-transparent border-blue-500 rounded-full"></div>
        </div>
    );
};

export default SpinnerLoader;
