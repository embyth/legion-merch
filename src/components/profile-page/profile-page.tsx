import * as React from "react";

const ProfilePage: React.FC = () => (
  <React.Fragment>
    <main className="main-content" id="main-content">
      <h1 className="visually-hidden">Профиль пользователя</h1>

      <section className="team">
        <div className="team__wrapper">
          <article className="team__member">
            <h3 className="team__member-name">Имя пользователя</h3>
            <p className="team__member-info">
              Тут информация о пользователе
            </p>
          </article>
        </div>
      </section>
    </main>
  </React.Fragment>
);

export default ProfilePage;
