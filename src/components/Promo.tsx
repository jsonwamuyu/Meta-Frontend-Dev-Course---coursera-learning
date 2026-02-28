import PromoHeading from "./PromoHeading";

const Promo = () => {
  return (
    <div className="flex items-center justify-center bg-green-100 text-green-500 py-2">
      <PromoHeading
        discount={"20% off all sales!"}
        message="Everything must go"
      />
    </div>
  );
};

export default Promo;
