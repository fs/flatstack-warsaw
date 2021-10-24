import { useState, useEffect } from 'react';
import { useCallback } from 'preact/compat';

const useOnClickHydrate = () => {
  const [firstClick, setFirstClick] = useState(null);

  const handleClick = useCallback(
    (event) => {
      if (firstClick) {
        return;
      }

      const coords = {
        x: event.clientX,
        y: event.clientY,
      };

      if (coords.x === 0 && coords.y === 0) {
        const rect = event.target.getBoundingClientRect();
        coords.x = rect.left + rect.width / 2;
        coords.y = rect.top + rect.height / 2;
      }

      setFirstClick(coords);
    },
    [firstClick],
  );

  useEffect(() => {
    if (!firstClick) {
      return;
    }

    document
      .elementFromPoint(firstClick.x, firstClick.y)
      .dispatchEvent(new Event('click'));
  }, [firstClick]);

  return { shouldBeHydrated: !!firstClick, handleClick };
};

export default useOnClickHydrate;
