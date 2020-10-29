import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    products: [
        {
            name: '“Твоя волшебная рыбалка 3D”',
            size: 'S',
            price: 950,
            image: 'c1.jpg',
            quantity: 1
        },
        {
            name: '“Твоя волшебная рыбалка 3D”',
            size: 'M',
            price: 1850,
            image: 'c2.jpg',
            quantity: 1
        },
        {
            name: '“Твоя волшебная рыбалка 3D”',
            size: 'L',
            price: 2850,
            image: 'c3.jpg',
            quantity: 1
        }
    ],
    cart: [],
    rewiews: [
        {
            name: 'Дмитрий Егоров',
            rewiew: 'Спасибо Вам, что разработали резервуар, в который можно залить воду и “рыбачить”. Раньше мы всегда использовали тазик для этого',
            avatar: 't1.jpg'
        },
        {
            name: 'Кристина Иванова',
            rewiew: 'Отличная игрушка: яркая, интересная и обучающая!',
            avatar: 't2.jpg'
        },
        {
            name: 'Александр Валощенко',
            rewiew: 'Очень интересное решение располагать рыбок на растениях на разном уровне. Для малышей стало интереснее выуживать рыбок!',
            avatar: 't3.jpg'
        },
        {
            name: 'Виктория Семенова',
            rewiew: 'Дети в полном восторге от рыблки! Хороше качество и яркие цвета. Очень довольна покупкой',
            avatar: 't4.jpg'
        }
    ]
  },
  mutations: {
    SET_PRODUCT_TO_CART: (state, product) => {
        if(state.cart.length) {
            let isProductExists = false;
            state.cart.map((item) => {
                if(item.size === product.size) {
                    isProductExists = true;
                    item.quantity++;
                }
            })
            if(!isProductExists) {
                state.cart.push(product)
            }
        } else {
            state.cart.push(product)
        }
    },
    SET_CARTITEM_INCREMENT: (state, product) => {
        state.cart[product].quantity++
    },
    SET_CARTITEM_DECREMENT: (state, product) => {
        if(state.cart[product].quantity > 1) {
            state.cart[product].quantity--
        }
    },
    DELETE_PRODUCT_TO_CART: (state, index) => {
        state.cart.splice(index, 1)
    }
  },
  actions: {
      ADD_TO_CART({commit}, product) {
          commit('SET_PRODUCT_TO_CART', product)
      },
      CARTITEM_INCREMENT({commit}, product) {
          commit('SET_CARTITEM_INCREMENT', product)
      },
      CARTITEM_DECREMENT({commit}, product) {
        commit('SET_CARTITEM_DECREMENT', product)
    },
      DELETE_FROM_CART({commit}, index) {
          commit('DELETE_PRODUCT_TO_CART', index)
      }
  },
  getters: {
      PRODUCTS(state) {
          return state.products
      },
      REWIEWS(state) {
          return state.rewiews
      },
      CART(state) {
          return state.cart
      }
  },
});

export default store;
