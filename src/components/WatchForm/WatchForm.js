import React, { useState} from 'react';
// import GrowingButton from '../GrowingButton/GrowingButton';

function WatchForm() {

  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');

  function onInputChange(e){
    e.target.name === 'title' && setTitle(e.target.value);
    e.target.name === 'director' && setDirector(e.target.value);
  }

  return (
		<form>
			<input
				type='text'
				name='title'
				value={title}
				onChange={onInputChange}
			/>
			<input
				type='text'
				name='director'
				value={director}
				onChange={onInputChange}
			/>
			<button className='add'>Add</button>
      {/* <GrowingButton /> */}
		</form>
  );
}

export default WatchForm;

 