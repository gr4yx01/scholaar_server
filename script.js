import { countries } from "./countries.js"
import fs from 'fs'

const stripped_state = countries.map((country) => {
    return {
        name: country.name,
        state: country.states.map((state) => {
            return {
                name: state.name,
            }
        })
    }
})


// fs.writeFileSync('stripped_statecountries.json', JSON.stringify(stripped_state))
fs.writeFileSync('stripped_states.json', JSON.stringify(stripped_state))

