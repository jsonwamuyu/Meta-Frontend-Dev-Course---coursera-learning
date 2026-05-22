import { useState } from "react";

export default function LittleLemonGift() {
  const [giftCard, setGiftCard] = useState({
    firstName: "Jennifer",
    lastName: "Smith",
    text: "Free dinner for 4 guests",
    valid: true,
    instructions: "To use your coupon, click the button below.",
  });

  function spendGiftCard() {
    setGiftCard((prevState) => {
      return {
        ...prevState,
        text: "Your coupon has been used",
        valid: false,
        instructions: "Please visit our restaurant to renew your gift card,",
      };
    });
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>Gift Card Page</h1>
      <h3>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h3>
      <h5>{giftCard.text}</h5>
      <p className={`${!giftCard.valid} ? text-indigo-300 pb-4 : text-black`}>
        {giftCard.instructions}
      </p>
      {giftCard.valid && (
        <button onClick={spendGiftCard}>Spend Gift Card</button>
      )}
    </div>
  );
}