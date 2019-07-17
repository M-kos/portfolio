import ToggleMenu from './_mobile/header_mobile';
import HeaderScroll from './_scrolled/header_scrolled';
import Navigation from './navigation/navigation';

function Header() {

    Navigation();
    ToggleMenu();
    HeaderScroll();
}

export default Header;