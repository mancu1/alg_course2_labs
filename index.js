const [labNumber, partNumber] = process.argv.slice(2).map(Number);

const lab2_1 = await import("./lab2_1/index.js");
const lab2_3 = await import("./lab2_3/index.js");
const lab2_5 = await import("./lab2_5/index.js");
const lab2_6 = await import("./lab2_6/index.js");

const lab3_1 = await import("./lab3_1/index.js");
const lab3_4 = await import("./lab3_4/index.js");

const lab4_1 = await import("./lab4_1/index.js");
const lab4_3 = await import("./lab4_3/index.js");

const lab5_1 = await import("./lab5_1/index.js");

const lab = {
    2: {
        1: lab2_1.run,
        2: lab2_1.run, // ТОЖЕ САМОЕ У JS И ТАК ДИНАМИЧЕСКОЕ ВСЕ
        3: lab2_3.run,
        5: lab2_5.run,
        6: lab2_6.run
    },
    3: {
        1: lab3_1.run,
        4: lab3_4.run
    },
    4: {
        1: lab4_1.run,
        3: lab4_3.run // с доп заданиями которые дали на паре
    },
    5: {
        1: lab5_1.run
    }
}

async  function runLab(labNumber, partNumber)  {
    try {
        const run = lab[labNumber][partNumber];
        run();
    } catch (error) {
        console.error(`Failed to load and run lab${labNumber}_${partNumber}/index.js`, error);
    }
}

runLab(labNumber, partNumber);
