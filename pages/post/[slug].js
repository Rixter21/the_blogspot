import React from "react";
import { useRouter } from "next/router";

import { getPostDetails } from "../../services";
import {
  PostDetailPage,
  Author,
  Comments,
  CommentsForm,
  Loader,
} from "../../components";

const PostDetail = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-10 mb-8">
      <PostDetailPage post={post} />
      <Author author={post.author} />
      <CommentsForm slug={post.slug} />
      <Comments slug={post.slug} />
    </div>
  );
};

export default PostDetail;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
