import React from 'react';

const Index = (props) => {
  const { id, name, desc } = props;
  return (
    <div className='mt-4 container text-start'>
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col-sm-6">
        <div className="card h-100">
          <div className="card-body" >
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{desc}</p>
            <button
            type='button'
              className="m-2 btn btn-success"
              onClick={() => {
                props.updateHandler(id);
              }}
            >
              Update
            </button>
            <button
              type='button'
              className="btn btn-danger"
              onClick={() => {
                props.deleteHandler(id);
              }}
            >
              Delete
            </button>
      
          </div>
        </div>
      
      </div>
      
    </div>
    </div>
  );
};

export default Index;