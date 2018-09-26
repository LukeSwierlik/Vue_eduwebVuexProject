<template>
    <div class="summary text-center">
        <h3 class="summary__heading">Podsumowanie</h3>

        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Pytanie</th>
                    <th>Poprawna odpowiedź</th>
                    <th>Twoja odpowiedź</th>
                </tr>
            </thead>

            <tbody>
                <tr
                    v-for="(answer, index) in summary"
                    :key="index"
                    :class="[answer.correct ? 'correct' : 'incorrect']"
                >
                    <td>{{ answer.question }}</td>
                    <td>{{ answer.correctAnswer }}</td>
                    <td>{{ answer.yourAnswer }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: "Summary",
        computed: {
            ...mapState({
                summary: state => state.storeQuiz.summary
            })
        }
    }
</script>

<style lang="scss" scoped>
    .summary {
        &__heading {
             margin-bottom: 50px;
         }

        .correct {
            td {
                background-color: #ddffdd;
            }
        }

        .incorrect {
            td {
                background-color: #ffc8c8;
            }
        }
    }
</style>
