import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDir = path.join(process.cwd(), "content/blog");

export function getPosts() {
  if (!fs.existsSync(blogDir)) return [];
  const files = fs.readdirSync(blogDir);
  return files.filter(f => f.endsWith(".md")).map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(blogDir, file), "utf8");
    const { data } = matter(raw);
    return { slug, ...data } as any;
  });
}

export function getPost(slug: string) {
  const raw = fs.readFileSync(path.join(blogDir, `${slug}.md`), "utf8");
  return matter(raw);
}
