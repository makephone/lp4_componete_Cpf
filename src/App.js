import './App.css';
import React, { useState } from "react";
import ReactDOM from "react-dom";
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";


function App() {
  
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [mask, setMask] = useState("");
  const[msg,setmsg]=useState("");


  function analisar(text){
    console.log(text);
    const a=Number(text.charAt(0));
    const b=Number(text.charAt(1));
    const c=Number(text.charAt(2));
    const d=Number(text.charAt(4));
    const e=Number(text.charAt(5));
    const f=Number(text.charAt(6));
    const g=Number(text.charAt(8));
    const h=Number(text.charAt(9));
    const i=Number(text.charAt(10));
    const j =Number(text.charAt(12))
    const l =Number(text.charAt(13))

    let soma=a*10+b*9+c*8+d*7+e*6+f*5+g*4+h*3+i*2;
    soma=soma*10;
    const resto=soma%11;
    console.log(resto)

    if (resto==10){
      resto=0
    }
     
    if(resto===j){
      console.log('cpf valido')
      setmsg('CPF Válido')
    }else{
      console.log('cpf invalido')
      setmsg('CPF Inválido')
    }

     
  


  }

  return (
    <div>
      <h3>Digite um CPF:</h3>
      <CpfCnpj
        value={cpfCnpj}
        onChange={(event, type) => {
          setCpfCnpj(event.target.value);
          setMask(type === "CPF");




          if(event.target.value === "000.000.000-00" ||event.target.value === "111.111.111-11" ||event.target.value ==="222.222.222-22" ||event.target.value ==="333.333.333-33" ||event.target.value ==="444.444.444-44" ||event.target.value ==="555.555.555-55" ||event.target.value ==="666.666.666-66" ||event.target.value ==="777.777.777-77" ||event.target.value ==="888.888.888-88" ||event.target.value ==="999.999.999-99"){
          return false;
          }
          if(event.target.value.length==14){
            analisar(event.target.value)
          }
          
        }}
      />

      <h3>{msg}</h3>
    </div>
  );
}

export default App;
