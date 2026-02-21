import workingImage from "../assets/images/working.png";

const Assets = () => {
  return (
    <div className="w-full bg-white/50">
      <div className="container">
        <h1 className="font-extrabold text-7xl">Available Assets</h1>
        <p>This is a list of all available assets in the system.</p>
        <div className="flex gap-8 md:flex-row">
          <div className="w-full md:w-1/3">
            <h2 className="font-bold text-3xl">Images</h2>
            <p>Working with images</p>
          </div>
          <div className="w-full md:w-1/3"></div>
          <div style={{ width: "80%", margin: "0 auto" }}>
            <img
              style={{ width: "100%", height: "auto", display: "block" }}
              src={workingImage}
              alt="woman working on a laptop"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assets;
