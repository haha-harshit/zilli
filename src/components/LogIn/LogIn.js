
const LogIn = (props) => {
  return (
    <>
    <button className="log-in" onClick={() => props.setIsLogin(true)}>Log in</button>
    </>
  );
};

export default LogIn;
