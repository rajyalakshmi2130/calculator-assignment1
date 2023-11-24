import React, { useState } from 'react'
import classes from './EmiPaymentPlan.module.css'

const packageList = [300000, 600000, 900000, 1200000]
const IsaPaymentPlan = ({ programDetails }) => {

    const [packageDetails, setPackageDetails] = useState(900000) //max


    const getSliderStyles = () => {
        const percent = ((packageDetails - 300000) / 900000) * 100
        return {
            backgroundImage: `linear-gradient(to right, #0096FF ${percent}%, #C4C4C4 ${percent}% )`
        }
    }

    return (
        <section className={classes.mainContainer}>
            <h1 className={classes.heading}>ISA Payment Plan</h1>
            {
                programDetails.scorePercent > 65 ? (
                    <>
                        <div className={classes.subSection}>
                            <label htmlFor='salaryCtc' className={classes.subSectionHeading}>Salary (CTC)</label>
                            <div className={classes.salaryInputContainer}>
                                <input
                                    type='text'
                                    className={classes.salaryInput}
                                    id='salaryCtc'
                                    name='salaryCtc'
                                    value={packageDetails}
                                    onChange={(e) => setPackageDetails(+e.target.value)}
                                />
                                <div className={classes.rupeeSymbol}>₹</div>
                            </div>
                        </div>
                        <input
                            style={getSliderStyles()}
                            type='range'
                            min={packageList[0]}
                            max={packageList[packageList.length - 1]}
                            value={packageDetails}
                            onChange={(e) => setPackageDetails(+e.target.value)}
                            step={50000}
                        />
                        <ul className={classes.sliderList}>
                            {packageList.map((label) => (
                                <li key={label} onClick={() => setPackageDetails(label)}>
                                    {`${label / 100000} LPA`}
                                </li>
                            ))}
                        </ul>
                        <div className={classes.subSection2Isa}>
                            <div>
                                <p className={classes.subSectionHeading}>Monthly Income Shared</p>
                                <div className={classes.emiAmountWrapper}>
                                    <p className={classes.emiAmountPerMonth}>₹ 6945</p>
                                    <p className={classes.perMonthLabel}>per month</p>
                                </div>
                            </div>
                            <div>
                                <p className={classes.subSectionHeading}>Total Income Shared **</p>
                                <div className={classes.emiAmountWrapper}>
                                    <p className={classes.emiAmountPerMonth}>₹ 2,50,000</p>
                                    <p className={classes.perMonthLabel}>in 3 years</p>
                                </div>
                            </div>
                        </div>
                        <p className={classes.noteText}>
                            <span>**</span> Total Income to be shared will be fixed at <span>₹2.5 lakhs in 3 years</span>
                        </p>
                    </>
                ) : (
                    <div className={classes.notAvailableContainer}>
                        <div className={classes.notAvailableContent}>
                            <h1>Not Available</h1>
                            <p>Available only if you have scored <span>65% and above</span> in the EdYoda Admission Test</p>
                        </div>
                    </div>
                )
            }

        </section>
    )
}

export default IsaPaymentPlan