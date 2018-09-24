<template>
    <div class="option">
        <h3 class="option__label">{{ feature.name }}</h3>

        <div class="option__group">
            <ProductOptionView
                v-for="(productOption, index) in feature.options"
                :key="index"
                :productOption="productOption"
            />
        </div>
    </div>
</template>

<script>
    import ProductOptionView from './ProductOptionView';

    export default {
        name: "OptionGroup",
        props: {
            feature: {
                type: Object
            }
        },
        components: {
            ProductOptionView
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
