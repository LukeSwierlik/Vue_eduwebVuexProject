<template>
    <div class="option">
        <h3 class="option__label">{{ feature.name }}</h3>

        <div class="option__group">
            <ProductOptionView
                v-for="(productOption, index) in feature.options"
                :key="index"
                :productOption="productOption"
                @click.native="selectOption(productOption)"
                :feature="feature"
            />
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    import ProductOptionView from './ProductOptionView';

    export default {
        name: "OptionGroup",
        props: {
            feature: {
                type: Object
            }
        },
        methods: {
            selectOption(productOption) {
                this.select({
                    feature: this.feature.code,
                    option: productOption.code
                });
            },
            ...mapMutations('storeProduct', ['select'])
        },
        components: {
            ProductOptionView
        },
        created() {
            this.feature.options
                .filter(option => option.price === 0)
                .forEach(option => this.selectOption(option));
        }
    }
</script>

<style lang="scss" scoped>
    .option {
        padding: 30px;
        margin-bottom: 20px;
        border-radius: 10px;
        background-color: #f3f3f3;

        &:last-child {
             margin-bottom: 0;
         }

        &__label {
             margin-bottom: 30px;
         }
    }
</style>
