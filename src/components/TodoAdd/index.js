import React from 'react';

const Index = (props) => {
  const { todo, setTodo, handleSubmit } = props;

  return (
    <div className='container text-start'>
    <form
      className="form-container"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >

      <div class="mt-4 col-6">
        <h3><label htmlFor="name" className='form-label'>Tittle</label></h3>
        <input
          type="text"
          className='form-control'
          name="name"
          placeholder="Whats your plan?"
          value={todo.name}
          onChange={(e) => {
            setTodo({ ...todo, name: e.target.value });
          }}
        />
      </div>
      <div class="col-6">
        <h3><label htmlFor="name" className='form-label'>Description</label></h3>
        <input
          type="text" className='form-control' name="decription" placeholder="How it will going?" value={todo.desc}
          onChange={(e) => {
            setTodo({ ...todo, desc: e.target.value });
          }}
        />
        </div>
        <div className='mt-4'>
      <button type="submit" className='btn btn-primary'>
        Save
      </button>
      </div>
      
    </form>
    </div>
  );
};

export default Index;