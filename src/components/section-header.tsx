type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
};

export function SectionHeader({ eyebrow, title, description, id }: SectionHeaderProps) {
  return (
    <div className="section-heading motion-reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="section-title">{title}</h2>
      {description ? <p className="section-copy mt-4 max-w-2xl">{description}</p> : null}
    </div>
  );
}
