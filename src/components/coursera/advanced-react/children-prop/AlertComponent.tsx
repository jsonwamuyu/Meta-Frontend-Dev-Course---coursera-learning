interface ButtonProps {
  children: React.ReactNode;
  backgroundColor: string;
}

function Button({ children, backgroundColor }: ButtonProps) {
  return;
  <button className={`bg-${backgroundColor}`}>{children}</button>;
}

const Alert = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

// Specialization - a warning alert component that uses the Alert component and the Button component

//Delete button
const DeleteButton = () => {
  return <Button backgroundColor="red-400">Delete Account</Button>;
};

const AlertComponent = () => {
  return (
    <Alert>
      <h4>Delete Account</h4>
      <DeleteButton />
    </Alert>
  );
};
export default AlertComponent;
