async function redirects() {
  return [
    {
      source: "/docs",
      destination: "/docs/mdx",
      permanent: true,
    },
  ];
}

module.exports = redirects;
