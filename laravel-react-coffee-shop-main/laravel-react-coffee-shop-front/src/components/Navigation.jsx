import { Link, useLocation } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProviders";
import axiosClient from "../axios-client.js";

export default function Navigation({ orientation = "vertical" }) {
    const { setUser, setToken, token, user } = useStateContext();
    const location = useLocation();

    const onLogout = (ev) => {
        ev.preventDefault()
        axiosClient.post('/logout')
            .then(() => {
                setUser({})
                setToken(null)
            })
    }

    return (
        <nav className={`navigation navigation-${orientation}`}>
            <Link
                to="/user"
                className={`nav-link ${location.pathname.startsWith('/user') ? 'active' : ''}`}
            >
                {user?.name || 'Профиль'}
            </Link>
            <Link
                to="/"
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
                Меню
            </Link>
            {
                !token ?
                    <Link
                        to="/auth/login"
                        className="nav-link">
                        Вход
                    </Link>
                    :
                    <a
                        href="#"
                        className="nav-link"
                        onClick={(ev) => onLogout(ev)}>
                        Выход
                    </a>
            }
        </nav>
    )
}
