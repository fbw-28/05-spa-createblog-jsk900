import React from 'react';

const NotFound = (props) => {
  const returnClick = () => {
    props.history.go(-1);
  };

  return (
    <section className='not-found'>
      <div className='height'>
        <h1 className='header-text'>Not Found</h1>
      </div>
      <button onClick={returnClick} className='return-button'>
        Return
      </button>
    </section>
  );
};

export default NotFound;
