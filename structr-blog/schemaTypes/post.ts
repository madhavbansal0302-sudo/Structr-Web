export const post = {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'date', title: 'Publish Date', type: 'date' },
    { name: 'lastModified', title: 'Last Modified Date', type: 'date' },
    {
      name: 'author',
      title: 'Author',
      type: 'object',
      fields: [
        { name: 'name', title: 'Name', type: 'string' },
        { name: 'bio', title: 'Bio', type: 'text' },
        { name: 'url', title: 'URL', type: 'url' },
      ],
    },
    { name: 'metaDescription', title: 'Meta Description', type: 'text' },
    { name: 'focusKeyword', title: 'Focus Keyword', type: 'string' },
    { name: 'secondaryKeywords', title: 'Secondary Keywords', type: 'array', of: [{ type: 'string' }] },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'readTime', title: 'Read Time', type: 'string' },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'object',
      fields: [
        { name: 'url', title: 'Image URL (e.g. /images/blog/...jpg)', type: 'string' },
        { name: 'alt', title: 'Alternative text', type: 'string' },
        { name: 'width', title: 'Width', type: 'number' },
        { name: 'height', title: 'Height', type: 'number' },
      ],
    },
    { name: 'description', title: 'Short Description', type: 'text' },
    { name: 'body', title: 'Body HTML', type: 'text', description: 'Paste the raw HTML of the blog post here.' },
    {
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'Question', type: 'string' },
            { name: 'answer', title: 'Answer', type: 'text' }
          ]
        }
      ]
    },
    { name: 'canonicalUrl', title: 'Canonical URL', type: 'url' },
    { name: 'ogTitle', title: 'Open Graph Title', type: 'string' },
    { name: 'ogDescription', title: 'Open Graph Description', type: 'text' }
  ]
}
