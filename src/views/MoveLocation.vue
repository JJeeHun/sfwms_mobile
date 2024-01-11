<script setup>
import { reactive } from "vue";
import ViewTitle from "@/components/ViewTitle";
import Edit from "@/components/Edit";
import Number from "@/components/Number";
import Select from "@/components/Select";
import TextArea from "@/components/TextArea";

const width = "75px";

const submit = () => {};

const initData = {
    pltId: "",
    item: "1",
    location: 2,
    locationLength: "1 data",
    newLocation: "1 data",
    stock: 39391,
    psbl: 23423,
    uom: "EA",
    qty: 0,
};

const locItems = [
    { value: 1, text: "A1-0-0-0" },
    { value: 2, text: "A2-0-0-0" },
    { value: 3, text: "A3-0-0-0" },
    { value: 4, text: "A4-0-0-0" },
    { value: 5, text: "A5-0-0-0" },
    { value: 6, text: "A6-0-0-0" },
];

const form = reactive({ ...initData });
const init = () => {
    Object.entries(initData).forEach(([key, value]) => (form[key] = value));
};
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
            <TextArea :width="width" text="Item" v-model="form.item" />
            <div class="select-col-2">
                <Select
                    :width="width"
                    v-model="form.location"
                    :items="locItems"
                />
                <Edit :width="`0px`" v-model="form.locationLength" readonly />
            </div>
            <Select
                :width="width"
                v-model="form.newLocation"
                :items="locItems"
                required
                placeholder="new Location"
            />
            <div class="col-2">
                <Number
                    :width="width"
                    text="STOCK"
                    v-model="form.stock"
                    readonly
                />
                <Number
                    :width="width"
                    text="PSBL"
                    v-model="form.psbl"
                    readonly
                />
            </div>
            <div class="col-2">
                <Edit :width="width" text="UOM" v-model="form.uom" readonly />
                <Number id="test" :width="width" v-model="form.qty" readonly />
            </div>

            <div class="footer">
                <button class="primary">Move</button>
                <button type="button" class="reset" @click="init">
                    Cancel
                </button>
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

.select-col-2 {
    display: flex;

    * {
        flex: 1;
    }

    :first-child {
        flex: 3;
        flex-shrink: 0;
    }
}

.footer {
    display: flex;
    justify-content: space-around;
    align-items: center;

    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    padding: 0px 15px;

    gap: 10px;

    button {
        flex: 1;
        height: 70%;
    }
}
</style>
