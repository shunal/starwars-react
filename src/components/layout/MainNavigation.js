import {Link} from 'react-router-dom'
import classes from './MainNavigation.module.css';
function MainNavigation() {
    return <header className={classes.header}>
        <div className={classes.logo}>Steven Hunal</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Resume</Link>
                </li>
                <li>
                    <Link to='/people'>People</Link>
                </li>
                <li>
                    <Link to='/planets'>Planets</Link>
                </li>
                <li>
                    <Link to='/spaceships'>Planets</Link>
                </li>
                <li>
                    <Link to='/species'>Planets</Link>
                </li>
            </ul>
        </nav>
    </header>
}
export default MainNavigation;