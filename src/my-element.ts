import { LitElement, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'

@customElement('my-element')
export class MyElement extends LitElement {
  @state()
  private activeTab = 'Overview'

  @state()
  private toastVisible = false

  @state()
  private alertVisible = true

  @state()
  private dialogOpen = false

  createRenderRoot() {
    return this
  }

  private showToast() {
    this.toastVisible = true
    window.setTimeout(() => {
      this.toastVisible = false
    }, 3000)
  }

  private renderHome() {
    return html`
      <main class="home-shell">
        <a class="components-cta" href="/components">components</a>
      </main>
    `
  }

  private renderComponents() {
    const tabs = ['Overview', 'Activity', 'Settings']

    return html`
      <main class="gallery-shell">
        <header class="gallery-header">
          <div class="header-content">
            <a class="brand-link" href="/"><span class="brand-mark">S</span><span>shadcn/ui</span></a>
            <nav class="header-nav" aria-label="Main navigation"><a href="#components">Components</a><a href="#forms">Forms</a></nav>
            <a class="back-link" href="/">Back to home</a>
          </div>
        </header>

        <div class="gallery-content">
          <section class="gallery-hero">
            <div class="hero-copy">
              <p class="eyebrow">Design system</p>
              <h1 class="gallery-title">Components<br /><em>made tangible.</em></h1>
              <p class="gallery-description">A focused reference of interface building blocks, designed to feel composed together—not scattered across a page.</p>
              <div class="hero-meta"><span>16 primitives</span><span>Fully interactive</span><span>Responsive layout</span></div>
            </div>
            <div class="hero-preview" aria-hidden="true">
              <div class="preview-window">
                <div class="preview-topbar"><span></span><span></span><span></span></div>
                <div class="preview-body"><div class="preview-avatar">JD</div><div class="preview-lines"><b></b><i></i></div><button>Follow</button></div>
              </div>
              <div class="preview-label">Live component preview</div>
            </div>
          </section>

          <section id="components" class="showcase-section">
            <div class="section-heading"><div><p class="section-kicker">01 — Actions</p><h2>Buttons, feedback & status</h2></div><p>Every state is clear, quiet, and consistent.</p></div>
            <div class="showcase-grid action-grid">
              <article class="showcase-card button-card"><div class="card-header"><span class="card-index">01</span><h3>Button</h3><span class="card-tag">4 variants</span></div><div class="component-preview button-preview"><button class="primary-button">Continue</button><button class="secondary-button">Save draft</button><button class="outline-button">Cancel</button><button class="destructive-button">Delete</button></div></article>
              <article class="showcase-card identity-card"><div class="card-header"><span class="card-index">02</span><h3>Avatar & badge</h3><span class="card-tag">Identity</span></div><div class="component-preview identity-preview"><div class="avatar-initials">JD</div><div class="avatar-copy"><strong>Jordan Davis</strong><span>Design engineer</span></div><span class="default-badge">Available</span></div></article>
              <article class="showcase-card feedback-card"><div class="card-header"><span class="card-index">03</span><h3>Alert</h3><span class="card-tag">Feedback</span></div><div class="component-preview">${this.alertVisible ? html`<div class="inline-alert"><div><strong>All changes saved</strong><p>Your workspace is in sync.</p></div><button class="alert-close" @click=${() => (this.alertVisible = false)} aria-label="Dismiss alert">×</button></div>` : html`<button class="restore-alert" @click=${() => (this.alertVisible = true)}>Restore alert</button>`}</div></article>
            </div>
          </section>

          <section id="forms" class="showcase-section">
            <div class="section-heading"><div><p class="section-kicker">02 — Input</p><h2>Form controls</h2></div><p>Simple labels, balanced spacing, and crisp focus states.</p></div>
            <div class="showcase-grid form-grid">
              <article class="showcase-card form-card"><div class="card-header"><span class="card-index">04</span><h3>Fields</h3><span class="card-tag">Form</span></div><div class="component-preview form-preview"><label class="field-label">Email address<input class="text-input" type="email" placeholder="jordan@example.com" /></label><label class="field-label">Role<select class="select-input"><option>Design engineer</option><option>Product designer</option><option>Developer</option></select></label><label class="field-label">Note<textarea class="textarea-input" placeholder="Leave a note..."></textarea></label></div></article>
              <article class="showcase-card control-card"><div class="card-header"><span class="card-index">05</span><h3>Controls</h3><span class="card-tag">Inputs</span></div><div class="component-preview control-preview"><label class="checkbox-row"><input type="checkbox" checked /> Send me weekly product updates</label><label class="switch-row"><span>Push notifications</span><input class="switch-input" type="checkbox" checked /></label><label class="range-row"><span>Volume <b>60</b></span><input class="range-input" type="range" value="60" /></label><details class="collapsible-panel"><summary>Advanced settings</summary><p>Fine-tune your notification preferences.</p></details></div></article>
            </div>
          </section>

          <section class="showcase-section">
            <div class="section-heading"><div><p class="section-kicker">03 — Navigation</p><h2>Context & content</h2></div><p>Patterns for moving through information with ease.</p></div>
            <div class="showcase-grid navigation-grid">
              <article class="showcase-card tabs-card"><div class="card-header"><span class="card-index">06</span><h3>Tabs & progress</h3><span class="card-tag">Navigation</span></div><div class="component-preview"><div class="tabs-list">${tabs.map(tab => html`<button class="tab-button ${this.activeTab === tab ? 'is-active' : ''}" @click=${() => (this.activeTab = tab)}>${tab}</button>`)}</div><div class="tab-panel"><strong>${this.activeTab}</strong><span>Manage the details for this workspace view.</span></div><div class="progress-meta"><span>Profile completion</span><b>68%</b></div><div class="progress-track"><div class="progress-indicator"></div></div></div></article>
              <article class="showcase-card menu-card"><div class="card-header"><span class="card-index">07</span><h3>Menu & dialog</h3><span class="card-tag">Overlay</span></div><div class="component-preview menu-preview"><details class="dropdown-menu"><summary>Open menu</summary><div class="dropdown-panel"><button>Edit profile</button><button>View activity</button></div></details><button class="dialog-trigger" @click=${() => (this.dialogOpen = true)}>Open dialog</button><button class="toast-trigger" @click=${this.showToast}>Show toast</button><p class="tooltip-hint" title="This is supplemental context.">Hover for a tooltip</p></div></article>
              <article class="showcase-card table-card"><div class="card-header"><span class="card-index">08</span><h3>Table</h3><span class="card-tag">Data</span></div><div class="table-wrap"><table class="activity-table"><thead><tr><th>Invoice</th><th>Status</th><th>Amount</th></tr></thead><tbody><tr><td>INV001</td><td><span class="paid-badge">Paid</span></td><td>$250.00</td></tr><tr><td>INV002</td><td><span class="pending-badge">Pending</span></td><td>$150.00</td></tr></tbody></table></div></article>
            </div>
          </section>
        </div>
        ${this.dialogOpen ? html`<div class="dialog-backdrop" role="presentation"><section class="dialog-panel" role="dialog" aria-modal="true" aria-labelledby="dialog-title"><p class="section-kicker">Confirm action</p><h2 id="dialog-title">Continue with changes?</h2><p>This action will save your workspace preferences.</p><div class="dialog-actions"><button class="cancel-button" @click=${() => (this.dialogOpen = false)}>Cancel</button><button class="confirm-button" @click=${() => { this.dialogOpen = false; this.showToast() }}>Continue</button></div></section></div>` : null}
        ${this.toastVisible ? html`<div class="toast-message"><strong>Saved</strong><span>Your changes have been saved.</span></div>` : null}
      </main>
    `
  }

  render() {
    return window.location.pathname === '/components' ? this.renderComponents() : this.renderHome()
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
