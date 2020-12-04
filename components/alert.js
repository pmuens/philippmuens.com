import Link from 'next/link'
import Container from './container'
import cn from 'classnames'

export default function Alert({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              <Link as="/subscribe" href="/subscribe">
                <a className="underline" target="_blank">
                  Subscribe
                </a>
              </Link>{' '}
              to my Newsletter to stay up to date
            </>
          )}
        </div>
      </Container>
    </div>
  )
}
