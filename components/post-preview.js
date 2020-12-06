import Link from 'next/link'
import Avatar from './avatar'
import CoverImage from './cover-image'
import { getPostPath } from '../lib/utils'

export default function PostPreview({ title, coverImage, description, author, slug }) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={getPostPath(slug)} href="/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <p className="text-lg leading-relaxed mb-4">{description}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}
