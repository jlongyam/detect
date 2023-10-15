{
  let style = `
    .result-log,
    .result-script {
      font: 1em ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace;
      padding: 1em;
      background-color: black;
      color: silver;
      border-top: 25px solid gray;
      margin: 0 0 1em 0;
      position: relative;
    }
    .result-log::before,
    .result-script::before {
      content: 'Result:';
      position: absolute;
      top: -25px;
      left: 0;
      height: 25px;
      display: inline-flex;
      align-items: center;
      padding: 0 .5em;
    }
    .result-script::before { content: 'Source:'; }
    .result-demo {
      margin: 0 0 1em 0;
    }
    .result-script {
      display: block;
      background-color: silver;
      color: black;
      white-space: pre;
    }
    #result_area {
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, Cantarell, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
      padding: 5%;
      line-height: 2em;
    }
  `
  document.head.appendChild(Object.assign(document.createElement('style'), { textContent: style }))
  document.head.removeChild(document.currentScript)
}
let result = {
  createWorkSpace: () => {
    let workarea = Object.assign(document.createElement('div'), { id: 'result_area' })
    document.body.appendChild(workarea)
    return workarea
  },
  html: (strHTML, cb) => {
    let div = Object.assign(document.createElement('div'), { innerHTML: strHTML, classList: 'result-demo' })

    if (document.querySelector('#result_area') === null) {
      let workarea = result.createWorkSpace()
      workarea.appendChild(div)
    }
    else {
      let workarea = document.querySelector('#result_area')
      workarea.appendChild(div)
    }
    if (cb) cb.call()
  },
  source: false,
  js: (strInput, cb) => {
    let output = Object.assign(document.createElement('pre'), { textContent: strInput, classList: 'result-log' })

    if (document.querySelector('#result_area') === null) {
      let workarea = result.createWorkSpace()
      workarea.appendChild(output)
    }
    else {
      let workarea = document.querySelector('#result_area')
      workarea.appendChild(output)
    }
    if (cb) cb.call()
    if (result.source) {
      if (document.currentScript.getAttribute('src') === null) {
        let workarea = document.querySelector('#result_area')
        workarea.insertBefore(document.currentScript,workarea.children[workarea.children.length])
        document.currentScript.classList.add('result-script')
      }
    }
  }
}

