export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/buy/submit-form","/support/cancellation","/support/delivery","/support/privacy-policy","/support/terms-conditions","/payment-success"],
    },
    sitemap: `${process.env.SITE_URL}/sitemap.xml`,
  };
}
