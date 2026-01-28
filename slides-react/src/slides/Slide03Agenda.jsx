const Slide03Agenda = () => (
  <>
    <h2>Agenda</h2>
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-number gray">0</div>
        <div className="timeline-content">
          <div className="timeline-title">Pre-Work Setup</div>
          <div className="timeline-desc">Install Cursor, CLI, brew, git</div>
        </div>
        <div className="timeline-duration">10 min</div>
      </div>
      <div className="timeline-item">
        <div className="timeline-number green">1</div>
        <div className="timeline-content">
          <div className="timeline-title">Greenfield Project</div>
          <div className="timeline-desc">Build from scratch through full SDLC</div>
        </div>
        <div className="timeline-duration">45 min</div>
      </div>
      <div className="timeline-item">
        <div className="timeline-number orange">2</div>
        <div className="timeline-content">
          <div className="timeline-title">Legacy Codebase</div>
          <div className="timeline-desc">Add features using BugBot, Hooks, Skills, Agents</div>
        </div>
        <div className="timeline-duration">30 min</div>
      </div>
      <div className="timeline-item">
        <div className="timeline-number purple">3</div>
        <div className="timeline-content">
          <div className="timeline-title">Real-World Chaos</div>
          <div className="timeline-desc">Scale to 20+ people, build Netflix clone</div>
        </div>
        <div className="timeline-duration">35 min</div>
      </div>
    </div>
  </>
)

export default Slide03Agenda
