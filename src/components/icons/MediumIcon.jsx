const MediumIcon = ({ currentColor, ...restProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...restProps}
    >
      <path
        fill-rule="evenodd"
        d="M12 0C5.374 0 0 5.372 0 12c0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm6.974 17.557v-.235l-1.092-1.072c-.096-.073-.144-.194-.124-.313V8.063c-.02-.119.028-.24.124-.313L19 6.678v-.235h-3.869l-2.758 6.88-3.138-6.88H5.176v.235l1.308 1.575c.128.115.194.285.176.457v6.188c.038.223-.032.451-.189.614L5 17.296v.235h4.17v-.235l-1.471-1.784c-.158-.163-.233-.389-.202-.614V9.546l3.66 7.985h.425l3.143-7.985v6.365c0 .17 0 .202-.111.313l-1.13 1.098v.235h5.49z"
        fill={currentColor ? 'currentColor' : '#000000'}
      />
    </svg>
  );
};

export default MediumIcon;
