import './recourcesTable.css'
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';

function ContextTable() {

 
  const dataResources = useSelector(state => state.tables.table);
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
  var nombre
  dataResources?.map((fuente) => {
    nombre = fuente.name
  });
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
      <div class="containerRecourcesTable">
        <table>
            <thead>
            <tr>
              <th scope="col">Fecha</th>
              <th scope="col">Nombre Fuente</th>
              <th scope="col">PH</th>
              <th scope="col">Temperatura</th>
              <th scope="col">Conductividad</th>
            </tr>
            </thead>
        {hora?.map(function(value, index) {
          return (
            
            <tbody>
            <tr class>
              <td>{value}</td>
              <td>{nombre}</td>
              <td>{ph[index]}</td>
              <td>{temper[index]}</td>
              <td>{conduct[index]}</td>
            </tr>
            </tbody>
            
          );
        })}
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
