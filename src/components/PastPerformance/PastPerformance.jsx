import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

import React, {useEffect,useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { HashRouter as Router, useHistory } from 'react-router-dom';

function PastPerformance (){
const history = useHistory();
const dispatch = useDispatch();
const hoursHistory = useSelector((store) => store.hoursHistory)
console.log(hoursHistory[0].weekly_hours)

const daily = {
    labels: ['Monday', 'Tuesday', 'Wednesday',
             'Thursday', 'Friday'],
    datasets: [
      {
        label: 'Hours',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
  }

  const weekly = {
    labels: ['Monday', 'Tuesday', 'Wednesday',
             'Thursday', 'Friday'],
    datasets: [
      {
        label: 'Hours',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [hoursHistory[0].weekly_hours, hoursHistory[1].weekly_hours]
      }
    ]
  }
  const monthly = {
    labels: ['Monday', 'Tuesday', 'Wednesday',
             'Thursday', 'Friday'],
    datasets: [
      {
        label: 'Hours',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
  }
  
    return (
        <>
        <Bar
        data={daily}
        options={{
          title:{
            display:true,
            text:'Daily Hours',
            fontSize:20
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
      />
      <Bar
      data={weekly}
      options={{
        title:{
          display:true,
          text:'Weekly Hours',
          fontSize:20
        },
        legend:{
          display:true,
          position:'right'
        }
      }}
    />
    <Bar
    data={monthly}
    options={{
      title:{
        display:true,
        text:'Monthly Hours',
        fontSize:20
      },
      legend:{
        display:true,
        position:'right'
      }
    }}
  />
  </>
    )
}

export default PastPerformance;
