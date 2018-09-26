<template>
    <div>
        <h1>Rejestracja</h1>

        <form action="#" class="form-horizontal">

            <div
                class="form-group"
                :class="{'has-error': $v.name.$error}"
            >
                <div class="col-2">
                    <label class="form-label">Imię i nazwisko</label>
                </div>

                <div class="col-3">
                    <input
                        type="text"
                        class="form-input"
                        v-model="name"
                        @input="$v.name.$touch()"
                    />

                    <p
                        class="form-input-hint"
                        v-if="$v.name.$dirty && !$v.name.required"
                    >
                        Pole jest nie poprawne.
                    </p>

                    <p
                        class="form-input-hint"
                        v-if="$v.name.$dirty && !$v.name.minLength"
                    >
                        Wpisz treść o przynajmniej 2 znakach.
                    </p>
                </div>
            </div>

            <div
                class="form-group"
                :class="{'has-error': $v.email.$error}"
            >
                <div class="col-2">
                    <label class="form-label">Adres e-mail</label>
                </div>

                <div class="col-3">
                    <input
                        type="email"
                        class="form-input"
                        v-model.lazy="email"
                        @input="$v.email.$touch()"
                    />

                    <p
                        class="form-input-hint"
                        v-if="$v.email.$dirty && !$v.email.required"
                    >
                        Pole jest nie poprawne.
                    </p>

                    <p
                        class="form-input-hint"
                        v-if="$v.email.$dirty && !$v.email.email"
                    >
                        Adres email jest nie poprawny.
                    </p>

                    <p
                        class="form-input-hint"
                        v-if="$v.email.$dirty && !$v.email.unique"
                    >
                        Adres email jest zajęty.
                    </p>
                </div>
            </div>

            <div
                class="form-group"
                :class="{'has-error': $v.country.$error}"
            >
                <div class="col-2">
                    <label class="form-label">Kraj</label>
                </div>

                <div class="col-3">
                    <select
                        class="form-select"
                        v-model="country"
                        @change="$v.country.$touch()"
                    >
                        <option disabled value="">Wybierz kraj</option>
                        <option value="poland">Polska</option>
                        <option value="usa">Stany Zjednoczone</option>
                        <option value="china">Chiny</option>
                    </select>

                    <p
                        class="form-input-hint"
                        v-if="$v.country.$dirty && !$v.country.required"
                    >
                        Pole jest nie poprawne.
                    </p>
                </div>
            </div>

            <div class="form-group"
                 :class="{'has-error': $v.password.$error}"
            >
                <div class="col-2">
                    <label class="form-label">Hasło</label>
                </div>

                <div class="col-3">
                    <input type="password"
                           class="form-input"
                           v-model="password"
                           @change="$v.password.$touch()"
                    />

                    <p
                    class="form-input-hint"
                    v-if="$v.password.$dirty && !$v.password.required"
                    >
                    Pole jest nie poprawne.
                    </p>
                </div>
            </div>

            <div
                class="form-group"
                :class="{'has-error': $v.repeatPassword.$error}"
            >
                <div class="col-2">
                    <label class="form-label">Powtórz hasło</label>
                </div>

                <div class="col-3">
                    <input
                        type="password"
                        class="form-input"
                        v-model="repeatPassword"
                        @change="$v.repeatPassword.$touch()"
                    >

                    <p
                        class="form-input-hint"
                        v-if="$v.repeatPassword.$dirty && !$v.repeatPassword.sameAsPassword"
                    >
                        Hasła nie są takie same.
                    </p>
                </div>
            </div>

            <div
                class="form-group"
                :class="{'has-error': $v.terms.$error}"
            >
                <label class="form-switch">
                    <input
                        type="checkbox"
                        v-model="terms"
                        @change="$v.terms.$touch()"
                    />
                    <i class="form-icon"></i> Akceptuję <a href="#">regulamin</a>.
                </label>

                <p
                    class="form-input-hint"
                    v-if="$v.terms.$dirty && !$v.terms.required"
                >
                    Pole jest wymagane.
                </p>
            </div>

            <div class="col-5">
                <button
                    class="btn btn-primary float-right"
                    :disabled="$v.$invalid"
                >Wyślij</button>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';
    import { validationMixin } from 'vuelidate';
    import { required, minLength, email, sameAs } from 'vuelidate/lib/validators';

    export default {
        name: "RegisterForm",
        mixins: [validationMixin],
        data() {
            return {
                name: '',
                email: '',
                country: '',
                terms: false,
                password: '',
                repeatPassword: ''
            }
        },
        validations: {
            name: {
                required,
                minLength: minLength(2)
            },
            email: {
                required,
                email,
                unique(value) {
                    const url = 'http://localhost:3000/email';

                    return axios
                        .post(url, {
                            email: value
                        })
                        .then(({ data }) => data.unique);
                }
            },
            country: {
                required
            },
            terms: {
                required
            },
            password: {
                required
            },
            repeatPassword: {
                sameAsPassword: sameAs('password')
            }
        }
    };

</script>
