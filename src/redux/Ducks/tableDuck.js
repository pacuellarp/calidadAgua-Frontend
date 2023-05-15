import tableService from "../../services/tableService"

const data = [

]


const GET_TABLE = "GET_TABLE"
const GET_TABLE_ERROR = "GET_TABLE_ERROR"


export default function tableReducer(state = data, action){
  switch (action.type) {
    case GET_TABLE:
      return {
        ...state,
        errorRes: undefined,
        table: action.payload
      }
    case GET_TABLE_ERROR:
      return {
        ...state,
        table: undefined,
        errorRes: action.payload
     
      }
  }
  return state
}


export const tableActions = () => async (dispatch, getState) => {
  try {
    const table = await tableService.productData() 
    //console.log(table.data)
    if(table.error){
      dispatch({
        type: GET_TABLE_ERROR,
        payload: table.error
      })
    }
    dispatch({
      type: GET_TABLE,
      payload: table
    })
  } catch (error) {
    dispatch({
      type: GET_TABLE_ERROR,
      payload: error
    })
  }
}