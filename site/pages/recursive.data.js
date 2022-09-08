import { html } from 'lit';

export { html };

export const layout = data => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <title>Nathan K A Brown</title>
      <link rel="stylesheet" href="../src/styles/global.css" />
    </head>
    <body>
      <main>${data.content()}</main>
    </body>
  </html>
`;
