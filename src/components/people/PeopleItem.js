import Card from "../ui/Card";
import classes from './PeopleItem.module.css';
function PeopleItem(props) {
    return <li className={classes.item}>
        <Card>
            <div className={classes.image}>
                <h3 align="center">{props.name}</h3>
                <img src={props.image} alt={props.name}></img>
            </div>
        </Card>
    </li> 
}

export default PeopleItem;
