import { useEffect, useState } from "react";
import axiosClient from "../axios-client";

export default function CoffeeMenu() {
    const [coffees, setCoffees] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getCoffee();
    }, []);

    const getCoffee = () => {
        setLoading(true);
        axiosClient.get('/coffees')
            .then(({ data }) => {
                setLoading(false);
                setCoffees(data.data);
            })
            .catch(() => {
                setLoading(false);
            });
    }

    return (
        <div className="coffee-menu-container">
            <div className="menu-header">
                <h1 className="page-title">Наше Меню</h1>
                <p className="page-subtitle">Откройте для себя идеальный кофейный опыт</p>
            </div>

            {loading && (
                <div className="loading-container">
                    <div className="spinner"></div>
                    <p>Загружаем лучшие сорта...</p>
                </div>
            )}

            {!loading && (
                <div className="products-grid">
                    {coffees.map(coffee => (
                        <div key={coffee.id} className="product-card">
                            <div className="product-image-container">
                                {coffee.image ? (
                                    <img src={coffee.image} alt={coffee.name} className="product-image" />
                                ) : (
                                    <div className="product-placeholder">
                                        <span className="coffee-icon">☕</span>
                                    </div>
                                )}
                                <div className="product-overlay"></div>
                                <span className="product-badge">Premium</span>
                            </div>

                            <div className="product-content">
                                <div className="product-header">
                                    <h3 className="product-name">{coffee.name}</h3>
                                    <span className="product-price">{coffee.price} ₽</span>
                                </div>

                                <p className="product-description">
                                    {coffee.description || "Насыщенный вкус и незабываемый аромат свежеобжаренных зерен."}
                                </p>

                                <div className="product-actions">
                                    <button className="btn btn-sm btn-outline">Подробнее</button>
                                    <button className="btn btn-sm btn-primary">В корзину</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div >
    );
}