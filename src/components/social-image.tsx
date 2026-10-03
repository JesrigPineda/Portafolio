type Props = { title: string; eyebrow: string; description: string };

export function SocialImage({ title, eyebrow, description }: Props) {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "60px 72px", background: "#f5f5f3", color: "#0a0a0a", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 25 }}><span>Jesrig Pineda</span><span style={{ color: "#555553" }}>Software Engineer</span></div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ color: "#555553", fontSize: 22 }}>{eyebrow}</div>
        <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.06, letterSpacing: -3 }}>{title}</div>
        <div style={{ color: "#555553", fontSize: 28, lineHeight: 1.4 }}>{description}</div>
      </div>
      <div style={{ display: "flex", borderTop: "1px solid #d8d8d4", paddingTop: 22, fontSize: 22 }}>jesrig.dev</div>
    </div>
  );
}
