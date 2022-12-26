import { type } from '@testing-library/user-event/dist/type';
import React,{useState} from 'react'
import "./Calci.css"
export default function Calci() {
  let [input,setInput]=useState("");
  function handleCompute()
  {
      
  //console.log(input);
  let d=eval(input)
  //console.log(d,typeof d)
  if(Number.isInteger(d))
  {
      setInput(d)   
  }
  else{
  // d=d.toFixed(4)
  
  setInput(d)
  }
  }
  function handleData(d)
  {
    
    
      let  sube=""
      let x;
    let y;
    
      console.log(input.length)
  if(input.length==1 && (d=='0') && (input[0]=='0'||input[0]==0))
       {
         
         setInput('0');
         console.log("zero matched")
      //   console.log("reached at 0")
         return
       }
    
      if((input[0]=='0') && (input[1]!='+'||input[1]!='-'||input[1]!='cl'||input[1]!='*'||input[1]!="/"||input[1]!="0"))
       {
          sube=input.slice(1,);
       setInput(sube);
       }
    
     
       
      if(d=='cl')
      {
          setInput('0')
      }
    else if((input[input.length-2]=="*"||input[input.length-2]=="+"||input[input.length-2]=="-"||input[input.length-2]=="/") &&(input[input.length-1]=="-") &&(d=="+"||d=="-"||d=="*"||d=="-"||d=="/"))
        {
         y=input.slice(0,input.length-2);
          setInput(y+d)
          
        }
    else if(d=='+'||d=='*'||d=='/'||d=='.')
      {
        
        if(d=='.')
          {
             let pattern = /^[0-9]+\.[0-9]+$/;
  let result = input.match(pattern);
            if(result)
              {
               // console.log("reached here")
                setInput(input)
              //  setInput(input)
              }
          
            else if(input[input.length-1]==".")
              {
                
              }
            else{
              setInput(input+d)
            
          }
      
      }  
        else if(input[input.length-1]==d)
          {
           // setInput(input)
          }
        
        else if(input[input.length-1]=='+'||input[input.length-1]=='*'||input[input.length-1]=='/')
          {
            x=input.slice(0,input.length-1);
           // console.log(x);
            x=x+d;
            setInput(x)
          }
        else{
          setInput((prev)=>prev+d)
        }
      }
      else if(d=='-')
      {
          if(input[input.length-1]==d)
          {
           // setInput(input)
          }
        
          else{
              setInput((prev)=>prev+d)
          }
      }
    
      else
      {
    setInput((prev)=>prev+d);
      }
      
      
    
  }
      return (
      <div className="wrapper">
          <div className="calci-container other">
              {/* <div className='rows' id="ip" >1</div> */}
              <div className='rows' id="display">{input}</div>
              <div className='rows '>
                  <div className='columns'>
                  <button id="clear" onClick={()=>handleData('cl')}>AC</button>
                  <button id="divide" className="normal" onClick={()=>handleData('/')} >/</button>
                  <button id="multiply" className="normal" onClick={()=>handleData('*')}>X</button>
                  {/* <div>4</div> */}
                  </div>
              </div>
              <div className='rows'>
              <div className='columns'>
                  <button className='normal' id="seven" onClick={()=>handleData('7')}>7</button>
                  <button className='normal' id="eight" onClick={()=>handleData('8')}>8</button>
                  <button className='normal' id="nine" onClick={()=>handleData('9')}>9</button>
                  <button className='normal' id="subtract" onClick={()=>handleData('-')}>-</button>
                  </div>
              </div>
              <div className='rows'>
              <div className='columns'>
                  <button className='normal' id="four" onClick={()=>handleData('4')}>4</button>
                  <button className='normal' id="five" onClick={()=>handleData('5')}>5</button>
                  <button className='normal' id="six" onClick={()=>handleData('6')}>6</button>
                  <button className='normal' id="add" onClick={()=>handleData('+')}>+</button>
              </div>
  
  
              </div>
              <div className='rows-last'>
              <div className='columns'>
                  <button className='normal' id="one" onClick={()=>handleData('1')}>1</button>
                  <button className='normal' id="two" onClick={()=>handleData('2')}>2</button>
                  <button className='normal ' id="three" onClick={()=>handleData('3')}>3</button>
                  <button className='normal' id="equals" style={{backroundColor: "rgb(0,68,102)"}} onClick={()=>handleCompute()}>=</button>
                  <button className='normal' id="zero" onClick={()=>handleData('0')}>0</button>
                  <button className='normal' id="decimal" onClick={()=>handleData('.')}>.</button>
                  {/* <button className='normal' id="three">3</button>
                  <button className='normal' id="asign">=</button> */}
                  </div>
              </div>
              
  
              
          </div>
      </div>
    )
  }
  
  