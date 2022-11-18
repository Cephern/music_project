const Navbar = () => {
  return (
    <nav>
      <img className="logo" src="" alt="Avatar" />

      <div className="lists">
        <ul className="profile_list">
          <li>My Profile</li>
          <li>My Playlists</li>
        </ul>

        <ul className="game_list">
          <li>New Game</li>
          <li>Previous Games</li>
        </ul>
      </div>

      <button className="logout">Logout</button>
    </nav>
  );
};

export default Navbar;
