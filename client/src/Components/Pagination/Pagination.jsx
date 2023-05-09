import React, { useState } from 'react'
import  style from '../Pagination/pagination.module.css'


function Pagination({pagina,setPagina,maximo}) {
  const [input,setInput]= useState(1)


  const nextpage = ()=>{
    setInput(parseInt(input) + 1)
    setPagina(parseInt(pagina) + 1)
  }

  const prevpage = ()=>{
    setInput(parseInt(input) - 1 )
    setPagina(parseInt(pagina) - 1)
  }
  const maxMin = (e) =>{
    if(
        parseInt(e.target.value < 1) ||
        parseInt(e.target.value) > Math.ceil(maximo) ||
        isNaN(parseInt(e.target.value))){
            setPagina(1);
            setInput(1);
    } else {
            setPagina(parseInt(e.target.value))}};

            const Onchange = (e)=>{
                setInput(e.target.value)
            }
  
    return (
    <div  className={style.pagination}  >
      <button disabled={pagina===1 || pagina < 1 } onChange={e=>Onchange(e)} onClick={prevpage} className= {style.ppage}> Previous Page </button>
      <input maxMin={e=>maxMin(e)} name='page'autoComplete='off' value={input} className= {style.page} />
      <p> </p>
      <button disabled={pagina=== Math.ceil(maximo)|| pagina > maximo } onClick={nextpage}  className={style.npage} >Next Page</button>

    </div>
  )
}

export default Pagination


