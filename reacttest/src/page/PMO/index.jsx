import React from "react";
import axios from "../../axios.js";

function Pmo() {
  const [data, setData] = React.useState([]);
  const [children, setChildren] = React.useState([]);
  const [adults, setAdults] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/posts");
        setData(response.data);
        // Преобразовать birthDay в строки
        response.data.forEach((patient) => {
          patient.birthDay = new Date(patient.birthDay);
          patient.birthDayString = patient.birthDay.toLocaleDateString("ru-RU");
        });
      } catch (error) {
        console.error("Произошла ошибка:", error);
      }
    };
    fetchData();
  }, []);

  React.useEffect(() => {
    // Вычислить текущую дату
    const currentDate = new Date();
    // Создать объекты для групп возраста
    const children = [];
    const adults = [];
    // Распределить пациентов по группам возраста
    data.forEach((patient) => {
      const age = currentDate.getFullYear() - patient.birthDay.getFullYear();
      if (age === 18) {
        children.push(patient);
      } else if (age === 19) {
        adults.push(patient);
      }
      if (age === 21) {
        children.push(patient);
      }
      if (age === 24) {
        children.push(patient);
      }
      if (age === 27) {
        children.push(patient);
      }
      if (age === 30) {
        children.push(patient);
      }
      if (age === 33) {
        children.push(patient);
      }
      if (age === 36) {
        children.push(patient);
      }
      if (age >= 39) {
        children.push(patient);
      }
    //   ---------------
    if (age === 19) {
        adults.push(patient);
      }
      if (age === 20) {
        adults.push(patient);
      }
      if (age === 22) {
        adults.push(patient);
      }
      if (age === 23) {
        adults.push(patient);
      }
      if (age === 25) {
        adults.push(patient);
      }
      if (age === 26) {
        adults.push(patient);
      }
      if (age === 28) {
        adults.push(patient);
      }
      if (age === 29) {
        adults.push(patient);
      }
      if (age === 31) {
        adults.push(patient);
      }
      if (age === 32) {
        adults.push(patient);
      }
      if (age === 34) {
        adults.push(patient);
      }
      if (age === 35) {
        adults.push(patient);
      }
      if (age === 37) {
        adults.push(patient);
      }
      if (age === 38) {
        adults.push(patient);
      }
   
     
    });

    // Установить данные в соответствующие состояния
    setChildren(children);
    setAdults(adults);
  }, [data]);

  return (
    <div>
      <h1>Распределение пациентов по возрасту</h1>
      <div>
        <h2>Диспансеризация</h2>
        <ul>
          {children.map((patient) => (
            <li key={patient.id}>
              {patient.firstName} - {patient.birthDayString}
            </li>
          ))}
        </ul>
      </div>
      {/* <div>
        <h2>ПМО</h2>
        <ul>
          {adults.map((patient) => (
            <li key={patient.id}>
              {patient.name} - {patient.birthDayString}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}

export default Pmo;
