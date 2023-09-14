"use client";
import React from "react";
import { postActions } from "@/redux/postsSlice";
import { useAppDispatch, useAppSelector } from "./hooks";
import {
  Box,
  Toolbar,
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Avatar,
  CardHeader,
} from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {
  const dispatch = useAppDispatch();

  const [limit, setLimit] = React.useState(12);

  React.useEffect(() => {
    dispatch(postActions.fetchFeaturedPosts({ limit: 4, skip: 0 }));
    dispatch(postActions.fetchAllCate({}));
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(postActions.fetchAllPosts({ limit: limit, skip: 4 }));
  }, [dispatch, limit]);

  const handleLoadmore = () => {
    setLimit(limit + 12);
  };

  const pages: Array<any> = useAppSelector((state) => state.allCate);
  const featuredPosts: Array<any> = useAppSelector(
    (state) => state.featuredPosts
  );

  const posts: Array<any> = useAppSelector((state) => state.allPosts);

  console.log("featuredPosts", featuredPosts);

  return (
    <main>
      <Box bgcolor={"blue"}>
        <Toolbar disableGutters sx={{ width: "85%", mx: "auto" }}>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.id}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.tenDanhMuc}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Box>
      <Box sx={{ my: 2 }}>
        <Grid container>
          <Grid item xs={9}>
            {featuredPosts.slice(0, 1).map((post, index) => (
              <Card key={index}>
                <CardMedia
                  sx={{ height: "600px" }}
                  image={post.anhDaiDien}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {post.tieuDe}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.ngayTao}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Grid>
          <Grid item xs={3} container direction="column">
            {featuredPosts.slice(1).map((post, index) => (
              <Grid key={index}>
                <Card>
                  <CardMedia
                    sx={{ height: "120px" }}
                    image={post.anhDaiDien}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h8" component="div">
                      {post.tieuDe}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {post.ngayTao}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
      <Box>
        <InfiniteScroll
          dataLength={posts.length} //This is important field to render the next data
          next={handleLoadmore}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          scrollThreshold={0.9}
        >
          <Grid container>
            {posts.map((post, index) => (
              <Grid
                key={index}
                item
                xs={3}
                width="100%"
                sx={{ display: "flex", alignContent: "stretch", my: 1 }}
              >
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                        R
                      </Avatar>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader={post.ngayTao}
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={post.anhDaiDien}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {post.tieuDe}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>
      </Box>
    </main>
  );
}
