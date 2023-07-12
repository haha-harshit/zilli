const LogOut = (props) => {
    return (
    <>
    <button className="log-out" onClick={() => props.setIsLogin(false)}>Log out</button>
    </>
    )
}

export default LogOut