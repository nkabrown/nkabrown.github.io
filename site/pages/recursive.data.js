import { html } from 'lit';

export { html };

export const layout = data => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <title>Nathan K A Brown</title>
      <link
        rel="stylesheet"
        href="../src/styles/outdated-browser-wall.v1.css"
      />
      <link rel="stylesheet" href="../src/styles/global.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;600;700&display=swap"
        rel="stylesheet"
      />
    </head>
    <body>
      <main>${data.content()}</main>
    </body>
  </html>
`;
