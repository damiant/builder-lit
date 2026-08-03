import { LitElement, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'

@customElement('my-element')
export class MyElement extends LitElement {
  @state()
  private activeTab = 'account'

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
      <main class="home-shell flex min-h-screen items-center justify-center p-6">
        <a
          class="components-cta inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          href="/components"
        >
          components
        </a>
      </main>
    `
  }

  private renderComponents() {
    return html`
      <main class="gallery-shell min-h-screen bg-muted/30">
        <header class="gallery-header border-b bg-background">
          <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <a class="brand-link text-sm font-semibold tracking-tight" href="/">shadcn/ui</a>
            <a class="back-link text-sm text-muted-foreground hover:text-foreground" href="/">Back home</a>
          </div>
        </header>

        <div class="gallery-content mx-auto max-w-6xl px-6 py-12">
          <div class="gallery-intro mb-10 max-w-2xl">
            <p class="eyebrow mb-2 text-sm font-medium text-muted-foreground">Component gallery</p>
            <h1 class="gallery-title text-3xl font-bold tracking-tight sm:text-4xl">Kitchen sink</h1>
            <p class="gallery-description mt-3 text-muted-foreground">A practical selection of shadcn-styled controls, form elements, feedback, and data display patterns.</p>
          </div>

          <section class="component-grid grid gap-6 lg:grid-cols-2">
            <article class="component-card rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <h2 class="component-title text-lg font-semibold">Buttons & badges</h2>
              <p class="component-copy mt-1 text-sm text-muted-foreground">Primary actions, secondary options, and status labels.</p>
              <div class="button-group mt-5 flex flex-wrap items-center gap-3">
                <button class="primary-button inline-flex h-9 items-center justify-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">Primary</button>
                <button class="secondary-button inline-flex h-9 items-center justify-center rounded-md bg-secondary px-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80">Secondary</button>
                <button class="outline-button inline-flex h-9 items-center justify-center rounded-md border bg-background px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">Outline</button>
                <button class="destructive-button inline-flex h-9 items-center justify-center rounded-md bg-destructive px-3 text-sm font-medium text-white transition-colors hover:bg-destructive/90">Delete</button>
                <span class="default-badge rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">Default</span>
                <span class="outline-badge rounded-full border px-2.5 py-0.5 text-xs font-semibold">Outline</span>
              </div>
            </article>

            <article class="component-card rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <h2 class="component-title text-lg font-semibold">Avatar & alert</h2>
              <p class="component-copy mt-1 text-sm text-muted-foreground">Identity indicators and contextual feedback.</p>
              <div class="avatar-row mt-5 flex items-center gap-3">
                <div class="avatar-initials flex size-10 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">JD</div>
                <div>
                  <p class="avatar-name text-sm font-medium">Jordan Davis</p>
                  <p class="avatar-email text-sm text-muted-foreground">jordan@example.com</p>
                </div>
              </div>
              ${this.alertVisible
                ? html`<div class="inline-alert mt-5 flex items-start justify-between gap-4 rounded-md border bg-muted/50 p-3 text-sm">
                    <div><p class="alert-title font-medium">Heads up!</p><p class="alert-copy mt-1 text-muted-foreground">You can customize these components to match your project.</p></div>
                    <button class="alert-close text-muted-foreground hover:text-foreground" @click=${() => (this.alertVisible = false)} aria-label="Dismiss alert">×</button>
                  </div>`
                : html`<button class="restore-alert mt-5 text-sm font-medium underline underline-offset-4" @click=${() => (this.alertVisible = true)}>Restore alert</button>`}
            </article>

            <article class="component-card rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <h2 class="component-title text-lg font-semibold">Form controls</h2>
              <p class="component-copy mt-1 text-sm text-muted-foreground">Inputs with familiar shadcn form treatment.</p>
              <div class="form-stack mt-5 grid gap-4">
                <label class="field-label grid gap-2 text-sm font-medium">Email <input class="text-input h-9 rounded-md border bg-background px-3 text-sm shadow-sm outline-none placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring" type="email" placeholder="you@example.com" /></label>
                <label class="field-label grid gap-2 text-sm font-medium">Role <select class="select-input h-9 rounded-md border bg-background px-3 text-sm shadow-sm outline-none focus-visible:ring-1 focus-visible:ring-ring"><option>Developer</option><option>Designer</option><option>Product manager</option></select></label>
                <label class="field-label grid gap-2 text-sm font-medium">Message <textarea class="textarea-input min-h-20 rounded-md border bg-background px-3 py-2 text-sm shadow-sm outline-none placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring" placeholder="Tell us what you need"></textarea></label>
              </div>
            </article>

            <article class="component-card rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <h2 class="component-title text-lg font-semibold">Selection & toggles</h2>
              <p class="component-copy mt-1 text-sm text-muted-foreground">Checkboxes, switches, range input, and disclosure.</p>
              <div class="selection-stack mt-5 grid gap-4 text-sm">
                <label class="checkbox-row flex items-center gap-2"><input class="size-4 rounded border accent-primary" type="checkbox" checked /> Send weekly updates</label>
                <label class="switch-row flex items-center justify-between"><span>Enable notifications</span><input class="switch-input h-5 w-9 accent-primary" type="checkbox" checked /></label>
                <label class="range-row grid gap-2"><span>Volume</span><input class="range-input w-full accent-primary" type="range" value="60" /></label>
                <details class="collapsible-panel rounded-md border p-3"><summary class="cursor-pointer font-medium">Advanced settings</summary><p class="mt-3 text-muted-foreground">Additional settings can be revealed without leaving the page.</p></details>
              </div>
            </article>

            <article class="component-card rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <h2 class="component-title text-lg font-semibold">Tabs & progress</h2>
              <p class="component-copy mt-1 text-sm text-muted-foreground">Sectioned content with clear progress feedback.</p>
              <div class="tabs-list mt-5 inline-flex h-9 items-center rounded-md bg-muted p-1 text-muted-foreground">
                ${['account', 'password', 'settings'].map(tab => html`<button class="tab-button rounded-sm px-3 py-1 text-sm capitalize transition-colors ${this.activeTab === tab ? 'bg-background text-foreground shadow-sm' : 'hover:text-foreground'}" @click=${() => (this.activeTab = tab)}>${tab}</button>`)}
              </div>
              <div class="tab-panel mt-4 rounded-md border p-4 text-sm"><p class="font-medium capitalize">${this.activeTab}</p><p class="mt-1 text-muted-foreground">Manage your ${this.activeTab} preferences here.</p></div>
              <div class="progress-meta mt-5 flex justify-between text-sm"><span>Profile completion</span><span class="text-muted-foreground">68%</span></div>
              <div class="progress-track mt-2 h-2 overflow-hidden rounded-full bg-secondary"><div class="progress-indicator h-full w-[68%] rounded-full bg-primary"></div></div>
            </article>

            <article class="component-card rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <h2 class="component-title text-lg font-semibold">Menus & dialog</h2>
              <p class="component-copy mt-1 text-sm text-muted-foreground">Contextual actions and confirmation overlays.</p>
              <div class="menu-actions mt-5 flex flex-wrap gap-3">
                <details class="dropdown-menu relative">
                  <summary class="cursor-pointer list-none rounded-md border bg-background px-3 py-2 text-sm font-medium hover:bg-accent">Open menu</summary>
                  <div class="dropdown-panel absolute left-0 z-10 mt-2 w-40 rounded-md border bg-popover p-1 text-popover-foreground shadow-md"><button class="menu-item block w-full rounded-sm px-2 py-1.5 text-left text-sm hover:bg-accent">Edit profile</button><button class="menu-item block w-full rounded-sm px-2 py-1.5 text-left text-sm hover:bg-accent">View activity</button></div>
                </details>
                <button class="dialog-trigger rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90" @click=${() => (this.dialogOpen = true)}>Open dialog</button>
                <button class="toast-trigger rounded-md border bg-background px-3 py-2 text-sm font-medium hover:bg-accent" @click=${this.showToast}>Show toast</button>
              </div>
              <p class="tooltip-hint mt-5 text-sm text-muted-foreground" title="This browser-native tooltip offers supplementary context.">Hover here for a tooltip.</p>
            </article>

            <article class="component-card rounded-lg border bg-card p-6 text-card-foreground shadow-sm lg:col-span-2">
              <h2 class="component-title text-lg font-semibold">Table</h2>
              <p class="component-copy mt-1 text-sm text-muted-foreground">A compact data display for recent activity.</p>
              <div class="table-wrap mt-5 overflow-x-auto rounded-md border">
                <table class="activity-table w-full text-left text-sm"><thead class="bg-muted/50 text-muted-foreground"><tr><th class="px-4 py-3 font-medium">Invoice</th><th class="px-4 py-3 font-medium">Status</th><th class="px-4 py-3 font-medium">Method</th><th class="px-4 py-3 text-right font-medium">Amount</th></tr></thead><tbody><tr class="border-t"><td class="px-4 py-3 font-medium">INV001</td><td class="px-4 py-3"><span class="rounded-full bg-secondary px-2 py-0.5 text-xs">Paid</span></td><td class="px-4 py-3 text-muted-foreground">Card</td><td class="px-4 py-3 text-right">$250.00</td></tr><tr class="border-t"><td class="px-4 py-3 font-medium">INV002</td><td class="px-4 py-3"><span class="rounded-full border px-2 py-0.5 text-xs">Pending</span></td><td class="px-4 py-3 text-muted-foreground">Bank transfer</td><td class="px-4 py-3 text-right">$150.00</td></tr></tbody></table>
              </div>
            </article>
          </section>
        </div>
        ${this.dialogOpen ? html`<div class="dialog-backdrop fixed inset-0 z-20 flex items-center justify-center bg-foreground/20 p-6" role="presentation"><section class="dialog-panel w-full max-w-sm rounded-lg border bg-card p-6 text-card-foreground shadow-lg" role="dialog" aria-modal="true" aria-labelledby="dialog-title"><h2 id="dialog-title" class="text-lg font-semibold">Continue with changes?</h2><p class="mt-2 text-sm text-muted-foreground">This is a shadcn-style confirmation dialog.</p><div class="dialog-actions mt-6 flex justify-end gap-2"><button class="cancel-button rounded-md border px-3 py-2 text-sm font-medium hover:bg-accent" @click=${() => (this.dialogOpen = false)}>Cancel</button><button class="confirm-button rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90" @click=${() => { this.dialogOpen = false; this.showToast() }}>Continue</button></div></section></div>` : null}
        ${this.toastVisible ? html`<div class="toast-message fixed bottom-6 right-6 z-30 rounded-lg border bg-popover px-4 py-3 text-sm text-popover-foreground shadow-lg">Your changes have been saved.</div>` : null}
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
