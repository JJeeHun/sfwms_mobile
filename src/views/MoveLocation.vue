<script setup>
import { reactive } from "vue";
import ViewTitle from "@/components/ViewTitle";
import Edit from "@/components/Edit";
import Number from "@/components/Number";
import Select from "@/components/Select";

const width = "75px";

const submit = (e) => {
    e.preventDefault();
    init();
};

const initData = {
    pltId: "12343248389",
    item: "Item Number",
    location: "",
    stock: 39391,
    psbl: 23423,
    uom: "EA",
    qty: 0,
};

const form = reactive({ ...initData });

const init = () =>
    Object.keys(form).forEach((key) => (form[key] = initData[key]));
</script>

<template>
    <div class="menu-container">
        <ViewTitle title="Move Location" />
        <form action="" @submit="submit">
            <Edit
                :width="width"
                text="Pallet ID"
                required
                v-model="form.pltId"
            />
            <Edit :width="width" text="Item" v-model="form.item" />
            <Select :width="width" v-model="form.item" />
            <Edit
                :width="width"
                v-model="form.location"
                required
                placeholder="new Location"
            />
            <div class="col-2">
                <Number :width="width" text="STOCK" v-model="form.stock" />
                <Number :width="width" text="PSBL" v-model="form.psbl" />
            </div>
            <div class="col-2">
                <Edit :width="width" text="UOM" v-model="form.uom" />
                <Number id="test" :width="width" v-model="form.qty" />
            </div>
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
