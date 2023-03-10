import Head from "next/head";
import { createClient } from "../prismicio";
import resolver from "../sm-resolver.js";
import { Layout } from "../components/Layout/index";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import commerce from "../lib/commerce";

const Home = ({ data, url, lang, layout, categories, products }) => {
  console.log("🚀 ~ file: index.jsx:10 ~ Home ~ products", products);
  console.log("🚀 ~ file: index.jsx:10 ~ Home ~ categories", categories);

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

  console.log(data.meta_description, "zzzzzzzzzzzzzzzzzzzzzzzzzzzzz");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout {...layout} seo={seo}>
        <SliceZone slices={data.slices} resolver={resolver} />
      </Layout>
    </div>
  );
};

export const getStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  const seo = await client.getSingle("dfault_seo");
  const menu = await client.getSingle("menu");
  const page = await client.getByUID("page", "homepage");
  const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list({
    category_slug: ["torte"],
  });
  console.log(menu);
  return {
    props: {
      layout: {
        seo,
        menu,
      },
      ...page,
      categories,
      products,
    },
  };
};

export default Home;
