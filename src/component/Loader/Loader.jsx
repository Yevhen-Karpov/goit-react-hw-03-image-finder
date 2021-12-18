import { ImSpinner } from 'react-icons/im';
import React from 'react';

export default function Loader() {
  return (
    <div role="alert">
      <ImSpinner size="32" />
      Загружаем...
    </div>
  );
}
