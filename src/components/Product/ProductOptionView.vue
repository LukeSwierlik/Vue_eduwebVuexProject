<template>
    <button class="btn btn-primary option__button">
        {{ productOption.name }}
    </button>
</template>

<script>
    export default {
        name: "ProductOptionView",
        props: {
            productOption: {
                type: Object
            }
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
