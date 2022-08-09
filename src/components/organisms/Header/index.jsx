const Content =
  typeof window === 'undefined' ? require('./Content').default : () => null;

const Header = () => {
  return (
    <header dangerouslySetInnerHTML={{ __html: '' }}>
      <Content />
    </header>
  );
};

export default Header;
