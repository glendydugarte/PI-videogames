import React, { useState } from 'react'
import  style from '../Pagination/pagination.module.css'


function Pagination({pagina,setPagina,maximo}) {
  const [input,setInput]= useState(1)

  const firstPage = () =>{
    setInput(1);
    setPagina(1)};

  const lastPage = () =>{
    setInput(maximo);
    setPagina(maximo)};


  const nextpage = ()=>{
    setInput(parseInt(input) + 1)
    setPagina(parseInt(pagina) + 1)
  }

  const prevpage = ()=>{
    setInput(parseInt(input) - 1 )
    setPagina(parseInt(pagina) - 1)
  }
  const onKeyDown = e => {
    if (e.keyCode == 13) {
      setPagina (parseInt (e.target.value));
      if (
        parseInt (e.target.value < 1) ||
        parseInt (e.target.value) > Math.ceil (maximo) ||
        isNaN (parseInt (e.target.value))
      ) {
        setPagina (1);
        setInput (1);
      } else {
        setPagina (parseInt (e.target.value));
      }
    }
  };


            const Onchange = (e)=>{
                setInput(e.target.value)
            }
  
    return (
    <div  className={style.pagination}  >
       <button disabled={pagina===1||pagina<1} onClick={firstPage} className={style.flpage}>First page</button>
      <button disabled={pagina===1 || pagina < 1 } onChange={e=>Onchange(e)} onClick={prevpage} className= {style.ppage}> Previous Page </button>
      <input onKeyDown={onKeyDown} onChange={e=>Onchange(e)} name='page'autoComplete='off' value={input} className={style.page}></input>
      <button disabled={pagina=== Math.ceil(maximo)|| pagina > maximo } onClick={nextpage}  className={style.ppage}> Next Page</button>
<button disabled={pagina===Math.ceil(maximo)||pagina>maximo} onClick={lastPage} className={style.flpage}>Last Page</button>


    </div>
  )
}

export default Pagination;


