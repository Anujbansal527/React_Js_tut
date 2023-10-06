const SlotM = (props)=>{

  //using object destructuring 
  //let {x , y, z} = porops

  let x=props.x;
  let y= props.y ;
  let z=props.z;
  if((x === y) && (y===z))
  {
    return(
      <>
        <div className="slot_inner">
          <h1>{x}{y}{z}</h1>
          <h1>This is Matching</h1>
        </div>
      </>
    );
  }else{
    return(
      <>
        <div className="slot_inner">
          <h1>{x}{y}{z}</h1>
          <h1>This is Not Matching</h1>
        </div>
      </>
    );
  }
}
const App = ( )=>{
return(
  <>
   
    <h1>Welcome to <span style ={{fontWeight:"Bold"}}>  Slot machine game </span> 😂 {" "}</h1>
    <div className="slotmachine">
      {/*</div><!--//<SlotM x={Math.floor((Math.random() *6)+0)} y={Math.floor((Math.random()*5))+*/}
     <div> 
      <SlotM x="😂" y="😂" z="😂"/>
      <SlotM x="😂" y="🤣" z="😂"/>
      <SlotM x="👍" y="😒" z="😜"/>
      <SlotM x="😂" y="😍" z="😎"/>
      <SlotM x="❤" y="❤" z="❤"/>
      </div>
    </div>
  </>
);
}
export default App;
