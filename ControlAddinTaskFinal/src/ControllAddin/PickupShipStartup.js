var addin = document.getElementById('controlAddIn');

addin.innerHTML = `
    <div class="wrap">
        <section class="grid">
            <article class="feature" tabindex="0">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="80" height="80" viewBox="0 0 80 80">
                    <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAyZJREFUeF7t2rtuFDEUBuDjUNJQ0AeRKjQ8QSCUSFsE0nMRBUIKCBERQLnMOEq4Cd4hiDqIYp8gvEDSJC3bQ5EmgmI54F1m2Wzm6uOdcfBvaTufGe83x/YZ7ypCEwkoUTSCCYDCJAAgAIUCwnBkIACFAsJwZCAAhQLCcGQgAIUCwnBkIACFAsJwpxm4vXkrIlax9ZhY6fnVLfv4ijd2MV5ngC4Gc9rwzHidAIaKZxJeDBgynhgwdDwRoBRvemaODr58rrjs23efvjJHBzuC+2VscFZT2AWe+UJ1NfOgxoFnlYHAO/7YK2Ug8E7OmdKAwEtfcEoBAi97tS4EBF7+VpcLCLziOiETEHjFeJllDPDK4aUCAq883gnA0PDM6+SlqzcKN9I80kFwiHiTl2fo7LnzcsBQ8XY+vqLrD9/LAEPGOzr8RvMrH2SA1ZbMf72ZmW1jm4w7OvxOJvMMnmmNAW5v3G4M8ObyFn3avOPkOQBQyAhAAFYXwBSubnYsAoAAJMIu3M8C6yISgABEIS1cSgEIQEsBlDGWcEkYAH0BdPCP2HDLGAd44daBjvBqBTTrlk1LO/cTrYEO8cIDdIwXFuAY8MIBHBNeGIBjxPv/AceM5zNgh4hmlVJfbXbuOmNqK6QrlDE9PK313TiOoz+fxn4+zXkQOu63Nd8AE7x7RLQSx7HyELCHp7VeZeb12gCLpxV3Js5MzO79vHCfiJ6b/h4CJnjLzLxR6xqYDzjAe0BES0lfzwATvBfM/DIZowcZ2Mfb/TG5oJRaHIb2CDDBe8bMr4fH2DAgd7rM1/a7U4+I6PFolnoC2MOLomhJKfVmdIyNAnb518X97tQTIlpIm+IeACaZ95SZ36aNsVFA6R97ijcmeQ+t9SIzv8u6kjWgfGj9K3hYpgy+WpkZ4AVgFEWunoez62itS5VRAMwgB6AwFwEIQKJ2uy1kKA5vtVqpnZCBxXa5PQBYD6DGLmy/C/feUrwG9HgN7OGJjrOEM2S42ufTVEgrpczBghYfZ4UIOIqHDMzJgtFdOA0PgOUBzY9b606Ps1xOYVfXcn2dv6cxa1l45n6/AcCjCH5RB8+hAAAAAElFTkSuQmCC" x="0" y="0" width="80" height="80"/>
                  </svg>
                </div>
                <div>
                    <h3>Warehouse Pick</h3>
                </div>
            </article>
            <article class="feature" tabindex="0">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="80" height="80" viewBox="0 0 80 80">
                    <image xlink:href="data:image/png;base64,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" x="0" y="0" width="80" height="80"/>
                  </svg>
                </div>
                <div>
                    <h3>Place & Register</h3>
                </div>
            </article>
            <article class="feature" tabindex="0">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="80" height="80" viewBox="0 0 80 80">
                    <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAB4hJREFUeF7tnH1sFGUex7/PTquyd6gJXsjFBC/kDNA/MMEgp6KE3pE7DEEO7LIUQiiIbotwxyHb2qT02VsCdPEFjmNbCLYQne4KWJTekYjwh/iKqFEbj1YvyCioBIhtKNRuO/McD3TJuuyzO7Mzpd3eM3/u/H7Py2d+b/PMPg+BvEwR8DfWPQMXm4zevCdDC5aeiisRU9r/50L+aN1sMLYXAOd1hrkwZ+Pc0nc5Fgkwg3FUqOHRhot8AuC2BNEYI2z5Rm/ZdgkwDcDlB/5x87CO/PcATEglRsCekgDTAFwdqQ0ToFQsQkptAaSUsoEOj4yxuwKBwDdOj6M8WutlDJE07e4PeX2zbAOsrq52euym2wsEAsjPz7/U09MznVJ6xLRiBkH/7vAY9JJjIBguEP2KKK6JNZ4nO3Ie4KJFi6CqqmMQafM296VO430A4wXwLhmM3f9scdnntrMwd+GBtkDev6ZpjkH0R8I7ALJEaKQEC0LeUtWROnCwAOSTcQLi6mjdQsLYLhE8QtiWGm/ZisT7Oe/CfR7wI4DTmqYVqKr6UzYx0R/dOg7M9REAtwDge25lxFTq8cSGGsB9ABYSQjoZY4WapjWrqgorEHnc67pgHGMEBQJ4Z3oU3PuCp/R08v1ct8CtBUVFf/u45a1nwchsg7hmhuY+8WtN05pUVe01C7G8MbyLEbJQAE8nLlJYM9eXMsvnKkBef1YGdu7c1DXsp5cZw5y+yZ91KcYD64vKJmqa9pKqqt26rj+yZs2at0RxzR+pWwKwHeK4R1bVeH3PC+/bqZ1ESWRm8A07zf5Md3/VH1O1tWrlzk31N91yy2sApiQJaNDzJtfMf3yGpmlhVVW7RBCfbgyPdxHCSxZR3Nsb8vo8IET4wpCrFji8PFp3AMBDKZ8UQYvSrU9dt3DZUk3T1vM6MRmi//UXh+NijBfLYwRP+zjcN00KPbrkQjpryFWAU8ujtT6AzBW7Fjs67JdKYfWMJ6o0TatIhuhvrI2AwJtSn+ECXMakkHfZ8UyulKsAT504e6pw++HmlxjIJDFEcvDO20bNXD59+iZN03yqqrb39PTc1TV25HzGEBboMYB4QvN8fP0v45WrAPnEvqj853OP6Xf8ohnAb0UzZUDjxPEPlxQVFDScPHnyWPjowSOEGXyJ6ubU1seeDxWXrcpIrk+gXwDegCRyZfiBQODoiAcLln577vxhAL9KA7E25PX9pWLPdjfTDb44Olrguke+zhtRuMfj0QcUoNnO7crx1Zjq6ur9lXvqN+h67FCabAoCspbBKADI7FT9EuC0wvLuXVe89IyVcfWLBVoZgB3ZPoC8ie0Vr2w7wBh7FYCSRZsxAmNqzbxl3LUtXTkPMGG2G7rGjvwmTXIQgmGMrNhY7NtiiVx/xsBsBuKQTpk/UjeKEFSYbo9BDRWXLjAtnyTYLxZ4o5JIiknrOjCnMlJXBIL5JqB87v6h/VG68pmTJmRTivQLwGwH45Be98Xu7pl/31e/EiB/StNmx+3Dhj8Q+/S/dZTSh7PteygC5Cw6fjh/ftqmN3dvERTaDGCzarylvw8EAisopVlzyFqRj3KgV6QzWM2pd778YkbzJ2/zN4qfFdoEWLfB6/sSwE6eySVAMcnjje+/segz7et/xQttAnJwzZzFle78fL6+55YAMwevo+ubI+XtFzv46s25KeMmTHvknvv4ettvuOqgBNjQ0JB5WjdWYn+bO1af58r7fm3RkrUApsW7H7QAS0pKHEHEH4YTbTU0NOwoKSnhH59WJw5MAjT5mEQPQgKUANMTcNCFU4YCaYHSAqUFXkfAKbfjDTvVlkwiJl1VJCYBSoDZEZAunB23a1oSoAQoJiBaD3TKamQWtml9EqAEmJ6AdGGbmw0lQAlw8C7pO7GKLJOITCIDk0QIIba+Vzvw3Ew3YWug/ZVEOEB/pPaGb6UNzbO+/VcCTLA1CdC046UWlAAlwKsEZAy0+W8CCXCIAaSU5lFKe1NFCJmFk7Kw4CQSDu8EgLcBRCmlfEvF1XBjJ+4OxTrQ5FEu/wbgoZRekgAFFhg/TMMwDMRiMXR2dqK1tRWHD/NNUVeuzZTSv0qAGQAme2hTUxNaWlr4z+cAjJQALQJsa2tDNBqNa90tAVoE2N7ejs2bN8e1/iwBWgTIY2IwGIxrLZcALQLk4vw/hX3XegnQXB0oqvZ29RtAO/Xl4sWLB2w90GQdGJ/eoX4BaAfelep+ABdULQL8UAK83oV7APBXtfiJHeMA/AFAXgrDaJUAkwAGg8G7q6qqvkqExX/Tdb3+MtjJSRC/kwCvEWHvhOaVPdQHa0Of1fG7hxRFqdB1Xbt80A9/j7sGkTE2OE+wHIAY2MsMUnDribMuXdc/AHB7kqW1K4ryOwCGruv/SXBnw7YF2k0YqfTtbD+1Mx5KKT+0IuWpHpePBG2ilMYPObvWjS2AdgZrRZdS2gHgVoFOJ6VUdFislW74vmHL/UiACYiHMkDLrmXJ9PqEh7ILjwXAz/m7LrgDuJ9S2poNsGQdSqnlfnLChflEg8HgGF3X1yVsln5TUZTKqqqqNifgxduw2s//ABuvcwmiooUeAAAAAElFTkSuQmCC" x="0" y="0" width="80" height="80"/>
                  </svg>
                </div>
                <div>
                    <h3>Item Ready to Ship</h3>
                </div>
            </article>
    </div>`;

addin.querySelectorAll(".feature").forEach(function (tile) {
    tile.addEventListener("click", function () {
        var featureName = this.querySelector("h3").innerText.trim();
        if (window.Microsoft && Microsoft.Dynamics && Microsoft.Dynamics.NAV) {
            Microsoft.Dynamics.NAV.InvokeExtensibilityMethod("OnTileClicked", [featureName]);
        }
    });
});