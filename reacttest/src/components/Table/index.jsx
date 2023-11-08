import React from "react";
import { Link } from "react-router-dom";


function Table({ data }) {

  return (
    <table>
      <thead>
        <tr>
          <th>Фамилия</th>
          <th>Имя</th>
          <th>Отчество</th>
          <th>Дата рождения</th>
          <th>Номер телефона</th>
          <th>СНИЛС</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item) => (
            <tr key={item.id}>
              <td><Link to={`/posts/${item.id}`}>{item.lastName}</Link></td>
              <td>{item.firstName}</td>
              <td>{item.middleName}</td>
              <td>{item.birthDay}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.snils}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
