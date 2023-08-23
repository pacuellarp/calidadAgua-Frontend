import tableService from "../../services/tableService";
import api from '../../api/api'


const data = [

]


const GET_TABLE = "GET_TABLE"
const GET_TABLE_ERROR = "GET_TABLE_ERROR"
const DELETE_RESOURCE = "DELETE_RESOURCE";
const DELETE_VALUES = "DELETE_VALUES";



export default function tableReducer(state = data, action){
  switch (action.type) {
    case DELETE_RESOURCE:
      return {
        ...state,
        errorRes: undefined,
        table: action.payload
      }
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
    case DELETE_VALUES:
      return {
        ...state,
        errorRes: undefined,
        table: action.payload
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

export const deleteResource = (resourceId) => async (dispatch, getState) => {
  try {
    // Make the DELETE request to the API
    await api.delete(`/waterresources/${resourceId}`);
    
    // Update the Redux store after successful deletion
    const updatedTable = getState().tables.table.filter(resource => resource.id !== resourceId);
    dispatch({
      type: DELETE_RESOURCE,
      payload: updatedTable
    });
  } catch (error) {
    throw error;
  }
}

export const deleteValues = (name, index) => async (dispatch, getState) => {
  try {
    await api.delete(`/waterresources/${name}/deleteValue/${index}`);

    const currentState = getState().tables.table;

    // Create a new array with the updated values
    const updatedResources = currentState.map(resource => {
      if (resource.name === name) {
        // Clone the resource and update the value array for pH
        const updatedpH = [...resource.valoracion.pH];
        updatedpH.splice(index, 1);

        // Clone the resource and update the value array for temperature
        const updatedTemperature = [...resource.valoracion.temperature]; 
        updatedTemperature.splice(index, 1); 

        // Clone the resource and update the value array for conductivity
        const updatedConductivity = [...resource.valoracion.conductivity]; 
        updatedConductivity.splice(index, 1); 

        // Clone the resource and update the value array for depth
        const updatedDepth = [...resource.valoracion.depth]; 
        updatedDepth.splice(index, 1); 

        // Clone the resource and update the value array for date
        const updatedDate = [...resource.date]; 
        updatedDate.splice(index, 1); 

        // Clone the resource and update the valoracion object
        const updatedResource = {
          ...resource,
          date: updatedDate,
          valoracion: {
            ...resource.valoracion,
            pH: updatedpH,
            temperature: updatedTemperature,
            conductivity: updatedConductivity,
            depth: updatedDepth,
          }
        };

        return updatedResource;
      }
      return resource; // Return unchanged resources
    });


    dispatch({ 
      type: DELETE_VALUES, 
      payload: updatedResources
    });
  } catch (error) {
    throw error;
  }
};