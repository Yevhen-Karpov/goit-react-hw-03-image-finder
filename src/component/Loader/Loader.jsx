import { ImSpinner } from 'react-icons/im';

import React from 'react';

function Loader() {
  return (
    <div role="alert">
      <ImSpinner size="32" />
      Загружаем...
    </div>
  );
}

export default Loader;
