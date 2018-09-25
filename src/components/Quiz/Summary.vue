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
                <tr class="correct">
                    <td>W którym wieku urodził się Jan Kochanowski?</td>
                    <td>XVI</td>
                    <td>XVI</td>
                </tr>

                <tr class="incorrect">
                    <td>Na jakim kontynencie znajduje się rzeka Ganges?</td>
                    <td>w Afryce</td>
                    <td>w Azji</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "Summary"
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
