const Semantics = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h1>Welcome to Semantics Component</h1>
          <p>This is a sample paragraph inside the Semantics component.</p>
          <article>
            <h1>Understanding Semantics in HTML</h1>
            <p>
              Semantics in HTML refers to the meaning and structure of the
              content. Using semantic elements helps improve accessibility and
              SEO.
            </p>
          </article>
          <form action="">
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Username" />
            <button>Login</button>
          </form>
        </section>
      </main>
      <footer>
        <p>© 2024 Semantics Component. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Semantics;
