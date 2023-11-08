import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegister, selectIsAuth } from "../../redux/slices/auth.js";
import { Navigate } from "react-router-dom";




export default function FormRegister() {
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: {
        username: 'vanyaLox',
        email: "test@test.ru",
        password: "12345",
      },
    });

    const onSubmit = async (values) => {
        const data = await dispatch(fetchRegister(values));
    
        if (!data.payload) {
          return alert("Не удалось зарегистрироваться");
        }
    
        if ("token" in data.payload) {
          window.localStorage.setItem("token", data.payload.token);
        }
      };
    
      if (isAuth) {
        return <Navigate to={"/"} />;
      }
    

  return (
    <div>
      <div className="login-container">
        <h2>Вход</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name:</label>
          <input
            type="text"
            placeholder="Введите ваше имя"
            {...register("username", { required: "Укажите имя" })}
            name="username" // имя поля формы, соответствующее ключу в объекте data
          />
          <label>Email:</label>
          <input
            type="email"
            placeholder="Введите ваш email"
            {...register("email", { required: "Укажите почту" })}
            name="email" // имя поля формы, соответствующее ключу в объекте data
          />
          {errors.email && <span>Это поле обязательно</span>}
          <label>Пароль:</label>
          <input
            type="password"
            placeholder="Введите пароль"
            {...register("password", { required: "Укажите пароль" })}
            name="password" // имя поля формы, соответствующее ключу в объекте data
          />
          {errors.password && <span>Это поле обязательно</span>}
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  );
}
