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
console.log (weeklyHours.timePaid)
console.log (dailyHours)
console.log (monthlyHours)
console.log (dailyHours.dailyHours)

Chart.defaults.font.size = 15;
const daily = {
    labels: dailyHours?.map((dailyHours) => dailyHours?.dailyhours),
    datasets: [
      {
        label: 'Hours',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: dailyHours?.map((dailyHours) => dailyHours?.timePaid)
      }
    ]
  }

  const weekly = {
    labels: weeklyHours?.map((weeklyHours) => weeklyHours?.dates),
    datasets: [
      {
        label: 'Hours',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: weeklyHours?.map((weeklyHours) => weeklyHours?.timePaid)
      }
    ]
  }
  const monthly = {
    labels: monthlyHours?.map((monthlyHours) => monthlyHours?.monthlydates),
    datasets: [
      {
        label: 'Hours',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: monthlyHours?.map((monthlyHours) => monthlyHours?.timePaid)
      }
    ]
  }
  
    return (
        <>
        <div className="charts">
        <Bar
        data={daily}
        options={{
            plugins: {
            legend: {
                display: false},
            title: {
                display: true,
                text: "Daily Production"
              },
          }}}
      />
      <Bar
      data={weekly}
      options={{
        plugins: {
        legend: {
            display: false},
        title: {
            display: true,
            text: "Weekly Production"
          },
      }}}
    />
    <Bar
    data={monthly}
    options={{
        plugins: {
            legend: {
            display: false},
          title: {
            display: true,
            text: "Monthly Production"
          },
      }}}
  />
  </div>
  </>
    )
}

export default PastPerformance;
