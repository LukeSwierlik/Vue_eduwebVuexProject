<template>
    <button
        class="btn option__button"
        :class="{'btn-primary': selectedOption}"
    >
        {{ productOption.name }}
    </button>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "ProductOptionView",
        props: {
            productOption: {
                type: Object
            },
            feature: {
                type: Object
            }
        },
        computed: {
            selectedOption() {
                return this.selected(this.feature.code, this.productOption.code)
            },
            ...mapGetters('storeProduct', ['selected'])
        }
    }
</script>

<style lang="scss" scoped>
    .option {
        &__button {
            min-width: 100px;
            margin-right: 20px;

            &:last-child {
                margin-right: 0;
            }
        }
    }
</style>
