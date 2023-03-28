const viewsContainer = document.querySelector("span.pricing-card__view")
const rangeInput = document.querySelector("input.pricing-card__views-range")
const constContainer = document.querySelector("span.pricing-card__price")
const priceFreqContainer = document.querySelector("span.pricing-card__billing-frequency")
const frequencyToggle = document.querySelector("input#billing-freq")
const form = document.querySelector('form.pricing-card')

console.log({
  rangeInput,
  viewsContainer,
  constContainer,
  priceFreqContainer,
  frequencyToggle,
  form
})

const VIEWS_DATA = [
  {
    pageViews: '10k',
    monthlyCost: 8,
    leftPercentage: 0
  },
  {
    pageViews: '50k',
    monthlyCost: 12,
    leftPercentage: 25
  },
  {
    pageViews: '100k',
    monthlyCost: 16,
    leftPercentage: 50
  },
  {
    pageViews: '500k',
    monthlyCost: 25,
    leftPercentage: 75
  },
  {
    pageViews: '10M',
    monthlyCost: 36,
    leftPercentage: 100
  },
]

form.addEventListener('submit', (e) => e.preventDefault())
