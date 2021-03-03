import * as React from "react";

import { Sizes } from "../../helpers/const";

interface SizesTshirtProps {
  currentSize: string;
  onSizeButtonClick(type: string): void;
}

const SizesTshirt: React.FC<SizesTshirtProps> = ({
  currentSize,
  onSizeButtonClick,
}: SizesTshirtProps) => (
  <article className="size__item size__item--active" id="tshirt-body">
    <div className="size__image-wrapper">
      <picture>
        <source type="image/webp" srcSet="img/content/tshirt-size.webp" />
        <img
          src="img/content/tshirt-size.jpg"
          alt="Схема измерения размеров на футболке"
          className="size__image"
          width="290"
          height="333"
        />
      </picture>
    </div>

    <div className="size__description">
      <h3 className="size__title">Информация о размерах футболок</h3>

      <dl className="size__info-list">
        <dt className="size__info-term">Как измерить:</dt>
        <dd className="size__info-data">
          Одежда лежит ровно, как показано на рисунке.
        </dd>
        <dt className="size__info-term">Через грудь:</dt>
        <dd className="size__info-data">
          Измеряется 2 см под подмышкой, горизонтально от края до края.
        </dd>
        <dt className="size__info-term">Через плечо:</dt>
        <dd className="size__info-data">
          Измеряется от верха рукава от плечевого шва до края.
        </dd>
        <dt className="size__info-term">Длина:</dt>
        <dd className="size__info-data">
          Измеряется от HPS (самая высокая точка плеча) до нижней кромки.
        </dd>
        <dt className="size__info-term">HSP (высшая точка плеча):</dt>
        <dd className="size__info-data">
          Расположен в самой высокой точке плеча, где плечевой шов встречается с
          вырезом.
        </dd>
        <dt className="size__info-term">Длина Рукава:</dt>
        <dd className="size__info-data">
          Измеряется от верха рукава на плечевом шве до отверстия рукава.
        </dd>
      </dl>

      <ul className="size__list" id="size-switch">
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
            <th>Через грудь: (Chest)</th>
            <th>Через плечо: (Shoulder)</th>
            <th>Длина: (Length)</th>
            <th>Длина рукава: (Sleeve)</th>
          </tr>
        </thead>
        <tbody className="size__table-body">
          <tr
            className={`size__table-row ${
              currentSize === Sizes.XS ? `size__table-row--active` : ``
            }`}
            id="row-tshirt-xs"
          >
            <td>XS</td>
            <td>50</td>
            <td>47</td>
            <td>70</td>
            <td>18</td>
          </tr>
          <tr
            className={`size__table-row ${
              currentSize === Sizes.S ? `size__table-row--active` : ``
            }`}
            id="row-tshirt-s"
          >
            <td>S</td>
            <td>52</td>
            <td>49</td>
            <td>72</td>
            <td>19</td>
          </tr>
          <tr
            className={`size__table-row ${
              currentSize === Sizes.M ? `size__table-row--active` : ``
            }`}
            id="row-tshirt-m"
          >
            <td>M</td>
            <td>54</td>
            <td>51</td>
            <td>74</td>
            <td>20</td>
          </tr>
          <tr
            className={`size__table-row ${
              currentSize === Sizes.L ? `size__table-row--active` : ``
            }`}
            id="row-tshirt-l"
          >
            <td>L</td>
            <td>56</td>
            <td>53</td>
            <td>76</td>
            <td>21</td>
          </tr>
          <tr
            className={`size__table-row ${
              currentSize === Sizes.XL ? `size__table-row--active` : ``
            }`}
            id="row-tshirt-xl"
          >
            <td>XL</td>
            <td>58</td>
            <td>55</td>
            <td>78</td>
            <td>22</td>
          </tr>
          <tr
            className={`size__table-row ${
              currentSize === Sizes.XXL ? `size__table-row--active` : ``
            }`}
            id="row-tshirt-xxl"
          >
            <td>XXL</td>
            <td>60</td>
            <td>57</td>
            <td>80</td>
            <td>23</td>
          </tr>
        </tbody>
      </table>

      <p className="size__note">
        <em>Все размеры указаны в сантиметрах</em>
      </p>
    </div>
  </article>
);

export default SizesTshirt;
