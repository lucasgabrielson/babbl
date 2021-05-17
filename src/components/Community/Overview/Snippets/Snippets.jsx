import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    flexWrap: 'nowrap'
  }
}));
const tileData = [
{
  img: 'images/image1.jpg',
  title: 'title'
},
{
  img: 'images/image2.jpg',
  title: 'title'
},
{
  img: 'images/image3.jpg',
  title: 'title'
}
];
function Snippets() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={'https://static.onecms.io/wp-content/uploads/sites/6/2017/10/sheryl-lee-fire-walk-with-me-2000.jpg'} alt={tile.title} />            
            <GridListTileBar
              title={tile.title}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default Snippets;
