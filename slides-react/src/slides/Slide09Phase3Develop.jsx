const Slide09Phase3Develop = () => (
  <>
    <div className="section-header">
      <span className="section-badge section1">Section 1</span>
      <span className="phase-badge">Phase 3: Develop • 20 min</span>
    </div>
    <h2>
      💻 Develop{' '}
      <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
        (EACH person)
      </span>
    </h2>
    <div className="scrollable">
      <div className="checklist">
        <div className="check-item has-code">
          <div className="check-header">
            <div className="check-box"></div>
            <div>
              <strong>Wait for Phase 2 merge, then pull</strong>
            </div>
          </div>
          <div className="code-block">
            <code>git pull origin main</code>
          </div>
        </div>
        <div className="check-item">
          <div className="check-box"></div>
          <div>
            <strong>Ask Cursor to run the project</strong> — verify base works first
          </div>
        </div>
        <div className="check-item">
          <div className="check-box"></div>
          <div>
            <strong>Use Plan Mode</strong> to design YOUR section from the PRD
          </div>
        </div>
        <div className="check-item">
          <div className="check-box"></div>
          <div>
            <strong>Implement your section</strong> using Tab completion + Cmd+K
          </div>
        </div>
        <div className="check-item has-code">
          <div className="check-header">
            <div className="check-box"></div>
            <div>
              <strong>Create branch, commit, push</strong>
            </div>
          </div>
          <div className="code-block">
            <code>
              git checkout -b [your-name]/[feature]
              <br />
              git add .
              <br />
              git commit -m "Add [feature]"
              <br />
              git push origin [your-name]/[feature]
            </code>
          </div>
        </div>
        <div className="check-item">
          <div className="check-box"></div>
          <div>
            <strong>Open PR</strong> and get teammate to review
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Slide09Phase3Develop
