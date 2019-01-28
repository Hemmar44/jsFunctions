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
                <b-button @click="addIndex">Dodaj indeks do każdej wartości</b-button>
                <b-list-group class="extra-space">
                    <b-list-group-item v-for="datum in withIndex">
                        {{datum}}
                    </b-list-group-item>
                </b-list-group>
            </div>
            <div class="col">
                <b-button @click="addNumber">Dodaj randomową liczbę</b-button>
                <b-list-group class="extra-space">
                    <b-list-group-item v-for="datum in withNumber">
                        {{datum}}
                    </b-list-group-item>
                </b-list-group>
            </div>
            <div class="col">
                <b-button @click="withExteriorFunction">Pomnóż przez pięć z zewnętrznej funkcji</b-button>
                <b-list-group class="extra-space">
                    <b-list-group-item v-for="datum in withFunction">
                        {{datum}}
                    </b-list-group-item>
                </b-list-group>
            </div>
        </div>
        <div class="offset-lg-4 col-lg-4 extra-space">
            <h3>Dane początkowe</h3>
            <b-list-group>
                <b-list-group-item v-for="datum in textData">
                    {{datum}}
                </b-list-group-item>
            </b-list-group>
        </div>
        <div class="row">
            <div class="col">
                <b-button @click="toUppercase">Pisane dużymi literami</b-button>
                <b-list-group class="extra-space">
                    <b-list-group-item v-for="datum in withUppercase">
                        {{datum}}
                    </b-list-group-item>
                </b-list-group>
            </div>
            <div class="col">
                <b-button @click="addStringIndex">Dodanie indeksu jako stringa</b-button>
                <b-list-group class="extra-space">
                    <b-list-group-item v-for="datum in withAddedStringIndex">
                        {{datum}}
                    </b-list-group-item>
                </b-list-group>
            </div>
        </div>
    </div>
</template>

<script>
    let multiplyByFive = (value) => {
       return value * 5
    };
    export default {
        name: "ArrayMap",
        data() {
            return {
                initialData: [1, 2, 3, 4, 5],
                withIndex: [],
                withNumber: [],
                withFunction: [],
                textData: ['aga', 'marcin', 'ania', 'maja'],
                withUppercase: [],
                withAddedStringIndex: []
            }
        },
        methods: {
            addIndex() {
                this.withIndex = this.initialData.map((value, index) => {
                        return value + index;
                });
            },
            addNumber() {
                this.withNumber = this.initialData.map(value => {
                        return value + Math.floor(Math.random() * 100);
                });
            },
            withExteriorFunction() {
                this.withFunction = this.initialData.map(multiplyByFive);
            },
            toUppercase(){
                this.withUppercase = this.textData.map(value => value.toUpperCase());
            },
            addStringIndex() {
                this.withAddedStringIndex = this.textData.map(this.addIndexAsString);
            },
            addIndexAsString(value, index) {
                return String(index) + '. ' + value
            }
        }
    }
</script>

<style scoped>

</style>