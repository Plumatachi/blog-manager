import './Layout.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <p>© {currentYear} Blog Manager - Manage your articles with ease</p>
            </div>
        </footer>
    );
};

export default Footer;