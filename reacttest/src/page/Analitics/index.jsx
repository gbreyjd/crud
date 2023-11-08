import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../../axios.js";

export default function Analitics() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`/posts/${id}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        alert("ошбика получения статьи");
      });
    setIsLoading(false);
  }, [id]);

  console.log(data);
  return (
    <div>
      <h2>Подробная информация</h2>
      {isLoading ? ( // Проверяем флаг загрузки перед рендером
        <p>Загрузка данных...</p>
      ) : (
        <>
          <p>Фамилия: {data.lastName}</p>
          <p>Имя: {data.firstName}</p>
          <p>Отчество: {data.middleName}</p>
          <p>Дата рождения: {data.birthDay}</p>
          <p>Адрес: {data.address}</p>
          <p>СНИЛС: {data.snils}</p>
          <p>Полис: {data.polis}</p>
          <p>Номер телефона: {data.phoneNumber}</p>
          <p>Создавший сотрудник: {data.userauth && data.userauth.username}</p>
        </>
      )}
    </div>
  );
}
