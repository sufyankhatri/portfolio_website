import { Layout } from "layout/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { BlogWrapper } from "pages/blog/blog-styles";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <BlogWrapper>
        <h1>{postData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </BlogWrapper>
    </Layout>
  );
}
