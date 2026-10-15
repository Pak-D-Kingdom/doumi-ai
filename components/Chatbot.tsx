"use client";
import { useEffect, useRef, useState } from "react";
import { waLink } from "@/lib/data";
import RichText from "./RichText";

type Msg = { role: "user" | "assistant"; content: string };
const QUICK = ["Berapa harga paketnya?", "Beda Reguler & Autopilot?", "Apa saja yang didapat mitra?", "Cara bergabung?"];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "assistant", content: "Halo! Saya asisten Doumi 🍩 Saya hanya menjawab seputar proposal kemitraan Doumi: paket, harga, menu, dan cara bergabung." },
  ]);
  const end = useRef<HTMLDivElement>(null);
  useEffect(() => { end.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, open]);

  async function send(text: string) {
    const t = text.trim();
    if (!t || busy) return;
    const next: Msg[] = [...msgs, { role: "user", content: t }];
    setMsgs(next); setInput(""); setBusy(true);
    try {
      const r = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: next.slice(-10) }) });
      const d = await r.json();
      setMsgs([...next, { role: "assistant", content: d.reply ?? "Maaf, terjadi kendala. Silakan hubungi kami via WhatsApp." }]);
    } catch {
      setMsgs([...next, { role: "assistant", content: "Koneksi bermasalah. Silakan hubungi kami via WhatsApp." }]);
    } finally { setBusy(false); }
  }

  return (
    <>
      <button className="bot-fab" onClick={() => setOpen(!open)} aria-label="Chatbot AI">{open ? "✕" : "💬"}</button>
      {open && (
        <div className="bot">
          <div className="bot-h">Asisten Doumi <a href={waLink()} target="_blank" rel="noopener noreferrer">Chat Admin ↗</a></div>
          <div className="bot-b">
            {msgs.map((m, i) => (
              <div key={i} className={`m ${m.role}`}>
                {m.role === "assistant" ? <RichText text={m.content} /> : m.content}
              </div>
            ))}
            {busy && <div className="m assistant">Mengetik…</div>}
            {msgs.length === 1 && <div className="q">{QUICK.map(q => <button key={q} onClick={() => send(q)}>{q}</button>)}</div>}
            <div ref={end} />
          </div>
          <div className="bot-f">
            <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && send(input)} placeholder="Tulis pertanyaan…" />
            <button onClick={() => send(input)} disabled={busy}>Kirim</button>
          </div>
        </div>
      )}
    </>
  );
}