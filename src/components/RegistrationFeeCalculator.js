import React, { useState } from 'react'
import classes from './RegistrationFeeCalculator.module.css'


const sliderLabels = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const programsList = [
    { id: 0, name: 'Full Stack Developer', fee: 50000 },
    { id: 1, name: 'Data Scientist', fee: 68750 },
]

const RegistrationFeeCalculator = ({ updateProgramDetails }) => {

    const [formData, setFormData] = useState({
        programId: '',
        scorePercent: 30,
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        updateProgramDetails({
            ...programsList[formData.programId],
            scorePercent: formData.scorePercent
        })
    }

    const handleInputChange = (event) => {
        updateProgramDetails('')
        let { name, value } = event.target
        if (name === 'scorePercent') {
            value = value ? +value : ''
        }

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const onClickPercent = (percent) => {
        setFormData({
            ...formData,
            scorePercent: percent
        })
    }


    const getSliderStyles = () => {
        return {
            backgroundImage: `linear-gradient(to right, #0096FF ${formData.scorePercent}%, #C4C4C4 ${formData.scorePercent}% )`
        }
    }

    return (
        <form className={classes.mainContainer} onSubmit={handleSubmit} >
            <h1 className={classes.heading}>Registration Fee Calculator</h1>
            <p className={classes.description}>Use EdYoda admission test score and Program name to calculate the total registration fee according to payment mode</p>
            <div className={classes.subSection}>
                <label htmlFor='programId' className={classes.subSectionHeading}>Program</label>
                <select
                    className={classes.dropdown}
                    id='programId'
                    name='programId'
                    value={formData.programId}
                    onChange={handleInputChange}
                    required
                >
                    <option value="" disabled>Select program *</option>
                    {
                        programsList.map(program =>
                            <option key={program.id} value={program.id}>{program.name}</option>
                        )
                    }
                </select>
            </div>
            <div className={classes.subSection}>
                <label htmlFor='scorePercent' className={classes.subSectionHeading}>Test Score</label>
                <div className={classes.testScoreInputContainer}>
                    <input
                        type='text'
                        className={classes.percentInput}
                        id='scorePercent'
                        name='scorePercent'
                        value={formData.scorePercent}
                        onChange={handleInputChange}
                    />
                    <div className={classes.percentSymbol}>%</div>
                </div>
            </div>
            <div className={classes.sliderContainer}>
                <input
                    style={getSliderStyles()}
                    type='range'

                    min={0}
                    max={100}
                    id='scorePercent'
                    name='scorePercent'
                    value={formData.scorePercent}
                    onChange={handleInputChange}
                />
                <ul className={classes.sliderList}>
                    {sliderLabels.map((label) => (
                        <li key={label} onClick={() => onClickPercent(label)}>
                            {label}
                        </li>
                    ))}
                </ul>
            </div>
            <button type='submit' className={classes.calculateBtn}>Calculate</button>
        </form>
    )
}

export default RegistrationFeeCalculator