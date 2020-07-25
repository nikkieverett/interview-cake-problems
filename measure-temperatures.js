// https://www.interviewcake.com/question/javascript/temperature-tracker?course=fc1&amp;section=general-programming%3C%2Fa%3E%3C%2Fp%3E

// Implement methods to track the max, min, mean, and mode

class TempTracker {
  constructor() {
    this.tempList = [];
    this.aggregateTotal = 0;
    this.maxTemp = 0;
    this.minTemp = 0;
    this.meanTemp = 0;
  }

  insert(temperature) {
    if (this.tempList.length === 0) {
      this.maxTemp = temperature
      this.minTemp = temperature
      this.meanTemp = temperature
      this.aggregateTotal = temperature
      this.meanTemp = temperature
      this.mode = temperature

    } else {
      this.aggregateTotal += temperature
      this.meanTemp = this.aggregateTotal / (this.tempList.length -1)

      if (temperature > this.maxTemp) {
        this.maxTemp = temperature
      }

      if (temperature < this.minTemp) {
       this.minTemp = temperature
      }
    }

    this.tempList.push(temperature)
  }

  getMax() {
    return this.maxTemp;
  }

  getMin() {
    return this.minTemp;
  }

  getMean() {
    return this.meanTemp
  }

  getMode() {
    return this.mode
  }
}




// Tests

const t = new TempTracker();

// Step 1
t.insert(50);
assertEquals(t.getMax(), 50, 'step 1 - max');
assertEquals(t.getMin(), 50, 'step 1 - min');
assertEquals(t.getMean(), 50, 'step 1 - mean');
assertEquals(t.getMode(), 50, 'step 1 - mode');

// Step 2
t.insert(80);
assertEquals(t.getMax(), 80, 'step 2 - max');
assertEquals(t.getMin(), 50, 'step 2 - min');
assertEquals(t.getMean(), 65, 'step 2 - mean');
assertEquals(t.getMode() === 50 || t.getMode() === 80, true, 'step 2 - mode');

// Step 3
t.insert(80);
assertEquals(t.getMax(), 80, 'step 3 - max');
assertEquals(t.getMin(), 50, 'step 3 - min');
assertEquals(t.getMean(), 70, 'step 3 - mean');
assertEquals(t.getMode(), 80, 'step 3 - mode');

// Step 4
t.insert(30);
assertEquals(t.getMax(), 80, 'step 4 - max');
assertEquals(t.getMin(), 30, 'step 4 - min');
assertEquals(t.getMean(), 60, 'step 4 - mean');
assertEquals(t.getMode(), 80, 'step 4 - mode');

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}