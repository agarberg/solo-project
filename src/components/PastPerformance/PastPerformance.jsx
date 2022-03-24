import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import React, {useEffect,useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { HashRouter as Router, useHistory } from 'react-router-dom';

function PastPerformance (){
    useEffect(() => {
        dispatch({ type: 'GET_WEEKLY_HOURS' })
        dispatch({ type: 'GET_DAILY_HOURS' })
        dispatch({ type: 'GET_MONTHLY_HOURS' })
      }, []);
    
const history = useHistory();
const dispatch = useDispatch();
const weeklyHours = useSelector((store) => store.hoursHistory.weeklyHours)
const dailyHours = useSelector((store) => store.hoursHistory.dailyHours)
const monthlyHours = useSelector((store) => store.hoursHistory.monthlyHours)

// data.data.map((crypto) => crypto.name)
console.log (weeklyHours)
console.log (dailyHours)
console.log (monthlyHours)

const daily = {
    labels: dailyHours?.map((dailyHours) => dailyHours.day),
    datasets: [
      {
        label: 'Hours',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: dailyHours?.map((dailyHours) => dailyHours.daily_hours)
      }
    ]
  }
//   dailyHours?.map((dailyHours) => dailyHours.daily_hours)
  const weekly = {
    labels: weeklyHours?.map((weeklyHours) => weeklyHours.start_of_week),
    datasets: [
      {
        label: 'Hours',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: weeklyHours?.map((weeklyHours) => weeklyHours.weekly_hours)
      }
    ]
  }
  const monthly = {
    labels: monthlyHours?.map((monthlyHours) => monthlyHours.start_of_month),
    datasets: [
      {
        label: 'Hours',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: monthlyHours?.map((monthlyHours) => monthlyHours.monthly_hours)
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
