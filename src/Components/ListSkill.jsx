import React, {Fragment} from 'react';


function ListSkill (props)  {
  let data = props.data;
  let component = [];
  if(data.includes('(')){
    const parts = data.split('(');
    console.log(parts)
    component.push(<div className="list-skill"> <b>{parts[0]}</b></div>);
    component = component.concat(parts[1].replace(')','').split(' ').map((a, i)=> <ListSkill key={parts[0]+i} data={a} secondary={true} />))
  }else if(! props.secondary){
    component.push(<div className="list-skill"> <b>{props.data}</b></div>);
  }
  else{
    component.push(<div className="list-skill">&nbsp;&nbsp;{props.data}</div>);
  }
  return <div>{component}</div>;
}
export default ListSkill;