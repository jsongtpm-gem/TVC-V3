import { Link } from 'react-router-dom'

interface Post { id: number; title: string; slug: string; category?: string; excerpt?: string; published_at: string; image_url?: string; author?: string; likes?: number }

export default function BlogCard({ post }: { post: Post }) {
  const date = new Date(post.published_at).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })
  return null
}
