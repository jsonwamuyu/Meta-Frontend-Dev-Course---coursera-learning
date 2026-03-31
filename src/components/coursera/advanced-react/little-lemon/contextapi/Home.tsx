import { UserProvider, useUser } from "./UserContext";

const LoggedInUser = () => {
  const { user } = useUser();

  return (
    <p className="text-sm">
      Hello <span className="font-semibold">{user.username}</span>
    </p>
  );
};
const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <div>Blog Post</div>
      <LoggedInUser />
    </header>
  );
};

function Home() {
  return (
    <UserProvider>
      <section className="my-16">
        <Header />
        <div>
          <h2 className="text-4xl font-bold py-4">Context API</h2>
          <p className="w-full md:w-2xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
            tempora officiis soluta laborum dignissimos ipsam accusantium
            aperiam distinctio esse minima beatae explicabo labore ducimus,
            voluptas nesciunt repellendus ea dicta obcaecati! Debitis numquam
            iure ullam commodi deserunt velit vero sint quod.
          </p>
          <p className="text-sm py-2">
            Written by <span className="font-semibold">Mike</span>
          </p>
        </div>
      </section>
    </UserProvider>
  );
}

export default Home;
