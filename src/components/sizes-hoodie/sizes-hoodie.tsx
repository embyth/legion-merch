import * as React from "react";

import { Sizes } from "../../helpers/const";

interface SizesHoodieProps {
  currentSize: string;
  onSizeButtonClick(type: string): void;
}

const SizesHoodie: React.FC<SizesHoodieProps> = ({
  currentSize,
  onSizeButtonClick,
}: SizesHoodieProps) => (
  <article className="size__item size__item--active" id="hoodie-body">
    <div className="size__image-wrapper">
      <picture>
        <source type="image/webp" srcSet="img/content/hoodie-size.webp" />
        <img
          src="img/content/hoodie-size.jpg"
          alt="Схема измерения размеров на толстовке"
          className="size__image"
          width="290"
          height="333"
        />
      </picture>
    </div>

    <div className="size__description">
      <h3 className="size__title">Информация о размерах толстовок</h3>

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
            id="row-hoodie-xs"
          >
            <td>XS</td>
            <td>55</td>
            <td>51</td>
            <td>64</td>
            <td>59</td>
          </tr>
          <tr
            className={`size__table-row ${
              currentSize === Sizes.S ? `size__table-row--active` : ``
            }`}
            id="row-hoodie-s"
          >
            <td>S</td>
            <td>57</td>
            <td>42,5</td>
            <td>66</td>
            <td>60</td>
          </tr>
          <tr
            className={`size__table-row ${
              currentSize === Sizes.M ? `size__table-row--active` : ``
            }`}
            id="row-hoodie-m"
          >
            <td>M</td>
            <td>59</td>
            <td>54</td>
            <td>68</td>
            <td>61</td>
          </tr>
          <tr
            className={`size__table-row ${
              currentSize === Sizes.L ? `size__table-row--active` : ``
            }`}
            id="row-hoodie-l"
          >
            <td>L</td>
            <td>61</td>
            <td>55,5</td>
            <td>70</td>
            <td>62</td>
          </tr>
          <tr
            className={`size__table-row ${
              currentSize === Sizes.XL ? `size__table-row--active` : ``
            }`}
            id="row-hoodie-xl"
          >
            <td>XL</td>
            <td>63</td>
            <td>57</td>
            <td>72</td>
            <td>63</td>
          </tr>
          <tr
            className={`size__table-row ${
              currentSize === Sizes.XXL ? `size__table-row--active` : ``
            }`}
            id="row-hoodie-xxl"
          >
            <td>XXL</td>
            <td>65</td>
            <td>58,5</td>
            <td>74</td>
            <td>64</td>
          </tr>
        </tbody>
      </table>

      <p className="size__note">
        <em>Все размеры указаны в сантиметрах</em>
      </p>
    </div>
  </article>
);

export default SizesHoodie;
