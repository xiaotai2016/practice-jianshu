
import { connect } from 'react-redux';
import { getInputValueAction, addListAction, deleteItemAction } from './store/createAction'

function App({inputValue,setInputValue,list,setList,deleteItem}) {

  return (
    <div>
      <div>
        <input value={inputValue} onChange ={setInputValue}/>
        <button onClick ={setList} >submit</button>
      </div>
      <div>
        <ul>
          {
            list.map((item,index)=>{
              return <li onClick = {()=>{deleteItem(index)}}>{item}</li>
              })
                }
                </ul>
                </div>
                </div>
                );
              }

              const mapStateToProps = (state) =>{
                console.log(1,state);
                return{
                  inputValue:state.inputValue,
                  list:state.list
                }
              }

              const mapDispatchToProps = (dispatch) =>{
                return{
                  setInputValue: (e)=> dispatch(getInputValueAction(e.target.value)),
                  setList:()=> dispatch(addListAction()),
                  deleteItem: (index)=>dispatch(deleteItemAction(index))
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (App);
