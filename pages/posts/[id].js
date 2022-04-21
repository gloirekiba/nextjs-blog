import Layout from "../components/layout";
import Head from "next/head";
import Date from "../components/date";
import { getAllPostIds, getPostData } from "../../lib/posts";
import UtilStyles from "../../styles/utils.module.css";

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
  return { paths, fallback: false };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>{postData.title}</Head>
      <article>
        <h1 className={UtilStyles.headingXl}>{postData.title}</h1>
        <div className={UtilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
