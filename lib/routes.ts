export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function communityPostPath(title: string) {
  return `/community/${slugify(title)}`;
}
