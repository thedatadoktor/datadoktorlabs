import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { getPosts } from "@/lib/blog";

export default function Blog() {
  const posts = getPosts();
  return (
    <>
      <PageHeader title="Blog" />
      <div className="max-w-4xl mx-auto px-6 space-y-4">
        {posts.map((p: any) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="block underline">
            {p.title}
          </Link>
        ))}
      </div>
    </>
  );
}
