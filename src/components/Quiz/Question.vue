<template>
    <div class="question">
        <h1 class="question__heading">{{ question.question }}</h1>

        <div class="answers">
            <Answer
                v-for="(answer, key) in question.answers"
                :key="key"
                :answer="{answer, key}"
                :question="question"
                @click.native="select(key)"
            />
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    import Answer from './Answer';

    export default {
        name: "Question",
        props: {
            question: {
                type: Object
            }
        },
        methods: {
            select(answer) {
                this.selectAnswer({
                    id: this.question.id,
                    answer
                });
            },
            ...mapMutations('storeQuiz', ['selectAnswer'])
        },
        components: {
            Answer
        }
    }
</script>

<style lang="scss" scoped>
    .question {
        &__heading {
            margin-bottom: 100px;
        }
    }
</style>
