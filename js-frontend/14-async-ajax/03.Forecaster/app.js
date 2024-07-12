function attachEvents() {
    const locationElement = document.getElementById('location')
    const submitButtonElement = document.getElementById('submit')
    const forecastElement = document.getElementById('forecast')

    const currentConditionElement = document.querySelector('#current')
    const currentConditionLabel = currentConditionElement.querySelector('.label')
    const upcomingConditionElement = document.querySelector('#upcoming')
    const upcomingConditionLabel = upcomingConditionElement.querySelector('.label')

    const locationsDomain = 'http://localhost:3030/jsonstore/forecaster/locations'
    const currentCoditionDomain = 'http://localhost:3030/jsonstore/forecaster/today'
    const upcomingConditionDomain = 'http://localhost:3030/jsonstore/forecaster/upcoming'

    const conditionMapper = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
        'Degrees': '°'
    }

    submitButtonElement.addEventListener('click', () => {
        const locationName = locationElement.value
        let locationCode = ''

        fetch(`${locationsDomain}`)
            .then(response => response.json())
            .then(locationData => {
                const { code } = locationData.find(location => location.name === locationName)
                forecastElement.style.display = 'block'
  
                return Promise.all([
                    fetch(`${currentCoditionDomain}/${code}`),
                    fetch(`${upcomingConditionDomain}/${code}`)
                ])
            })
            .then(responses => Promise.all(responses.map(responses => responses.json())))
            .then(([todayData, upcomingData]) => {
                
                // today data display
                try {
                    currentConditionLabel.nextElementSibling.remove()
                } catch (TypeError) {}
                
                const divForecastElement = document.createElement('div')
                divForecastElement.classList.add('forecast')
                const spanConditionSymbolElement = document.createElement('span')
                spanConditionSymbolElement.classList.add('condition', 'symbol')
                spanConditionSymbolElement.textContent = conditionMapper[todayData.forecast.condition]
                divForecastElement.appendChild(spanConditionSymbolElement)
                const spanConditionElement = document.createElement('span')
                spanConditionElement.classList.add('condition')

                
                const temp = `${todayData.forecast.low}${conditionMapper['Degrees']}/${todayData.forecast.high}${conditionMapper['Degrees']}`
                const array = [todayData.name, temp, todayData.forecast.condition]
                array.forEach(prop => {
                    const spanELement = document.createElement('span')
                    spanELement.classList.add('forecast-data')
                    spanELement.textContent = prop
                    spanConditionElement.appendChild(spanELement)
            
                })
                divForecastElement.appendChild(spanConditionElement)
                currentConditionElement.appendChild(divForecastElement)
                
                // upcoming data display
                try {
                    upcomingConditionLabel.nextElementSibling.remove()
                } catch (TypeError) {}

                const divElement = document.createElement('div')
                divElement.classList.add('forecast-info')
                

                const dataArray = upcomingData['forecast']
                dataArray.forEach(day => {
                    const spanUpcomingElement = document.createElement('span')
                    spanUpcomingElement.classList.add('upcoming')

                    const { condition, high, low } = day
                    const spanSymbol = document.createElement('span')
                    spanSymbol.classList.add('symbol')
                    spanSymbol.textContent = conditionMapper[condition]
                    spanUpcomingElement.appendChild(spanSymbol)

                    const spanForecastTempElement = document.createElement('span')
                    spanForecastTempElement.classList.add('forecast-data')
                    spanForecastTempElement.textContent = `${low}${conditionMapper['Degrees']}/${high}${conditionMapper['Degrees']}`
                    spanUpcomingElement.appendChild(spanForecastTempElement)
                    
                    const spanForecastCondEl = document.createElement('span')
                    spanForecastCondEl.classList.add('forecast-data')
                    spanForecastCondEl.textContent = condition
                    spanUpcomingElement.appendChild(spanForecastCondEl)
                    
                    divElement.appendChild(spanUpcomingElement)
                })

                upcomingConditionElement.appendChild(divElement)
                
            })
            .catch(e => console.log('Error'))
            
    })
}

attachEvents();