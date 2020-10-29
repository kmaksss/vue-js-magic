<template>
  <header class="header stick-menu default">
    <div class="container container--lg d-flex align-center top justify-space">
      <a href="#main" class="logo"><img src="assets/img/logo.png" alt=""/></a>
      <div class="main-menu-wrap d-flex align-center">
        <ul class="main-menu d-flex">
          <li><a href="#complectation">Комплектация</a></li>
          <li><a href="#variants">Варианты игры</a></li>
          <li><a href="#items">Ассортимент</a></li>
          <li><a href="#rewiews">Отзывы</a></li>
          <li><a href="#partners">Партнёры</a></li>
        </ul>
        <div class="contacts white header__contacts m-left">
          <div class="contacts__item white">
            <div class="contacts__item-icon">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 0C6.72867 0 0 6.72867 0 15C0 23.2713 6.72867 30 15 30C23.2713 30 30 23.2713 30 15C30 6.72867 23.2713 0 15 0ZM22.1338 22.7586C21.89 23.0024 21.5701 23.1251 21.2501 23.1251C20.9301 23.1251 20.6099 23.0024 20.3664 22.7586L14.1163 16.5088C13.8812 16.2751 13.7501 15.9574 13.7501 15.6251V7.5C13.7501 6.80878 14.3099 6.25008 15 6.25008C15.6901 6.25008 16.2499 6.80878 16.2499 7.5V15.1076L22.1338 20.9912C22.6225 21.4801 22.6225 22.27 22.1338 22.7586Z"
                  fill="white"
                />
              </svg>
            </div>
            <div class="contacts__item-text">
              Время работы: <br />
              ежедневно с 10:00 до 22:00
            </div>
          </div>
          <div class="contacts__item white">
            <div class="contacts__item-icon">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.6158 0.839876V0.836777C23.0833 0.301472 22.3595 0.000309917 21.6044 0H8.39265C6.82346 0.00511364 5.55272 1.27585 5.54761 2.84504V27.1519C5.54792 27.9069 5.84908 28.6307 6.38438 29.1632C6.91613 29.6978 7.6387 29.9988 8.39265 30H21.6075C22.3615 29.9988 23.084 29.6978 23.6158 29.1632C24.1503 28.6315 24.4514 27.9089 24.4526 27.155V2.84814C24.4514 2.09419 24.1503 1.37162 23.6158 0.839876ZM15.0001 28.0692C14.5756 28.0692 14.2315 27.7251 14.2315 27.3006C14.2315 26.8761 14.5756 26.532 15.0001 26.532C15.4246 26.532 15.7687 26.8761 15.7687 27.3006C15.7687 27.7251 15.4246 28.0692 15.0001 28.0692ZM22.1933 23.2438C22.1933 24.2708 21.3608 25.1033 20.3338 25.1033H9.66331C8.63632 25.1033 7.80381 24.2708 7.80381 23.2438V5.12913C7.80381 4.10214 8.63632 3.26963 9.66331 3.26963H20.3369C21.3639 3.26963 22.1964 4.10214 22.1964 5.12913L22.1933 23.2438Z"
                  fill="white"
                />
              </svg>
            </div>
            <div class="contacts__item-text">
              <a href="tel:+79036816871" class="d-block circe-b"
                >+7 (903) 681-68-71</a
              >
              <a href="#modal" class="d-block under popup-content"
                >Заказать обратный звонок</a
              >
            </div>
          </div>
        </div>
        <a class="cart center-x-y popup-content"  href="#modal-order">
          <div class="cart__counter circe-b center-x-y">{{cart.length}}</div>
          <div class="cart__icon">
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.43761V8.06261C20 8.58038 19.6269 9.00011 19.1667 9.00011H18.8889L17.9822 16.1403C17.8649 17.064 17.1617 17.7501 16.3323 17.7501H3.66771C2.8383 17.7501 2.1351 17.064 2.01778 16.1403L1.11111 9.00011H0.833333C0.37309 9.00011 0 8.58038 0 8.06261V7.43761C0 6.91984 0.37309 6.50011 0.833333 6.50011H3.17156L6.8792 0.764915C7.24014 0.206634 7.935 0.0831575 8.43132 0.489212C8.9276 0.895267 9.03733 1.67702 8.67639 2.23535L5.91934 6.50011H14.0807L11.3236 2.23531C10.9627 1.67702 11.0724 0.895228 11.5687 0.489173C12.0649 0.0831185 12.7599 0.206556 13.1208 0.764876L16.8284 6.50011H19.1667C19.6269 6.50011 20 6.91984 20 7.43761ZM10.8333 14.3126V9.93761C10.8333 9.41984 10.4602 9.00011 10 9.00011C9.53976 9.00011 9.16667 9.41984 9.16667 9.93761V14.3126C9.16667 14.8304 9.53976 15.2501 10 15.2501C10.4602 15.2501 10.8333 14.8304 10.8333 14.3126ZM14.7222 14.3126V9.93761C14.7222 9.41984 14.3491 9.00011 13.8889 9.00011C13.4286 9.00011 13.0556 9.41984 13.0556 9.93761V14.3126C13.0556 14.8304 13.4286 15.2501 13.8889 15.2501C14.3491 15.2501 14.7222 14.8304 14.7222 14.3126ZM6.94444 14.3126V9.93761C6.94444 9.41984 6.57135 9.00011 6.11111 9.00011C5.65087 9.00011 5.27778 9.41984 5.27778 9.93761V14.3126C5.27778 14.8304 5.65087 15.2501 6.11111 15.2501C6.57135 15.2501 6.94444 14.8304 6.94444 14.3126Z" fill="white"/>
            </svg>
          </div>
        </a>
      </div>
      
    </div>
  </header>
</template>

<script>

export default {
    name: 'v-header',
    props: {
      cart: {
        type: Array,
        default() {
          return {}
        }
      }
    }
};
</script>

<style>
  .cart {
    width: 38px;
    height: 38px;
    background: #1292BF;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
  }
  .cart__icon {
    position: relative;
    top: 3px;
  }
  .cart__counter {
    width: 20px;
    height: 20px;
    position: absolute;
    border-radius: 50%;
    font-size: 12px;
    line-height: 18px;
    color: #FFFFFF;
    background: #F5D066;
    top: -10px;
    right: -10px;
  }
</style>
