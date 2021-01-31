const Document = ({ children, styles, helmet }) => (
  <html {...helmet.htmlAttributes.toComponent()}>
    <head>
      {helmet.title.toComponent()}
      {helmet.meta.toComponent()}
      {helmet.link.toComponent()}
      {styles}
    </head>
    <body
      dangerouslySetInnerHTML={{ __html: children }}
      {...helmet.bodyAttributes.toComponent()}
    />
  </html>
);

export default Document;
