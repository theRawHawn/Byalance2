import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.byalance.in";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/accounting-bookkeeping`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/gst-services`,           lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/itr-services`,           lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/tds-services`,           lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/payroll-processing`,     lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
