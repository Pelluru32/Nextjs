import Card from '../ui/Card';
import classes from './MeetupDetails.module.css';

const MeetupDetails = (props) => {
  return <Card>
        <div className={classes.image}>
          <img src={props.meetup.image} alt={props.meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.meetup.title}</h3>
          <address>{props.meetup.address}</address>
        </div>
        <div className={classes.content}>
          <p>{props.meetup.description}</p>
        </div>
      </Card>

  
}

export default MeetupDetails
