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
  AppBar,
} from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import Link from "next/link";

export default function Home() {
  const dispatch = useAppDispatch();

  const [limit, setLimit] = React.useState(12);

  React.useEffect(() => {
    dispatch(postActions.fetchAllCate({}));
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(postActions.fetchAllPosts({ limit: limit, skip: 0 }));
  }, [dispatch, limit]);

  const handleLoadmore = () => {
    setLimit(limit + 12);
  };

  const pages: Array<any> = useAppSelector((state) => state.allCate);

  const posts: Array<any> = useAppSelector((state) => state.allPosts);

  return (
    <main>
      <AppBar position="static">
        <Toolbar disableGutters sx={{ width: "85%", mx: "auto" }}>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "space-between",
              },
            }}
          >
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
      </AppBar>
      <Box sx={{ my: 2 }}>
        <Grid container>
          <Grid item xs={9}>
            {posts.slice(0, 1).map((post, index) => (
              <Card key={index}>
                <CardMedia
                  sx={{ height: "600px", position: "relative" }}
                  image={post.anhDaiDien}
                  title="green iguana"
                />
                <CardContent
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    color: "white",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: 700 }}
                  >
                    {post.tieuDe}
                  </Typography>
                  <Typography variant="body2">{post.ngayTao}</Typography>
                </CardContent>
              </Card>
            ))}
          </Grid>
          <Grid item xs={3} container direction="column">
            {posts.slice(1, 4).map((post, index) => (
              <Grid key={index} sx={{ position: "relative" }}>
                <Card>
                  <CardMedia
                    sx={{ height: "200px" }}
                    image={post.anhDaiDien}
                    title="green iguana"
                  />
                  <CardContent
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      color: "white",
                      zIndex: 1,
                    }}
                  >
                    <Typography gutterBottom variant="h6" component="div">
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
          <Grid
            container
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
          >
            {posts.slice(4).map((post, index) => (
              <Grid
                key={index}
                item
                xs={3}
                width="100%"
                sx={{
                  display: "flex",
                  alignContent: "stretch",
                  my: 1,
                  cursor: "pointer",
                }}
              >
                <Link href={post.id}>
                  {/* Nested Link component */}
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="194"
                      image={post.anhDaiDien}
                      alt="Paella dish"
                    />
                    <CardContent>
                      <Typography variant="body2" color="black">
                        {post.tieuDe}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>
      </Box>
    </main>
  );
}
