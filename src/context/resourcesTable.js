import { useSelector, useDispatch } from 'react-redux';
import { deleteValues } from '../redux/Ducks/tableDuck';
import React, { useState, useEffect } from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import './recourcesTable.css'


function ContextTable() {

 
  const dataResources = useSelector(state => state.tables.table);
  const dispatch = useDispatch();
  
  const [data, setData] = useState(dataResources);

  useEffect(() => {
    setData(dataResources)
  }, [dataResources]);
  /*const getData =() => {
    dataResources = useSelector(state => state.tables.table)
  }*/
  setInterval(() => {
    window.location.reload()}, 420000);
  


    

  var ph = []
  dataResources?.map((fuente) => {
      for (const element of fuente.valoracion.pH){
          ph.push(element)
      }
      });
  var temper = []
  dataResources?.map((fuente) => {
      for (const element of fuente.valoracion.temperature){
        temper.push(element)
      }
      });
  var conduct = []
  dataResources?.map((fuente) => {
      for (const element of fuente.valoracion.conductivity){
        conduct.push(element)
      }
      });
  var hora = []
  dataResources?.map((fuente) => {
      for (const element of fuente.date){
          hora.push(element)
      }
    });
  var nivel = []
  dataResources?.map((fuente) => {
      for (const element of fuente.valoracion.depth){
        nivel.push(element)
      }
  });



  var nombre =[]
  dataResources?.map((fuente) => {
    let i=0;
    while (fuente.valoracion.pH[i]){
      nombre.push(fuente.name)
      i++;
    }
    //nombre = fuente.name
  });

  var tamaño =[]
  dataResources?.map((fuente) => {
    let i=fuente.valoracion.pH.length;
    if(tamaño.length==0){
      tamaño.push(i)
    }else{
      tamaño.push(i+tamaño[tamaño.length-1])
    }
  });


  

  const handleDeleteConfirmation = (name,index) => {
    const confirmation = window.confirm('¿Estás seguro/a de borrar este registro?');
    if (confirmation) {

      //Index correction
      if(tamaño.length!=1){
        for(let i=1;i<tamaño.length;i++){
          if(tamaño[i-1]<=index && index<tamaño[i]){
            index = index-tamaño[i-1];
          }
        }
      }

      // User confirmed, proceed with deletion
      handleDeleteValues(name,index);

    }
  };

  const handleDeleteValues = async (name, index) => {
    try {
      await dispatch(deleteValues(name, index));
    } catch (error) {
      // Manejar el error si es necesario
    }
  };


 /* let resources;
  resources = dataResources; */

  /*
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 2000);
    return () => {
      clearInterval(interval);
    };
  }, []); 
  */


  //console.log(resources);
  return (
    <div className="containerRecourcesTable">
      <div>
        <ReactHTMLTableToExcel
          id="btn-download-xls"
          className="excel-download-btn"
          table="table-to-xls"
          filename="resources_table"
          sheet="sheet1"
          buttonText="Descarga la tabla para Excel"
        />
      </div>
      <div>
          <br></br>
      </div>
      <table id="table-to-xls">
        <thead>
          <tr>
            <th scope="col">Fecha</th>
            <th scope="col">Nombre Fuente</th>
            <th scope="col">PH</th>
            <th scope="col">Temperatura</th>
            <th scope="col">Conductividad</th>
            <th scope="col">Nivel</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(dataResources) ? (
            hora
            ?.map((value, index) => (
              <tr key={index}>
                <td>{value}</td>
                <td>{nombre[index]}</td>
                <td>{ph[index]}</td>
                <td>{temper[index]}</td>
                <td>{conduct[index]}</td>
                <td>{nivel[index]}</td>
                <td>
                  <button onClick={() => handleDeleteConfirmation(nombre[index],index)} className="btn btn-danger">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
            .reverse()          
            ) : (
              <tr>
                <td colSpan="7">No data available</td>
              </tr>
            )}
        </tbody>
      </table>
    </div>
  );
}

export default ContextTable;

{/*
        <FoodItem
            key={food.valoracion.pH}
            itemName={food.valoracion.conductivity}
            quantity={food.valoracion.turbidity}
            foodDescription={food.valoracion.temperature}
            imageAlt={food.valoracion.depth}
          />
        
        <tbody>
        <tr th:each="fuente : ${fuentes}">
          <td th:text="${fuente.name}"></td>
          <td th:text="${fuente.valoracion.pH.get(fuente.valoracion.pH.size()-1)}"></td>
          <td th:text="${fuente.valoracion.temperature.get(fuente.valoracion.temperature.size()-1)}"></td>
          <td th:text="${fuente.valoracion.conductivity.get(fuente.valoracion.conductivity.size()-1)}"></td>
          <td th:text="${fuente.valoracion.depth.get(fuente.valoracion.depth.size()-1)}"></td>
          <td th:text="${fuente.valoracion.turbidity.get(fuente.valoracion.turbidity.size()-1)}"></td>
          <td><button class="btn btn-primary w-100"><i class="fa fa-edit"></i></button></td>
            <form th:action="@{'/watersource/delete/?id=' + ${fuente.id}}" method="post">
              <button type="submit" class="btn btn-danger w-100"><i class="fa fa-trash"></i></button>
            </form>
        </tr>
        </tbody>*/}