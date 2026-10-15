import { Fragment } from "react";

function inline(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((p, i) =>
    p.startsWith("**") && p.endsWith("**") && p.length > 4
      ? <b key={i}>{p.slice(2, -2)}</b>
      : <Fragment key={i}>{p.replace(/\*/g, "")}</Fragment>
  );
}

export default function RichText({ text }: { text: string }) {
  const lines = text.split("\n");
  const out: React.ReactNode[] = [];
  let items: string[] = [];
  const flush = (k: number) => {
    if (!items.length) return;
    out.push(<ul key={"u" + k}>{items.map((t, i) => <li key={i}>{inline(t)}</li>)}</ul>);
    items = [];
  };
  lines.forEach((raw, k) => {
    const l = raw.trim();
    const li = l.match(/^[*-]\s+(.*)/);
    if (li) { items.push(li[1]); return; }
    flush(k);
    if (!l) return;
    if (/^-{3,}$/.test(l)) { out.push(<hr key={k} />); return; }
    const h = l.match(/^#{1,6}\s+(.*)/);
    out.push(<p key={k}>{h ? <b>{inline(h[1])}</b> : inline(l)}</p>);
  });
  flush(lines.length);
  return <>{out}</>;
}