<template>
    <div class="product" v-if="product">
        <template v-if="!finished">
            <div class="product__info">
                <img class="product__image" :src="product.image" alt="">
                <h1 class="product__name">{{ product.name }}</h1>
                <p class="product__desc">{{ product.description }}</p>
            </div>

            <div class="features">
                <h2 class="features__heading">Skonfiguruj urządzenie</h2>

                <OptionGroup
                    v-for="(feature, index) in product.features"
                    :feature="feature" :key="index"
                />
            </div>

            <div class="price float-right">
                <p class="price__label">Cena: </p>
                <p class="price__value">{{ price }} PLN</p>
            </div>

            <div class="clearfix"></div>

            <div class="order">
                <button
                    class="btn btn-lg btn-success float-right"
                    @click="order"
                >Złóż zamówienie</button>
            </div>
        </template>

        <div class="toast toast-success" v-else>
            Twoje zamówienie zostało przyjęte. Dziękujemy!
        </div>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex';
    import OptionGroup from './OptionGroup';

    export default {
        name: "Product",
        computed: {
            ...mapState('storeProduct', ['product', 'finished']),
            ...mapGetters('storeProduct', ['price'])
        },
        methods: {
            order() {
                this.orderProduct();
            },
            ...mapActions('storeProduct', ['orderProduct'])
        },
        components: {
            OptionGroup
        }
    };

</script>

<style lang="scss" scoped>
    .product {
        &__image {
            display: block;
            max-width: 600px;
            margin: 0 auto 50px auto;
        }
    }

    .features {
        margin-top: 70px;

        &__heading {
            margin-bottom: 50px;
        }
    }

    .price {
        margin-top: 50px;

        &__label {
            margin-bottom: 0;
            font-size: 20px;
        }

        &__value {
            margin-bottom: 0;
            font-size: 40px;
        }
    }

    .order {
        margin-top: 50px;
    }
</style>
