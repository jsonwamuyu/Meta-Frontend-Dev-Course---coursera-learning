// import { UserProvider, useUser } from "./UserContext.ts";

// const LoggedInUser = () => {
//   const { user } = useUser();

//   return (
//     <p className="text-sm">
//       Hello <span className="font-semibold">{user.username}</span>
//     </p>
//   );
// };
// const Header = () => {
//   return (
//     <header className="flex justify-between items-center">
//       <div>Blog Post</div>
//       <LoggedInUser />
//     </header>
//   );
// };

// function Home() {
//   return (
//     <UserProvider>
//       <section className="my-16">
//         <Header />
//         <div>
//           <h2 className="text-4xl font-bold py-4">Context API</h2>
//           <p className="w-full md:w-2xl">
//             This will make a good performance today at the gala.
//           </p>
//           <p className="text-sm py-2">
//             Written by <span className="font-semibold">Mike</span>
//           </p>
//         </div>
//       </section>
//     </UserProvider>
//   );
// }

// export default Home;

const Home = () => {
  return <div>Hello there</div>;
};

export default Home;
