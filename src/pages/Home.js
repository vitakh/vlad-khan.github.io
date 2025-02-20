import React from 'react';

const Home = () => {
  return (
    <div>
    <h2 className="mb-3">Введение</h2>
    <p>Современный мир насыщен информацией и без адекватных технологий анализа данных человеку становится сложнее ориентироваться в этой информационной среде. Тогда на помощь приходит статистика, которая, в сочетании с математическими методами, позволяет компактно описать данные, понять их структуру и классифицировать. Поэтому применение средних величин числовых наборов в статистическом анализе - важная и актуальная тема, так как  любое исследование обязательно подразумевает применение какой-либо формы расчёта средних величин, что является основой аналитической работы.</p>
    <p>Английский математик Уильям Петти (1623—1687 гг.), впервые ввел понятие «средние величины», придав ей статистический смысл, связав ее при этом, с экономикой. А теорию средних величин стал разрабатывать Адольф Кетле (1796—1874гг.), который выделил два вида средних величин: собственно средние и средние арифметические.</p>
    <p>В статистическом анализе средние величины позволяют обобщить информацию о наборе чисел, понять, как распределены данные и выявить общие тенденции.</p>
    <div className="row d-flex align-items-center">
  <div className="col-6 text-center">
    <figure className="figure">
      <img src="/images/wp.png" className="figure-img mx-auto d-block img-fluid" alt="Уильям Петти"></img>
      <figcaption className="figure-caption text-center">Уильям Петти (1623–1687)</figcaption>
    </figure>
  </div>
  <div className="col-6 text-center">
    <figure className="figure">
      <img src="/images/ak.png" className="figure-img mx-auto d-block img-fluid" alt="Адольф Кетле"></img>
      <figcaption className="figure-caption text-center">Адольф Кетле (1796-1874)</figcaption>
    </figure>
  </div>
</div>
    </div>
  );
};

export default Home;
