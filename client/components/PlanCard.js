import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});
const PlansCard = ({plan}) => {

   const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={plan.title}
            height="50"
            className="img-fluid"
            image={plan.image}
            title={plan.title}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className="font-weight-semibold"
              style={{ color: '#022b69' }}
            >
              {plan.title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className="font-weight-semibold"
              style={{ color: '#436290' }}
            >
              {plan.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            className="button button-border button-rounded button-blue"
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default PlansCard;
