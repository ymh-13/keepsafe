import "../styles/Navbar.css";
function Navbar() {
    return (
        <nav className="nav">
            <div className="logo">📔Keepsake</div>
            <ul className="menu">
                <li>Journal</li>
                <li>Calendar</li>
                <li>Groups</li>
                <li>Memories</li>
            </ul>
            <div className="profile">Profile</div>
        </nav>
    );
}
export default Navbar;