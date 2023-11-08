import React from "react";
// Импортируем useForm и handleSubmit
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { fetchAuth, selectIsAuth } from "../../redux/slices/auth.js";

function Login() {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "test@test.ru",
      password: "12345",
    },
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));

    if (!data.payload) {
      return alert("Не удалось авторизоваться");
    }

    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="login-container text-black">
      <h2>Вход</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}

export default Login;
