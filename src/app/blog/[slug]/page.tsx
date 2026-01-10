import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { getPost } from "@/lib/blog";
import { remark } from "remark";
import html from "remark-html";

export default async function BlogPost({ params }: { params: { slug: string } }) {
  try {
    const { data, content } = getPost(params.slug);
    const processed = await remark().use(html).process(content);
    const body = processed.toString();
    return (
      <>
        <PageHeader title={(data.title as string) ?? params.slug} />
        <article className="prose prose-neutral dark:prose-invert max-w-3xl mx-auto px-6" dangerouslySetInnerHTML={{ __html: body }} />
      </>
    );
  } catch {
    notFound();
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const { data } = getPost(params.slug);
    return {
      title: (data.title as string) ?? params.slug,
      description: (data.description as string) ?? "Datadoktor Labs blog post",
    };
  } catch {
    return { title: params.slug };
  }
}
