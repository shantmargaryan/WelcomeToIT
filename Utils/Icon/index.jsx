
export const Icon = ({ icon, className }) => {
  return (
    <svg>
      <use xlinkHref={`/svg/sprite.svg#${icon}`} className={className} />
    </svg>
  );
};

