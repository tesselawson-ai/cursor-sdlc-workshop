const Slide05PreWork = () => (
  <>
    <div className="section-header">
      <span className="section-badge prework">Pre-Work</span>
      <span className="phase-badge">Environment Setup • 10 min</span>
    </div>
    <h2>Get Set Up</h2>
    <div className="checklist">
      <div className="check-item has-code">
        <div className="check-header">
          <div className="check-box"></div>
          <div>
            <strong>Download & Install Cursor</strong> — cursor.com
          </div>
        </div>
      </div>
      <div className="check-item has-code">
        <div className="check-header">
          <div className="check-box"></div>
          <div>
            <strong>Install Cursor CLI</strong> — Cmd+Shift+P → "Install 'cursor'
            command"
          </div>
        </div>
      </div>
      <div className="check-item has-code">
        <div className="check-header">
          <div className="check-box"></div>
          <div>
            <strong>Open Terminal</strong>
          </div>
        </div>
        <div className="code-block">
          <code>
            <span className="command">Cmd+Space</span> → type "Terminal" → Enter
          </code>
        </div>
      </div>
      <div className="check-item has-code">
        <div className="check-header">
          <div className="check-box"></div>
          <div>
            <strong>Install brew and git</strong> — Ask Cursor to help!
          </div>
        </div>
        <div className="code-block">
          <code>cursor "Help me install brew and git on my Mac"</code>
        </div>
      </div>
      <div className="check-item has-code">
        <div className="check-header">
          <div className="check-box"></div>
          <div>
            <strong>Verify installations</strong>
          </div>
        </div>
        <div className="code-block">
          <code>
            brew --version
            <br />
            git --version
            <br />
            cursor --version
          </code>
        </div>
      </div>
    </div>
  </>
)

export default Slide05PreWork
