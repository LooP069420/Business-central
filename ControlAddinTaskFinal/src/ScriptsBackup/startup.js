var addin = document.getElementById('controlAddIn');

addin.innerHTML = `<div class="wrap">
        <div class="eyebrow">Click & Explore Mobile WMS</div>
        <h1>Features for Microsoft Dynamics 365 BC/NAV</h1>
        <p class="sub">Feel free to click and explore each of our Mobile WMS features for BC/NAV. Experience the intuitiveness of our user‑friendly interface through a simple demonstration of each feature.</p>
        <section class="grid">
            <article class="feature" tabindex="0">
                <div class="icon">
                    <svg viewBox="0 0 64 64" width="44" height="44" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="10" width="44" height="30" rx="6" fill="#34d399"/><path d="M18 24h28v4H18z" fill="#064e3b"/>
                        <path d="M32 40l-6 10h12z" fill="#22c55e"/><circle cx="52" cy="48" r="8" fill="#fbbf24"/>
                    </svg>
                </div>
                <div>
                    <h3>RECEIVE</h3>
                    <p>Register and control received items. Supports lot-/serial numbers and expiry dates.</p>
                </div>
            </article>
            <article class="feature" tabindex="0">
                <div class="icon">
                    <svg viewBox="0 0 64 64" width="44" height="44" xmlns="http://www.w3.org/2000/svg">
                        <rect x="18" y="12" width="28" height="22" rx="3" fill="#fbbf24"/><path d="M18 36h28v6H18z" fill="#78350f"/>
                        <path d="M20 44h24l-4 8H24z" fill="#60a5fa"/>
                    </svg>
                </div>
                <div>
                    <h3>PUT AWAY</h3>
                    <p>Assign a bin to the received items.</p>
                </div>
            </article>
            <article class="feature" tabindex="0">
                <div class="icon">
                    <svg viewBox="0 0 64 64" width="44" height="44" xmlns="http://www.w3.org/2000/svg">
                        <rect x="20" y="10" width="24" height="34" rx="3" fill="#fde68a" stroke="#111827" stroke-width="2"/>
                        <path d="M24 20h16M24 26h16M24 32h16" stroke="#111827" stroke-width="2"/>
                    </svg>
                </div>
                <div>
                    <h3>PICK</h3>
                    <p>Picking of single or consolidated orders.</p>
                </div>
            </article>
            <article class="feature" tabindex="0">
                <div class="icon">
                    <svg viewBox="0 0 64 64" width="44" height="44" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="24" r="10" fill="#60a5fa"/><circle cx="44" cy="40" r="10" fill="#34d399"/>
                        <path d="M28 30l8 6" stroke="#111827" stroke-width="3"/>
                    </svg>
                </div>
                <div>
                    <h3>MOVE</h3>
                    <p>Perform planned, unplanned, and bulk movements of items.</p>
                </div>
            </article>
            <article class="feature" tabindex="0">
                <div class="icon">
                    <svg viewBox="0 0 64 64" width="44" height="44" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 40h24l-6 8" fill="#f59e0b"/><path d="M32 16h24l-6 8" fill="#60a5fa"/>
                        <circle cx="10" cy="42" r="3" fill="#111827"/><circle cx="34" cy="18" r="3" fill="#111827"/>
                    </svg>
                </div>
                <div>
                    <h3>UNPLANNED MOVE</h3>
                    <p>Perform unplanned movements of items.</p>
                </div>
            </article>
            <article class="feature" tabindex="0">
                <div class="icon">
                    <svg viewBox="0 0 64 64" width="44" height="44" xmlns="http://www.w3.org/2000/svg">
                        <rect x="8" y="26" width="16" height="16" rx="2" fill="#a7f3d0"/>
                        <rect x="24" y="26" width="16" height="16" rx="2" fill="#6ee7b7"/>
                        <rect x="40" y="26" width="16" height="16" rx="2" fill="#34d399"/>
                    </svg>
                </div>
                <div>
                    <h3>BULK MOVE</h3>
                    <p>Perform unplanned bulk movements. Allows you to move all from one bin to another.</p>
                </div>
            </article>
            <article class="feature" tabindex="0">
                <div class="icon">
                    <svg viewBox="0 0 64 64" width="44" height="44" xmlns="http://www.w3.org/2000/svg">
                        <g stroke="#111827" stroke-width="2" fill="none">
                            <rect x="12" y="12" width="40" height="40" rx="6" fill="#e5e7eb"/>
                            <path d="M20 24h24M20 32h24M20 40h24"/>
                        </g>
                    </svg>
                </div>
                <div>
                    <h3>COUNT</h3>
                    <p>Perform planned counts.</p>
                </div>
            </article>
            <article class="feature" tabindex="0">
                <div class="icon">
                    <svg viewBox="0 0 64 64" width="44" height="44" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="10" width="44" height="30" rx="6" fill="#e5e7eb"/>
                        <path d="M16 22h20" stroke="#111827" stroke-width="2"/>
                        <circle cx="50" cy="44" r="8" fill="#f43f5e"/>
                    </svg>
                </div>
                <div>
                    <h3>UNPLANNED COUNT</h3>
                    <p>Perform unplanned counts.</p>
                </div>
            </article>
            <article class="feature" tabindex="0">
                <div class="icon">
                    <svg viewBox="0 0 64 64" width="44" height="44" xmlns="http://www.w3.org/2000/svg">
                        <rect x="12" y="28" width="18" height="12" rx="2" fill="#cbd5e1"/>
                        <rect x="30" y="22" width="18" height="18" rx="2" fill="#94a3b8"/>
                        <circle cx="52" cy="48" r="8" fill="#ef4444"/>
                        <path d="M48 48h8" stroke="#fff" stroke-width="2"/>
                    </svg>
                </div>
                <div>
                    <h3>ADJUST QUANTITY</h3>
                    <p>Complete a negative adjustment and provide a reason code.</p>
                </div>
            </article>
        </section>
        <p class="note">This is a simplified, educational clone created with a single JS file (HTML + CSS injected at runtime).</p>
    </div>`

addin.querySelectorAll(".feature").forEach(function (tile) {
    tile.addEventListener("click", function () {
        var featureName = this.querySelector("h3").innerText.trim();
        if (window.Microsoft && Microsoft.Dynamics && Microsoft.Dynamics.NAV) {
            Microsoft.Dynamics.NAV.InvokeExtensibilityMethod("OnTileClicked", [featureName]);
        }
    });
});