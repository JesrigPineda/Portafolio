export type Language = "es" | "en";
export type Localized<T> = Record<Language, T>;

export type ProjectSlug = "commerce-ops" | "health-monitor" | "origina-lead-agent";
export type ProjectVisualKind = "commerce" | "health" | "agent";
export type HomeVisualKind = "commerce" | "health" | "agent";

export type CaseStudy = {
  thesis: string;
  context: string;
  problem: string;
  built: string[];
  decisions: { title: string; detail: string }[];
  tradeoff: string;
  demonstrates: string[];
  improvements: string[];
  flow: string[];
};

export type Project = {
  slug: ProjectSlug;
  order: number;
  featuredOrder?: number;
  status: "public" | "poc";
  projectType: "personal-project" | "personal-prototype";
  reviewStatus: "verified" | "needs-review";
  title: string;
  category: Localized<string>;
  summary: Localized<string>;
  technologies: string[];
  links: { repository: string; demo?: string };
  caseStudy: Localized<CaseStudy>;
  visual: {
    caseStudy: ProjectVisualKind;
    home?: {
      kind: HomeVisualKind;
      labels: Localized<string[]>;
      description: Localized<string>;
    };
  };
};
