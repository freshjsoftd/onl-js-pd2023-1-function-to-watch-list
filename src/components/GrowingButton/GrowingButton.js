import React, { useState } from 'react';

function GrowingButton() {

  const [width, setWidth] = useState(100);

  const increaseWidth = () => setWidth((prevWidth) => prevWidth + 10);
  // const increaseWidth = () => setWidth(width + 10);
  return (
		<button
			style={{ width, height: '40px', fontSize: '25px' }}
			onClick={increaseWidth}
      type='button'
		>
			I can grow
		</button>
  );
}

export default GrowingButton