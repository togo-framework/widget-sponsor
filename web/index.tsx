import { registerWidget, type WidgetContext } from "@togo-framework/widget";

export function Sponsor({ settings }: WidgetContext) {
  const gh = (settings.github as string) ?? "https://github.com/sponsors/fadymondy";
  const coffee = (settings.coffee as string) ?? "https://buymeacoffee.com/fadymondy";
  const perks = (settings.perks as string[]) ?? ["Priority support", "Your logo here", "Early access"];
  return (
    <div className="wx-sponsor" style={{ display: "grid", gap: 10 }}>
      <p style={{ margin: 0 }}>Support my open-source work.</p>
      <div style={{ display: "flex", gap: 8 }}>
        <a href={gh}>Sponsor</a>
        <a href={coffee}>Buy me a coffee</a>
      </div>
      <ul style={{ margin: 0, paddingLeft: 18, opacity: 0.8 }}>{perks.map((p) => <li key={p}>{p}</li>)}</ul>
    </div>
  );
}
registerWidget({ key: "sponsor", title: "Sponsor", defaultZone: "sidebar",
  defaultSettings: { github: "https://github.com/sponsors/fadymondy" }, Comp: Sponsor });
