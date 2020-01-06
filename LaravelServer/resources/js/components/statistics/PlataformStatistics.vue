<template>
    <v-app id="inspire">
        <v-content>
            <v-container fluid fill-height fill-width>
                <v-layout align-center justify-center>
                    <v-flex xs8 sm8 md11>
                        <v-card>
                            <div>
                                <apexchart type="area" height="350" :options="lastYearMovmentsChartOptions" :series="lastYearSeries"></apexchart>
                            </div>
                        </v-card>
                        <v-card class="mt-6">
                            <div>
                                <apexchart ref="incomesByCategoryChart" type="pie" height="350" :options="incomesByCategoryChartOptions" :series="incomesByCategoryChartSeries"></apexchart>
                            </div>
                        </v-card>
                        <v-card class="mt-6">
                            <div>
                                <apexchart ref="expensesByCategoryChart" type="pie" height="350" :options="expensesByCategoryChartOptions" :series="expensesByCategoryChartSeries"></apexchart>
                            </div>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>

    import VueApexCharts from 'vue-apexcharts'

    export default {
        components: {
            apexchart: VueApexCharts
        },
        data: function() {
            return {
                movements: [],

                lastYearMovmentsChartOptions: {
                    title: {
                        text: "Incomes and expenses by month over time",
                        align: 'center',
                        margin: 25,
                        offsetY: 10,
                        style: {
                            fontSize: '25px'
                        }
                    },
                    noData: {
                        text: 'Loading...'
                    },
                    chart: {
                        height: 350,
                        type: 'area'
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        curve: 'smooth'
                    },
                    xaxis: {
                        type: 'datetime',
                        categories: []
                    },
                    yaxis: {
                        title: {
                            text: 'Ammount',
                            offsetX: 5
                        },
                        decimalsInFloat: 2
                    },
                    tooltip: {
                        x: {
                            format: 'dd/MM/yyyy HH:mm'
                        },
                    }
                },
                incomesLastYear: [],
                expensesLastYear: [],
                lastYearSeries: [],

                expensesByCategoryChartOptions: {
                    title: {
                        text: "Total amount of expenses by category",
                        align: 'center',
                        margin: 25,
                        offsetY: 10,
                        offsetX: -90,
                        style: {
                            fontSize: '25px'
                        }
                    },
                    noData: {
                        text: 'Loading...'
                    },
                    chart: {
                        width: '100%',
                        type: 'pie'
                    },
                    dataLabels: {
                        enabled: false
                    },
                    labels: []
                },
                expensesCategories: [],
                expensesByCategory: [],
                expensesByCategoryChartSeries: [],
                expensesByCategoryChartLabels: [],

                incomesByCategoryChartOptions: {
                    title: {
                        text: "Total amount of incomes by category",
                        align: 'center',
                        margin: 25,
                        offsetY: 10,
                        offsetX: -70,
                        style: {
                            fontSize: '25px'
                        }
                    },
                    noData: {
                        text: 'Loading...'
                    },
                    chart: {
                        width: '100%',
                        type: 'pie'
                    },
                    dataLabels: {
                        enabled: false
                    },
                    labels: []
                },
                incomesCategories: [],
                incomesByCategory: [],
                incomesByCategoryChartSeries: [],
                incomesByCategoryChartLabels: [],
                
            }
        },
        methods: {
            async getGraphicsData() {
                await axios.get("/api/movements/all")
                .then(async response => {
                    this.movements = response.data

                    await axios.get("/api/categories/incomeCategories")
                    .then(response => {
                        this.incomesCategories = response.data
                    })

                    await axios.get("/api/categories/debitCategories")
                    .then(response => {
                        this.expensesCategories = response.data
                    })
                })
                .then(() => {
                    var currentDate = new Date()
                    var currentYear = currentDate.getFullYear()
                    var currentMonth = currentDate.getMonth() + 1
                    var splitDate, nextMonth
                    var currentMovementYear, currentMovementMonth = -1
                    var incomesCurrentMonth, expensesCurrentMonth

                    this.expensesCategories.forEach(expenseCategory => {
                        this.expensesByCategory.push({value: 0, id: expenseCategory.id})
                        this.expensesByCategoryChartLabels.push(expenseCategory.name)
                    })

                    this.incomesCategories.forEach(incomeCategory => {
                        this.incomesByCategory.push({value: 0, id: incomeCategory.id})
                        this.incomesByCategoryChartLabels.push(incomeCategory.name)
                    })

                    this.movements.forEach(movement => {
                        splitDate = (movement.date).split("-")
                        currentMovementYear = splitDate[0]
                        nextMonth = splitDate[1]

                        if (movement.type === 'e') {
                            this.expensesByCategory.forEach(expenseByCategory => {
                                if (movement.category_id == expenseByCategory.id) {
                                    expenseByCategory.value++
                                }
                            })
                        } else {
                            this.incomesByCategory.forEach(incomeByCategory => {
                                if (movement.category_id == incomeByCategory.id) {
                                    incomeByCategory.value++
                                }
                            })
                        }

                        if (currentMovementMonth != nextMonth) {
                            if (currentMovementYear != -1) {
                                this.incomesLastYear.push({y: incomesCurrentMonth, x: movement.date})
                                this.expensesLastYear.push({y: expensesCurrentMonth, x: movement.date})
                            }

                            currentMovementMonth = nextMonth
                            incomesCurrentMonth = expensesCurrentMonth = 0
                        }

                        movement.type === 'i' ? 
                            incomesCurrentMonth++ :
                            expensesCurrentMonth++
                    })


                    // Update total amount of movments by type by month over time chart data
                    this.lastYearSeries = [{
                        name: 'Incomes',
                        data: this.incomesLastYear
                    },
                    {
                        name: 'Expenses',
                        data: this.expensesLastYear
                    }]

                    // Update total incomes by category chart labels and series
                    this.$refs.incomesByCategoryChart.updateOptions({labels: this.incomesByCategoryChartLabels})

                    this.incomesByCategory.forEach(incomeByCategory => {
                        this.incomesByCategoryChartSeries.push(incomeByCategory.value)
                    })


                    // Update total expenses by category chart labels and series
                    this.$refs.expensesByCategoryChart.updateOptions({labels: this.expensesByCategoryChartLabels})
                    
                    this.expensesByCategory.forEach(expenseByCategory => {
                        this.expensesByCategoryChartSeries.push(expenseByCategory.value)
                    })
                })
            }
        },
        created: function() {
            this.getGraphicsData()
        }
    };
</script>

<style></style>