import React from 'react'
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Loading from '../../Loading'
import ArticlePreview from './ArticlePreview'


const styles = theme => ({
  root:{
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit *2
  }
})

const PassedArticles = ({ articles, id, classes }) => {
  if (!articles) {
    return (
      <Loading/>
    );
  }

  if (articles.length === 0) {
    return (
      <Grid container className={classes.root}>
        No articles are here... yet.
      </Grid>
    );
  }

  return (
    <Grid container className={classes.root}>
      {
        articles.map(article => {
          if (article.stat==="accept" && id===article.author.id ) {
            return (
              <ArticlePreview key={article.id} article={article}/>
          );
          } else {
            return null;
          }
        })
      }
    </Grid>
  );
};

export default withStyles(styles)(PassedArticles);