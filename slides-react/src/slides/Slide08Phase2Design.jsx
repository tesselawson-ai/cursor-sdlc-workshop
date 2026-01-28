const Slide08Phase2Design = () => (
  <>
    <div className="section-header">
      <span className="section-badge section1">Section 1</span>
      <span className="phase-badge">Phase 2: Design • 10 min</span>
    </div>
    <h2>🎨 Design</h2>
    <div className="scrollable">
      <div className="checklist">
        <div className="check-item">
          <div className="check-box"></div>
          <div>
            <strong>Wait for PR review</strong> from Phase 1 — get approval before
            continuing
          </div>
        </div>
        <div className="check-item has-code">
          <div className="check-header">
            <div className="check-box"></div>
            <div>
              <strong>Pull latest changes</strong>
            </div>
          </div>
          <div className="code-block">
            <code>git pull origin main</code>
          </div>
        </div>
        <div className="check-item">
          <div className="check-box"></div>
          <div>
            <strong>ONE PERSON:</strong> Create the base MVP application using Cursor
          </div>
        </div>
        <div className="check-item">
          <div className="check-box"></div>
          <div>
            <strong>Run locally</strong> — Ask Cursor: <em>"How do I run this project?"</em>
          </div>
        </div>
        <div className="check-item">
          <div className="check-box"></div>
          <div>
            <strong>Verify it works</strong> — e.g., if Chrome extension, see it in
            Chrome
          </div>
        </div>
        <div className="check-item has-code">
          <div className="check-header">
            <div className="check-box"></div>
            <div>
              <strong>Merge the base MVP</strong> — this becomes the foundation
            </div>
          </div>
          <div className="code-block">
            <code>
              git add .
              <br />
              git commit -m "[Team] - Base MVP scaffold"
              <br />
              git push origin main
            </code>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Slide08Phase2Design
