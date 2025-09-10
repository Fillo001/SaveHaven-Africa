import { useState } from "react";

export default function Home() {
  // Anonymous Reporting State
  const [report, setReport] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Community Alerts
  const [alerts, setAlerts] = useState([
    { message: "Suspicious activity in Kano.", time: "2025-09-09 14:23", verified: true },
    { message: "Safe zone update: Sokoto market.", time: "2025-09-09 09:08", verified: true }
  ]);
  const [newAlert, setNewAlert] = useState("");

  // Data Dashboard
  const dashboard = {
    reports: 127,
    alerts: 63,
    hotspots: 5,
    partners: 12
  };

  // Collaboration Hub
  const partners = [
    "Kano Community Watch",
    "Civil Society Network Africa",
    "Africa Peace Initiative",
    "Govt. Security Agency"
  ];

  function handleReportSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setReport("");
    setTimeout(() => setSubmitted(false), 3500);
  }

  function handleAlertSubmit(e) {
    e.preventDefault();
    if (newAlert) {
      setAlerts([
        { message: newAlert, time: new Date().toLocaleString(), verified: false },
        ...alerts
      ]);
      setNewAlert("");
    }
  }

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", background: "#FAFAFC", minHeight: "100vh", margin: 0 }}>
      <header style={{ background: "#106B3C", color: "#fff", padding: "2rem 0", textAlign: "center" }}>
        <h1>SafeHaven Africa</h1>
        <p style={{ maxWidth: 620, margin: "0 auto", fontSize: "1.1rem" }}>
          Community-driven digital platform to combat banditry and insecurity across Africa. Technology, data, and collaboration for safer societies.
        </p>
      </header>

      <section style={{ maxWidth: 780, margin: "2rem auto", background: "#fff", borderRadius: 8, boxShadow: "0 2px 12px #0001", padding: "2rem" }}>
        <h2>Project Overview</h2>
        <p>
          SafeHaven Africa empowers citizens to securely report threats, while providing actionable intelligence to security agencies and policymakers.
        </p>
        <ul>
          <li><b>Anonymous Reporting System</b> – Safely report bandit activities.</li>
          <li><b>Community Alert Network</b> – Verified alerts and early warnings.</li>
          <li><b>Data Dashboard & Analytics</b> – Visualize patterns and hotspots.</li>
          <li><b>Collaboration Hub</b> – Connect communities, civil society, and government.</li>
        </ul>
        <blockquote style={{ background: "#F4F6F8", borderLeft: "4px solid #106B3C", margin: "1rem 0", padding: "1rem" }}>
          <b>Goal:</b> A secure, united Africa where technology bridges trust, strengthens resilience, and ends the cycle of banditry.
        </blockquote>
      </section>

      <section style={{ maxWidth: 780, margin: "2rem auto", background: "#fff", borderRadius: 8, boxShadow: "0 2px 12px #0001", padding: "2rem" }}>
        <h2>Anonymous Reporting System</h2>
        <form onSubmit={handleReportSubmit}>
          <label>
            <span>Report bandit activity securely:</span>
            <textarea
              style={{ width: "100%", minHeight: 80, margin: "1rem 0", padding: 8 }}
              value={report}
              onChange={e => setReport(e.target.value)}
              placeholder="Describe suspicious activity, location, and time..."
              required
            />
          </label>
          <button style={{ background: "#106B3C", color: "#fff", border: 0, padding: "0.6rem 1.2rem", borderRadius: 4, cursor: "pointer" }}>
            Submit Report
          </button>
        </form>
        {submitted && (
          <div style={{ marginTop: "1rem", color: "#106B3C" }}>
            ✅ Your report has been submitted anonymously. Thank you!
          </div>
        )}
      </section>

      <section style={{ maxWidth: 780, margin: "2rem auto", background: "#fff", borderRadius: 8, boxShadow: "0 2px 12px #0001", padding: "2rem" }}>
        <h2>Community Alert Network</h2>
        <form onSubmit={handleAlertSubmit}>
          <input
            type="text"
            value={newAlert}
            onChange={e => setNewAlert(e.target.value)}
            placeholder="Broadcast a new alert"
            style={{ width: "70%", padding: 8 }}
          />
          <button style={{ marginLeft: 8, background: "#106B3C", color: "#fff", border: 0, padding: "0.5rem 1rem", borderRadius: 4, cursor: "pointer" }}>
            Send Alert
          </button>
        </form>
        <ul style={{ listStyle: "none", margin: "1rem 0", padding: 0 }}>
          {alerts.map((alert, idx) => (
            <li key={idx} style={{ background: alert.verified ? "#E7F6E8" : "#FFF4E5", marginBottom: 8, borderRadius: 4, padding: "0.6rem 1rem" }}>
              <b>{alert.verified ? "✅" : "🕒"} {alert.message}</b>
              <br />
              <small style={{ color: "#555" }}>{alert.time}</small>
            </li>
          ))}
        </ul>
      </section>

      <section style={{ maxWidth: 780, margin: "2rem auto", background: "#fff", borderRadius: 8, boxShadow: "0 2px 12px #0001", padding: "2rem" }}>
        <h2>Data Dashboard & Analytics</h2>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          <div style={{ flex: "1", background: "#F4F6F8", borderRadius: 6, padding: "1rem", textAlign: "center" }}>
            <b>Reports Received</b>
            <div style={{ fontSize: "2rem", color: "#106B3C" }}>{dashboard.reports}</div>
          </div>
          <div style={{ flex: "1", background: "#F4F6F8", borderRadius: 6, padding: "1rem", textAlign: "center" }}>
            <b>Alerts Sent</b>
            <div style={{ fontSize: "2rem", color: "#106B3C" }}>{dashboard.alerts}</div>
          </div>
          <div style={{ flex: "1", background: "#F4F6F8", borderRadius: 6, padding: "1rem", textAlign: "center" }}>
            <b>Hotspot Areas</b>
            <div style={{ fontSize: "2rem", color: "#B71C1C" }}>{dashboard.hotspots}</div>
          </div>
          <div style={{ flex: "1", background: "#F4F6F8", borderRadius: 6, padding: "1rem", textAlign: "center" }}>
            <b>Partners</b>
            <div style={{ fontSize: "2rem", color: "#106B3C" }}>{dashboard.partners}</div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 780, margin: "2rem auto", background: "#fff", borderRadius: 8, boxShadow: "0 2px 12px #0001", padding: "2rem" }}>
        <h2>Collaboration Hub</h2>
        <p>Working together for sustainable peace. Our partners:</p>
        <ul>
          {partners.map((p, idx) => (
            <li key={idx} style={{ background: "#E3F2FD", marginBottom: 6, borderRadius: 4, padding: "0.3rem 0.7rem" }}>
              <b>{p}</b>
            </li>
          ))}
        </ul>
      </section>

      <footer style={{ background: "#106B3C", color: "#fff", textAlign: "center", padding: "1.2rem 0", marginTop: "4rem" }}>
        SafeHaven Africa © 2025 — Empowering communities for peace
      </footer>
    </main>
  );
}
