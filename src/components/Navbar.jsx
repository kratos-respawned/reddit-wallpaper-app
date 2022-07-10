import NavbarLink from "./NavbarLink";
let Navbar = () => {
  return (
    <nav className="navbar" id="navBar">
      <ul>
        <NavbarLink text="Home" link="/" />
        <NavbarLink text="Wallpapers" link="/walls" />
        <NavbarLink text="Widescreen Wallpapers" link="/widewalls" />
        <NavbarLink text="Phone Wallpapers" link="/phonewalls" />
        <NavbarLink text="Anime" link="/anime" />
        <NavbarLink text="Meme" link="/meme" />
      </ul>
    </nav>
  );
};

export default Navbar;
