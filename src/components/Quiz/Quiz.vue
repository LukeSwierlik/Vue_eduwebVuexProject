<template>
    <div class="quiz text-center">
        <template v-if="questions">
            <Question
                :question="question"
            />

            <button
                class="btn btn-error next"
                :disabled="!isPrev"
                @click="navigateQuestion(-1)"
            >Wstecz</button>

            <button
                class="btn btn-success next"
                :disabled="!isNext || !checkAnswered"
                @click="navigateQuestion(1)"
                v-if="!allAnswered"
            >Dalej</button>

            <button
                class="btn btn-success next"
                v-else
                @click="finish"
            >Zakończ</button>

        </template>
    </div>
</template>

<script>
    import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';
    import Question from './Question';

    export default {
        name: "Quiz",
        props: ["number"],
        computed: {
            ...mapState({
                questions: state => state.storeQuiz.questions,
                currentQuestion: state => state.storeQuiz.currentQuestion,
                answers: state => state.storeQuiz.answers
            }),
            allAnswered() {
                console.log('answers.length', Object.keys(this.answers).length);
                console.log('question.length', this.questions.length);
                return Object.keys(this.answers).length === this.questions.length;
            },
            question() {
                return this.questions[Number(this.number) - 1];
            },
            isPrev() {
                return this.currentQuestion > 1;
            },
            isNext() {
                return this.currentQuestion < this.questions.length;
            },
            checkAnswered() {
                return this.answered(this.question.id)
            },
            ...mapGetters('storeQuiz', ['answered'])
        },
        methods: {
            navigateQuestion(n) {
                this.changeCurrent({
                    n
                });

                this.$router.push({
                    name: 'Quiz',
                    params: {
                        number: this.currentQuestion
                    }
                });
            },
            finish() {
                this.finishQuiz()
                    .then(() => {
                        this.$router.push({
                            name: 'Summary'
                        });
                    });
            },
            ...mapMutations('storeQuiz', ['changeCurrent']),
            ...mapActions('storeQuiz', ['finishQuiz'])
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
