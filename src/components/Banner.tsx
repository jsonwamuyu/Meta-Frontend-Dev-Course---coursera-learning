const Banner = ({ message }: { message: string }) => {
  return (
    <div className="w-full bg-linear-to-r from-green-400 to-blue-500 text-white py-2">
      <div className="container">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Banner;
