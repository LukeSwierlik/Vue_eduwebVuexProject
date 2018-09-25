<template>
    <div class="quiz text-center">
        <template v-if="questions">
            <Question
                :question="question"
            />

            <button
                class="btn btn-error next"
                :disabled="!isPrev"
                @click="prevQuestion"
            >Wstecz</button>

            <button
                class="btn btn-success next"
                :disabled="!isNext"
                @click="nextQuestion"
            >Dalej</button>

        </template>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import Question from './Question';

    export default {
        name: "Quiz",
        props: ["number"],
        computed: {
            ...mapState({
                questions: state => state.storeQuiz.questions,
                currentQuestion: state => state.storeQuiz.currentQuestion
            }),
            question() {
                return this.questions[Number(this.number) - 1];
            },
            isPrev() {
                return this.currentQuestion > 1;
            },
            isNext() {
                return this.currentQuestion < this.questions.length;
            }
        },
        methods: {
            prevQuestion() {

            },
            nextQuestion() {

            }
        },
        components: {
            Question
        }
    };

</script>

<style lang="scss" scoped>
    .next {
        min-width: 200px;
        margin-top: 100px;
    }
</style>
