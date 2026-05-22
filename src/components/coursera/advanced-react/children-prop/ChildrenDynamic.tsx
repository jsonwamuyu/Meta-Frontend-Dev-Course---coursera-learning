function RadioGroup({ children }) {
  return <div>{children}</div>;
}

function RadioOption({ children }) {
  return <input type="radio" />;
}

const ChildrenDynamic = () => {
  return (
    <section>
      <div>
        <h4>Mutating children prop dynamically in JSX</h4>
        <p>Using React.Children.map and React.cloneElement APIs</p>
      </div>
      <div>
        <h3>How did you hear about Little Lemon?</h3>

        <button>Submit</button>
      </div>
    </section>
  );
};

export default ChildrenDynamic;
