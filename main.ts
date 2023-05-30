let umidade = 0
led.setBrightness(64)
// Sabe quando você planta uma semente no chão para que ela cresça? O solo em que você planta a semente tem uma coisa chamada "resistência elétrica". Isso significa que o solo pode dificultar a passagem de eletricidade.
// A resistência elétrica do solo depende de duas coisas: água e nutrientes. O solo pode ficar mais ou menos resistente dependendo da quantidade de água e nutrientes que tem.
// A água em si não é boa para conduzir eletricidade, mas os nutrientes que estão na água são. Quando o solo tem água e nutrientes misturados, ele fica um pouquinho condutor, ou seja, a eletricidade pode passar por ele mais facilmente.
// Então, quando o solo tem muita água e nutrientes, ele fica com uma resistência elétrica menor. Isso significa que a eletricidade pode passar mais facilmente pelo solo.
// Para entender melhor como medimos a resistência elétrica do solo, podemos fazer um experimento simples.
// Primeiro, pegamos nossa micro:bit, que é como um cérebro eletrônico que pode ler sinais elétricos. Em seguida, conectamos um fio ligado a um prego no chamado 3V da micro:bit, este prego ou haste metálica será inserida ao solo onde queremos medir a resistência elétrica.
// Depois, usamos outro pino da micro:bit, chamado de pino de leitura analógica, para medir a tensão elétrica no pino P1. Essa tensão é como uma medida da resistência elétrica do solo.
// O pino de leitura analógica da micro:bit retorna um valor entre 0 e 1023. Quando não há corrente elétrica passando pelo solo, o valor retornado é 0. Isso significa que o solo tem uma resistência elétrica alta, dificultando a passagem da corrente.
// Quando há uma corrente máxima passando pelo solo, o valor retornado é 1023. Isso significa que o solo tem uma resistência elétrica muito baixa, permitindo que a corrente passe facilmente.
// Para facilitar a visualização desses valores, usamos um gráfico de barra de plotagem no próprio display (matriz de LEDs) da micro:bit.
// Esse gráfico mostra uma barra que se move de acordo com o valor de resistência elétrica do solo. Quanto mais alta a barra, menor é a resistência elétrica do solo, e vice-versa.
// Assim, com esse experimento e o gráfico de barra, podemos entender melhor como a quantidade de água e nutrientes no solo afeta sua resistência elétrica, e como isso pode ser medido usando a micro:bit.
basic.forever(function () {
    // Colocando o pino P2 em alta para leitura
    pins.analogWritePin(AnalogPin.P2, 1023)
    umidade = pins.analogReadPin(AnalogPin.P1)
    // Após a leitura do valor em P1, e armazenado na variável, podemos colocar o pino P2 em baixa (0) para economia de energia.
    pins.analogWritePin(AnalogPin.P2, 0)
    led.plotBarGraph(
    umidade,
    1023
    )
    if (umidade <= 400) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.OnceInBackground)
    } else {
        if (umidade >= 900) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                # # # # #
                # # # # #
                `)
        }
    }
    basic.pause(500)
})
