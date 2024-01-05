<script setup>
    import {ref } from 'vue';
    import ViewTitle from '@/components/ViewTitle'
    import Edit from '../components/Edit'

    const value = ref('');
    const value1 = ref('');

    const width = '75px';

    const submit = (e) => {
        e.preventDefault();
    }
    
</script>

<template>
    <div class="menu-container">
        <ViewTitle title="Move Location"/>
        <form action="" @submit="submit">

            <Edit :width="width" text="Pallet ID" required v-model="value"/>
            <Edit :width="width" text="Item" v-model="value"/>
            <Edit :width="width" v-model="value1"/>
            <Edit :width="width" v-model="value1"/>
            <div class="col-2">
                <Edit :width="width" text="STOCK" v-model="value1"/>
                <Edit :width="width" text="PSBL" v-model="value1"/>
            </div>
            <div class="col-2">
                <Edit :width="width" text="UOM" v-model="value1"/>
                <Edit :width="width" v-model="value1"/>
            </div>

            <button>변경</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
    .col-2 {
        display: flex;
    }

    .col-2 * {
        flex: 1;
    }
</style>