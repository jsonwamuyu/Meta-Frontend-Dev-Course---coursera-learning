interface UserProfileData {
  username: string;
  profile_picture: string;
  role: string;
}
const UserProfile = ({ username, profile_picture, role }: UserProfileData) => {
  const addToCart = () => {
    let num = 0;
    console.log("added to cart");
    let results = (num += 1);
    console.log(results);
    return results;
  };
  return (
    <section className="flex items-center gap-2">
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img src={profile_picture} alt={username} />
      </div>
      <div className="flex flex-col gap-0">
        <h4 className="text-lg font-bold mb-0">{username}</h4>
        <p className="text-sm font-light">{role}</p>
      </div>
      {/* // Buttons common event listener */}
      <button onClick={addToCart}>Add to cart</button>
    </section>
  );
};

export default UserProfile;
