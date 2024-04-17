import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

export async function loadMarkdown(filePath: string): Promise<string> {
  const response = await fetch(filePath);
  const markdownContent = await response.text();
  return md.render(markdownContent);
}
