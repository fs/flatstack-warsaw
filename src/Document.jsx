const Document = ({ children, styles, helmet }) => {
  return (
    <html>
      <head>{styles}</head>
      {JSON.stringify(helmet)}
      <body dangerouslySetInnerHTML={{ __html: children }} />
    </html>
  );
};

export default Document;
