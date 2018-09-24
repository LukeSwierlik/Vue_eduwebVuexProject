<template>
    <tr>
        <td>{{ index + 1 }}.</td>

        <td>
            <template v-if="editMode">
                <div class="form-group">
                    <input type="text" class="form-input" :value="user.name" @change="update($event, 'name')" />
                </div>
            </template>

            <template v-else>
                {{ user.name }}
            </template>
        </td>

        <td>
            <template v-if="editMode">
                <input type="number" class="form-input" :value="user.age" @change.number="update($event, 'age')"/>
            </template>

            <template v-else>
                {{ user.age }}
            </template>
        </td>

        <td>
            <router-link
                class="btn btn-primary"
                tag="button"
                :to="{
                    name: 'UserDetails',
                    params: {id: user.id}
                    }"
            >
                <i class="icon icon-search"></i>
            </router-link>
        </td>

        <td>
            <router-link
                class="btn btn-primary"
                tag="button"
                :to="{name: 'UserEdit', params: {id: user.id}}"
            >
                <i class="icon icon-edit"></i>
            </router-link>
        </td>

        <td>
            <button class="btn btn-primary" @click="editMode = !editMode">
                <i class="icon" :class="{ 'icon-edit': !editMode, 'icon-check': editMode }"></i>
            </button>
        </td>

        <td>
            <button class="btn btn-error" @click="remove(user.id)">
                <i class="icon icon-delete"></i>
            </button>
        </td>
    </tr>
</template>

<script>
    import { mapMutations, mapActions } from 'vuex';

    export default {
        name: "UserItem",
        props: ["user", "index"],
        data() {
            return {
                editMode: false
            };
        },
        methods: {
            update(e, type) {
                const value = e.target.value;
                
                this.updateUser({
                    id: this.user.id,
                    value,
                    type
                });
            },
            remove(id) {
                this.removeUser({id});
            },
            ...mapMutations('storeUsers', ['updateUser']),
            ...mapActions('storeUsers', ['removeUser'])
        }
    };

</script>
