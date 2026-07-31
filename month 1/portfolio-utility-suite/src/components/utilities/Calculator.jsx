import { useState, useEffect, useRef } from 'react'


const operators = ['-', '+', '/', '*', '%']


function precedence(operator) {
  if (operator === '+' || operator === '-') return 1
  if (operator === '*' || operator === '/' || operator === '%') return 2
  return 0
}

function applyOperator(left, right, operator) {
  switch (operator) {
    case '+': return left + right
    case '-': return left - right
    case '*': return left * right
    case '/':
      if (right === 0) throw new Error('Cannot divide by zero')
      return left / right
    case '%':
      if (right === 0) throw new Error('Cannot mod by zero')
      return left % right
    default: return 0
  }
}

function tokenize(expression) {
  let tokens = []
  let currentNumber = ''

  for (const char of expression) {
    if (!isNaN(char) || char === '.') {
      currentNumber += char
    } else {
      tokens.push(currentNumber)
      tokens.push(char)
      currentNumber = ''
    }
  }

  if (currentNumber !== '') {
    tokens.push(currentNumber)
  }
  return tokens
}

function evaluateExpression(expression) {
  const tokens = tokenize(expression)
  const numbers = []
  const operators = []

  for (const token of tokens) {
    if (!isNaN(token)) {
      numbers.push(Number(token))
    } else {
      while (
        operators.length &&
        precedence(operators[operators.length - 1]) >= precedence(token)
      ) {
        const operator = operators.pop()
        const right = numbers.pop()
        const left = numbers.pop()
        const result = applyOperator(left, right, operator)
        numbers.push(result)
      }
      operators.push(token)
    }
  }

  while (operators.length) {
    const operator = operators.pop()
    const right = numbers.pop()
    const left = numbers.pop()
    const result = applyOperator(left, right, operator)
    numbers.push(result)
  }

  return numbers.pop()
}


const BUTTONS = [
  { label: 'AC', action: 'clear',     cls: 'bg-red-500 hover:bg-red-600 text-white' },
  { label: '⌫', action: 'delete',    cls: 'bg-slate-200 hover:bg-slate-300' },
  { label: '%',  value: '%',          cls: 'bg-orange-500 hover:bg-orange-600 text-white' },
  { label: '÷',  value: '/',          cls: 'bg-orange-500 hover:bg-orange-600 text-white' },
  { label: '7',  value: '7',          cls: 'bg-slate-200 hover:bg-slate-300' },
  { label: '8',  value: '8',          cls: 'bg-slate-200 hover:bg-slate-300' },
  { label: '9',  value: '9',          cls: 'bg-slate-200 hover:bg-slate-300' },
  { label: '×',  value: '*',          cls: 'bg-orange-500 hover:bg-orange-600 text-white' },
  { label: '4',  value: '4',          cls: 'bg-slate-200 hover:bg-slate-300' },
  { label: '5',  value: '5',          cls: 'bg-slate-200 hover:bg-slate-300' },
  { label: '6',  value: '6',          cls: 'bg-slate-200 hover:bg-slate-300' },
  { label: '-',  value: '-',          cls: 'bg-orange-500 hover:bg-orange-600 text-white' },
  { label: '1',  value: '1',          cls: 'bg-slate-200 hover:bg-slate-300' },
  { label: '2',  value: '2',          cls: 'bg-slate-200 hover:bg-slate-300' },
  { label: '3',  value: '3',          cls: 'bg-slate-200 hover:bg-slate-300' },
  { label: '+',  value: '+',          cls: 'bg-orange-500 hover:bg-orange-600 text-white' },
  { label: '0',  value: '0',          cls: 'col-span-2 bg-slate-200 hover:bg-slate-300' },
  { label: '.',  value: '.',          cls: 'bg-slate-200 hover:bg-slate-300' },
  { label: '=',  action: 'calculate', cls: 'bg-blue-600 hover:bg-blue-700 text-white' },
]


export default function Calculator() {
  const [expression, setExpression] = useState('')
  const justCalculated = useRef(false)

  // appendNumber
  function appendNumber(number) {
    if (justCalculated.current) {
      justCalculated.current = false
      setExpression(number)
      return
    }
    setExpression((prev) => prev + number)
  }

  // appendOperator
  function appendOperator(operator) {
    setExpression((prev) => {
      if (prev === '' || prev === 'Error') return prev
      if (operators.includes(prev.slice(-1))) return prev
      justCalculated.current = false
      return prev + operator
    })
  }

  // appendDecimal
  function appendDecimal() {
    if (justCalculated.current) {
      justCalculated.current = false
      setExpression('0.')
      return
    }
    setExpression((prev) => {
      if (prev === '') return '0.'
      const currentNumber = prev.split(/[+\-*/%]/).pop()
      if (currentNumber.includes('.')) return prev
      if (operators.includes(prev.slice(-1))) return prev + '0.'
      return prev + '.'
    })
  }

  // clearDisplay
  function clearDisplay() {
    justCalculated.current = false
    setExpression('')
  }

  // deleteCharacter
  function deleteCharacter() {
    setExpression((prev) => {
      if (prev === '') return prev
      return prev.slice(0, -1)
    })
  }

  // calculate
  function calculate() {
    setExpression((prev) => {
      if (prev === '') return prev
      if (operators.includes(prev.slice(-1))) return prev
      try {
        const raw = evaluateExpression(prev)
        const result = parseFloat(raw.toFixed(10))
        const decimals = result.toString().split('.')[1]
        const display = decimals && decimals.length > 2
          ? result.toFixed(2)
          : result.toString()
        justCalculated.current = true
        return display
      } catch (error) {
        justCalculated.current = true
        return 'Error'
      }
    })
  }

  // keyboard support 
  useEffect(() => {
    function onKeydown(event) {
      const key = event.key
      if (!isNaN(key) && key !== ' ') {
        appendNumber(key)
      } else if (operators.includes(key)) {
        appendOperator(key)
      } else if (key === '.') {
        appendDecimal()
      } else if (key === 'Backspace') {
        deleteCharacter()
      } else if (key === 'Escape') {
        clearDisplay()
      } else if (key === 'Enter') {
        calculate()
      }
    }
    document.addEventListener('keydown', onKeydown)
    return () => document.removeEventListener('keydown', onKeydown)
  })

  function handleButton(btn) {
    if (btn.action === 'clear') {
      clearDisplay()
    } else if (btn.action === 'delete') {
      deleteCharacter()
    } else if (btn.action === 'calculate') {
      calculate()
    } else if (!isNaN(btn.value)) {
      appendNumber(btn.value)
    } else if (btn.value === '.') {
      appendDecimal()
    } else {
      appendOperator(btn.value)
    }
  }

  return (
    <div className="w-85 bg-white rounded-2xl shadow-xl p-5">
      {/* Display */}
      <div
        id="display"
        className="bg-slate-900 text-white text-5xl text-right px-4 py-6 rounded-xl h-24 flex items-end justify-end overflow-x-auto"
      >
        {expression || '0'}
      </div>

      {/* Buttons Grid */}
      <div id="buttons" className="grid grid-cols-4 gap-3 mt-5">
        {BUTTONS.map((btn) => (
          <button
            key={btn.label}
            onClick={() => handleButton(btn)}
            className={`${btn.cls} p-4 rounded-xl text-xl font-semibold active:scale-95 transition`}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  )
}
