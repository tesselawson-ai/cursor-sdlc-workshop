const Slide07Phase1Plan = () => (
  <>
    <div className="section-header">
      <span className="section-badge section1">Section 1</span>
      <span className="phase-badge">Phase 1: Plan • 10 min</span>
    </div>
    <h2>📋 Plan</h2>
    <div className="scrollable">
      <div className="checklist">
        <div className="check-item has-code">
          <div className="check-header">
            <div className="check-box"></div>
            <div>
              <strong>Clone the workshop repository</strong>
            </div>
          </div>
          <div className="code-block">
            <code>
              git clone [REPO_URL]
              <br />
              cd sdlc-workshop
            </code>
          </div>
        </div>
        <div className="check-item has-code">
          <div className="check-header">
            <div className="check-box"></div>
            <div>
              <strong>Create your team folder</strong>
            </div>
          </div>
          <div className="code-block">
            <code>mkdir teams/[your-team-name]</code>
          </div>
        </div>
        <div className="check-item has-code">
          <div className="check-header">
            <div className="check-box"></div>
            <div>
              <strong>Each person: Add yourself to team members</strong>
            </div>
          </div>
          <div className="code-block">
            <code>
              <span className="comment">
                # Create teams/[team]/members/[your-name].md
              </span>
              <br />
              # [Your Name]
              <br />
              **Role:** [AE/FE/ADM]
              <br />
              **Fun fact:** [Something about you]
            </code>
          </div>
        </div>
        <div className="check-item">
          <div className="check-box"></div>
          <div>
            <strong>Create a PRD</strong> with <span className="highlight">5 specific tasks</span>{' '}
            (one per team member, assigned by name)
          </div>
        </div>
        <div className="check-item has-code">
          <div className="check-header">
            <div className="check-box"></div>
            <div>
              <strong>Commit, push, and open a PR</strong>
            </div>
          </div>
          <div className="code-block">
            <code>
              git add .
              <br />
              git commit -m "[Team] - Initial setup and PRD"
              <br />
              git push origin main
            </code>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Slide07Phase1Plan
