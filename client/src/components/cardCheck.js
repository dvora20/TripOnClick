import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import  { useState } from 'react';
import { useEffect } from 'react';
import axios, { all } from "axios";
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: 'auto',
    borderRadius: spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    maxWidth: 500,
    marginLeft: 'auto',
    overflow: 'initial',
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: spacing(2),
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: spacing(2),
    },
  },
  media: {
    width: '88%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: '48%',
    borderRadius: spacing(2),
    backgroundColor: '#fff',
    position: 'relative',
    [breakpoints.up('md')]: {
      width: '100%',
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: 'translateX(-8px)',
    },
    '&:after': {
      content: '" "',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}));

export const BlogCardDemo = React.memo(function BlogCard(props) {
    const [data, setData] = useState(null);
  const [trip, setTrip] = useState(null);
  //const history = useHistory();
  const navigate = useNavigate();
 //const navigation = useNavigation();
 
  const fetchTrip = async (event) => {
      const id=event.target.id;
      console.log(id);
    
      const {data} = await axios.get(`/trips/${id}`);
      console.log(data)
      setTrip(data);
      // navigate('/DayByDay', {state: {data: data}});
     // console.log(day);
  //    setDataT(data);
  //    console.log(dataT);
  }
 

  

  useEffect(()=>{
      if(trip === null){
          return;
      }
      navigate('/DayByDay', {state: {data: trip}});
  },[trip])
 

  const [isClicked, setIsClicked] = useState(false);
  const styles = useStyles();
  const url=props.Url;
  const im=props.Image;
 
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();

  const handleClick = () => {
    setIsClicked(true);
    window.open(url, "_blank");
  }
 if(isClicked) {
    // window.location.href = url;
  }
  
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        id = {props.id}
        className={styles.media}
        image={im}
        
      />
      <CardContent>
        <TextInfoContent
          classes={contentStyles}
          overline={props.Address}
          heading={props.header}
          body={props.body}
          
        />
        <Button className={buttonStyles}>Read more</Button>
      </CardContent>
    </Card>
  );
});

export default BlogCardDemo