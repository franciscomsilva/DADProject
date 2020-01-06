<template>
    <v-app id="inspire">
        <v-content>
            <v-container fluid fill-height fill-width>
                <v-layout align-center justify-center>
                    <v-flex xs8 sm8 md11>
                        <v-card>
                            <div>
                                <apexchart type="area" height="350" :options="lastMonthMovmentsChartOptions" :series="lastMonthSeries"></apexchart>
                            </div>
                        </v-card>
                        <v-card class="mt-6">
                            <div>
                                <apexchart ref="expensesByCategoryChart" type="pie" height="350" :options="expensesByCategoryChartOptions" :series="expensesByCategoryChartSeries"></apexchart>
                            </div>
                        </v-card>
                        <v-card class="mt-6">
                            <div>
                                <apexchart type="pie" height="350" :options="expensesPaymentTypesChartOptions" :series="expensesPaymentTypesChartSeries"></apexchart>
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

                lastMonthMovmentsChartOptions: {
                    title: {
                        text: "Incomes and expenses by day over the last month",
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
                incomesLastMonth: [],
                expensesLastMonth: [],
                lastMonthSeries: [],

                expensesByCategoryChartOptions: {
                    title: {
                        text: "Expenses by category",
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

                expensesPaymentTypesChartOptions: {
                    title: {
                        text: "Expenses payment types registered",
                        align: 'center',
                        margin: 25,
                        offsetY: 10,
                        offsetX: -65,
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
                    labels: ["MB payment", "Bank transfer", "Wallet transfer"]
                },
                expensesPaymentTypesChartSeries: [],
            }
        },
        methods: {
            async getGraphicsData() {
                await axios.get("/api/users/movements")
                    .then(async response => {
                        this.movements = response.data

                        await axios.get("/api/categories/debitCategories")
                            .then(response => {
                                this.expensesCategories = response.data
                            })
                    })
                    .then(() => {
                        // Variables used to comparison
                        var currentDate = new Date()
                        var currentYear = currentDate.getFullYear()
                        var currentMonth = currentDate.getMonth() + 1
                        var currentDay = currentDate.getDay()
                        var currentMovementDay = -1, currentMovementMonth = -1, currentMovementYear, splitDate
                        var nextDay, nextMonth, nextYear

                        // Variables for the graphic about last 30 days
                        var incomesCurrentDay, expensesCurrentDay
                        // Variables for the graphic about expenses by category by month over the time
                        this.expensesCategories.forEach(expenseCategory => {
                            this.expensesByCategory.push({value: 0, id: expenseCategory.id})
                            this.expensesByCategoryChartLabels.push(expenseCategory.name)
                        })
                        // Payment types variables
                        var mbPayment=0, bankTransfer=0, walletTransfer=0


                        this.movements.forEach(movement => {
                            splitDate = (movement.date).split("-")

                            currentMovementYear = parseInt(splitDate[0])
                            currentMovementMonth = parseInt(splitDate[1])
                            nextDay = parseInt(splitDate[2])

                            // Divide expenses by categories and payment types
                            if (movement.type === 'e') {
                                switch(movement.type_payment) {
                                    case "mb": mbPayment += parseFloat(movement.value); break;
                                    case "bt": bankTransfer += parseFloat(movement.value); break;
                                    default: walletTransfer += parseFloat(movement.value);
                                }

                                this.expensesByCategory.forEach(expenseByCategory => {
                                    if (movement.category_id == expenseByCategory.id) {
                                        expenseByCategory.value += parseFloat(movement.value)
                                    }
                                })
                            }


                            // Update values by day
                            if (currentMovementDay != nextDay) {
                                if (currentMovementDay != -1) {
                                    this.incomesLastMonth.push({y: incomesCurrentDay, x: movement.date})
                                    this.expensesLastMonth.push({y: expensesCurrentDay, x: movement.date})
                                }

                                currentMovementDay = nextDay
                                incomesCurrentDay = expensesCurrentDay = 0
                            }

                            // Check if the movement is from last month
                            if ((currentYear == currentMovementYear &&
                                (currentMonth == currentMovementMonth ||
                                    (currentMonth-1 == currentMovementMonth &&
                                        currentMovementDay >= currentDay))) ||
                                (currentMonth == 1 &&
                                    (currentYear-1 == currentMovementYear &&
                                        currentMovementMonth == 12 &&
                                        currentMovementDay >= currentDay))) {


                                movement.type === 'i' ?
                                    incomesCurrentDay += parseFloat(movement.value) :
                                    expensesCurrentDay += parseFloat(movement.value)
                            }
                        })


                        // Updates series of the last month's chart
                        this.lastMonthSeries = [{
                            name: 'Incomes',
                            data: this.incomesLastMonth
                        },
                            {
                                name: 'Expenses',
                                data: this.expensesLastMonth
                            }]

                        // Update expenses by category chart labels
                        this.$refs.expensesByCategoryChart.updateOptions({labels: this.expensesByCategoryChartLabels})

                        // Update expenses by category series
                        this.expensesByCategory.forEach(expenseByCategory => {
                            this.expensesByCategoryChartSeries.push(expenseByCategory.value)
                        })

                        // Update expenses by payment type series
                        this.expensesPaymentTypesChartSeries.push(mbPayment)
                        this.expensesPaymentTypesChartSeries.push(bankTransfer)
                        this.expensesPaymentTypesChartSeries.push(walletTransfer)
                    })
            }
        },
        created: function() {
            this.getGraphicsData()
        }
    };
</script>

<style></style>