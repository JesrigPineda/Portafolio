"use client";

import Link from "next/link";
import { editorial } from "@/data/editorial";
import { experience, links } from "@/data/site";
import { useLanguage } from "@/components/language-provider";

export function AboutPage() {
  const { language } = useLanguage();
  const copy = editorial[language];
  return <main id="content" tabIndex={-1} className="inner-page about-page content-wrap"><div className="page-intro"><p className="eyebrow">{copy.about.eyebrow}</p><h1>{copy.about.title}</h1><p>{copy.about.intro}</p></div><div className="about-feature"><span>↳ 01</span><p>{copy.about.closing}</p></div><section className="about-career" aria-labelledby="career-title"><div className="section-intro"><p className="eyebrow">{copy.common.experience}</p><h2 id="career-title">{copy.about.career}</h2></div><div className="career-list">{experience[language].map(item => <article key={`${item.company}-${item.role}`} className="career-item"><p className="career-period">{item.period}</p><div><h3>{item.role}</h3><p className="career-company">{item.company}</p><ul>{item.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul></div></article>)}</div><div className="about-links"><a className="text-link" href={links.linkedin} target="_blank" rel="noreferrer">{copy.common.cv} ↗</a><Link className="text-link" href="/#projects">{copy.common.allWork} ↗</Link></div></section></main>;
}
