import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { createClient } from "../prismicio";
import resolver from "../sm-resolver.js";
import { linkResolver } from "../utils/linkResolver";

import { Layout } from "../components/Layout/index";

const Page = ({ data, url, lang, layout }) => {
  const seo = {
    metaTitle:
      data.meta_title.length !== 0
        ? prismicH.asText(data.meta_title)
        : prismicH.asText(layout.seo?.data?.meta_title),
    metaDescription:
      data.meta_title.length !== 0
        ? prismicH.asText(data.meta_description)
        : prismicH.asText(layout.seo?.data?.meta_description),
    metaImage: data.meta_image.url || layout.seo?.data?.meta_image.url,
    url: url,
    article: false,
    lang: lang,
  };

  console.log(data, "zzzzzzzzzzzzzzzzzzzzzzzzzzzzz");

  return (
    <Layout {...layout} seo={seo}>
      <SliceZone slices={data.slices} resolver={resolver} />
    </Layout>
  );
};

// Fetch content from prismic - previews but doesn't hot reload
export const getStaticProps = async ({ params, previewData }) => {
  const client = createClient({ previewData });

  const seo = await client.getSingle("dfault_seo");
  const menu = await client.getSingle("menu");
  const page = await client.getByUID("page", params.uid);

  return {
    props: {
      layout: {
        seo,
        menu,
      },
      ...page,
    },
  };
};

export const getStaticPaths = async () => {
  const client = createClient();

  const pages = await client.getAllByType("page");

  return {
    paths: pages.map((page) => prismicH.asLink(page, linkResolver)),
    fallback: false,
  };
};

export default Page;
