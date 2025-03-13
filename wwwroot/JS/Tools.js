// wwwroot/js/isolateContent.js
function initShadowDom(containerId, content) {
    const container = document.getElementById(containerId);

    // 将 Markdown 转换为 HTML
    if (container) {
    const htmlContent = marked.parse(content);
        if (container.shadowRoot) {
            container.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    height: 100%;
                    overflow-y: auto;
                }
            </style>
            <div>${htmlContent}</div> `// 更新内容
        } else {
            const shadowRoot = container.attachShadow({ mode: 'open' });
            //shadowRoot.innerHTML = htmlContent; // 初始化 Shadow DOM
            shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    height: 100%;
                    overflow-y: auto;
                }
            </style>
            <div>${htmlContent}</div>
        `;
        }
        container.shadowRoot.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
    }

   
}