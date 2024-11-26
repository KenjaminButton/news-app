import NewsList from '@/components/news-list'
import { getAvailableNewsYears, getNewsForYear } from '@/lib/news'
import Link from 'next/link'

export default function FilteredNewsPage({ params }) {
  // const newsYear = params.filter // an array of all matched elements

  // const news = getNewsForYear(newsYear)
  // return <NewsList news={news} />

  const links = getAvailableNewsYears()
  const filter = params.filter
  console.log(filter)
  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map(link => <li key={link}>
            <Link href={`/archive/${link}`}>{link}</Link>
          </li>)}
        </ul>
      </nav>
    </header>
  )
}

