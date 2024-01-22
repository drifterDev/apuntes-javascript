import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function get(content){
  const posts = await getCollection('tips')
  return rss({
    title: 'Astro build tips',
    description: 'My first page',
    site: getContext.site,
    items: posts.map((post)=>({
      ...post.data,
      link: `/posts/${post.slug}`
  }))
})
}