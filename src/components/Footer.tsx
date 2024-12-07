import Link from "next/link"
import { Facebook, Twitter, Instagram, Rss } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t bg-background px-4 mt-20">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 daily.tech. All rights reserved.
          </p>
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-left">
          Your daily dose of tech news and insights
        </p>
        <div className="flex items-center space-x-4">
          <Link href="https://facebook.com" className="text-muted-foreground hover:text-primary">
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="https://instagram.com" className="text-muted-foreground hover:text-primary">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="/rss" className="text-muted-foreground hover:text-primary">
            <Rss className="h-5 w-5" />
            <span className="sr-only">RSS Feed</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
