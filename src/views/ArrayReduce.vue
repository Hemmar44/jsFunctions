<template>
    <div class="text-center container">
        <div class="offset-lg-4 col-lg-4 extra-space">
            <h3>Dane początkowe</h3>
            <b-list-group>
                <b-list-group-item v-for="datum in initialData">
                    {{datum}}
                </b-list-group-item>
            </b-list-group>
        </div>
        <div class="row">
            <div class="col">
                <b-button @click="addValues">Dodaj wartości do siebie</b-button>
                <b-list-group class="extra-space" v-if="addedValues > 0">
                    <b-list-group-item>
                        {{addedValues}}
                    </b-list-group-item>
                </b-list-group>
            </div>
            <div class="col">
                <b-button @click="addIndex">Dodaj wartości i indeks</b-button>
                <b-list-group class="extra-space" v-if="withIndex > 0">
                    <b-list-group-item>
                        {{withIndex}}
                    </b-list-group-item>
                </b-list-group>
            </div>
            <div class="col">
                <b-button @click="stringIt">Zamień na napis</b-button>
                <b-list-group class="extra-space" v-if="asString.length > 0">
                    <b-list-group-item>
                        {{asString}}
                    </b-list-group-item>
                </b-list-group>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "ArrayReduce",
        data() {
            return {
                initialData: [1, 2, 3, 4, 5],
                addedValues: 0,
                withIndex: 0,
                asString: ''
            }
        },
        methods: {
            addValues() {
                this.addedValues =  this.initialData.reduce((prev, curr) => {
                    return prev + curr;
                })
            },
            addIndex() {
                this.withIndex = this.initialData.reduce((prev, curr, index) => {
                    return prev + curr + index;
                })
            },
            stringIt() {
                this.asString = this.initialData.reduce((prev, curr) => {
                    return `${prev.toString()}_${curr.toString()}`;
                });
            }
        }
    }
</script>

<style scoped>

</style>