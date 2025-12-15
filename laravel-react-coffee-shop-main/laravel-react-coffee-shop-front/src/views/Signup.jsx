import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useStateContext } from "../contexts/ContextProviders";
import axiosClient from "../axios-client";

export default function Signup() {
    const { setUser, setToken } = useStateContext();
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [errors, setErrors] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = (ev) => {
        ev.preventDefault();
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmRef.current.value,
        }
        console.log(payload);
        setIsLoading(true);
        axiosClient.post('/signup', payload)
            .then(({ data }) => {
                setUser(data.user)
                setToken(data.token)
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    setErrors(response.data.errors);
                }
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    return (
        <div className="auth-form-wrapper fadeInDown">
            <div className="auth-welcome">
                <h1 className="auth-title">Создайте аккаунт</h1>
                <p className="auth-subtitle">Присоединяйтесь к CoffeLove</p>
            </div>
            {errors && <div className="alert">
                {Object.keys(errors).map(key => (
                    <p key={key}>{errors[key][0]}</p>
                ))}
            </div>}
            <form onSubmit={onSubmit}>
                <div className="input-group">
                    <div className="input-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                    <input ref={nameRef} type="text" placeholder="Имя" required />
                </div>
                <div className="input-group">
                    <div className="input-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                    </div>
                    <input ref={emailRef} type="email" placeholder="E-mail" required />
                </div>
                <div className="input-group">
                    <div className="input-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                    </div>
                    <input ref={passwordRef} type="password" placeholder="Пароль" required />
                </div>
                <div className="input-group">
                    <div className="input-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                    </div>
                    <input ref={passwordConfirmRef} type="password" placeholder="Подтверждение пароля" required />
                </div>
                <button className="btn btn-block btn-primary" disabled={isLoading}>
                    {isLoading ? (
                        <>
                            <span className="btn-spinner"></span>
                            Регистрация...
                        </>
                    ) : 'Зарегистрироваться'}
                </button>
                <p className="message">
                    Уже есть аккаунт? <Link to="/auth/login">Войти</Link>
                </p>
            </form>
        </div>
    )
}