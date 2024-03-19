"use client";

import type { Snippets } from "@prisma/client";

interface SnippetEditFormProps {
  snippet: Snippets;
}

export default function SnippetEditForm({
  snippet,
}: SnippetEditFormProps) {
  return (
    <div>
      Client component has snippet with title {snippet.title}
    </div>
  );
}
