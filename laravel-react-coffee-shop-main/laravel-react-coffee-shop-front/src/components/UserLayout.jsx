import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProviders";
import Sidebar from "./Sidebar";

export default function UserLayout() {
    const { token, user } = useStateContext();

    if (!token) {
        return <Navigate to='/auth/login' />
    }

    return (
        <div id="userLayout" className="user-layout">
            <Sidebar />
            <div className="main-content">
                <header className="user-header">
                    <div className="header-content">
                        <h1 className="header-title">Личный кабинет</h1>
                        <div className="user-info">
                            <span className="user-name">{user?.name || 'Гость'}</span>
                            <div className="user-avatar">
                                <img src={`https://ui-avatars.com/api/?name=${user?.name || 'User'}&background=d4a373&color=fff`} alt="Avatar" />
                            </div>
                        </div>
                    </div>
                </header>
                <main className="content-area">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}