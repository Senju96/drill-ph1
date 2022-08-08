"use strict";

const scoreElements = document.querySelectorAll('.list_item_score')
const totalElement = document.querySelector('.total')

const scores = scoreElements.map(element => {
  
});(element => Numbers (element.innerHTML))

const total = scores.reduce((sum,currentValue) => sum + currentValue)

totalElement.innerHTML = String(total)
