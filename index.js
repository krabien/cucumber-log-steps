const importCwd = require('import-cwd')
const { Given, When, Then } = importCwd('@cucumber/cucumber')

function Angenommen(pattern, callback) {
    Given(pattern, async (...p) => {
        console.time('    Angenommen ' + pattern);
        await callback(...p);
        console.timeEnd('    Angenommen ' + pattern);
    });
}

function Und(pattern, callback) {
    When(pattern, async (...p) => {
        console.time('    Und ' + pattern);
        await callback(...p);
        console.timeEnd('    Und ' + pattern);
    });
}

function Wenn(pattern, callback) {
    When(pattern, async (...p) => {
        console.time('    Wenn ' + pattern);
        await callback(...p);
        console.timeEnd('    Wenn ' + pattern);
    });
}

function Dann(pattern, callback) {
    Then(pattern, async (...p) => {
        console.time('    Dann ' + pattern);
        await callback(...p);
        console.timeEnd('    Dann ' + pattern);
    });
}

module.exports = {
    Angenommen,
    Wenn,
    Und,
    Dann
};
