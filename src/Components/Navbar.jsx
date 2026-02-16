const Navbar = ({ setLoggedIn }) => (
  <div className="bg-blue-600 text-white p-4 flex justify-between">
    <h1 className="font-bold">Job Portal</h1>
    <button onClick={() => setLoggedIn(false)}>Logout</button>
  </div>
)
export default Navbar
