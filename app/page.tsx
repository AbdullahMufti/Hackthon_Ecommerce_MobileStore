import Link from "next/link"

import { siteConfig } from "@/config/site"
import { client } from "@/lib/sanityClient"
import { buttonVariants } from "@/components/ui/button"
import MainPage from "@/components/MainPage/MainPage"
import { CardDemo } from "@/app/CardDemo"

export default async function IndexPage() {
  return (
    <section className="container  items-center gap-6 pb-8 pt-6 md:py-10">
      {/* @ts-expect-error Server Component */}
      <MainPage />
    </section>
  )
}
