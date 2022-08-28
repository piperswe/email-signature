import * as React from "react";
import { renderToString } from "react-dom/server";
import { stat, mkdir, writeFile } from "node:fs/promises";

import BlinnSignature from "./signatures/BlinnSignature";

interface Signature {
  signature: JSX.Element;
  name: string;
}

const signatures: Signature[] = [
  {
    signature: <BlinnSignature />,
    name: "blinn",
  },
];

interface PreviewerProps {
  signature: Signature;
  html: string;
}

function Previewer({ signature, html }: PreviewerProps) {
  const title = `Email signature previewer for "${signature.name}" signature`;
  function copy() {
    console.log("html", { html });
    function listener(e) {
      e.clipboardData.setData("text/plain", html);
      e.clipboardData.setData("text/html", html);
      e.preventDefault();
    }
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);
    console.log("copied to clipboard");
  }
  const javascript = `
    const html = ${JSON.stringify(html)};
    ${copy.toString()}
    document.getElementById("copier").onclick = copy;
  `;
  return (
    <html>
      <head>
        <title>{title}</title>
      </head>
      <body>
        <header>
          <h1>{title}</h1>
          <hr />
        </header>
        <main dangerouslySetInnerHTML={{ __html: html }} />
        <footer>
          <hr />
          <button id="copier">Copy</button>
          <script dangerouslySetInnerHTML={{ __html: javascript }} />
        </footer>
      </body>
    </html>
  );
}

async function renderSignature(signature: Signature): Promise<void> {
  const html = renderToString(signature.signature);
  await writeFile(`signatures/${signature.name}.htm`, html);
  const previewHtml = renderToString(
    <Previewer signature={signature} html={html} />
  );
  await writeFile(`signatures/${signature.name}.preview.html`, previewHtml);
}

async function main() {
  try {
    await stat("signatures");
  } catch {
    await mkdir("signatures");
  }
  await Promise.all(signatures.map(renderSignature));
}

main();
