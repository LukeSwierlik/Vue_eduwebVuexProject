<template>

    <tr>
        <td>{{ index + 1 }}.</td>
        <td>
            <template v-if="editMode">
                <div class="form-group">
                    <input type="text" class="form-input" v-model.lazy="user.name"/>
                </div>
            </template>
            <template v-else>
                {{ user.name }}
            </template>
        </td>
        <td>
            <template v-if="editMode">
                <input type="number" class="form-input" v-model.lazy.number="user.age"/>
            </template>
            <template v-else>
                {{ user.age }}
            </template>
        </td>
        <td>
            <button class="btn btn-primary" @click="editMode = !editMode">
                <i class="icon" :class="{ 'icon-edit': !editMode, 'icon-check': editMode }"></i>
            </button>
        </td>
    </tr>

</template>

<script>

    export default {
        name: "UserItem",
        props: ["user", "index"],
        data() {
            return {
                editMode: false
            };
        }
    };

</script>
