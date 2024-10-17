/* eslint-disable react/prop-types */
const Card = ({ title, description, imageURL, price }) => {
  return (
    <div className="flex flex-row mt-20 p-10 dark bg-[#0a0b10] ">
      <div
        className="flex flex-col gap-2 p-3 m-2 rounded-3xl shadow-xl 
          bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white/10
          border border-white/20"
      >
        <div className="p-2">
          <img
            src={imageURL}
            alt="course image"
            height={400}
            width={400}
            className="rounded-xl"
          />
        </div>
        <h3 className="text-white/90 text-xl font-semibold px-2">{title}</h3>
        <p className="text-white/70 px-2">{description}</p>
        <p className="font-semibold text-white/90 px-2 text-blue-500 ">{`Rs. ${price}`}</p>
        <button
          className="bg-blue-600 hover:bg-blue-500 transition-colors 
            duration-300 rounded-full p-4 text-white font-medium 
            mx-2"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
