var addin = document.getElementById('controlAddIn');

addin.innerHTML = `
    <div class="wrap">
        <section class="grid">
            <article class="feature" tabindex="0">
                <div class="icon">
                       <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="80" height="80" viewBox="0 0 80 80">
                    <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAABVpJREFUeF7t209s21QYAPDv2c2fdqiNuk2K0LoxISQIB1QuiJUhVQJtUhmCFgRr0WiFuCA4UDYpkCax0xUaVZRqY1faabQSf8pggwq0XtDotA2JHlhRD9VQ6WF0VJ0aWJc0tY2cJVWaJfazn+3ayfP1vc/P/vl773NsBwHdiAQQUTQNBgpImAQUkAISChCG0wykgIQChOE0AykgoQBhOM3AcgOcOPGO504i8S0AHCQ8N/VwCfFt4RFOvWPpHrbKQCvxWNbVty6mLr4UOvNTWQBaiffI/hfA59994/LXJ7e3hkY8jge0Gq9+14Nw+asTIKynoa3nNNEsJAomuXK52K3Ek4/B0YDDXKe3tko6a0XBkKdtfublLqBjAe2A59gMtAueIwHthOc4QBlv+33VF9LJ1aeMKEBK+yi15hXGOG4NlCRJMhtP3v/i9d83blWUxnMc4Pjx100HbA2NwHfxNzP3eWobBSwiJAN+09epZpdpp4AUECtRNHWiGaiJ697OFJAClhawqgrTIkKQhXQKE+DJoRSQAtI1kDAHKOCWAMprl56tsOJW7BpY0YDjfUeiICGil9RWA+7Y8zAszc8WS3oJEBxrC53+WG1GGPJWzgi83O2H2gEXa9czhUvhIYYF/95HP9p3+L0PcI6FGNAoPCsBS+GxLjc88eJb4H/osfTF0fjPT7/2/rNqiESARuJZBVgKz129Dfa98i74/A/Ab99/Bn9du4T1rFA3oNF4VgCWwquurYemw0ehprYerox/CovXr2E/bNUFaAae2lTR0l7sNqYUXu2O+zN4DFsFl774BG7d+HNjKJyn1ZoB7Y6Xy+Szxzs/RxIM/Vstzh45dua2lgugpa8mQCfgZQF/QAg9x3HcQa/XywmCEEin09sAgNGCU6Sv5HK5/mNZ9o9UKhWORqMXsAGdgpcFPMTz/DJC6JempibU2NgIdXV1wLIskZ8gCLCysgLT09MwNTUlSpK0Hwvwx1NHT96+9c/bRKNbGNwaGtk9MDBwKhAIHGppaTFl5ImJCZiZmTmPBWjVy3ADz9QXj8dn29vb/Q0NDXD+6jycuzIPS4kkCKK+19JVLAM767zQ+uReOPD4LlhYWICxsbG/sQDt9hheDXppp8d982ZDoru721tTUwMv909CKi2ohWG1e10sfBl8BlZXV2FwcDBZloDy7QfHcWIkEkEIIXi+l+gz6Htgz4UPgPyFSiwWw/u3ptMyMAsoRaPRzMmbASjvl+d5Cog1bws6yRlIAfXIZWMqDpDASjG0YqYwBdQoUFhENIZjd6+YDBwdHYW1tbVNMG63Gzo6OkCprb+/H1Kp1KY4j8cDwWCwsorI8PBw0azq6uoCpTY5w4ptudujislACoi9Kt3tWLgG6p3C8XgcksmkuVPY6leROOPJv984jtv4JaLRH7u7IVMY54SKHZGeV5HyfnDGo4AKOaAHUO8UtqQK45zQVmQgz/PrkUgk8wja1kXEroC9vb13enp6vBSwIH1xLpi8BuYD6p3CFV2F8wGxy6rGjoZUYY1jluyu5Zs+tTHl+0AKqKak0F4IqHcKW1KFCc5zU6iZGWjrKkwBMQSc+FLJVlUYw9h2XWxVRGyng3FAFBADSalLPqBSNdXbJo+NfR9IeC5bEp4PqPRkWW8bBQQA+dE8BSyR3/kZqPSbVm9b2WdgLBZLhcNht1nrh6aPi8w6CDP3y3GcEAwGGfk1pBlbIpGAoaGhdazP28w4ALP3GYvFFgOBQH1zc3OVz+cDhiH9PPruEYuiCMvLyzA5OZmem5u7WraAHMe9yrLsh6Io7pEkyRi97FVnGGYNIfQrALzxP4CmPfOOuIDmAAAAAElFTkSuQmCC" x="0" y="0" width="80" height="80"/>
                  </svg>
                </div>
                <div>
                    <h3>Warehouse Adjustment</h3>
                </div>
            </article>
            <article class="feature" tabindex="0">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="80" height="80" viewBox="0 0 80 80">
                    <image xlink:href="data:image/png;base64,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" x="0" y="0" width="80" height="80"/>
                  </svg>
                </div>
                <div>
                    <h3>Warehouse Put Away</h3>
                </div>
            </article>
            <article class="feature" tabindex="0">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="80" height="80" viewBox="0 0 80 80">
                    <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAABGdJREFUeF7t2s9rFEkUB/BXPQrrRbx5kGVhQRBBPEVzNTGbVieJIkQFL7L+gt2Drvhbu6s6wR9BVDz6FwjenJEkKqwXL2LcFQXB66KuWV3Qk0gyz5R0YByrf/lmpirDa8ip+9VUf/Kt7pqaEsAHSUCQqrkYGJAYAgZkQKIAsZwTyIBEAWI5J5ABiQLEck4gAxIFiOWcQAYkChDLOyaBA9HEFQA4lOJxuBL4V4le35QvfEBEMTAyeTkFDwHgj1bgac1CgFJKJaUM5/50p2wf/wHAximve48tvEKAUsoRADgzhygcAJwGgN4pr/tXm3i5AaWU5wHghC5wAPDNrOf1/g3r9trGywUopbwIAMfmx6tlwH/j5O1zAS8TMAzDS0KII/UPO4uAr2dKpd4n2LXfFbxEQEQUSinjm80S4Ks4eQdcwjMCxnjXAOB302vWAuDLOHkHM+Z5RWYF7wDgBQA+QE/crJ7xHxYprr+20DTmez+EVJc9zyM1Hxf/JQDHbgWbbhRtzAjowDQFEPEfIUTPlNf9WxOTl+Uz/qkGuyel/3/WhfPnEwHDMMzbRquu08+9nqFoYhcK0bbOIIins4tme8dPbdYT9czDZUDd+dcx4s72IsKfS1Z96Ls5PDybJeg6oO6/nvttGIom2ooIIA5Ugv7rnQA4j6iH8460JKIQsnq2X2Xd9BZ572fPmxmMv10tN18vXv6w6v1PWSksnMBqtZrVP/L5crlsauONUqrnsVg/3AxE/QHl0coKUVt8GwDWmj5QoPjlVth/N+2GCgOSdQgNKKWmpZTLB9W4bBbi0Ojkj7UaPgOApYauXa0E/uFOAvyymBFF0ZpH2LW9WYgp/5D7lcDf0HGAUsppz/P6HmHXtmYglkfurBRYe2GAel4J/NVNBbT4DASlVP1y2lsA6Hss1m9tBuJANGFaJH5VCfwVTQUkPMLIpQ2A+tvKu1KppJM4REU0ASLA+2rgL+tYQH1jiHhcKTVGfbEkJPBjJfCXdCygEEKGYZg57yNHP6WBhTaNqX8G6h+3olbi5Gnb2dWYpM7H65GBC3i6j+6vB+aJgcVrGJCIz4AMSBQgljuRQMe2jDSS6u0s+jC+uKwDOrZlxIinlDqLiJGeATReYBXQsS0jSXinEXFUn3QK0LEtI0l4JxHx3PxJZwAd2zKShHccES/Un7QO6OCWESNeGIbHhBB6U9VXh1VAB7eMJCXvKCKOmWY3VgGJ0622lCuljiDipbTv4Vbfwi5sGclYpEjdumw9gRrQgS0j3xg2rnQ7nUAGJDyNOIEEvHgmz0OYYpiWQId+Lk28RX6JJNDwS4QyLOZ+18gJ+GVZy/o8cIG+hY14GrOty1kL9BmYiOcUIHEUksqThnCeH+6dSSBJgFhsAsyDxwmM4RsB8+IxoBmw0JaRtg9h4mhrWfn3bhlpK2DL7t5iwwxIxGdABiQKEMs5gQxIFCCWcwIZkChALOcEMiBRgFjOCWRAogCxnBPIgEQBYjknkAj4GS+puG9MemG2AAAAAElFTkSuQmCC" x="0" y="0" width="80" height="80"/>
                  </svg>
                </div>
                <div>
                    <h3>Warehouse Reclassification</h3>
                </div>
            </article>
            </article><article class="feature" tabindex="0">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="80" height="80" viewBox="0 0 80 80">
                    <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAlJJREFUeF7t3FuOgjAAheGSuDy3pFDdki+uTROd4mXGsfTCqaY0v69yuHwcoBiw22w2F1PJZ7/fd5WsSvJqdA5wt9slBz414Xa7NQAKugAKeC4KIICigBingQCKAmK82Qaez2dzufiHiqvVynRdmaFbs4DH49GcTqesfq3X66zpuQpnc70Hmm1gAZukWQCYxDQ9EYAAigJinAYCKAqIcRoIoF/gcDiINLd4bHBNA0VmAAEUBcQ4DQRQFBDjNBBAUUCMN9tAxoHhZvBkgnjkAAigKCDGaSCAooAYp4EAigJiPNpAxoGMA8WOAQjgRwXEmUfPgeL8k+PN/piQLCBOCCCAooAYp4EAigJi/NHAYRiqefXMGGOHYRistX3f99a3idVdhSsCfOL9PCPuHL0Pg4+AYnmKxd27cpUAvuC5DZwELLb1hWZUAeAbXnFAd05wtf5r5vZQBRuv7kYvXlFAH95jAQsHnMQrBjiF1wBgEK8IYAhv4YBRPBkwhrdgwCQ8CTAFb6GAyXizAVPxFgiYhTcbUB0T1JzPKcdswIUPSyb335wx66w7EQfY933NRcpeN2vteFuWWw4A79QAZnfuNQAggKKAGKeBrQGWenZGdHnGY+/k0UBReibgeOfiW3TwT18YB45kk3juSwDDjQ7iASjiFQFs9CISbd7DnkP4vYXJeEUaKF4Uvx6PXIWz8AD8d5s8NVQJ7WUO4ZtOdvM4B/4+xDQbj0NYaF5yA79+lv/CAu+/SLtTnvf2LGcVyvx/Z84SG5sWQHGHAgigKCDGaaAIeAUDGfFvw9VYOwAAAABJRU5ErkJggg==" x="0" y="0" width="80" height="80"/>
                  </svg>
                </div>
                <div>
                    <h3>Item Bin Content</h3>
                </div>
            </article>
            <article class="feature" tabindex="0">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="80" height="80" viewBox="0 0 80 80">
                    <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAjZJREFUeF7t211SgzAUBWB4YB1uwI3oEvyZ6UIEktGdKO5DN+LgInxhACfOqIyt5XIPaSCcPuck9OOGpkmbJnxBAimUZjghIFgEBCQgKADGoQo0xvTg+HC87/sza+073JGyAxiwLEvl0HjMWptkWfbRNM2FMeYV73F6D6sH3O12SVVVwRBXD+hmQF3XwRCjAHQTLxRiNIChEKMCDIEYHeCpEaMEHCK2bXtZFMXL9AWKLBEt4KkQowY8BWL0gL4RNwHoE3EzgL4QNwXoA3FzgHMjbhJwiNh13Xme52+yVd9+q9UDat/4MGeMUTuog+4C3I50yA3VOfDcpiwBAUkCAnguSkACggJgnBVIQFAAjLMCCQgKgHFWIAFBATDOCiQgKADGWYEEBAXA+KYrME1TaDsOtP+KQxcQej/QAT7eXc3+K9nbh2exi7jhobtFQFbgwVnMCgQfbgQkoEyAHyIyp39bEZCAYc+FWYGswOVX4M19JbpNT/n1TzsuYwZkBDxSP5JnIAEJKHoEqRqxAlVsvyEJoGYIfoho1AYZAhJQJsApLHPiZsIUpyUcFE263imN/7b1cSbic1r6OIBa3KESAZGSduesHo8qWYHAzXFrOwIScFyAU3jc6GgLAhJQLsB14AJ/G8MpLC/ggy0lgNpt+rFljKbfVX4T0bxRyTpQ0y8BwRM8AoYGBB95e3H393sfz6pFTuG58b77GwPUjCsB1PQLTWHNgJIMASVKR9oQkICgABhfUwV+AtLFId6h/EDjAAAAAElFTkSuQmCC" x="0" y="0" width="80" height="80"/>
                  </svg>
                </div>
                <div>
                    <h3>Physical Inventory</h3>
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