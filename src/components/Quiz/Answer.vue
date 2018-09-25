<template>
    <button
        class="btn button"
        :class="{'btn-primary': selectedAnswer}"
    >
        {{ answer.key }}. {{ answer.answer }}
    </button>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "Answer",
        props: {
            answer: {
                type: Object
            },
            question: {
                type: Object
            }
        },
        computed: {
            ...mapGetters('storeQuiz', ['selected']),
            selectedAnswer() {
                return this.selected(this.question.id, this.answer.key);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .button {
        min-width: 100px;
        margin-right: 80px;

        &:last-child {
            margin-right: 0;
        }
    }
</style>
