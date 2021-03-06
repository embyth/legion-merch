import * as React from "react";

import {Sizes} from "../../helpers/const";

interface SizesPantsProps {
  currentSize: string;
  onSizeButtonClick(type: string): void;
}

const SizesPants: React.FC<SizesPantsProps> = ({
  currentSize,
  onSizeButtonClick,
}: SizesPantsProps) => (
  <article className="size__item size__item--active" id="pants-body">
    <div className="size__image-wrapper">
      <picture>
        <source type="image/webp" srcSet="/img/content/pants-size.webp" />
        <img
          src="/img/content/pants-size.jpg"
          alt="Схема измерения размеров на штанах"
          className="size__image"
          width="290"
          height="333"
        />
      </picture>
    </div>

    <div className="size__description">
      <h3 className="size__title">Информация о размерах штанов</h3>

      <dl className="size__info-list">
        <dt className="size__info-term">Как измерить:</dt>
        <dd className="size__info-data">
          Одежда лежит ровно, как показано на рисунке.
        </dd>
        <dt className="size__info-term">Талия:</dt>
        <dd className="size__info-data">
          Измеряется от одной стороны талии до другой.
        </dd>
        <dt className="size__info-term">Половина бедер:</dt>
        <dd className="size__info-data">
          Измеряется от стороны до другого около 25 см от верхней части ремня.
        </dd>
        <dt className="size__info-term">Внутренний шов:</dt>
        <dd className="size__info-data">
          Он измеряется внутри ноги от промежности (где встречаются передний и
          задний швы) до нижней части подола.
        </dd>
        <dt className="size__info-term">Боковой шов:</dt>
        <dd className="size__info-data">
          Измеряется на внешней ноге, от верхней части пояса до нижней части
          подола.
        </dd>
      </dl>

      <ul className="size__list">
        {Object.entries(Sizes).map(([size, sizeValue]) => (
          <li key={sizeValue} className="size__list-item">
            <button
              className={`size__label ${
                currentSize === sizeValue ? `size__label--active` : ``
              } button button--primary button--glitch`}
              type="button"
              onClick={() => onSizeButtonClick(sizeValue)}
            >
              {size}
            </button>
          </li>
        ))}
      </ul>

      <table className="size__table">
        <thead className="size__table-head">
          <tr className="size__table-row">
            <th>Размер</th>
            <th>Талия: (Waist)</th>
            <th>Бедра: (Hips)</th>
            <th>Внутренний шов: (Inseam)</th>
            <th>Боковой шов: (Length)</th>
          </tr>
        </thead>
        <tbody className="size__table-body">
          <tr
            className={`size__table-row ${
              currentSize === Sizes.XS ? `size__table-row--active` : ``
            }`}
            id="row-pants-xs"
          >
            <td>XS</td>
            <td>35</td>
            <td>53</td>
            <td>0</td>
            <td>95</td>
          </tr>
          <tr
            className={`size__table-row ${
              currentSize === Sizes.S ? `size__table-row--active` : ``
            }`}
            id="row-pants-s"
          >
            <td>S</td>
            <td>38</td>
            <td>54</td>
            <td>0</td>
            <td>97</td>
          </tr>
          <tr
            className={`size__table-row ${
              currentSize === Sizes.M ? `size__table-row--active` : ``
            }`}
            id="row-pants-m"
          >
            <td>M</td>
            <td>41</td>
            <td>55</td>
            <td>0</td>
            <td>98</td>
          </tr>
          <tr
            className={`size__table-row ${
              currentSize === Sizes.L ? `size__table-row--active` : ``
            }`}
            id="row-pants-l"
          >
            <td>L</td>
            <td>43</td>
            <td>56</td>
            <td>0</td>
            <td>100</td>
          </tr>
          <tr
            className={`size__table-row ${
              currentSize === Sizes.XL ? `size__table-row--active` : ``
            }`}
            id="row-pants-xl"
          >
            <td>XL</td>
            <td>45</td>
            <td>58</td>
            <td>0</td>
            <td>103</td>
          </tr>
          <tr
            className={`size__table-row ${
              currentSize === Sizes.XXL ? `size__table-row--active` : ``
            }`}
            id="row-pants-xxl"
          >
            <td>XXL</td>
            <td>48</td>
            <td>59</td>
            <td>0</td>
            <td>106</td>
          </tr>
        </tbody>
      </table>

      <p className="size__note">
        <em>Все размеры указаны в сантиметрах</em>
      </p>
    </div>
  </article>
);

export default SizesPants;
