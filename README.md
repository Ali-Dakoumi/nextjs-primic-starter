# Navigation

- Create a Navigation custom type

- The main type will contain a group of fields, the link and label will placed under this group, so later you can map this group

// the link should be a type of link, and label should be a key text, use the next js Link component and not the Prismic component

- The second tab will contain the Logo: a simple image with alt text

- You can add any other type if needed

# Default SEO

- It conatins some default meta tags for the website, [uid, meta_title, meta_description, meta_image]

- Probably every single page will have its own seo meta tags, if not you will just give it the default one.

# Pages

- For best Practices: create a seperate homepage custom type, and a page custom type for all other pages

- The page custom type will just have this fields [uid, title, [...slices]] in the main tab, then create seo tab that will contain this fields [uid, meta_title, meta_description, meta_image]

- add the slices that you need for this custom type

# Slices & Components & Variants

- Create components for custom types and slices that you have created, example Menu, SEO...

- Slices components will have Variants, so create different components under the slice folder and export them in the index file, later in the slices you will map those variants components to deliver the wanted one.

# example of seo code :

//
Fetch the default seo type
Fetch the page data
Then create this variable to make a mix between them
`const seo = {
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
};`
//
