import { useParams, Navigate } from 'react-router-dom'
import ArticleDetail from '../components/blog/ArticleDetail'
import { articles } from '../data/articles'

export default function ArticlePage() {
  const { id } = useParams()
  const article = articles.find((a) => a.id === id)

  if (!article) return <Navigate to="/blog" replace />

  return <ArticleDetail article={article} />
}
