const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText)

// ** Calculate the total bill per person **
const calculateBill = () => {
    const bill = Number(billInput.value)
    const tipPercentage = Number(tipInput.value)/100
    const tipAmount = bill*tipPercentage
    const total = tipAmount+bill
    const perPersonTotal = total/numberOfPeople

    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2).toLocaleString('en-US')}`
  }
  
  // ** Splits the bill between more people **
  const increasePeople = () => {
    numberOfPeople++;
    numberOfPeopleDiv.innerText = numberOfPeople

    calculateBill()
  }
  
  // ** Splits the bill between fewer people **
  const decreasePeople = () => {
    if(numberOfPeople > 1)
    numberOfPeople--;

    numberOfPeopleDiv.innerText = numberOfPeople

    calculateBill()
  }