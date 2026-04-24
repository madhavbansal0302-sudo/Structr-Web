import { createClient } from '@sanity/client'
import { execSync } from 'child_process'
import { writeFileSync } from 'fs'

const client = createClient({
  projectId: 'gjmtzfq2',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'skhkSt8iReKVvh7yNWebveeqwdwbXbbMyEchwEgwoWZjAgWGCBcRQkaRydt6iAxYZdYlRsuevCVATteHOTamhSbdcDCmXNWPzBOSShSdelV6l0sfaxQVrgpqrB7L6eClFy1EEEcz3mSXvDWOBJwJw2N1WGop33ZvjB3IHGQvrlfQZK66tyLr',
})

console.log('⏳ Fetching posts from Sanity...')

const posts = await client.fetch(`
  *[_type == "post"] | order(date desc) {
    title,
    "slug": slug.current,
    date,
    lastModified,
    author,
    metaDescription,
    focusKeyword,
    secondaryKeywords,
    tags,
    category,
    readTime,
    featuredImage,
    description,
    body,
    faq,
    canonicalUrl,
    ogTitle,
    ogDescription
  }
`)

console.log(`✅ Found ${posts.length} posts`)

// Write to blogs.json
writeFileSync('blogs.json', JSON.stringify(posts, null, 2))
console.log('✅ blogs.json updated')

// Git commit and push
try {
  execSync('git add blogs.json')
  execSync(`git commit -m "sync: ${posts.length} posts from Sanity"`)
  execSync('git push')
  console.log('✅ Pushed to GitHub — site is live!')
} catch (err) {
  console.log('⚠ Git push failed or nothing to commit:', err.message)
}