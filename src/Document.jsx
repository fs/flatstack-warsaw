const DETECT_WEBP_SUPPORT_SCRIPT =
  'var i=new Image;i.onload=i.onerror=function(){document.body.classList.add(i.height==1?"webp":"no-webp")};i.src="data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";\n';

const Document = ({ children, styles, helmet }) => (
  <html {...helmet.htmlAttributes.toComponent()}>
    <head>
      {helmet.title.toComponent()}
      {helmet.meta.toComponent()}
      {helmet.link.toComponent()}
      {styles}
    </head>
    <body {...helmet.bodyAttributes.toComponent()}>
      <script
        dangerouslySetInnerHTML={{
          __html: DETECT_WEBP_SUPPORT_SCRIPT,
        }}
      />
      <div id="root" dangerouslySetInnerHTML={{ __html: children }} />
    </body>
  </html>
);

export default Document;
