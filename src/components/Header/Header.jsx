import Announcement from "../Announcement/Announcement";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";

const Header = () => {
    const announcement = 'Site under construction... Please wait until its completed...'
    return (
        <div>
            <Navbar></Navbar>
            <Announcement announcement={announcement}></Announcement>
            <Hero></Hero>
        </div>
    );
};

export default Header;