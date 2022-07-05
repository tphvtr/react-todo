import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <header>
            <nav>
                <button>
                    <Link to="/">Main</Link>
                </button>
                <button>
                    <Link to="/about">About</Link>
                </button>
            </nav>
        </header>
        <Outlet />
    </>
  )
};

export default Layout;