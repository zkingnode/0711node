{
  "source": "doc/api/tty.markdown",
  "modules": [
    {
      "textRaw": "TTY",
      "name": "tty",
      "stability": 2,
      "stabilityText": "Stable",
      "desc": "<p>The <code>tty</code> module houses the <code>tty.ReadStream</code> and <code>tty.WriteStream</code> classes. In\nmost cases, you will not need to use this module directly.\n\n</p>\n<p>When Node.js detects that it is being run inside a TTY context, then <code>process.stdin</code>\nwill be a <code>tty.ReadStream</code> instance and <code>process.stdout</code> will be\na <code>tty.WriteStream</code> instance. The preferred way to check if Node.js is being run\nin a TTY context is to check <code>process.stdout.isTTY</code>:\n\n</p>\n<pre><code>$ node -p -e &quot;Boolean(process.stdout.isTTY)&quot;\ntrue\n$ node -p -e &quot;Boolean(process.stdout.isTTY)&quot; | cat\nfalse</code></pre>\n",
      "classes": [
        {
          "textRaw": "Class: ReadStream",
          "type": "class",
          "name": "ReadStream",
          "desc": "<p>A <code>net.Socket</code> subclass that represents the readable portion of a tty. In normal\ncircumstances, <code>process.stdin</code> will be the only <code>tty.ReadStream</code> instance in any\nNode.js program (only when <code>isatty(0)</code> is true).\n\n</p>\n",
          "properties": [
            {
              "textRaw": "rs.isRaw",
              "name": "isRaw",
              "desc": "<p>A <code>Boolean</code> that is initialized to <code>false</code>. It represents the current &quot;raw&quot; state\nof the <code>tty.ReadStream</code> instance.\n\n</p>\n"
            }
          ],
          "methods": [
            {
              "textRaw": "rs.setRawMode(mode)",
              "type": "method",
              "name": "setRawMode",
              "desc": "<p><code>mode</code> should be <code>true</code> or <code>false</code>. This sets the properties of the\n<code>tty.ReadStream</code> to act either as a raw device or default. <code>isRaw</code> will be set\nto the resulting mode.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "mode"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "textRaw": "Class: WriteStream",
          "type": "class",
          "name": "WriteStream",
          "desc": "<p>A <code>net.Socket</code> subclass that represents the writable portion of a tty. In normal\ncircumstances, <code>process.stdout</code> will be the only <code>tty.WriteStream</code> instance\never created (and only when <code>isatty(1)</code> is true).\n\n</p>\n",
          "events": [
            {
              "textRaw": "Event: 'resize'",
              "type": "event",
              "name": "resize",
              "desc": "<p><code>function () {}</code>\n\n</p>\n<p>Emitted by <code>refreshSize()</code> when either of the <code>columns</code> or <code>rows</code> properties\nhas changed.\n\n</p>\n<pre><code class=\"js\">process.stdout.on(&#39;resize&#39;, () =&gt; {\n  console.log(&#39;screen size has changed!&#39;);\n  console.log(`${process.stdout.columns}x${process.stdout.rows}`);\n});</code></pre>\n",
              "params": []
            }
          ],
          "properties": [
            {
              "textRaw": "ws.columns",
              "name": "columns",
              "desc": "<p>A <code>Number</code> that gives the number of columns the TTY currently has. This property\ngets updated on <code>&#39;resize&#39;</code> events.\n\n</p>\n"
            },
            {
              "textRaw": "http://npm.taobao.org/mirrors/node/latest/docs/api/ws.rows",
              "name": "rows",
              "desc": "<p>A <code>Number</code> that gives the number of rows the TTY currently has. This property\ngets updated on <code>&#39;resize&#39;</code> events.\n\n</p>\n"
            }
          ]
        }
      ],
      "methods": [
        {
          "textRaw": "tty.isatty(fd)",
          "type": "method",
          "name": "isatty",
          "desc": "<p>Returns <code>true</code> or <code>false</code> depending on if the <code>fd</code> is associated with a\nterminal.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "fd"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "tty.setRawMode(mode)",
          "type": "method",
          "name": "setRawMode",
          "stability": 0,
          "stabilityText": "Deprecated: Use [tty.ReadStream#setRawMode][] (i.e. process.stdin.setRawMode) instead.",
          "signatures": [
            {
              "params": [
                {
                  "name": "mode"
                }
              ]
            }
          ]
        }
      ],
      "type": "module",
      "displayName": "TTY"
    }
  ]
}
