import React,{useState} from 'react';

export const Search = ({Getquery}) => {
    const [value, setvalue] = useState('')
    const onChange =(e)=>{
        e.preventDefault();
        setvalue(e.target.value);
       Getquery(e.target.value);
    }
    return (
       <section className='search'>
           <form>
               <input type='text' className='form-control'
               placeholder='Search Character'
               value={value} onChange={onChange}
               />
           </form>
       </section>
    )
}
