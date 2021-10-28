const AlertIcon = (props) => {
  return (
    <svg
      viewBox="0 0 38 38"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <circle cx="19" cy="19" fill="currentColor" r="19" />
      <circle cx="19" cy="26.242" fill="#fff" r="1.878" />
      <path
        d="M18.969 21.569a1.2 1.2 0 0 1-1.2-1.145l-.425-8.883A1.652 1.652 0 0 1 19 9.82a1.652 1.652 0 0 1 1.65 1.731l-.487 8.881a1.2 1.2 0 0 1-1.194 1.137Z"
        fill="#fff"
      />
    </svg>
  );
};

export default AlertIcon;
