const Slide14Section2Step3 = () => (
  <>
    <div className="section-header">
      <span className="section-badge section2">Section 2</span>
      <span className="phase-badge">Step 3: Add a Feature • 10 min</span>
    </div>
    <h2>✨ Build Something New</h2>
    <div className="scrollable">
      <div className="checklist">
        <div className="check-item">
          <div className="check-box"></div>
          <div>
            <strong>Decide on a feature</strong> — something small but visible
          </div>
        </div>
        <div className="check-item">
          <div className="check-box"></div>
          <div>
            <strong>Use Plan Mode</strong> — try different models for different
            perspectives
          </div>
        </div>
        <div className="check-item">
          <div className="check-box"></div>
          <div>
            <strong>Implement the feature</strong>
          </div>
        </div>
        <div className="check-item has-code">
          <div className="check-header">
            <div className="check-box"></div>
            <div>
              <strong>Create branch, commit, push, open PR</strong>
            </div>
          </div>
          <div className="code-block">
            <code>
              git checkout -b [your-team]/adds-[feature]
              <br />
              git add .
              <br />
              git commit -m "Add [feature]"
              <br />
              git push origin [your-team]/adds-[feature]
            </code>
          </div>
        </div>
        <div className="check-item">
          <div className="check-box"></div>
          <div>
            <strong>Watch BugBot review your PR</strong> — address any issues it finds
          </div>
        </div>
      </div>
      <div className="emphasis-box orange">
        <strong>✓ Section 2 Complete!</strong> You've used BugBot, Hooks, Skills,
        Agents, and Ask Mode.
      </div>
    </div>
  </>
)

export default Slide14Section2Step3
