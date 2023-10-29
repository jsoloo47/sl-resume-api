export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "20%" }}>
      <h1>Welcome to Juan's Resume API</h1>
      <p>
        Access the API endpoint at{" "}
        <a href="/api/resume" style={{ color: "lightblue" }}>
          <b>/api/resume</b>
        </a>
      </p>
    </div>
  );
}
