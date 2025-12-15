import Navigation from "./Navigation";

export default function Sidebar() {
    return (
        <aside className="premium-sidebar">
            <div className="brand-logo">
                ☕ CoffeLove
            </div>
            <Navigation orientation="vertical" />
        </aside>
    )
}
